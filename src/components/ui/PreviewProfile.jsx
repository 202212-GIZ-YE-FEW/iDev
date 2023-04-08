import Image from "next/image";
import ProfileEditSVG from "public/edit-profile-icon.svg";
import ProfilePreviewSVG from "public/profile-icon.svg";
import { React, useState } from "react";
export default function PreviewProfile() {
    const [imgfile, uploadimg] = useState("");
    const imgFilehandler = (e) => {
        uploadimg(URL.createObjectURL(e.target.files[0]));
    };
    return (
        <>
            <div className='container'>
                <div className='relative inline-flex justify-center w-[14rem] h-[14rem] lg:w-[20rem] lg:h-[20rem] xl:w-[18rem] xl:h-[18rem] rounded-full'>
                    <Image
                        src={imgfile || ProfilePreviewSVG}
                        alt='profile preview'
                        width={315}
                        height={315}
                        className='object-cover min-w-full h-full rounded-full'
                    />
                    <label
                        for='upload'
                        className='inline-flex justify-center items-center cursor-pointer w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem] bg-white border-2 border-black rounded-full absolute left-1/2 -translate-x-1/2 -bottom-[1.5rem] lg:-bottom-[2rem]'
                    >
                        <Image
                            src={ProfileEditSVG}
                            alt='profile edit icon'
                            className='p-2'
                        />
                        <input
                            type='file'
                            onChange={imgFilehandler}
                            hidden
                            id='upload'
                        />
                    </label>
                </div>
            </div>
        </>
    );
}
