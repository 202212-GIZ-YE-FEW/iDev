import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import PreviewProfile from "@/components/ui/PreviewProfile";
import { useAuth } from "@/components/context/AuthContext";
import schema from "@/utils/validationSchemaProfile";
import { doc, collection, getFirestore, getDocs } from "firebase/firestore";
import "firebase/firestore";
import updateDocument from "@/firebase/updateSubCollection";
import PageIntro from "@/components/PageIntro";
import uploadImage from "@/firebase/addImage";
import Select from "@/components/ui/Select";
function EditProfile({ t }) {
    const { user, changePassword, authenticated } = useAuth();
    const [imgfile, uploadimg] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [formData, setFormData] = useState({});
    const data = {
        Fullname: formData.Fullname,
        deleted: false,
        hobbies: formData.hobbies,
        familySize: formData.familySize,
        educationLevel: formData.educationLevel,
        phoneNumber: formData.phoneNumber,
        gender: formData.gender,
    };
    const userData = {
        dateOfBirth: formData.dateOfBirth,
    };

    const db = getFirestore();
    const userId = user?.uid;
    const parentDocRef = userId ? doc(db, "users", userId) : null;
    const childCollectionRef = parentDocRef
        ? collection(parentDocRef, "Personal_data")
        : null;
    const profile = "profile";

    useEffect(() => {
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
        fetchData();
    }, []);

    const handleChange = async (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        const file = e.target.files && e.target.files[0];
        console.log(file);

        if (file) {
            const userId = user.uid;
            const imageName = `${userId}${file.name.substring(
                file.name.lastIndexOf(".")
            )}`;
            const path = "UploadId/";
            uploadimg(URL.createObjectURL(file));
            await uploadImage(file, imageName, path);
            console.log("File uploaded successfully!");
        } else {
            console.error("No file selected.");
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
            {authenticated ? (
                <div className='grid grid-cols-1 lg:grid-cols-2 py-20 gap-y-10'>
                    <div className='justify-self-center lg:justify-self-start'>
                        <PreviewProfile />
                    </div>
                    <div className='w-full justify-self-center lg:justify-self-end'>
                        <PageIntro title={t("profileInfo")} />
                        <form
                            className='  mt-[8px]  w-full'
                            onSubmit={handleSubmit}
                        >
                            <div className='flex items-center my-5'>
                                <Input
                                    inputWidthSize='flex-[2_1_0%]'
                                    type='text'
                                    name='Fullname'
                                    label={t("Fullname")}
                                    labelColor='text-black'
                                    value={formData.Fullname || ""}
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
                                        { value: "select", label: t("select") },
                                        {
                                            value: "bacholar",
                                            label: t("bacholar"),
                                        },
                                        { value: "master", label: t("master") },
                                        { value: "PhD", label: t("PhD") },
                                        {
                                            value: "deploma",
                                            label: t("deploma"),
                                        },
                                    ]}
                                    label={t("educationLevel")}
                                    labelColor='text-black'
                                    value={formData.educationLevel}
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
                                    value={formData.hobbies || ""}
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
                                    value={formData.familySize || ""}
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
                                        { value: "select", label: t("select") },
                                        { value: "female", label: t("female") },
                                        { value: "male", label: t("male") },
                                    ]}
                                    value={formData.gender}
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
                                    value={formData.dateOfBirth || ""}
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
                                    value={formData.phoneNumber || ""}
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

                            <PageIntro title={t("security")} />
                            <div className='flex items-center my-5'>
                                <Input
                                    inputWidthSize='flex-[2_1_0%]'
                                    type='password'
                                    name='currentPassword'
                                    label={t("currentPassword")}
                                    labelColor='text-black'
                                    value={formData.currentPassword || ""}
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
                                    value={formData.newPassword || ""}
                                    onChange={handleChange}
                                    error={formErrors.newPassword}
                                    t={t}
                                    field={t("newPassword")}
                                />
                            </div>

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
                        </form>

                        <PageIntro title={t("paymentMethods&Tickets")} />
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
                "profile",
                "validation",
                "signup",
            ])),
        },
    };
}
export default withTranslation(["profile", "validation", "signup"])(
    EditProfile
);
