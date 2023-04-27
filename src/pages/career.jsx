import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import FirstCareerSection from "@/components/FirstCareerSection";
import PageIntro from "@/components/PageIntro";
import ThirdCareerSection from "@/components/ThirdCareerSection";

function career({ t }) {
    return (
        <div>
            <div className=' lg:ms-28 mt-10 ms-10 '>
                <PageIntro
                    title={t("careerAtHealing")}
                    subtitle={t("bringHopeThroughTherapy")}
                    t={t}
                />
            </div>
            <div className='flex flex-col'>
                <FirstCareerSection t={t} />
            </div>
            <div className='flex flex-col'>
                <ThirdCareerSection t={t} />
            </div>
        </div>
    );
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "career"])),
            // Will be passed to the page component as props
        },
    };
}
export default withTranslation("career")(career);
