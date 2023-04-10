import Head from "next/head";
import Image from "next/image";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import RequirementSVG from "public/requirements.svg";
import { useEffect, useState } from "react";

import PageIntro from "@/components/PageIntro";
import Requirement from "@/components/Requirement";
import RequirementsSection from "@/components/RequirementsSection";

import getDocument from "@/firebase/getData";

function Requirements({ t, i18n, requirements }) {
    const [requirement, setRequirement] = useState([]);
    useEffect(() => {
        const data = requirements.filter((item) => item.id === i18n.language);
        const dataArr = data[0].content.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        setRequirement(dataArr);
    }, [i18n.language, requirements]);

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
                    <RequirementsSection requirements={requirement} />
                </div>
                <div className='grid-cols-3 lg:justify-self-end py-10'>
                    <Image src={RequirementSVG} alt='requirements' />
                </div>
            </div>
        </>
    );
}

export async function getStaticProps({ locale }) {
    const requirements = await getDocument("requirements");
    return {
        props: {
            requirements,
            ...(await serverSideTranslations(locale, [
                "common",
                "requirements",
            ])),
        },
    };
}

export default withTranslation("requirements")(Requirements);
