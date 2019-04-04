import * as admin from "firebase-admin";

export const getCollection = (collection: string) => {
  return new Promise((resolve, reject) => {
    const collRef = admin.firestore().collection(collection);

    collRef
      .get()
      .then(collection => {
        if (collection) {
          resolve(collection.docs.map(doc => doc.data()));
        } else
          reject({
            status: 404,
            msg: "Not found"
          });
      })
      .catch(err => reject(err));
  });
};

/**
 *
 * @param collection
 * @param documentId
 */
export const getDocument = (collection: string, documentId: string) => {
  return new Promise((resolve, reject) => {
    const docRef = admin
      .firestore()
      .collection(collection)
      .doc(documentId);

    docRef
      .get()
      .then(doc => {
        if (doc.exists) {
          resolve({
            _id: documentId,
            doc: doc.data()
          });
        } else {
          reject({
            status: 404,
            msg: "Not found"
          });
        }
      })
      .catch(err => reject(err));
  });
};

/**
 *
 * @param collection
 * @param documentId
 */
export const getDocumentByField = (
  collection: string,
  field: string,
  comparator: any,
  value: string,
  limit: number
) => {
  return new Promise((resolve, reject) => {
    const docRef = admin
      .firestore()
      .collection(collection)
      .where(field, comparator, value)
      .limit(limit);

    docRef
      .get()
      .then((docs: any) => {
        if (docs) {
          const doc = docs[0];
          resolve({
            doc: doc.data()
          });
        } else {
          reject({
            status: 404,
            msg: "Not found"
          });
        }
      })
      .catch(err => reject(err));
  });
};

/**
 *
 * @param collection
 * @param documentData
 */
export const addDocument = (collection: string, documentData: any) => {
  return new Promise((resolve, reject) => {
    const docRef = admin
      .firestore()
      .collection(collection)
      .doc();

    docRef
      .set(documentData)
      .then(res => {
        resolve(docRef.id);
      })
      .catch(err => reject(err));
  });
};

/**
 *
 * @param collection
 * @param documentId
 * @param updatedData
 */
export const updateDocument = (
  collection: string,
  documentId: string,
  updatedData: any
) => {
  return new Promise((resolve, reject) => {
    const docRef = admin
      .firestore()
      .collection(collection)
      .doc(documentId);

    docRef
      .update(updatedData)
      .then(updateDate => {
        if (updateDate) {
          resolve({
            _id: documentId,
            timestamp: updateDate
          });
        } else {
          reject({
            status: 404,
            msg: "Not found"
          });
        }
      })
      .catch(err => reject(err));
  });
};

/**
 *
 * @param collection
 * @param documentId
 */
export const removeDocument = (collection: string, documentId: string) => {
  return new Promise((resolve, reject) => {
    const docRef = admin
      .firestore()
      .collection(collection)
      .doc(documentId);

    docRef
      .delete()
      .then(deleteDate => {
        if (deleteDate) {
          resolve({
            _id: docRef.id,
            timestamp: deleteDate
          });
        } else {
          reject({
            status: 404,
            msg: "Not found"
          });
        }
      })
      .catch(err => reject(err));
  });
};

/**
 *
 * @param instanceId
 * @param body
 */
export const sentNotification = (instanceId: any, body: any) => {
  return admin.messaging().sendToDevice(instanceId, body);
};
