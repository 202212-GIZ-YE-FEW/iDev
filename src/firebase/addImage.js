import { ref, uploadBytes } from "firebase/storage";
import { storage } from "@/firebase/config";
export default async function uploadImage(imageUpload, imageName, path) {
    if (!imageUpload) return;
    const imageRef = ref(storage, `${path}/${imageName}`);
    await uploadBytes(imageRef, imageUpload);
    alert("Image uploaded");
}
