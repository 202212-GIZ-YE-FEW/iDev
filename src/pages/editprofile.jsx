import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import FormTitle from "@/components/FormTitle";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import Input from "@/components/ui/Input";
import PreviewProfile from "@/components/ui/PreviewProfile";
function EditProfile({ t }) {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
                            className='w-8/12'
                            type='text'
                            name='fullName'
                            label={t("fullName")}
                            labelColor='text-black'
                            value={formData.fullName || ""}
                            onChange={handleChange}
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
                            labelColor='text-black'
                            value={formData.educationLevel || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-row justify-center my-5 gap-4'>
                        <Input
                            type='text'
                            name='hubbies'
                            label={t("hubbies")}
                            labelColor='text-black'
                            value={formData.hubbies || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex my-5 gap-10'>
                        <Input
                            type='number'
                            name='familySize'
                            label={t("familySize")}
                            labelColor='text-black'
                            value={formData.familySize || ""}
                            onChange={handleChange}
                        />
                        <p className='mt-4'>{t("member(s)")}</p>
                    </div>
                    <div className='flex flex-row justify-center my-5 gap-4'>
                        <Dropdown
                            className='lg:w-8/12 text-light-black'
                            placeholder='select '
                            name='gender'
                            label={t("gender")}
                            labelColor='text-black'
                            data={[
                                { value: 1, label: "Female" },
                                { value: 2, label: "Male" },
                            ]}
                            value={formData.gender || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-row justify-center my-5'>
                        <Input
                            type='date'
                            name='birthDate'
                            label={t("birthDate")}
                            labelColor='text-black'
                            value={formData.birthDate || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-row justify-center my-5 gap-4'>
                        <Input
                            type='email'
                            name='email'
                            label={t("Email")}
                            labelColor='text-black'
                        />
                    </div>

                    <div className='flex flex-row justify-center my-5 gap-4'>
                        <Input
                            type='text'
                            name='phoneNumber'
                            label={t("phoneNumber")}
                            labelColor='text-black'
                            value={formData.phoneNumber || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-row my-5'>
                        <label
                            className={`w-4/12 mt-1 mb-2 text-black whitespace-wrap text-sm md:text-base lg:text-lg flex:me-10 font-light flex:self-center capitalize text-sm md:text-base lg:text-lg`}
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
                            labelColor='text-black'
                            value={formData.password || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-row justify-center my-5'>
                        <Input
                            type='password'
                            name='confirmPassword'
                            label={t("confirmPassword")}
                            labelColor='text-black'
                            value={formData.confirmPassword || ""}
                            onChange={handleChange}
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
