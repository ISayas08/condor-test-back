import { addDocument } from "./firebase.firestore";
import { COLLECTIONS } from "./../shared/const";
import { User } from "./../shared/types";

const addUser = (user: User): Promise<any> => {
  return user
    ? addDocument(COLLECTIONS.USER_COLLECTION_NAME, user)
    : Promise.reject();
};

export { addUser };
