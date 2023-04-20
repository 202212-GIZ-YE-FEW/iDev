import { ref, uploadBytes } from "firebase/storage";

import { storage } from "@/firebase/config";

async function uploadImage(imageUpload, imageName, path) {
    if (!imageUpload) return;
    const imageRef = ref(storage, `${path}/${imageName}`);
    try {
        await uploadBytes(imageRef, imageUpload);
    } catch (error) {
        //
    }
}

export default uploadImage;
