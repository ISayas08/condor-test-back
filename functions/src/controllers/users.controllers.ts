import { USER_SERVICES } from "./../services";
import { pick } from "../shared/utils/objects";
import { createResponse } from "../shared/utils/responses";

// Add user controller.
const addUserController = (req: any, res: any) => {
  USER_SERVICES.addUser()
    .then(docRes => {
      res.status(201).send(createResponse("User added", { userId: docRes }));
    })
    .catch(err => res.status(err.status ? err.status : 500).send(err));
};

// Update user controller.
const updateUserController = (req: any, res: any) => {
  USER_SERVICES.updateUser(
    req.body.userId,
    pick(req.body, "userName", "userEmail", "shoppingCartId")
  )
    .then(resUpdate => {
      res
        .status(200)
        .send(createResponse("User updated", { userId: resUpdate._id }));
    })
    .catch(err => res.status(err.status ? err.status : 500).send(err));
};

export { addUserController, updateUserController };
