import React from "react";
import { useTranslation } from "next-i18next";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import AuthSocialMedia from "@/components/AuthSocialMedia";
import FormTitle from "@/components/FormTitle";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
export default function Login() {
    const style = { minHeight: "calc(100vh - 1rem)" };
    const { t } = useTranslation("signup");

    const {
        email = "email",

        password = "password",
        signup = "signup",
        login = "login",
    } = [];

    return (
        <div style={style}>
            <div className='g-6 flex h-full flex-wrap items-center lg:justify-center  xl:justify-center md:justify-center mx-12 my-8 justify-between   space-x-2'>
                <div className='shrink-1 mb-[12px] mt-[12px] grow-0 basis-auto  md:mb-0 lg:px-20 xl:px-0 md:w-6/12 md:shrink-0 lg:w-8/12 xl:w-6/12'>
                    <Image
                        src='/login.png'
                        className='w-full'
                        width={600}
                        height={500}
                        alt='hero image'
                    />
                </div>
                <div className='w-full max-w-xs md:mx-auto   md:shrink-0 md:w-12/12 lg:w-12/12 xl:w-6/12  ml-2 leading-normal '>
                    <FormTitle title='login' />
                    <form className=' shadow-[0_4px_9px_-4px_#3b71ca] mt-[8px]  p-6  md:p-6'>
                        <div
                            className='relative mb-[0.5rem]'
                            data-te-input-wrapper-init
                        >
                            <Input
                                type='email'
                                name='email'
                                placeholder={t(`${email}`)}
                                inputWidthSize='w-full'
                            />
                        </div>

                        <div
                            className=' flex  mb-[0.5rem] lg:text-start  justify-center space-x-[0.7rem] rtl:space-x-reverse 0.7rem  sm:flex-row '
                            data-te-input-wrapper-init
                        >
                            <Input
                                type='name'
                                name='Password'
                                placeholder={t(`${password}`)}
                            />
                        </div>

                        <div className=' flex justify-center space-x-[0.5rem] lg:space-x-[0.5rem] mt-6  rtl:space-x-reverse 1.4rem sm:flex-row '>
                            <Button
                                content={t(`${signup}`)}
                                filled='false'
                                size='medium'
                                fontSize='lg:text-md xl:text-sm'
                                radius='md '
                            />
                            <Button
                                content={t(`${login}`)}
                                filled='true'
                                size='medium'
                                fontSize='lg:text-xl xl xl:text-xl'
                                radius='md '
                            />
                        </div>
                    </form>
                    <AuthSocialMedia />
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["signup"])),
            // Will be passed to the page component as props
        },
    };
}
