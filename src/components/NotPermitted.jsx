import Image from "next/image";
import Link from "next/link";
import { withTranslation } from "next-i18next";
import _403SVG from "public/images/403.svg";
import React from "react";

import Button from "@/components/ui/Button";

function NotPermitted({ t }) {
    return (
        <div className='container p-10 md:p-15 lg:p-20 md:flex items-center text-center md:text-left'>
            <div className='w-full md:w-1/2'>
                <div className='mb-10 md:mb-20 font-light'>
                    <h1 className='font-black uppercase text-3xl lg:text-5xl mb-10'>
                        {t("seemYouAreNotPermitted")}
                    </h1>
                    <p className='text-light-gray'>{t("permittedDesc")}</p>
                </div>
                <div className='mb-20 md:mb-0'>
                    <Link
                        href='/login'
                        className='transform transition-all hover:scale-110'
                    >
                        <Button
                            content={t("login")}
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
                <Image src={_403SVG} alt='403 image' />
            </div>
        </div>
    );
}
export default withTranslation("common")(NotPermitted);
