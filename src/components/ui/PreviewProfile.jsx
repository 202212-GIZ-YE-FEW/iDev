import Image from "next/image";
import { React, useState } from "react";

function PreviewProfile() {
    const [imgfile, uploadimg] = useState("");
    const imgFilehandler = (e) => {
        uploadimg(URL.createObjectURL(e.target.files[0]));
    };
    return (
        <div className='relative bg-yellow container pb-5 my-5 w-4/12 '>
            {/* <div className='relative bg-yellow w-32 h-32 lg:w-64 md:w-52 sm:w-48 md:h-52 lg:h-64 sm:h-48 border-black rounded-full'> */}
            <Image
                src={imgfile}
                width={315}
                height={315}
                alt=''
                // style="background-image:url(/profile-icon)"
                className='bg-center bg-cover w-full h-auto border-black rounded-full'
            />
            <label
                for='upload'
                className='absolute w-[70px] h-[70px] bg-white border-2 border-black rounded-full inset-x-0 bottom-0'
            >
                <Image
                    src='/edit_profile_icon.png'
                    width={54}
                    height={50}
                    alt=''
                    className='absolute bg-center bg-cover w-12 h-12  top-2 left-2 '
                />
                <input
                    type='file'
                    onChange={imgFilehandler}
                    hidden
                    id='upload'
                />
            </label>

            {/* </div> */}
        </div>
    );
}

export default PreviewProfile;
