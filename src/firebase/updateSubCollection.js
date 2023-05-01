import { doc, updateDoc } from "firebase/firestore";
import { db } from "./config";

/**
 * Updates a specific Firestore document
 *
 * @param {string} collectionPath - The path to the collection containing the document to update
 * @param {string} docId - The ID of the document to update
 * @param {object} data - An object containing the fields and their new values to update
 * @returns {boolean} Returns true if the document was updated successfully, false otherwise
 */
export default async function updateDocument(collectionPath, docId, data) {
    try {
        const docRef = doc(db, collectionPath, docId);
        await updateDoc(docRef, data);
        console.log("Update successful");
        return true;
    } catch (error) {
        console.error("Error updating document:", error);
        return false;
    }
}
