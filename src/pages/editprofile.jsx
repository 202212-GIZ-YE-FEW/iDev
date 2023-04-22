import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";

import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import Input from "@/components/ui/Input";
import PreviewProfile from "@/components/ui/PreviewProfile";
import { useAuth } from "@/components/context/AuthContext";
import schema from "@/utils/validationSchemaTherapist";
import { doc, collection, getFirestore } from "firebase/firestore";
import "firebase/auth";
import "firebase/firestore";
import updateDocument from "@/firebase/updateSubCollection";
function EditProfile({ t }) {
    const [formData, setFormData] = useState({});
    const { user } = useAuth();
    const [formErrors, setFormErrors] = useState({});
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await schema.validate(formData, { abortEarly: false });
            const db = getFirestore();
            const userId = user.uid;
            const parentDocRef = doc(db, "users", userId);
            const childCollectionRef = collection(
                parentDocRef,
                "Personal_data"
            );
            const childCollectionPath = childCollectionRef.path; // outputs "parentCollection/parentDocId/childCollection"
            const data = {
                Fullname: formData.fullName,
                deleted: false,
                hobbies: formData.hubbies,
                familySize: formData.familySize,
                education_level: formData.educationLevel,
                phoneNumber: formData.phoneNumber,
                gender: formData.gender,
            };
            const therapist = "profile";
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
        <div className='container '>
            <div className='grid grid-cols-1 lg:grid-cols-2 py-20 gap-y-10'>
                <div className='justify-self-center lg:justify-self-start'>
                    <PreviewProfile />
                </div>
                <div className='w-full justify-self-center lg:justify-self-end'>
                    <fieldset>
                        <legend class='text-3xl font-semibold uppercase'>
                            {t("profileInfo")}
                        </legend>
                        <form
                            className='  mt-[8px]  w-full'
                            onSubmit={handleSubmit}
                        >
                            <div className='flex items-center my-5'>
                                <Input
                                    inputWidthSize='flex-[2_1_0%]'
                                    type='text'
                                    name='fullName'
                                    label={t("fullName")}
                                    labelColor='text-black'
                                    value={formData.fullName || ""}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex items-center my-5'>
                                <Dropdown
                                    placeholder='select'
                                    data={[
                                        { value: 1, label: t("bacholar") },
                                        { value: 2, label: t("master") },
                                        { value: 3, label: t("PhD") },
                                        { value: 4, label: t("deploma") },
                                    ]}
                                    label={t("educationLevel")}
                                    labelColor='text-black'
                                    value={formData.educationLevel || ""}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex items-center my-5'>
                                <Input
                                    inputWidthSize='flex-[2_1_0%]'
                                    type='text'
                                    name='hubbies'
                                    label={t("hubbies")}
                                    labelColor='text-black'
                                    value={formData.hubbies || ""}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex items-center my-5'>
                                <Input
                                    inputWidthSize='flex-[1_1_0%]'
                                    type='number'
                                    name='familySize'
                                    label={t("familySize")}
                                    labelColor='text-black'
                                    value={formData.familySize || ""}
                                    onChange={handleChange}
                                />
                                <div className='ms-10 flex-[0_1_0%]'>
                                    {t("member(s)")}
                                </div>
                            </div>
                            <div className='flex items-center my-5'>
                                <Dropdown
                                    className='lg:w-8/12 text-light-black'
                                    placeholder='select '
                                    name='gender'
                                    label={t("gender")}
                                    labelColor='text-black'
                                    data={[
                                        { value: 1, label: t("female") },
                                        { value: 2, label: t("male") },
                                    ]}
                                    value={formData.gender || ""}
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
                                    value={formData.birthDate || ""}
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
                                    value={formData.email || ""}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex items-center my-5'>
                                <Input
                                    inputWidthSize='flex-[2_1_0%]'
                                    type='text'
                                    name='phoneNumber'
                                    label={t("phoneNumber")}
                                    labelColor='text-black'
                                    value={formData.phoneNumber || ""}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex items-center my-5'>
                                <Input
                                    inputWidthSize='flex-[2_1_0%]'
                                    type='file'
                                    name='uploadId'
                                    label={t("uploadId")}
                                    labelColor='text-black'
                                    value=''
                                    onChange={handleChange}
                                />
                            </div>
                        </form>
                    </fieldset>
                    <fieldset className='mt-8'>
                        <legend class='text-3xl font-semibold'>
                            {t("security")}
                        </legend>
                        <div className='flex items-center my-5'>
                            <Input
                                inputWidthSize='flex-[2_1_0%]'
                                type='name'
                                name='password'
                                label={t("password")}
                                labelColor='text-black'
                                value={formData.password || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex items-center my-5'>
                            <Input
                                inputWidthSize='flex-[2_1_0%]'
                                type='password'
                                name='confirmPassword'
                                label={t("confirmPassword")}
                                labelColor='text-black'
                                value={formData.confirmPassword || ""}
                                onChange={handleChange}
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
                        />
                        <Button
                            content={t("deleteAccount")}
                            filled='true'
                            size='medium'
                            radius='md'
                            textTransform='uppercase'
                            shadow='shadow-lg'
                        />
                        <Button
                            content={t("cancel")}
                            filled='true'
                            size='medium'
                            radius='md'
                            textTransform='uppercase'
                            shadow='shadow-lg'
                        />
                    </div>
                    <fieldset className='my-12'>
                        <legend class='text-3xl font-semibold mb-12'>
                            {t("paymentMethods&Tickets")}
                        </legend>
                        <div className='flex gap-10'>
                            <div className='flex flex-col gap-5'>
                                <p>{t("cardsAdded", { count: 3 })}</p>
                                <Button
                                    content={t("showCards")}
                                    filled='true'
                                    size='medium'
                                    radius='md'
                                    textTransform='uppercase'
                                    shadow='shadow-lg'
                                />
                            </div>
                            <div className='flex flex-col gap-5'>
                                <p>{t("ticketsRemaining", { count: 10 })}</p>
                                <Button
                                    content={t("buyTickets")}
                                    filled='true'
                                    size='medium'
                                    radius='md'
                                    textTransform='uppercase'
                                    shadow='shadow-lg'
                                />
                            </div>
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
export default withTranslation(["profile"])(EditProfile);
