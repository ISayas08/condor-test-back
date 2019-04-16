import * as admin from "firebase-admin";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as functions from "firebase-functions";

import { routes } from "./routes";

admin.initializeApp();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Routes
app.use("/", routes);

export const api = functions.https.onRequest(app);
