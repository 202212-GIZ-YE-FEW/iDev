import { storage } from "@/firebase/config";
import { ref, uploadBytes } from "firebase/storage";
import { React, useEffect, useState } from "react";
import Image from "next/image";
import ProfileEditSVG from "public/edit-profile-icon.svg";
import ProfilePreviewSVG from "public/profile-icon.svg";
import uploadImage from "@/firebase/addImage";
import { useAuth } from "../context/AuthContext";
export default function PreviewProfile() {
    const [l, uploadimg] = useState("");
    const { user, upload } = useAuth();
    const [loading, setLoading] = useState(false);

    const lhandler = async (e) => {
        const file = e.target.files[0];
        const userId = user.uid;
        upload(file, userId, setLoading);

        // const imageName = `${userId}`;
        // const path = "ProfilesImages/";
        // uploadimg(URL.createObjectURL(file));

        // try {
        //     await uploadImage(file, imageName, path);
        //     console.log("File uploaded successfully!");
        // } catch (error) {
        //     console.error(error);
        // }
    };
    useEffect(() => {
        uploadimg(user.photoURL);
        console.log("priev2", user.photoURL);
    }, [user]);
    return (
        <>
            <div className='relative inline-flex justify-center w-[14rem] h-[14rem] lg:w-[20rem] lg:h-[20rem] xl:w-[18rem] xl:h-[18rem] rounded-full'>
                <Image
                    src={l || ProfilePreviewSVG}
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
                    <input type='file' onChange={lhandler} hidden id='upload' />
                </label>
            </div>
        </>
    );
}
