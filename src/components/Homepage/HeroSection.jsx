import AOS from "aos";
import Image from "next/image";
import Link from "next/link";
import { withTranslation } from "next-i18next";
import React, { useEffect } from "react";

import "aos/dist/aos.css";

import { useAuth } from "../context/AuthContext";
import Button from "../ui/Button";

function HeroSection({ t }) {
    const { authenticated } = useAuth();
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 500,
        });
    }, []);

    const style = {
        backgroundImage: "url(/header.png)",
        minHeight: "calc(100vh - 5rem)",
    };
    return (
        <header style={style} className='min-w-[96vw] bg-cover'>
            <div className='container h-full flex flex-col lg:flex-row gap-y-10 justify-between lg:mt-32'>
                <div className='flex flex-col mt-10 lg:mt-0 text-center lg:text-start'>
                    <h1 className='text-xl sm:text-3xl lg:text-5xl uppercase'>
                        {t("weAreHereTo")}
                    </h1>
                    <p className='text-3xl sm:text-5xl lg:text-9xl mb-3 lg:mb-0 uppercase'>
                        {t("help")}
                    </p>
                    <Link
                        className='w-fit xl:w-full rtl:w-full self-center lg:self-start'
                        href='/appointment'
                    >
                        <Button
                            content={t("bookAppointment")}
                            text-transform='uppercase'
                            filled='true'
                            size='large'
                            fontSize='text-lg md:text-xl lg:text-2xl'
                            radius='md'
                            disabled={!authenticated}
                        />
                    </Link>
                </div>
                <div className='basis-1/2'>
                    <Image
                        src='/hero.png'
                        width={500}
                        height={200}
                        alt=''
                        className='max-w-full lg:min-w-[20rem] lg:max-w-[27rem] xl:min-w-[40rem]'
                        data-aos='zoom-in-up'
                    />
                </div>
            </div>
        </header>
    );
}
export default withTranslation("home")(HeroSection);
