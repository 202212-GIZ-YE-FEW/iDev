import React from "react";
import { useTranslation } from "next-i18next";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import AuthSocialMedia from "@/components/AuthSocialMedia";
import FormTitle from "@/components/FormTitle";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
export default function Signup() {
    const style = { minHeight: "calc(100vh - 1rem)" };
    const { t } = useTranslation("signup");

    const {
        firstname = "firstName",
        lastname = "lastName",
        email = "email",
        confirmemail = "confirmEmail",
        password = "password",
        confirmpassword = "confirmPassword",
        datebrith = "date",
        signup = "signup",
        login = "login",
    } = [];

    return (
        <div style={style}>
            <div className='g-6 flex h-full flex-wrap items-center lg:justify-center  xl:justify-center md:justify-center mx-12 my-8 justify-between   space-x-2'>
                <div className='shrink-1 mb-[12px] mt-[12px] grow-0 basis-auto  md:mb-0 lg:px-20 xl:px-0 md:w-6/12 md:shrink-0 lg:w-8/12 xl:w-6/12'>
                    <Image
                        src='/SignupImage.png'
                        className='w-full'
                        width={600}
                        height={500}
                        alt='hero image'
                    />
                </div>
                <div className='w-full max-w-xs md:mx-auto   md:shrink-0 md:w-12/12 lg:w-12/12 xl:w-6/12  ml-2 leading-normal '>
                    <FormTitle title='signup' />
                    <form className=' shadow-[0_4px_9px_-4px_#3b71ca] mt-[8px]  p-6  md:p-6'>
                        <div
                            className=' flex mb-[0.5rem] lg:text-start  justify-center space-x-[0.7rem] rtl:space-x-reverse 0.7rem sm:flex-row '
                            data-te-input-wrapper-init
                        >
                            <Input
                                type='name'
                                name='Frst Name'
                                placeholder={t(`${firstname}`)}
                            />
                            <Input
                                type='name'
                                name='Last Name'
                                placeholder={t(`${lastname}`)}
                            />
                        </div>

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
                            className='relative  mb-[0.5rem]'
                            data-te-input-wrapper-init
                        >
                            <Input
                                type='email'
                                name='email'
                                placeholder={t(`${confirmemail}`)}
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
                            <Input
                                type='name'
                                name='Confirm Password'
                                placeholder={t(`${confirmpassword}`)}
                            />
                        </div>
                        <div
                            className='flex space-x-[1.5rem] text-center lg:text-start  justify-center  mb-[0.5rem] rtl:space-x-reverse 1.7rem  text-md  font-weight-500 '
                            data-te-input-wrapper-init
                        >
                            <Input
                                label={t(`${datebrith}`)}
                                type='date'
                                name='date brith'
                                inputWidthSize='w-full'
                            />
                        </div>

                        <div className=' flex justify-center space-x-[0.5rem] lg:space-x-[0.5rem]  rtl:space-x-reverse 1.4rem sm:flex-row '>
                            <Button
                                content={t(`${signup}`)}
                                filled='false'
                                size='large'
                                fontSize='lg:text-md xl:text-sm'
                                radius='md '
                            />
                            <Button
                                content={t(`${login}`)}
                                filled='true'
                                size='large'
                                fontSize='lg:text-md xl xl:text-sm'
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
