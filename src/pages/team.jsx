import TeamMember from "@/components/TeamMember";
import { useState } from "react";
import { i18n, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Abdulmajeed from "public/AbdulmajeedJaafer.png";
import AhmedMohammed from "public/AhmedMohammed.png";
import AllanSaleh from "public/AllanSaleh.png";
import AvrazZebary from "public/AvrazZebary.png";
import PayamAbubakr from "public/PayamAbubakr.png";
import SnoorMadih from "public/SnoorMadih.png";
import PageIntro from "@/components/PageIntro";
import Layout from "@/layout/Layout";

export default function Team() {
    const { t } = useTranslation("common");
    const [title, seTtitle] = useState("");
    const [job, setJob] = useState("");
    const [photo, setPhoto] = useState();
    return (
        <>
            <Layout i18n={i18n}>
                {/* Page Intro  */}
                <div className=' container'>
                    <div className='ml-2 mt-8 flex-wrap nowrap md:text-start  text-center justify-center items-center sm:text-center'>
                        <PageIntro
                            title={t("WE ARE HEALING, NICE TO MEET YOU!")}
                        />
                    </div>

                    <div className='flex justify-center items-center'>
                        <div className='flex justify-center  items-center'>
                            <div className='flex flex-wrap items-center'>
                                <h1 className='text-[30px]  w-full p-4  flex-wrap nowrap md:text-start  text-center justify-center items-center sm:text-center'>
                                    {t("Meet the Team!")}
                                </h1>
                                {/* Cards */}
                                <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/6  p-4 flex justify-center items-center '>
                                    <TeamMember
                                        title={t("Allan Saleh")}
                                        job={t("Lead Engineer  &Web Devloper")}
                                        photo={AllanSaleh}
                                    />{" "}
                                </div>

                                <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4 flex justify-center items-center'>
                                    <TeamMember
                                        title={t("Payan Abubakr")}
                                        job={t(
                                            "Junior Designer & FE Developer"
                                        )}
                                        photo={PayamAbubakr}
                                    />{" "}
                                </div>

                                <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4 flex justify-center items-center'>
                                    <TeamMember
                                        title={t("Ahmed Mohammed")}
                                        job={t(
                                            "Junior Designer & FE Developer"
                                        )}
                                        photo={AhmedMohammed}
                                    />{" "}
                                </div>

                                <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4 flex justify-center items-center'>
                                    <TeamMember
                                        title={t("Abdulmajeed Jaafer")}
                                        job={t(
                                            "Junior Designer & FE Developer"
                                        )}
                                        photo={Abdulmajeed}
                                    />{" "}
                                </div>

                                <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4 flex justify-center items-center'>
                                    <TeamMember
                                        title={t("Snoor Mahdi")}
                                        job={t(
                                            "Junior Designer & FE Developer"
                                        )}
                                        photo={SnoorMadih}
                                    />{" "}
                                </div>

                                <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4 flex justify-center items-center'>
                                    <TeamMember
                                        title={t("Avraz Zebary")}
                                        job={t("Lead Engineer  &Web Devloper")}
                                        photo={AvrazZebary}
                                    />{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}
