import { doc, updateDoc } from "firebase/firestore";
import { db } from "./config";
import toastr from "toastr";
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
        toastr.success("Your data has been Update successfully.", "", {
            closeButton: true,
            progressBar: true,
            positionClass: "toast-top-right",
        });
        return true;
    } catch (error) {
        console.error("Error updating document:", error);
        toastr.error("Please verify your email before logging in.", error, {
            closeButton: true,
            progressBar: true,
            positionClass: "toast-top-right",
        });
        return false;
    }
}
