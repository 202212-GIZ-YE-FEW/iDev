import Head from "next/head";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import PageIntro from "@/components/PageIntro";
import Requirement from "@/components/Requirement";
import RequirementsSection from "@/components/RequirementsSection";

function Requirements({ t }) {
    return (
        <>
            <Head>
                <title>{t("requirements")}</title>
            </Head>
            <div className='container mt-8'>
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
                <RequirementsSection />
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
