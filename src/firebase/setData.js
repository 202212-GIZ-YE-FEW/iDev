import { getFirestore, doc, setDoc } from "firebase/firestore";
export default async function setDocument(collectionPath, documentData) {
    try {
        const firestore = getFirestore();
        const documentRef = doc(firestore, collectionPath);

        await setDoc(documentRef, documentData);
        console.log("Document written with ID: ", documentRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}
