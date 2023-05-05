import { useState } from "react";
import Button from "@/components/ui/Button";
import PageIntro from "@/components/PageIntro";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/navigation";
import addDocument from "@/firebase/addData";
import Textarea from "@/components/ui/textarea/Textarea";
import Input from "@/components/ui/Input";

const Add_Career = ({ t }) => {
    const [enTitle, SetEnTitle] = useState("");
    const [arTitle, setArTitle] = useState("");

    const [enDescrption, setEnDescrption] = useState("");
    const [arDescrption, setArDescrption] = useState("");

    const [enSpecialization, setEnSpecialization] = useState("");
    const [arSpecialization, setArSpecialization] = useState("");

    const [enOccupation, setEnOccupation] = useState("");
    const [arOccupation, setArOccupation] = useState("");

    const router = useRouter();

    const setData = async () => {
        try {
            await addDocument("current_jobs", {
                enTitle: enTitle,
                arTitle: arTitle,
                enDescrption: enDescrption,
                arDescrption: arDescrption,
                enSpecialization: enSpecialization,
                arSpecialization: arSpecialization,
                enOccupation: enOccupation,
                arOccupation: arOccupation,
            });

            await router.push({
                pathname: "/careers",
            });
        } catch (error) {
            console.log("Erorr");
        }
    };

    return (
        <>
            <div className='container'>
                <PageIntro
                    title={t("addNewJob")}
                    subtitle={t("addNewJobToOurwebsiteCareer")}
                />
            </div>
            <div className='bg-light-cyan'>
                <div className='container'>
                    <div className='flex'>
                        <div className='flex-1 pr-10'>
                            <Input
                                label={t("titleOfJobEn")}
                                placeholder={t("enterTitleOfJobEn")}
                                inputWidthSize='w-full'
                                onChange={(e) => SetEnTitle(e.target.value)}
                            />
                            <Input
                                label={t("descrptionOfJobEn")}
                                placeholder={t("enterDescrptionOfJobEn")}
                                inputWidthSize='w-full'
                                onChange={(e) =>
                                    setEnDescrption(e.target.value)
                                }
                            />
                            <Input
                                label={t("specializationOfJobEn")}
                                placeholder={t("enterSpecializationOfJobEn")}
                                inputWidthSize='w-full'
                                onChange={(e) =>
                                    setEnSpecialization(e.target.value)
                                }
                            />
                            <Input
                                label={t("enterOccupationOfJobEn")}
                                placeholder={t("occupationOfJobEn")}
                                inputWidthSize='w-full'
                                onChange={(e) =>
                                    setEnOccupation(e.target.value)
                                }
                            />
                        </div>
                        <div className='flex-1 pl-10'>
                            <Input
                                label={t("titleOfJobAr")}
                                placeholder={t("enterTitleOfJobAr")}
                                inputWidthSize='w-full'
                                onChange={(e) => setArTitle(e.target.value)}
                            />
                            <Input
                                label={t("descrptionOfJobAr")}
                                placeholder={t("enterDescrptionOfJobAr")}
                                inputWidthSize='w-full'
                                onChange={(e) =>
                                    setArDescrption(e.target.value)
                                }
                            />
                            <Input
                                label={t("specializationOfJobAr")}
                                placeholder={t("enterSpecializationOfJobAr")}
                                inputWidthSize='w-full'
                                onChange={(e) =>
                                    setArSpecialization(e.target.value)
                                }
                            />
                            <Input
                                label={t("occupationOfJobAr")}
                                placeholder={t("enterOccupationOfJobAr")}
                                inputWidthSize='w-full'
                                onChange={(e) =>
                                    setArOccupation(e.target.value)
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full p-4 flex items-center justify-center'></div>
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
