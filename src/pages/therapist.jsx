import React from "react";
import { withTranslation } from "next-i18next";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Image from "next/image";
import PageIntro from "@/components/PageIntro";
function therapist({ t }) {
    const style = { minHeight: "calc(100vh - 0.5rem)" };

    return (
        <div style={style}>
            <div className='g-8 flex h-full flex-wrap items-center lg:justify-start xl:justify-start md:justify-start mx-12 my-8 space-x-2 justify-start'>
                <div></div>
                <div className='max-w-[29rem] lg:justify-self-end '>
                    <PageIntro title={t("createAnAccount")} />
                    <div className='w-full'>
                        <form className='  mt-[8px]  w-full'>
                            <div
                                className='relative mb-[0.9rem]'
                                data-te-input-wrapper-init
                            >
                                <Input
                                    label={t("userName")}
                                    type='text'
                                    name='text'
                                    inputWidthSize='w-full'
                                />
                            </div>
                            <div
                                className='relative mb-[0.9rem]'
                                data-te-input-wrapper-init
                            >
                                <Input
                                    label={t("city")}
                                    type='text'
                                    name='text'
                                    inputWidthSize='w-full'
                                />
                            </div>
                            <div
                                className='relative mb-[0.9rem]'
                                data-te-input-wrapper-init
                            >
                                <Input
                                    label={t("licenseNamber")}
                                    type='text'
                                    name='text'
                                    inputWidthSize='w-full'
                                />
                            </div>
                            <div
                                className='frelative mb-[0.9rem]'
                                data-te-input-wrapper-init
                            >
                                <Input
                                    label={t("createPassword")}
                                    type='Password'
                                    name='Password'
                                />
                            </div>
                            <div
                                className='frelative mb-[0.9rem]'
                                data-te-input-wrapper-init
                            >
                                <Input
                                    label={t("confirmPassword")}
                                    type='Password'
                                    name='Password'
                                />
                            </div>

                            <div className='flex justify-start space-x-[0.5rem] lg:space-x-[0.5rem] mt-6 rtl:space-x-reverse 1.4rem sm:flex-row'>
                                <Button
                                    content={t("create")}
                                    filled='true'
                                    size='medium'
                                    fontSize='lg:text-xl xl xl:text-xl'
                                    radius='md'
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation("signup")(therapist);
