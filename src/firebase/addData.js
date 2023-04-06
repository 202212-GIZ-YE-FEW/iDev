import { addDoc, collection, getFirestore } from "firebase/firestore";

import firebase_app from "./config";

const db = getFirestore(firebase_app);
export default async function addData(document, data) {
    let result = null;
    let error = null;

    try {
        result = await addDoc(collection(db, document), data, {
            merge: true,
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}
