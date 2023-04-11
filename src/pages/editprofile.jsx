import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import FormTitle from "@/components/FormTitle";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import Input from "@/components/ui/Input";
import PreviewProfile from "@/components/ui/PreviewProfile";
function editProfile({ t }) {
    return (
        <div className='g-6 p-5 flex flex-wrap justify-center justify-space '>
            <div className=' p-2 mb-5'>
                <PreviewProfile />
            </div>
            <div className='mt-5 max-w-xl md:mx-auto md:shrink-0 xl:w-8/12 lg:w-8/12 md:w-8/12 w-12/12'>
                <FormTitle title={t("profileInfo")} />
                <div className='flex flex-row justify-center my-5 gap-6'>
                    <label className='w-4/12'>{t("fullName")}</label>
                    <Input className='lg:w-8/12' type='text' name='fullName' />
                </div>
                <div className='flex flex-row justify-center my-5 gap-6'>
                    <label className='w-4/12'>{t("educationLevel")}</label>
                    <Dropdown
                        className='lg:w-8/12'
                        placeholder='select '
                        data={[
                            { value: 1, label: "Bacholar" },
                            { value: 2, label: "Master" },
                            { value: 3, label: "PhD" },
                            { value: 4, label: "Deploma" },
                        ]}
                    />
                </div>
                <div className='flex flex-row justify-center my-5 gap-6'>
                    <label className='w-4/12'>{t("hubbies")}</label>
                    <Input className='lg:w-8/12' type='text' name='hubbies' />
                </div>
                <div className='flex flex-row my-5 '>
                    <label className='lg:w-3/12 me-4 '>{t("familySize")}</label>
                    <div className='flex'>
                        <Input type='number' name='FamilySize' />
                        <p className='m-5'>{t("member(s)")}</p>
                    </div>
                </div>
                <div className='flex flex-row justify-center my-5 gap-6'>
                    <label className='w-4/12'>{t("gender")}</label>
                    <Dropdown
                        className='lg:w-8/12'
                        placeholder='select '
                        name='fullName'
                        data={[
                            { value: 1, label: "Female" },
                            { value: 2, label: "Male" },
                        ]}
                    />
                </div>
                <div className='flex flex-row justify-center my-5 gap-6'>
                    <label className='w-4/12'>{t("birthDate")}</label>
                    <Input type='date' name='BirthDate' />
                </div>
                <div className='flex flex-row justify-center my-5 gap-6'>
                    <label className='w-4/12'>{t("Email")}</label>
                    <Input type='email' name='email' />
                </div>

                <div className='flex flex-row justify-center my-5 gap-6'>
                    <label className='w-4/12'>{t("phoneNumber")}</label>
                    <Input type='text' name='PhoneNumber' />
                </div>
                <div className='flex flex-row my-5 gap-6'>
                    <label className='w-4/12'>{t("uploadId")}</label>

                    <label
                        for='upload'
                        className='border rounded-md w-full border-solid self-center border-light-gray/30 text-light-black px-[20px] py-[10px] '
                    >
                        <p className='flex justify-end'>+</p>
                        <input type='file' hidden />
                    </label>
                </div>
                <FormTitle title={t("security")} />
                <div className='flex flex-row justify-center my-5 gap-6'>
                    <label className='w-4/12'>{t("password")}</label>
                    <Input type='name' name='password' />
                </div>
                <div className='flex flex-row justify-center my-5 gap-6'>
                    <label className='w-4/12'>{t("confirmPassword")}</label>
                    <Input type='password' name='password' />
                </div>
                <div className='flex gap-10 my-8'>
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
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "profile"])),
        },
    };
}
export default withTranslation(["profile"])(editProfile);
