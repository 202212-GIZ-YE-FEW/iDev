import { doc, getFirestore, setDoc } from "firebase/firestore";
export default async function setDocument(collectionPath, documentData) {
    let result = null;
    let error = null;
    try {
        const firestore = getFirestore();
        const documentRef = doc(firestore, collectionPath);
        await setDoc(documentRef, documentData);
        result = documentRef.id;
    } catch (e) {
        error = e;
    }
    return { result, error };
}
