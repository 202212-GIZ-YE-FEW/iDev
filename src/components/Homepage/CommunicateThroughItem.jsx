import Image from "next/image";
import { withTranslation } from "next-i18next";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CommunicateThroughItem({ name, icon, description }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 1000,
        });
    }, []);
    return (
        <>
            <div
                data-aos='flip-down'
                className='bg-light-white flex flex-col items-center justify-center text-center p-9 rounded-3xl space-y-3 drop-shadow-lg'
            >
                <Image
                    src={`/home/${icon}.svg`}
                    alt={`${name} svg`}
                    width={50}
                    height={50}
                />
                <span className='uppercase text-4xl'>{name}</span>
                <p className='text-sm rtl:text-base text-black/50'>
                    {description}
                </p>
            </div>
        </>
    );
}
export default withTranslation("home")(CommunicateThroughItem);
