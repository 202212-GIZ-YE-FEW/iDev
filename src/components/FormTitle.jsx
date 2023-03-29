import React from "react";

export default function FormTitle({ title }) {
    return (
        <>
            <span className='font-poppins  uppercase font-normal font-400  md:text-xl lg:text-3xl  leading-75 text-center tracking-tighter'>
                {title}
            </span>
        </>
    );
}
