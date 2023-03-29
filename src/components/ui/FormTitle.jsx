import React from "react";

export default function FormTitle({ title }) {
    return (
        <>
            <span className='font-poppins  uppercase font-normal font-400 text-3xl leading-75 text-center tracking-tighter'>
                {title}
            </span>
        </>
    );
}
