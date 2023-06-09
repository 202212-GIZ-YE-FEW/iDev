import Head from "next/head";
import Image from "next/image";
import { withTranslation } from "next-i18next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import RequirementSVG from "public/requirements.svg";
import { useQuery } from "react-query";

import PageIntro from "@/components/PageIntro";
import Requirement from "@/components/Requirement";
import RequirementsSection from "@/components/RequirementsSection";

import getDocument from "@/firebase/getData";

function Requirements({ t }) {
    const { i18n } = useTranslation("requirements");

    const {
        isLoading,
        error,
        data: requirements,
    } = useQuery("requirements", async () => {
        let data = await getDocument("requirements");
        data = data.filter((item) => item.id === i18n.language);
        const dataArr = data[0].content.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        return dataArr;
    });

    return (
        <>
            <Head>
                <title>{t("requirements")}</title>
            </Head>
            <div className='container mt-8 grid grid-cols-1 lg:grid-cols-2'>
                <div className='grid-cols-9 lg:justify-self-start'>
                    <PageIntro title={t("workWithHealing")} />
                    <Requirement
                        title={t("reliableIncome")}
                        subtitle={t("reliableIncomeDesc")}
                    />
                    <Requirement
                        title={t("focusCounseling")}
                        subtitle={t("focusCounselingDesc")}
                    />
                    <Requirement
                        title={t("focusCounseling")}
                        subtitle={t("focusCounselingDesc")}
                    />
                    <RequirementsSection requirements={requirements} />
                </div>
                <div className='grid-cols-3 lg:justify-self-end py-10'>
                    <Image src={RequirementSVG} alt='requirements' />
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
                "requirements",
            ])),
        },
    };
}

export default withTranslation("requirements")(Requirements);
