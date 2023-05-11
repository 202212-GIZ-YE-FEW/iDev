import AOS from "aos";
import Head from "next/head";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Abrar from "public/team/Abrar.jpg";
import DhiaShalabi from "public/team/dhiashalabi.png";
import HaneenAbdulglil from "public/team/haneenabdulglil.jpg";
import Jehad from "public/team/jehad.png";
import MohammedAljaberi from "public/team/mohammedaljaberi.jpg";
import MohBassura from "public/team/mohbassura.jpg";
import React, { useEffect } from "react";

import "aos/dist/aos.css";

import PageIntro from "@/components/PageIntro";
import TeamMember from "@/components/TeamMember";

function Team({ t }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 500,
        });
    }, []);
    const teamMembers = [
        {
            id: 1,
            name: "Dhia' Alhaq Shalabi",
            job: "Software Engineer",
            photo: DhiaShalabi,
            github: "dhiashalabi",
            linkedin: "dhiashalabi",
        },
        {
            id: 2,
            name: "Abrar Alkhorasani",
            job: "Full Stack Developer",
            photo: Abrar,
            github: "Abrar-Abdulwahed",
            linkedin: "abrar-alkhorasani-b31472240/",
        },
        {
            id: 3,
            name: "Mohammed Basurra",
            job: "Full Stack Developer",
            photo: MohBassura,
            github: "MohdBasurra",
            linkedin: "mohammed-basurra-695a3b275/",
        },
        {
            id: 4,
            name: "Jehad Almaliki",
            job: "Full Stack Developer",
            photo: Jehad,
            github: "Jehadalmaliki",
            linkedin: "jehad-almaliki-832318183",
        },
        {
            id: 5,
            name: "Haneen Abdulglil",
            job: "Full Stack Developer",
            photo: HaneenAbdulglil,
            github: "Haneen-Abdulgllil",
            linkedin: "haneen-abdulglil-762601241",
        },
        {
            id: 6,
            name: "Mohammed Al-jaberi",
            job: "Full Stack Developer",
            photo: MohammedAljaberi,
            github: "MohammedALjaberi",
            linkedin: "mohammed-aljabri-5069b522a",
        },
    ];
    return (
        <>
            <Head>
                <title>{t("common:team")}</title>
            </Head>
            <div className='container py-20'>
                <PageIntro title={t("teamPageTitle")} />
                <div className='team-members mt-32'>
                    <p className='text-[30px] w-full mb-8 text-center md:text-start'>
                        {t("meetTeam")}
                    </p>
                    <div
                        data-aos='zoom-in-up'
                        className='flex justify-center md:justify-between flex-wrap items-center gap-x-1 gap-y-7'
                    >
                        {teamMembers.map((member) => {
                            return (
                                <TeamMember
                                    key={member.id}
                                    name={t(`${member.name}`)}
                                    job={t(`${member.job}`)}
                                    photo={member.photo}
                                    github={member.github}
                                    linkedin={member.linkedin}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "team"])),
        },
    };
}
export default withTranslation("team")(Team);
