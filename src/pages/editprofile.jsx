import { collection, doc, getDocs, getFirestore } from "firebase/firestore";
import Head from "next/head";
import Link from "next/link";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import toastr from "toastr";
import "firebase/firestore";

import { useAuth } from "@/components/context/AuthContext";
import PageIntro from "@/components/PageIntro";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import PreviewProfile from "@/components/ui/PreviewProfile";
import Select from "@/components/ui/Select";

import uploadImage from "@/firebase/addImage";
import deleteDocument from "@/firebase/deleteData";
import getDocument from "@/firebase/getData";
import getDocById from "@/firebase/getDocById";
import updateDocument from "@/firebase/updateSubCollection";
import schema from "@/utils/validationSchemaProfile";

function EditProfile({ t }) {
    const { user, changePassword, authenticated, deleteuser } = useAuth();
    const [imgfile, uploadimg] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [formData, setFormData] = useState({});
    const collectionPath = `users/${user.uid}/Personal_data`;
    const data = {
        Fullname: formData?.Fullname,
        deleted: false,
        hobbies: formData?.hobbies,
        familySize: formData?.familySize,
        educationLevel: formData?.educationLevel,
        phoneNumber: formData?.phoneNumber,
        gender: formData?.gender,
    };
    const userData = {
        dateOfBirth: formData?.dateOfBirth,
    };

    const db = getFirestore();
    const userId = user?.uid;
    const parentDocRef = userId ? doc(db, "users", userId) : null;
    const childCollectionRef = parentDocRef
        ? collection(parentDocRef, "Personal_data")
        : null;
    const profile = "profile";
    const fetchData = async () => {
        if (childCollectionRef) {
            const datafetch = {};
            const querySnapshot = await getDocs(childCollectionRef);
            querySnapshot.forEach((doc) => {
                datafetch[doc.id] = doc.data();
            });

            setFormData(datafetch[profile]);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const cardsQuery = useQuery({
        queryKey: "paymentMethods",
        queryFn: async () => {
            const data = await getDocument(
                `${collectionPath}/payment_methods/data`
            );
            return data;
        },
    });

    const numOfTickets = useQuery({
        queryKey: "numOfTickets",
        queryFn: async () => {
            const ticket = await getDocById("users_tickets", user.uid);
            return ticket;
        },
    });

    const handleChange = async (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        const file = e.target.files && e.target.files[0];
        if (file) {
            const userId = user.uid;
            const imageName = `${userId}`;
            const path = "UploadId/";
            uploadimg(URL.createObjectURL(file));
            await uploadImage(file, imageName, path);
            toastr.success(t("fileUploaded"), "", {
                closeButton: true,
                progressBar: true,
                positionClass: "toast-top-right",
            });
        } else {
            console.log("no file upload");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await schema.validate(formData, { abortEarly: false });
            await updateDocument(childCollectionRef.path, profile, data);
            await updateDocument("users", userId, userData);
            await changePassword(
                formData.currentPassword,
                formData.newPassword
            );
            setFormErrors({});
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
    const handelCancel = async (e) => {
        e.preventDefault();
        fetchData();
        setFormErrors({});
    };
    const handleDeleteAccount = async (e) => {
        e.preventDefault();
        await deleteuser(formData.password);
        await deleteDocument("users", user.uid);
    };

    return (
        <>
            <Head>
                <title>{`${formData?.Fullname || ""} ${t(
                    "common:profile"
                )}`}</title>
            </Head>
            <div className='container '>
                <div className='grid grid-cols-1 lg:grid-cols-2 py-20 gap-y-10'>
                    <div className='justify-self-center lg:justify-self-start'>
                        <PreviewProfile />
                    </div>
                    <div className='w-full justify-self-center lg:justify-self-end'>
                        <form
                            className='  mt-[8px]  w-full'
                            onSubmit={handleSubmit}
                        >
                            <fieldset>
                                <legend class='text-3xl font-semibold uppercase'>
                                    {t("profileInfo")}
                                </legend>
                                <div className='flex items-center my-5'>
                                    <Input
                                        inputWidthSize='flex-[2_1_0%]'
                                        type='text'
                                        name='Fullname'
                                        label={t("Fullname")}
                                        labelColor='text-black'
                                        value={formData?.Fullname || ""}
                                        onChange={handleChange}
                                        error={formErrors.Fullname}
                                        t={t}
                                        field={t("Fullname")}
                                    />
                                </div>
                                <div className='flex items-center my-5'>
                                    <Select
                                        className='lg:w-8/12 text-light-black'
                                        name='educationLevel'
                                        placeholder='select'
                                        options={[
                                            {
                                                value: "select",
                                                label: t("select"),
                                            },
                                            {
                                                value: "bacholar",
                                                label: t("bacholar"),
                                            },
                                            {
                                                value: "master",
                                                label: t("master"),
                                            },
                                            { value: "PhD", label: t("PhD") },
                                            {
                                                value: "deploma",
                                                label: t("deploma"),
                                            },
                                        ]}
                                        label={t("educationLevel")}
                                        labelColor='text-black'
                                        value={formData?.educationLevel}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                educationLevel: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className='flex items-center my-5'>
                                    <Input
                                        inputWidthSize='flex-[2_1_0%]'
                                        type='text'
                                        name='hobbies'
                                        label={t("hobbies")}
                                        labelColor='text-black'
                                        value={formData?.hobbies || ""}
                                        onChange={handleChange}
                                        error={formErrors.hobbies}
                                        t={t}
                                        field={t("hobbies")}
                                    />
                                </div>
                                <div className='flex items-center my-5'>
                                    <Input
                                        inputWidthSize='flex-[1_1_0%]'
                                        type='number'
                                        name='familySize'
                                        label={t("familySize")}
                                        labelColor='text-black'
                                        value={formData?.familySize || ""}
                                        onChange={handleChange}
                                        error={formErrors.familySize}
                                        t={t}
                                        field={t("familySize")}
                                    />
                                    <div className='ms-10 flex-[0_1_0%]'>
                                        {t("member(s)")}
                                    </div>
                                </div>
                                <div className='flex items-center my-5'>
                                    <Select
                                        className='lg:w-8/12 text-light-black'
                                        placeholder='select '
                                        name='gender'
                                        label={t("gender")}
                                        labelColor='text-black'
                                        options={[
                                            {
                                                value: "select",
                                                label: t("select"),
                                            },
                                            {
                                                value: "female",
                                                label: t("female"),
                                            },
                                            { value: "male", label: t("male") },
                                        ]}
                                        value={formData?.gender}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                gender: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className='flex items-center my-5'>
                                    <Input
                                        inputWidthSize='flex-[2_1_0%]'
                                        type='date'
                                        name='dateOfBirth'
                                        label={t("dateOfBirth")}
                                        labelColor='text-black'
                                        value={formData?.dateOfBirth || ""}
                                        onChange={handleChange}
                                        error={formErrors.dateOfBirth}
                                        t={t}
                                        field={t("dateOfBirth")}
                                    />
                                </div>
                                <div className='flex items-center my-5'>
                                    <Input
                                        inputWidthSize='flex-[2_1_0%]'
                                        type='email'
                                        name='email'
                                        label={t("email")}
                                        labelColor='text-black'
                                        value={user.email || ""}
                                        onChange={handleChange}
                                        error={formErrors.email}
                                        t={t}
                                        field={t("email")}
                                    />
                                </div>
                                <div className='flex items-center my-5'>
                                    <Input
                                        inputWidthSize='flex-[2_1_0%]'
                                        type='text'
                                        name='phoneNumber'
                                        label={t("phoneNumber")}
                                        labelColor='text-black'
                                        value={formData?.phoneNumber || ""}
                                        onChange={handleChange}
                                        error={formErrors.phoneNumber}
                                        t={t}
                                        field={t("phoneNumber")}
                                    />
                                </div>
                                <div className='flex items-center my-5'>
                                    <Input
                                        inputWidthSize='flex-[2_1_0%]'
                                        type='file'
                                        name='uploadId'
                                        label={t("uploadId")}
                                        labelColor='text-black'
                                        value={formErrors.uploadId}
                                        onChange={handleChange}
                                        error={formErrors.uploadId}
                                        t={t}
                                        field={t("uploadId")}
                                    />
                                </div>
                            </fieldset>
                            <fieldset className='mt-8'>
                                <legend class='text-3xl font-semibold'>
                                    {t("security")}
                                </legend>
                                {t("UpdatePassword")}
                                <div className='flex items-center my-5'>
                                    <Input
                                        inputWidthSize='flex-[2_1_0%]'
                                        type='password'
                                        name='currentPassword'
                                        label={t("currentPassword")}
                                        labelColor='text-black'
                                        value={formData?.currentPassword || ""}
                                        onChange={handleChange}
                                        error={formErrors.currentPassword}
                                        t={t}
                                        field={t("currentPassword")}
                                    />
                                </div>
                                <div className='flex items-center my-5'>
                                    <Input
                                        inputWidthSize='flex-[2_1_0%]'
                                        type='password'
                                        name='newPassword'
                                        label={t("newPassword")}
                                        labelColor='text-black'
                                        value={formData?.newPassword || ""}
                                        onChange={handleChange}
                                        error={formErrors.newPassword}
                                        t={t}
                                        field={t("newPassword")}
                                    />
                                </div>
                            </fieldset>
                            <fieldset className='mt-8'>
                                <legend class='text-3xl font-semibold'>
                                    {t("ConfirmDelete")}
                                </legend>
                                <div className='flex items-center my-5'>
                                    <Input
                                        inputWidthSize='flex-[2_1_0%]'
                                        type='password'
                                        name='password'
                                        label={t("password")}
                                        labelColor='text-black'
                                        value={formData?.password || ""}
                                        onChange={handleChange}
                                        error={formErrors.password}
                                        t={t}
                                        field={t("password")}
                                    />
                                </div>
                            </fieldset>
                            <div className='flex flex-col sm:flex-row gap-2 my-8'>
                                <Button
                                    content={t("saveChanges")}
                                    filled='true'
                                    size='medium'
                                    radius='md'
                                    textTransform='uppercase'
                                    shadow='shadow-lg'
                                    onClick={handleSubmit}
                                />
                                <Button
                                    content={t("deleteAccount")}
                                    filled='true'
                                    size='medium'
                                    radius='md'
                                    textTransform='uppercase'
                                    shadow='shadow-lg'
                                    onClick={handleDeleteAccount}
                                />
                                <Button
                                    content={t("cancel")}
                                    filled='true'
                                    size='medium'
                                    radius='md'
                                    textTransform='uppercase'
                                    shadow='shadow-lg'
                                    onClick={handelCancel}
                                />
                            </div>
                        </form>
                        <PageIntro title={t("paymentMethods&Tickets")} />
                        <div className='flex gap-10'>
                            <div className='flex flex-col gap-5'>
                                <p>
                                    {t("cardsAdded", {
                                        count: cardsQuery?.data?.length || 0,
                                    })}
                                </p>
                                <Link href='/payment-methods'>
                                    <Button
                                        content={t("showCards")}
                                        filled='true'
                                        size='medium'
                                        radius='md'
                                        textTransform='uppercase'
                                        shadow='shadow-lg'
                                    />
                                </Link>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <p>
                                    {t("ticketsRemaining", {
                                        count:
                                            numOfTickets?.data
                                                ?.num_of_tickets || 0,
                                    })}
                                </p>
                                <Link href='/home'>
                                    <Button
                                        content={t("buyTickets")}
                                        filled='true'
                                        size='medium'
                                        radius='md'
                                        textTransform='uppercase'
                                        shadow='shadow-lg'
                                    />
                                </Link>
                            </div>
                        </div>
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
                "profile",
                "validation",
                "signup",
            ])),
            requireAuth: true,
        },
    };
}
export default withTranslation(["profile", "validation", "signup"])(
    EditProfile
);
