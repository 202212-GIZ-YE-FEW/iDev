import Image from "next/image";
import Link from "next/link";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import AuthSocialMedia from "@/components/AuthSocialMedia";
import FormTitle from "@/components/FormTitle";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import {
    signInWithGoogleAccount,
    signInWithFbAccount,
} from "@/firebase/firebaseProvidersMethods";
import { useAuth } from "@/components/context/AuthContext";
import * as Yup from "yup";

function SignUp({ t }) {
    const { signUp, user } = useAuth();

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

    const schema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters long")
            .required("Required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Required"),
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
    });

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
            // Do something with the user object, e.g. redirect to login
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
                            <Input
                                type='text'
                                name='firstName'
                                placeholder={t(`${firstname}`)}
                                value={formData.firstName || ""}
                                onChange={handleChange}
                                error={formErrors.firstname}
                            />
                            <Input
                                type='text'
                                name='lastName'
                                placeholder={t(`${lastname}`)}
                                value={formData.lastName || ""}
                                onChange={handleChange}
                                error={formErrors.lastname}
                            />
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
                                />
                            </div>
                        </div>
                        <div className='flex space-x-[1.5rem] text-center lg:text-start justify-center mb-[0.5rem] rtl:space-x-reverse ext-md font-weight-500'>
                            <Input
                                label={t(`${datebrith}`)}
                                type='date'
                                name='datebrith'
                                inputWidthSize='w-full'
                                value={formData.datebrith || ""}
                                onChange={handleChange}
                                error={formErrors.datebrith}
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
            ...(await serverSideTranslations(locale, ["common", "signup"])),
            // Will be passed to the page component as props
        },
    };
}
export default withTranslation("signup")(SignUp);
