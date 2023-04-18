import { ref, uploadBytes } from "firebase/storage";
import { storage } from "@/firebase/config";

async function uploadImage(imageUpload, imageName, path) {
    if (!imageUpload) return;
    const imageRef = ref(storage, `${path}/${imageName}.jpeg`);
    try {
        await uploadBytes(imageRef, imageUpload);
        alert("Image uploaded");
    } catch (error) {
        console.error(
            `Error uploading image ${imageName} to Firebase Storage:`,
            error
        );
        // handle error
    }
}

export default uploadImage;
