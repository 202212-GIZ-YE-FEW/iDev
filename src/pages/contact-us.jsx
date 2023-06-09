import AOS from "aos";
import { useFormik } from "formik";
import Head from "next/head";
import Image from "next/image";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ContactSVG from "public/contactus.svg";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

import "aos/dist/aos.css";

import PageIntro from "@/components/PageIntro";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import RadioGroup from "@/components/ui/radiogroup/RadioGroup";
import RadioInputItem from "@/components/ui/radiogroup/RadioInputItem";
import Textarea from "@/components/ui/textarea/Textarea";

import getDocument from "@/firebase/getData";
import { postHandler } from "@/utils/api";
import schema from "@/utils/validationSchema";

function ContactUs({ t, reasons, address }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 500,
        });
    }, []);
    const onSubmit = async (values, actions) => {
        const response = await postHandler("/api/contact", values);
        if (response.data.success === 0) {
            toast(response.data.message, {
                hideProgressBar: true,
                position: "bottom-left",
                autoClose: 2000,
                type: "success",
            });
        } else {
            toast(response.data.message, {
                hideProgressBar: true,
                position: "bottom-left",
                autoClose: 2000,
                type: "error",
            });
        }
        actions.resetForm();
    };
    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            details: "",
            typeContact: "",
        },
        validationSchema: schema,
        onSubmit,
    });

    return (
        <>
            <Head>
                <title>{t("common:contactUs")}</title>
            </Head>
            <div className='container py-10'>
                <PageIntro
                    title={t("sendRequest")}
                    subtitle={t("sendRequestDesc")}
                />
                <div className='grid grid-cols-1 xl:grid-cols-2 my-10 gap-28'>
                    <form
                        onSubmit={handleSubmit}
                        autoComplete='off'
                        className='flex flex-col md:flex-row md:justify-between xl:flex-col gap-x-5 gap-y-16'
                    >
                        <div>
                            <RadioGroup title={t("typeOfContact")}>
                                {reasons.map((item, index) => {
                                    return (
                                        <RadioInputItem
                                            key={index}
                                            id={item}
                                            name='typeContact'
                                            value={item}
                                            content={item}
                                            checked={
                                                values.typeContact === item
                                            }
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={errors.fullName}
                                            touched={touched.fullName}
                                        />
                                    );
                                })}
                            </RadioGroup>
                        </div>
                        <div className='min-w-fit md:min-w-[25rem] lg:min-w-[30rem]'>
                            <div className='mb-[1.2rem]'>
                                <Input
                                    field={t("fullName")}
                                    value={values.fullName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.fullName}
                                    touched={touched.fullName}
                                    label={t("fullName")}
                                    type='text'
                                    name='fullName'
                                    labelColor='text-black'
                                    placeholder={t("enterFullName")}
                                    shadow='md'
                                    radius='lg'
                                    t={t}
                                />
                            </div>
                            <div className='mb-[1.2rem]'>
                                <Input
                                    field={t("email")}
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.email}
                                    touched={touched.email}
                                    label={t("email")}
                                    name='email'
                                    type='text'
                                    labelColor='text-black'
                                    placeholder={t("enterEmail")}
                                    shadow='md'
                                    radius='lg'
                                    t={t}
                                />
                            </div>
                            <div className='mb-[1.8rem]'>
                                <Textarea
                                    value={values.details}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.details}
                                    touched={touched.details}
                                    label={t("details")}
                                    name='details'
                                    labelColor='text-black'
                                    placeholder={t("enterDetails")}
                                    rows='8'
                                    shadow='md'
                                    radius='lg'
                                    t={t}
                                />
                            </div>
                            <Button
                                disabled={isSubmitting}
                                content={t("submit")}
                                textTransform='capitalize'
                                filled='true'
                                size='large'
                                fontSize='text-sm md:text-xl'
                                radius='md'
                            />
                        </div>
                    </form>
                    <div className='grid md:grid-cols-2 xl:grid-cols-1 gap-10'>
                        <div className='mx-auto max-w-[28rem]'>
                            <Image
                                data-aos='zoom-in-up'
                                src={ContactSVG}
                                alt='contact us image'
                            />
                        </div>
                        <div className='bg-light-cyan p-8 rounded-3xl self-start'>
                            <span className='text-lg lg:text-2xl capitalize'>
                                {t("findAt")}
                            </span>
                            <address className='text-gray/40 not-italic'>
                                {address.map((item, index) => {
                                    return (
                                        <span key={index}>
                                            {item}
                                            <br />
                                        </span>
                                    );
                                })}
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps({ locale }) {
    let address = [];
    let reasons = [];
    try {
        const row = await getDocument("contact");
        if (row) {
            // Take only row of current locale
            const currentLangInfo = row.find((data) => data.id === locale);

            reasons = currentLangInfo.typeContact;

            // convert ||-separated string in db address to array.
            address = currentLangInfo.address.split("||");
        }
    } catch (error) {
        //
    }
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "contact_us",
                "validation",
                "response",
            ])),
            address,
            reasons,
        },
    };
}

export default withTranslation(["contact_us", "validation"])(ContactUs);
