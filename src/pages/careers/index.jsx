import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AvailableJobs from "@/components/AvailableJobs";
import CareerPhilosophy from "@/components/CareerPhilosophy";
import getDocument from "@/firebase/getData";
import PageIntro from "@/components/PageIntro";
import Button from "@/components/ui/Button";
import Router from "next/router";
function career({ t, careers }) {
    const handleClick = () => {
        const router = require("next/router").default;
        router.push({
            pathname: "/careers/create",
        });
    };
    return (
        <div>
            <div className=' lg:ms-28 mt-10 ms-10 '>
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

            <div className='container pb-8'>
                <PageIntro
                    title={t("doYouHavevacancy")}
                    subtitle={t("doYouHavevacancyDescrption")}
                />
                <Button
                    content={t("addToCareersList")}
                    textTransform='uppercase'
                    filled='true'
                    size='large'
                    fontSize='text-lg md:text-xl lg:text-2xl'
                    radius='md'
                    onClick={handleClick}
                />
            </div>
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

            // Will be passed to the page component as props
        },
    };
}
export default withTranslation("career")(career);
