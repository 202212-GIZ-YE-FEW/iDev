import { addDoc, collection, getFirestore } from "firebase/firestore";
import firebase_app from "./config";

const db = getFirestore(firebase_app);

export default async function addDocument(document, data) {
    let result = null;
    let error = null;

    try {
        const docRef = await addDoc(collection(db, document), data, {
            merge: true,
        });
        result = docRef.id;
    } catch (e) {
        error = e;
    }

    return { result, error };
}
