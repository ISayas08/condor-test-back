import { addDocument, updateDocument, getDocument } from "./firebase.firestore";
import { COLLECTIONS } from "./../shared/const";
import { User } from "./../shared/types";

const addUser = (user: User): Promise<any> =>
  addDocument(COLLECTIONS.USER_COLLECTION_NAME, user);

const updateUser = (userId: string, user: User): Promise<any> =>
  updateDocument(COLLECTIONS.USER_COLLECTION_NAME, userId, user);

const getUser = (userId: string): Promise<any> =>
  getDocument(COLLECTIONS.USER_COLLECTION_NAME, userId);

export { addUser, updateUser, getUser };
