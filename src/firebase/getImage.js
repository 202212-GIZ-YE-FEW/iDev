import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase/config";
export default async function downloadImage(imageName, imagePath) {
    const imageRef = ref(storage, `${imagePath}/${imageName}.jpeg`);

    return getDownloadURL(imageRef)
        .then((url) => {
            return url;
        })
        .catch((error) => {
            console.error(
                `Error getting image ${imageName} from Firebase Storage:`,
                error
            );
            return null;
        });
}
//Example of using this function
// const ImageName = "user1"
// downloadImage(ImageName, 'UsersImages')
// .then((url) => { // i use this beacuse we need to use a Promise chain or an async/await syntax to get the download URL and set it to the state variable
//    setImageUrl(url); // get the Image url in useState
//  })
