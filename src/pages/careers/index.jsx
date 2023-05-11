import Head from "next/head";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import AvailableJobs from "@/components/AvailableJobs";
import CareerPhilosophy from "@/components/CareerPhilosophy";
import CreateVacancy from "@/components/CreateVacancy";
import PageIntro from "@/components/PageIntro";

import getDocument from "@/firebase/getData";

function career({ t, careers }) {
    return (
        <div>
            <Head>
                <title>{t("common:careers")}</title>
            </Head>
            <div className='lg:ms-28 mt-10 ms-10'>
                <PageIntro
                    title={t("careerAtHealing")}
                    subtitle={t("bringHopeThroughTherapy")}
                />
            </div>
            <div className='flex flex-col'>
                <CareerPhilosophy t={t} />
            </div>
            <div className='flex flex-col'>
                <AvailableJobs t={t} careers={careers} />
            </div>
            <CreateVacancy t={t} />
        </div>
    );
}

export async function getStaticProps({ locale }) {
    let careers = [];
    try {
        careers = await getDocument("current_jobs");
    } catch (error) {
        //
    }
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "career"])),
            careers,
        },
    };
}
export default withTranslation("career")(career);
