import { doc, getFirestore, setDoc } from "firebase/firestore";

import firebase_app from './config';

const db = getFirestore(firebase_app)
export default async function addData(collection, id, data) {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, collection, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
