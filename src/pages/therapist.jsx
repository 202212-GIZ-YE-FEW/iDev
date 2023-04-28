import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { useState } from "react";

import { useAuth } from "@/components/context/AuthContext";
import PageIntro from "@/components/PageIntro";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import schema from "@/utils/validationSchemaTherapist";
import { doc, collection, getFirestore } from "firebase/firestore";
import "firebase/auth";
import "firebase/firestore";
import updateDocument from "@/firebase/updateSubCollection";
function Therapist({ t }) {
    const { authenticated, user } = useAuth();
    const [formData, setFormData] = useState({});
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await schema.validate(formData, { abortEarly: false });
            const db = getFirestore();
            const userId = user?.uid;
            if (!userId) {
                // handle the case where the user is not logged in
                return <p>You need to log in to access this page.</p>;
            }
            const parentDocRef = doc(db, "users", userId);
            const childCollectionRef = collection(
                parentDocRef,
                "Personal_data"
            );
            const childCollectionPath = childCollectionRef.path; // outputs "parentCollection/parentDocId/childCollection"
            const data = {
                userName: formData.userName,
                city: formData.city,
                LicenseNamber: formData.licenseNamber,
                isTherapist: true,
            };
            const therapist = "therapist";
            await updateDocument(childCollectionPath, therapist, data);
            const router = require("next/router").default;
            router.push({
                pathname: "/",
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
                                    inputWidthSize='w-full'
                                    field={t("userName")}
                                    name='userName'
                                    value={formData.userName || ""}
                                    onChange={handleChange}
                                    error={formErrors.userName}
                                    t={t}
                                />
                            </div>
                            <div
                                className='relative mb-[0.9rem]'
                                data-te-input-wrapper-init
                            >
                                <Input
                                    label={t("city")}
                                    type='text'
                                    inputWidthSize='w-full'
                                    field={t("city")}
                                    name='city'
                                    value={formData.city || ""}
                                    onChange={handleChange}
                                    error={formErrors.city}
                                    t={t}
                                />
                            </div>
                            <div
                                className='relative mb-[0.9rem]'
                                data-te-input-wrapper-init
                            >
                                <Input
                                    label={t("licenseNamber")}
                                    type='text'
                                    inputWidthSize='w-full'
                                    field={t("licenseNamber")}
                                    name='licenseNamber'
                                    value={formData.licenseNamber || ""}
                                    onChange={handleChange}
                                    error={formErrors.licenseNamber}
                                    t={t}
                                />
                            </div>

                            <div className='mt-12'>
                                <Button
                                    content={t("create")}
                                    filled='true'
                                    size='medium'
                                    fontSize='lg:text-xl xl xl:text-xl'
                                    radius='md'
                                    onClick={handleSubmit}
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

export default withTranslation(["signup", "validation"])(Therapist);
