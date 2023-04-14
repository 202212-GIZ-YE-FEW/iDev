import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import FormTitle from "@/components/FormTitle";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import Input from "@/components/ui/Input";
import PreviewProfile from "@/components/ui/PreviewProfile";
function EditProfile({ t }) {
    const [formData, setFormData] = useState({
        gender: null,
        educationLevel: null,
    });

    const handleOptionChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className='container '>
            <div className='grid grid-cols-1 lg:grid-cols-2  py-20  gap-y-10  gap-x-32'>
                <div className=' lg:justify-self-end md:justify-self-center '>
                    <PreviewProfile />
                </div>
                <div className='max-w-[29rem] '>
                    <FormTitle title={t("profileInfo")} />
                    <div className='flex flex-row justify-center  my-5 gap-4'>
                        <Input
                            type='text'
                            name='fullName'
                            label={t("fullName")}
                        />
                    </div>
                    <div className='flex flex-row justify-center my-5 gap-4'>
                        <Dropdown
                            placeholder='select'
                            data={[
                                { value: 1, label: "Bacholar" },
                                { value: 2, label: "Master" },
                                { value: 3, label: "PhD" },
                                { value: 4, label: "Deploma" },
                            ]}
                            label={t("educationLevel")}
                            onChange={(value) =>
                                handleOptionChange("educationLevel", value)
                            }
                        />
                    </div>
                    <div className='flex flex-row justify-center my-5 gap-4'>
                        <Input
                            type='text'
                            name='hubbies'
                            label={t("hubbies")}
                        />
                    </div>
                    <div className='flex my-5 gap-10'>
                        <Input
                            type='number'
                            name='FamilySize'
                            label={t("familySize")}
                            // placeholder= {"member(s)"}
                        />
                        <p className='mt-4'>{t("member(s)")}</p>
                    </div>
                    <div className='flex flex-row justify-center my-5 gap-4'>
                        <Dropdown
                            className='lg:w-8/12 text-light-black'
                            placeholder='select '
                            name='gender'
                            label={t("gender")}
                            data={[
                                { value: 1, label: "Female" },
                                { value: 2, label: "Male" },
                            ]}
                            onChange={(value) =>
                                handleOptionChange("gender", value)
                            }
                        />
                    </div>
                    <div className='flex flex-row justify-center my-5'>
                        <Input
                            type='date'
                            name='BirthDate'
                            label={t("birthDate")}
                        />
                    </div>
                    <div className='flex flex-row justify-center my-5 gap-4'>
                        <Input type='email' name='email' label={t("Email")} />
                    </div>

                    <div className='flex flex-row justify-center my-5 gap-4'>
                        <Input
                            type='text'
                            name='PhoneNumber'
                            label={t("phoneNumber")}
                        />
                    </div>
                    <div className='flex flex-row my-5'>
                        <label
                            className={`w-4/12 mt-1 mb-2 whitespace-wrap text-sm md:text-base lg:text-lg flex:me-10 text-light-gray font-light flex:self-center capitalize text-sm md:text-base lg:text-lg`}
                        >
                            {t("uploadId")}
                        </label>

                        <label
                            for='upload'
                            className='border rounded-md w-full border-solid self-center border-light-gray/30 text-light-black px-[20px] py-[10px] '
                        >
                            <p className='flex justify-end'>+</p>
                            <input type='file' hidden />
                        </label>
                    </div>
                    <FormTitle title={t("security")} />
                    <div className='flex flex-row justify-center my-5 gap-4'>
                        <Input
                            type='name'
                            name='password'
                            label={t("password")}
                        />
                    </div>
                    <div className='flex flex-row justify-center my-5'>
                        <Input
                            type='password'
                            name='password'
                            label={t("confirmPassword")}
                        />
                    </div>
                    <div className='flex xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col gap-2 my-8'>
                        <Button
                            content={t("saveChanges")}
                            filled='true'
                            size='small'
                            radius='md '
                            shadow='shadow-lg'
                        />
                        <Button
                            content={t("deleteAccount")}
                            filled='true'
                            size='small'
                            radius='md '
                            shadow='shadow-lg'
                        />
                        <Button
                            content={t("cancel")}
                            filled='true'
                            size='small'
                            radius='md '
                            shadow='shadow-lg'
                        />
                    </div>

                    <FormTitle title={t("paymentMethods&Tickets")} />
                    <div className='flex gap-10 my-8'>
                        <div className='flex flex-col gap-5'>
                            <p>{t("3cardsAdded")}</p>
                            <Button
                                content={t("showCards")}
                                filled='true'
                                size='small'
                                radius='md '
                                shadow='shadow-lg'
                            />
                        </div>
                        <div className='flex flex-col gap-5'>
                            <p>{t("10ticketsRemaining")}</p>
                            <Button
                                content={t("buyTickets")}
                                filled='true'
                                size='small'
                                radius='md '
                                shadow='shadow-lg'
                            />
                        </div>
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
export default withTranslation(["profile"])(EditProfile);
