import * as express from "express";
import { productsRouter } from "./product.route";
import { userRouter } from "./users.route";
import { shoppingCart } from "./shoppingCart.route";

import * as admin from "firebase-admin";
import { format } from "url";
const Multer = require("multer");

const bucket = admin.storage().bucket();
const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // no larger than 5mb, you can change as needed.
  }
});

const router = express.Router();

// Api services
router.use("/products", productsRouter);
router.use("/shoppingCart", shoppingCart);
router.use("/users", userRouter);

router.route("/upload").post(multer.single("file"), (req: any, res: any) => {
  let file = req.file;
  if (file) {
    uploadImageToStorage(file).then((success) => {
      res.status(200).send({
        status: 'success'
      });
    }).catch((error) => {
      console.error(error);
    });
  }
});

// Default api response
router.use("/", (req: any, res: any) => {
  res.status(200).send("Condor Labs Test");
});

export const routes = router;

const uploadImageToStorage = (file: any) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject('No image file');
    }
    let newFileName = `${file.originalname}_${Date.now()}`;

    let fileUpload = bucket.file(newFileName);

    const blobStream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype
      }
    });

    blobStream.on('error', (error) => {
      reject('Something is wrong! Unable to upload at the moment.');
    });

    blobStream.on('finish', () => {
      // The public URL can be used to directly access the file via HTTP.
      const url = format(`https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`);
      resolve(url);
    });

    blobStream.end(file.buffer);
  });
}
