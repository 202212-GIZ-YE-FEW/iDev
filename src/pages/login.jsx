import AOS from "aos";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import toastr from "toastr";

import "aos/dist/aos.css";

import AuthSocialMedia from "@/components/AuthSocialMedia";
import { useAuth } from "@/components/context/AuthContext";
import FormTitle from "@/components/FormTitle";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

import schema from "@/utils/validationSchemalogin";

function Login({ t }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 500,
        });
    }, []);
    const {
        email = "email",
        password = "password",
        signup = "signup",
        login = "login",
        forgotPassword = "forgotPassword",
    } = [];
    const {
        logIn,
        authenticated,
        signInWithFbAccount,
        signInWithGoogleAccount,
        resetPassword,
    } = useAuth();

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
            await logIn(formData.email, formData.password);
            const router = require("next/router").default;
            router.push("/");
        } catch (error) {
            if (error.code === "auth/user-not-found") {
                setFormErrors({ email: "loginErrorEmailNotExist" });
            } else if (error.code === "auth/wrong-password") {
                setFormErrors({ password: "loginErrorWrongPassword" });
            }
            if (error.inner) {
                const newErrors = {};
                error.inner.forEach((e) => {
                    newErrors[e.path] = e.message;
                });
                setFormErrors(newErrors);
            }
        }
    };
    const handleResetPassword = async (e) => {
        e.preventDefault();

        const email = prompt("Please enter your email address");

        if (email) {
            await resetPassword(email);
            toastr.info(t("passwordResetEmail"), "", {
                closeButton: true,
                progressBar: true,
                positionClass: "toast-top-right",
            });
        }
    };
    return (
        <>
            <Head>
                <title>{t("common:login")}</title>
            </Head>
            <div className='container'>
                <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center py-20 items-center gap-y-10 gap-x-32'>
                    <div className='w-1/2 lg:justify-self-start'>
                        <Image
                            src='/login.png'
                            className='w-full lg:min-w-[27rem] lg:max-w-[33rem] xl:min-w-[34rem]'
                            width={500}
                            height={300}
                            alt='signup image'
                            data-aos='zoom-in-up'
                        />
                    </div>
                    <div className='max-w-[29rem] lg:justify-self-end'>
                        <FormTitle title={t(`${login}`)} />

                        <form
                            className='shadow-lg px-7 py-11  mt-4 rounded-lg'
                            onSubmit={handleSubmit}
                        >
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
                            <div className='flex justify-center mt-5 space-x-[0.5rem] rtl:space-x-reverse 1.4rem sm:flex-row'>
                                <Link href='/login'>
                                    <Button
                                        content={t(`${login}`)}
                                        filled='false'
                                        size='medium'
                                        fontSize='lg:text-md xl:text-sm'
                                        radius='md'
                                        onClick={handleSubmit}
                                        interaction='transform hover:bg-yellow transition hover:scale-75 active:bg-cyan focus:outline-none focus:ring focus:ring-cyan'
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
                                        interaction='transform hover:bg-yellow transition hover:scale-75 active:bg-cyan focus:outline-none focus:ring focus:ring-cyan'
                                    />
                                </Link>
                            </div>
                            <p
                                onClick={handleResetPassword}
                                className='text-cyan mt-3 text-center cursor-pointer'
                            >
                                {t(`${forgotPassword}`)}
                            </p>
                        </form>
                        <AuthSocialMedia
                            googleLogoOnclick={signInWithGoogleAccount}
                            FbLogoOnClick={signInWithFbAccount}
                        />
                    </div>
                </div>
            </div>
        </>
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
export default withTranslation(["signup", "validation"])(Login);
