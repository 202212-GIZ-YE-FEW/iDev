import { doc, getDoc, getFirestore } from "firebase/firestore";

import firebase_app from "./config";

const db = getFirestore(firebase_app);
export default async function getSingleDoc(collection, id) {
    let result = null;
    let error = null;

    try {
        const docRef = doc(db, collection, id);
        const data = await getDoc(docRef);
        return data.data();
    } catch (e) {
        error = e;
    }

    return { result, error };
}
