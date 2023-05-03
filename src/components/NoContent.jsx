import Image from "next/image";
import Link from "next/link";
import React from "react";

import Button from "@/components/ui/Button";

export default function NoContent(props) {
    const { title, text, buttonText, buttonLink, image, alt } = props;
    return (
        <>
            <div className='w-full md:w-1/2'>
                <div className='mb-10 md:mb-20 font-light'>
                    <h1 className='font-black uppercase text-3xl lg:text-5xl mb-10'>
                        {title}
                    </h1>
                    <p className='text-light-gray'>{text}</p>
                </div>
                <div className='mb-20 md:mb-0'>
                    <Link
                        href={buttonLink}
                        className='transform transition-all hover:scale-110'
                    >
                        <Button
                            content={buttonText}
                            textTransform='uppercase'
                            filled='true'
                            size='large'
                            fontSize='text-lg md:text-xl lg:text-2xl'
                            radius='md'
                        />
                    </Link>
                </div>
            </div>
            <div className='w-full md:w-1/2 text-center'>
                <Image src={image} alt={alt} />
            </div>
        </>
    );
}
