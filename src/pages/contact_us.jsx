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
function ContactUs({ t, choices }) {
    const [typeOfContact, setTypeOfContact] = useState("");
    return (
        <>
            <div className='container py-10'>
                <PageIntro
                    title='send us your request'
                    subtitle="Do you have a question, concern, idea, feedback, or problem?  If you need assistance, please fill out the form below and we'd be happy to help!"
                />
                <form>
                    <div className='flex flex-col xl:flex-row gap-32 mt-20'>
                        <div className='w-full xl:w-2/3'>
                            <RadioGroup title={t("typeOfContact")}>
                                {choices.map((item, index) => {
                                    return (
                                        <RadioInputItem
                                            key={index}
                                            id={item[0]}
                                            name={typeOfContact}
                                            value={item[0]}
                                            title={item[1]}
                                            checked={typeOfContact === item[0]}
                                            onChange={(e) =>
                                                setTypeOfContact(e.target.value)
                                            }
                                        />
                                    );
                                })}
                            </RadioGroup>
                        </div>
                        <div className='w-full xl:w-2/3 mx-auto'>
                            <Image src={ContactSVG} alt='contact us image' />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row lg:justify-between gap-32 mt-20'>
                        <div className='lg:w-1/2'>
                            <div className='mb-[1.2rem]'>
                                <Input
                                    label={t("fullName")}
                                    type='text'
                                    name='fullname'
                                    labelColor='text-black'
                                    placeholder={t("enterFullName")}
                                    shadow='md'
                                    border='light-gray'
                                    radius='lg'
                                />
                            </div>
                            <div className='mb-[1.2rem]'>
                                <Input
                                    label={t("email")}
                                    type='email'
                                    name='email'
                                    labelColor='text-black'
                                    placeholder={t("enterEmail")}
                                    shadow='md'
                                    border='light-gray/20'
                                    radius='lg'
                                />
                            </div>
                            <div className='mb-[1.2rem]'>
                                <Textarea
                                    label={t("details")}
                                    name='email'
                                    labelColor='text-black'
                                    placeholder={t("enterDetails")}
                                    rows='8'
                                    shadow='md'
                                    border='light-gray/20'
                                    radius='lg'
                                />
                            </div>
                        </div>
                        <div className='bg-light-cyan p-8 rounded-3xl self-center lg:w-1/2 max-w-[38rem]'>
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
                    <Button
                        content={t("submit")}
                        text-transform='capitalize'
                        filled='true'
                        size='large'
                        fontSize='text-sm md:text-xl'
                        radius='md'
                    />
                </form>
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
            ...(await serverSideTranslations(locale, ["common", "contact_us"])),
            choices,
        },
    };
}

export default withTranslation("contact_us")(ContactUs);
