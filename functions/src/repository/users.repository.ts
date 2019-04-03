import { addDocument, updateDocument } from "./firebase.firestore";
import { COLLECTIONS } from "./../shared/const";
import { User } from "./../shared/types";
import { isEmpty } from "../shared/utils/objects";

const addUser = (user: User): Promise<any> => {
  return !isEmpty(user)
    ? addDocument(COLLECTIONS.USER_COLLECTION_NAME, user)
    : Promise.reject({ status: 400 });
};

const updateUser = (userId: string, user: User): Promise<any> => {
  return !isEmpty(user) && userId
    ? updateDocument(COLLECTIONS.USER_COLLECTION_NAME, userId, user)
    : Promise.reject({ status: 400 });
};

export { addUser, updateUser };
