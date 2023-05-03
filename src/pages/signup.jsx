import AOS from "aos";
import Image from "next/image";
import Link from "next/link";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";

import "aos/dist/aos.css";

import AuthSocialMedia from "@/components/AuthSocialMedia";
import { useAuth } from "@/components/context/AuthContext";
import FormTitle from "@/components/FormTitle";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

import schema from "@/utils/validationSchemaSignUp";

function SignUp({ t }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 500,
        });
    }, []);
    const {
        signUp,
        authenticated,
        signInWithFbAccount,
        signInWithGoogleAccount,
        user,
        sendEmailConfirmation,
    } = useAuth();

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
    const router = require("next/router").default;
    useEffect(() => {
        if (authenticated) {
            router.push("/");
        }
    }, [authenticated, router]);
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await schema.validate(formData, { abortEarly: false });

            const collection = "user"; // collection name
            const userData = {
                active: true,
                email: formData.email,
                first_name: formData.firstName,
                last_name: formData.lastName,
                dateOfBirth: formData.dateOfBirth,
                isTherapist: false,
            };
            const profileData = {
                Fullname: formData.firstName + " " + formData.lastName,
                deleted: false,
                hobbies: "Play Football",
                familySize: 80,
                educationLevel: "Master",
                phoneNumber: 777898989,
                gender: "male",
            };
            const therapistData = {
                LicenseNamber: "",
                userName: "",
                city: "",
            };
            signUp(
                formData.email,
                formData.password,
                userData,
                profileData,
                therapistData
            );
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
        <div className='container'>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center py-20 items-center gap-y-10 gap-x-32'>
                <div className='w-1/2 lg:justify-self-start'>
                    <Image
                        src='/signup.svg'
                        className='w-full lg:min-w-[27rem] lg:max-w-[33rem] xl:min-w-[34rem]'
                        width={500}
                        height={300}
                        alt='signup image'
                        data-aos='zoom-in-up'
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
                                    field={t(`${firstname}`)}
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
                                    field={t(`${lastname}`)}
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
                                field={t(`${email}`)}
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
                                field={t(`${confirmemail}`)}
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
                                    field={t(`${password}`)}
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
                                    field={t(`${confirmpassword}`)}
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
                                field={t(`${datebrith}`)}
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
