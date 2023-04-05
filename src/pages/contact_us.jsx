// import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";

import PageIntro from "@/components/PageIntro";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/textarea/Textarea";

// import RadioGroup from "@/components/ui/radiogroup/RadioGroup";
// import RadioInputItem from "@/components/ui/radiogroup/RadioInputItem";
import { db } from "@/firebase-config/firebase";
function ContactUs({ t, choices }) {
    const [typeOfContact, setTypeOfContact] = useState("serviceQuestion");
    return (
        <>
            <div className='container py-10'>
                <PageIntro
                    title='send us your request'
                    subtitle="Do you have a question, concern, idea, feedback, or problem?  If you need assistance, please fill out the form below and we'd be happy to help!"
                />
                {/* <RadioGroup title='Type of contact'> */}
                {choices.map((lang) => {
                    {
                        Object.entries(lang.value).map((item) => (
                            <input
                                key={item[0]}
                                id={item[0]}
                                type='radio'
                                name={item[0]}
                                value={item[1]}
                                title='Type Of Contact'
                                checked={typeOfContact === item[1]}
                                onChange={(e) =>
                                    setTypeOfContact(e.target.value)
                                }
                            />
                        ));
                    }
                    {
                        Object.entries(lang.value).map((item, index) => (
                            <p key={index}>{item}</p>
                        ));
                    }
                })}
                {/* </RadioGroup> */}
                <div className='flex flex-col lg:flex-row lg:justify-between gap-32'>
                    <div className='bg-red w-full'>
                        <div className='mb-[1rem]'>
                            <Input
                                label={t("fullName")}
                                type='text'
                                name='fullname'
                                labelColor='text-black'
                                placeholder={t("enterFullName")}
                                inputWidthSize='w-full'
                            />
                        </div>
                        <div className='mb-[1rem]'>
                            <Input
                                label={t("email")}
                                type='email'
                                name='email'
                                labelColor='text-black'
                                placeholder={t("enterEmail")}
                                inputWidthSize='w-full'
                            />
                        </div>
                        <div className='mb-[1rem]'>
                            <Textarea
                                label={t("details")}
                                name='email'
                                labelColor='text-black'
                                placeholder={t("enterDetails")}
                                rows='8'
                            />
                        </div>
                    </div>
                    <div className='bg-light-cyan p-8 rounded-3xl self-center w-[38rem]'>
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
        </>
    );
}

export async function getStaticProps({ locale }) {
    const choices = await getDocs(collection(db, "type_of_contact")).then(
        (res) =>
            res.docs.map((data) => {
                return { ...data.data(), id: data.id };
            })
    );
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "contact_us"])),
            choices,
        },
    };
}

export default withTranslation("contact_us")(ContactUs);
