import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useState } from "react";
import FormTitle from "@/components/FormTitle";
import Input from "@/components/ui/Input";
import PreviewProfile from "@/components/ui/PreviewProfile";
import Textarea from "@/components/ui/textarea/Textarea";

function ViewProfile({ t }) {
    // const [formData, setFormData] = useState({});

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };
    return (
        <div className='container '>
            <div className='grid grid-cols-1 lg:grid-cols-2  py-20  gap-y-10  gap-x-32'>
                <div className=' lg:justify-self-end md:justify-self-center '>
                    <PreviewProfile />
                </div>
                <div className='max-w-[29rem] '>
                    <FormTitle title={t("therapistProfile")} />
                    <div className='flex flex-row justify-center  my-5 gap-4'>
                        <Input
                            className='w-8/12'
                            type='text'
                            name='fullName'
                            label={t("fullName")}
                            labelColor='text-black'
                            // value={formData.fullName || ""}
                            // onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-row justify-center  my-5 gap-4'>
                        <Textarea
                            label={t("bio")}
                            name='bio'
                            labelColor='text-black'
                            rows='8'
                            shadow='md'
                            radius='lg'
                        />
                    </div>
                    <div className='flex flex-row justify-center my-5'>
                        <Input
                            type='date'
                            name='birthDate'
                            label={t("birthDate")}
                            labelColor='text-black'
                            // value={formData.birthDate || ""}
                            // onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-row justify-center my-5 gap-4'>
                        <Input
                            type='email'
                            name='email'
                            label={t("email")}
                            labelColor='text-black'
                        />
                    </div>

                    <div className='flex flex-row justify-center my-5 gap-4'>
                        <Input
                            type='text'
                            name='phoneNumber'
                            label={t("phoneNumber")}
                            labelColor='text-black'
                            // value={formData.phoneNumber || ""}
                            // onChange={handleChange}
                        />
                    </div>
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
export default withTranslation(["profile"])(ViewProfile);
