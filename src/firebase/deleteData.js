import { deleteDoc, doc, getFirestore } from "firebase/firestore";

import firebase_app from "./config";

const db = getFirestore(firebase_app);
export default async function deleteDocument(document, id) {
    let result = null;
    let error = null;

    try {
        const docRef = doc(db, document, id);
        const response = await deleteDoc(docRef);
        result = response;
    } catch (e) {
        error = e;
    }

    return { result, error };
}
