import { withTranslation } from "next-i18next";
import React from "react";

import PageIntro from "@/components/PageIntro";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
function Therapist({ t }) {
    return (
        <div className='container py-20'>
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
                                type='password'
                                name='password'
                            />
                        </div>

                        <div className='mt-12'>
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
    );
}

export default withTranslation("signup")(Therapist);
