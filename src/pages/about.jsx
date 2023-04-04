import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import PageIntro from "@/components/PageIntro";

const About = () => {
    const { t } = useTranslation("about");

    return (
        <>
            {/* Page Intro  */}
            <div className='container mt-8'>
                <div className='text-center nowrap md:text-start justify-center items-center'>
                    <PageIntro
                        title={t("healing")}
                        subtitle={t("bringingHopeThroughTherapy")}
                    />
                </div>

                <div className='text-start  sm:w-full text-gray text-xl my-12 md:mb-[120px]'>
                    <p>{t("introAboutPage")}</p>
                </div>
            </div>

            <div className='bg-light-cyan py-8'>
                <div className='container flex flex-col md:flex-row md:space-s-9'>
                    <div className='hidden md:block md:w-1/3'>
                        <Image
                            src='/ourFounding.svg'
                            alt='founding image'
                            width={300}
                            height={300}
                            className='w-full'
                        />
                    </div>
                    <div className='w-full md:w-2/3'>
                        <span className='text-5xl'>{t("ourFounding")}</span>
                        <p className='text-md lg:text-xl text-gray'>
                            {t("aboutHealing")}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default About;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["about", "common"])),
            // Will be passed to the page component as props
        },
    };
}
