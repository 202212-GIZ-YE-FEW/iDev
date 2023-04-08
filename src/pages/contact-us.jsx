import Head from "next/head";
import Image from "next/image";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ContactSVG from "public/contactus.svg";
import { useState } from "react";

import PageIntro from "@/components/PageIntro";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import RadioGroup from "@/components/ui/radiogroup/RadioGroup";
import RadioInputItem from "@/components/ui/radiogroup/RadioInputItem";
import Textarea from "@/components/ui/textarea/Textarea";

import getDocument from "@/firebase/getData";
import schema from "@/utils/validationSchema";

import { sendForm } from "../utils/api";
function ContactUs({ t, choices }) {
    const [formData, setFormData] = useState({});
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await schema.validate(formData, { abortEarly: false });
            await sendForm(formData, "contact");
            setFormData({});
            setFormErrors({});
        } catch (error) {
            if (error.inner) {
                const newErrors = {};
                error.inner.forEach((e) => {
                    newErrors[e.path] = e.message;
                });
                setFormErrors(newErrors);
            }
        }
    };
    const [typeOfContact, setTypeOfContact] = useState("");

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
                        className='flex flex-col md:flex-row md:justify-between xl:flex-col gap-x-5 gap-y-16'
                    >
                        <div>
                            <RadioGroup title={t("typeOfContact")}>
                                {choices.map((item, index) => {
                                    return (
                                        <RadioInputItem
                                            key={index}
                                            id={item[0]}
                                            name='typeContact'
                                            value={item[0]}
                                            title={item[1]}
                                            checked={typeOfContact === item[0]}
                                            onChange={(e) => {
                                                setTypeOfContact(
                                                    e.target.value
                                                );
                                                handleChange(e);
                                            }}
                                        />
                                    );
                                })}
                            </RadioGroup>
                        </div>
                        <div className='min-w-fit md:min-w-[25rem] lg:min-w-[30rem]'>
                            <div className='mb-[1.2rem]'>
                                <Input
                                    label={t("fullName")}
                                    type='text'
                                    name='fullName'
                                    value={formData.fullName || ""}
                                    onChange={handleChange}
                                    error={formErrors.fullName}
                                    labelColor='text-black'
                                    placeholder={t("enterFullName")}
                                    shadow='md'
                                    radius='lg'
                                    t={t}
                                />
                            </div>
                            <div className='mb-[1.2rem]'>
                                <Input
                                    label={t("email")}
                                    type='text'
                                    name='email'
                                    value={formData.email || ""}
                                    onChange={handleChange}
                                    error={formErrors.email}
                                    labelColor='text-black'
                                    placeholder={t("enterEmail")}
                                    shadow='md'
                                    radius='lg'
                                    t={t}
                                />
                            </div>
                            <div className='mb-[1.8rem]'>
                                <Textarea
                                    label={t("details")}
                                    name='details'
                                    value={formData.details || ""}
                                    onChange={handleChange}
                                    error={formErrors.details}
                                    labelColor='text-black'
                                    placeholder={t("enterDetails")}
                                    rows='8'
                                    shadow='md'
                                    radius='lg'
                                    t={t}
                                />
                            </div>
                            <Button
                                content={t("submit")}
                                text-transform='capitalize'
                                filled='true'
                                size='large'
                                fontSize='text-sm md:text-xl'
                                radius='md'
                            />
                        </div>
                    </form>
                    <div className='grid md:grid-cols-2 xl:grid-cols-1 gap-10'>
                        <div className='mx-auto max-w-[28rem]'>
                            <Image src={ContactSVG} alt='contact us image' />
                        </div>
                        <div className='bg-light-cyan p-8 rounded-3xl self-start'>
                            <span className='text-lg lg:text-2xl capitalize'>
                                {t("findAt")}
                            </span>
                            <address className='text-gray/40 not-italic'>
                                3rd Floor <br />
                                Almasbah Street <br />
                                Taiz, Yemen
                                <br />
                                00000
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps({ locale }) {
    const typeOfContactData = await getDocument("type_of_contact");
    // Take only locale row
    const typeOfContactDataByLang = typeOfContactData.find(
        (data) => data.id === locale
    );

    // Pick up value field in db, and convert to array to pass
    const choices = Object.entries(typeOfContactDataByLang.value);

    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "contact_us",
                "validation",
            ])),
            choices,
        },
    };
}

export default withTranslation(["contact_us", "validation"])(ContactUs);
