import {
    collection,
    getDocs,
    query,
    updateDoc,
    doc,
    where,
} from "firebase/firestore";
import { db } from "./config";

/**
 * Updates a field in a document in Firestore
 *
 * @param {string} collectionName - The name of the collection containing the document to update
 * @param {string} fieldName - The name of the field to query for
 * @param {any} fieldValue - The value of the field to query for
 * @param {object} data - An object containing the field and its new value to update
 */
export default async function updateDocumentField(
    collectionName,
    fieldName,
    fieldValue,
    data
) {
    const q = query(
        collection(db, collectionName),
        where(fieldName, "==", fieldValue)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        const documentId = querySnapshot.docs[0].id;
        const documentRef = doc(db, collectionName, documentId);
        await updateDoc(documentRef, data);
    } else {
        console.log("Document not found");
    }
}
