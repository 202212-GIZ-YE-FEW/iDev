import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import Textarea from "@/components/ui/textarea/Textarea";
import Input from "@/components/ui/Input";
import PreviewProfile from "@/components/ui/PreviewProfile";
function TherapistProfile({ t }) {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <div className='container '>
            <div className='grid grid-cols-1 lg:grid-cols-2 py-20 gap-y-10'>
                <div className='justify-self-center lg:justify-self-start'>
                    <PreviewProfile />
                </div>
                <div className='w-full justify-self-center lg:justify-self-end'>
                    <fieldset>
                        <legend class='text-3xl font-semibold uppercase'>
                            {t("therapistP")}
                        </legend>
                        <div className='flex items-center my-5'>
                            <Input
                                inputWidthSize='flex-[2_1_0%]'
                                type='text'
                                name='fullName'
                                label={t("fullName")}
                                labelColor='text-black'
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex items-center my-5'>
                            <Textarea
                                // inputWidthSize='flex-[2_1_0%]'
                                name='bio'
                                label={t("bio")}
                                labelColor='text-black'
                                labelFontWeight='light'
                                rows='8'
                                value={formData.bio}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex items-center my-5'>
                            <Input
                                inputWidthSize='flex-[2_1_0%]'
                                type='date'
                                name='birthDate'
                                label={t("birthDate")}
                                labelColor='text-black'
                                value={formData.birthDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex items-center my-5'>
                            <Input
                                inputWidthSize='flex-[2_1_0%]'
                                type='email'
                                name='email'
                                label={t("email")}
                                labelColor='text-black'
                            />
                        </div>
                        <div className='flex items-center my-5'>
                            <Input
                                inputWidthSize='flex-[2_1_0%]'
                                type='text'
                                name='phoneNumber'
                                label={t("phoneNumber")}
                                labelColor='text-black'
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "profile"])),
        },
    };
}
export default withTranslation(["profile"])(TherapistProfile);
