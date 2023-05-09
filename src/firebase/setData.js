import { doc, getFirestore, setDoc } from "firebase/firestore";
export default async function setDocument(collectionPath, documentData) {
    let result = null;
    let error = null;
    try {
        const firestore = getFirestore();
        const documentRef = doc(firestore, collectionPath);

        const docRef = await setDoc(documentRef, documentData);
        result = docRef.id;
    } catch (e) {
        error = e;
    }
    return { result, error };
}
