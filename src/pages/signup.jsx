import Image from "next/image";
import Link from "next/link";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState, useEffect } from "react";
import AuthSocialMedia from "@/components/AuthSocialMedia";
import FormTitle from "@/components/FormTitle";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import {
    signInWithGoogleAccount,
    signInWithFbAccount,
} from "@/firebase/firebaseProvidersMethods";
import { useAuth } from "@/components/context/AuthContext";
import addData from "@/firebase/addData";

import schema from "@/components/validation/validationSchema";

function SignUp({ t }) {
    const { signUp, user, sendEmailConfirmation } = useAuth();

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
    } = {};

    const [formData, setFormData] = useState({});
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await schema.validate(formData, { abortEarly: false });
            await signUp(formData.email, formData.password);
            const collection = "user"; // collection name
            const userId = user.uid; // document ID
            const userData = {
                active: "true",
                deleted: "true",
                education_level: "",
                email: formData.email,
                familySize: "4",
                first_name: formData.firstName,
                gender: "",
                hobbies: "",
                last_name: formData.lastName,
                password: formData.password,
                date_brith: formData.dateOfBirth,
                phoneNumber: "",
                userType: "1",
            };
            addData(collection, userId, userData).then((response) => {
                if (response.error) {
                    console.log("Error adding data:", response.error);
                } else {
                    console.log("Data added successfully:", response.result);
                    sendEmailConfirmation();
                    const router = require("next/router").default;
                    router.push({
                        pathname: "/thanks",
                        query: {
                            subtitle:
                                "Please check your email to Activate the Signup Account",
                        },
                    });
                }
            });
        } catch (error) {
            console.error(error);
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
        <div className='container'>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center py-20 items-center gap-y-10 gap-x-32'>
                <div className='w-1/2 lg:justify-self-start'>
                    <Image
                        src='/signup.svg'
                        className='w-full lg:min-w-[27rem] lg:max-w-[33rem] xl:min-w-[34rem]'
                        width={500}
                        height={300}
                        alt='signup image'
                    />
                </div>
                <div className='max-w-[29rem] lg:justify-self-end'>
                    <FormTitle title={t(`${signup}`)} />

                    <form
                        className='shadow-lg px-7 py-11  mt-4 rounded-lg'
                        onSubmit={handleSubmit}
                    >
                        <div className='flex mb-[0.8rem] justify-center space-x-[0.7rem] rtl:space-x-reverse 0.7rem sm:flex-row '>
                            <div className='flex-col mt-[0.8rem]'>
                                <Input
                                    type='name'
                                    name='firstName'
                                    placeholder={t(`${firstname}`)}
                                    value={formData.firstName || ""}
                                    onChange={handleChange}
                                    error={formErrors.firstName}
                                    t={t}
                                />
                            </div>
                            <div className='flex-col mt-[0.8rem]'>
                                <Input
                                    type='name'
                                    name='lastName'
                                    placeholder={t(`${lastname}`)}
                                    value={formData.lastName || ""}
                                    onChange={handleChange}
                                    error={formErrors.lastName}
                                    t={t}
                                />
                            </div>
                        </div>

                        <div className='mb-[0.8rem]'>
                            <Input
                                type='email'
                                name='email'
                                placeholder={t(`${email}`)}
                                inputWidthSize='w-full'
                                value={formData.email || ""}
                                onChange={handleChange}
                                error={formErrors.email}
                                t={t}
                            />
                        </div>
                        <div className='mb-[0.8rem]'>
                            <Input
                                type='email'
                                name='confirmEmail'
                                placeholder={t(`${confirmemail}`)}
                                inputWidthSize='w-full'
                                value={formData.confirmEmail || ""}
                                onChange={handleChange}
                                error={formErrors.confirmEmail}
                                t={t}
                            />
                        </div>
                        <div className='flex mb-[0.8rem] space-x-[0.7rem] rtl:space-x-reverse'>
                            <div className='flex-col mt-[0.8rem]'>
                                <Input
                                    type='password'
                                    name='password'
                                    placeholder={t(`${password}`)}
                                    value={formData.password || ""}
                                    onChange={handleChange}
                                    error={formErrors.password}
                                    t={t}
                                />
                            </div>
                            <div className='flex-col mt-[0.8rem]'>
                                <Input
                                    type='password'
                                    name='confirmPassword'
                                    placeholder={t(`${confirmpassword}`)}
                                    value={formData.confirmPassword || ""}
                                    onChange={handleChange}
                                    error={formErrors.confirmPassword}
                                    t={t}
                                />
                            </div>
                        </div>
                        <div className='flex-col  text-center lg:text-start justify-center mb-[0.5rem]  ext-md font-weight-500'>
                            <Input
                                label={t(`${datebrith}`)}
                                type='date'
                                name='dateOfBirth'
                                inputWidthSize='w-full'
                                value={formData.dateOfBirth || ""}
                                onChange={handleChange}
                                error={formErrors.dateOfBirth}
                                t={t}
                            />
                        </div>
                        <div className='flex justify-center mt-5 space-x-[0.5rem] rtl:space-x-reverse 1.4rem sm:flex-row'>
                            <Link href='/login'>
                                <Button
                                    content={t(`${login}`)}
                                    filled='false'
                                    size='medium'
                                    fontSize='lg:text-md xl:text-sm'
                                    radius='md'
                                />
                            </Link>
                            <Link href='/signup'>
                                <Button
                                    content={t(`${signup}`)}
                                    filled='true'
                                    size='medium'
                                    fontSize='lg:text-md xl:text-sm'
                                    radius='md '
                                    shadow='shadow-lg'
                                    onClick={handleSubmit}
                                />
                            </Link>
                        </div>
                    </form>
                    <AuthSocialMedia
                        googleLogoOnclick={signInWithGoogleAccount}
                        FbLogoOnClick={signInWithFbAccount}
                    />
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "signup",
                "validation",
            ])),

            // Will be passed to the page component as props
        },
    };
}

export default withTranslation(["signup", "validation"])(SignUp);
