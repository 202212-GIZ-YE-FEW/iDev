import Input from "@/components/ui/Input";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Button from "@/components/ui/Button";

const Add_Career = ({ t }) => {
    return (
        <>
            <>
                <div className='bg-light-cyan'>
                    <div className='container'>
                        <div className='flex'>
                            <div className='flex-1 pr-10'>
                                <Input
                                    label={t("titleOfJobEn")}
                                    placeholder={t("enterTitleOfJobEn")}
                                    inputWidthSize='w-full'
                                />
                                <Input
                                    label={t("descrptionOfJobEn")}
                                    placeholder={t("enterDescrptionOfJobEn")}
                                    inputWidthSize='w-full'
                                />
                                <Input
                                    label={t("specializationOfJobEn")}
                                    placeholder={t(
                                        "enterSpecializationOfJobEn"
                                    )}
                                    inputWidthSize='w-full'
                                />
                                <Input
                                    label={t("enterOccupationOfJobEn")}
                                    placeholder={t("occupationOfJobEn")}
                                    inputWidthSize='w-full'
                                />
                            </div>
                            <div className='flex-1 pl-10'>
                                <Input
                                    label={t("titleOfJobAr")}
                                    placeholder={t("enterTitleOfJobAr")}
                                    inputWidthSize='w-full'
                                />
                                <Input
                                    label={t("descrptionOfJobAr")}
                                    placeholder={t("enterDescrptionOfJobAr")}
                                    inputWidthSize='w-full'
                                />
                                <Input
                                    label={t("specializationOfJobAr")}
                                    placeholder={t(
                                        "enterSpecializationOfJobAr"
                                    )}
                                    inputWidthSize='w-full'
                                />
                                <Input
                                    label={t("occupationOfJobAr")}
                                    placeholder={t("enterOccupationOfJobAr")}
                                    inputWidthSize='w-full'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full p-4 flex items-center justify-center'>
                    <Button
                        content={t("Add New Job")}
                        size={"large"}
                        filled={"true"}
                        textTransform={"capitalize"}
                        fontSize={"2xl"}
                        radius={"6px"}
                        shadow={"2px"}
                    />
                </div>
            </>
        </>
    );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "careers"])),
            // Will be passed to the page component as props
        },
    };
}
export default withTranslation("careers")(Add_Career);
