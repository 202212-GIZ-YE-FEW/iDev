import { withTranslation } from "next-i18next";
import React from "react";
import { useAuth } from "@/components/context/AuthContext";
import PageIntro from "@/components/PageIntro";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import schema from "@/utils/validationSchemaSignUp";
import RadioGroup from "@/components/ui/radiogroup/RadioGroup";
import RadioInputItem from "@/components/ui/radiogroup/RadioInputItem";
import { useState } from "react";
import addDocument from "@/firebase/addData";
function Therapist({ t, choices }) {
    const { authenticated } = useAuth();
    const [formData, setFormData] = useState({});
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const [gender, setGender] = React.useState("male");

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await schema.validate(formData, { abortEarly: false });
            const collection = "user"; // collection name
            const userData = {
                active: true,
                deleted: false,
                education_level: "",
                email: formData.email,
                familySize: 4,
                first_name: formData.firstName,
                gender: "",
                hobbies: "",
                last_name: formData.lastName,
                date_brith: formData.dateOfBirth,
                phoneNumber: "",
                isTherapist: false,
                userName: "",
                city: "",
                LicenseNamber: 7899000,
            };
            addDocument(collection, userData).then((response) => {
                const router = require("next/router").default;
                router.push({
                    pathname: "/thanks",
                });
            });
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
    return (
        <div className='container py-20'>
            {authenticated ? (
                <div className='max-w-[29rem] lg:justify-self-end '>
                    <PageIntro title={t("createAnAccount")} />
                    <div className='w-full'>
                        <form
                            className='  mt-[8px]  w-full'
                            onSubmit={handleSubmit}
                        >
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

                            <div>
                                <RadioGroup title='Select Gender'>
                                    <RadioInputItem
                                        id='male'
                                        name='gender'
                                        value='male'
                                        checked={gender === "male"}
                                        onChange={handleGenderChange}
                                        title='Male'
                                        asButton
                                    />
                                    <RadioInputItem
                                        id='female'
                                        name='gender'
                                        value='female'
                                        checked={gender === "female"}
                                        onChange={handleGenderChange}
                                        title='Female'
                                        asButton
                                    />
                                </RadioGroup>
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
            ) : (
                <p>{t("pleaseLogin")}</p>
            )}
        </div>
    );
}

export default withTranslation("signup")(Therapist);
