import TeamMember from "@/components/TeamMember";
import { useState } from "react";
import { i18n, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";

import OurFounding from "public/OurFoundingPayan.png";

import PageIntro from "@/components/PageIntro";
import Layout from "@/layout/Layout";

export default function About() {
    const { t } = useTranslation("about");

    return (
        <>
            {/* Page Intro  */}
            <div className=' container mt-8 '>
                <div className='flex-wrap nowrap md:text-start  text-center justify-center items-center sm:text-center'>
                    <PageIntro
                        title={t("healing")}
                        subtitle={t("BringingHopeThroughTherapy")}
                    />
                </div>

                <div className='text-start sm:text-center sm:w-full  text-gray  text-xl md:mb-[120px] mb-8 '>
                    <p>{t("introAboutPage")}</p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row bg-light-cyan '>
                <div className='w-full md:w-1/3 flex md:justify-end sm:justify-center order-2 md:order-1 p-4'>
                    <Image
                        src={OurFounding}
                        alt='My Image'
                        width={400}
                        height={320}
                    />
                </div>
                <div className='w-full md:w-2/3 p-4 flex flex-col order-1 md:order-2  '>
                    <div className='  lg:w-3/4 w-full text-start   '>
                        <PageIntro
                            title={t("OurFounding")}
                            subtitle={t("AboutHealing")}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["about", "common"])),
            // Will be passed to the page component as props
        },
    };
}
