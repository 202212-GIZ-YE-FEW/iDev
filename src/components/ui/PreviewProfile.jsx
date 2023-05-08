import { storage } from "@/firebase/config";
import { ref } from "firebase/storage";
import { React, useEffect, useState } from "react";
import Image from "next/image";
import ProfileEditSVG from "public/edit-profile-icon.svg";
import ProfilePreviewSVG from "public/profile-icon.svg";
import uploadImage from "@/firebase/addImage";
import { useAuth } from "../context/AuthContext";
import { getDownloadURL } from "firebase/storage";
import toastr from "toastr";
export default function PreviewProfile() {
    const [photo, uploadimg] = useState("");
    const { user, updateProfilePhoto } = useAuth();

    const handler = async (e) => {
        const file = e.target.files[0];
        const userId = user.uid;
        const imageName = `${userId}`;
        const path = "ProfilesImages/";
        uploadimg(URL.createObjectURL(file));

        try {
            await uploadImage(file, imageName, path);
            toastr.success("Your File uploaded successfully!", "", {
                closeButton: true,
                progressBar: true,
                positionClass: "toast-top-right",
            });
            const imageRef = ref(storage, `${path}${imageName}`);
            const downloadURL = await getDownloadURL(imageRef);
            updateProfilePhoto(downloadURL);
        } catch (error) {
            console.error(error);
            toastr.error(error, "", {
                closeButton: true,
                progressBar: true,
                positionClass: "toast-top-right",
            });
        }
    };

    useEffect(() => {
        uploadimg(user.photoURL);
    }, [user]);

    return (
        <>
            <div className='relative inline-flex justify-center w-[14rem] h-[14rem] lg:w-[20rem] lg:h-[20rem] xl:w-[18rem] xl:h-[18rem] rounded-full'>
                <Image
                    src={photo || ProfilePreviewSVG}
                    alt='profile preview'
                    width={315}
                    height={315}
                    className='object-cover min-w-full h-full rounded-full'
                />
                <label
                    htmlFor='upload'
                    className='inline-flex justify-center items-center cursor-pointer w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem] bg-white border-2 border-black rounded-full absolute left-1/2 -translate-x-1/2 -bottom-[1.5rem] lg:-bottom-[2rem]'
                >
                    <Image
                        src={ProfileEditSVG}
                        alt='profile edit icon'
                        className='p-2'
                    />
                    <input type='file' onChange={handler} hidden id='upload' />
                </label>
            </div>
        </>
    );
}
