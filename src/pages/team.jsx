import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Abdulmajeed from "public/team/AbdulmajeedJaafer.png";
import AhmedMohammed from "public/team/AhmedMohammed.png";
import AllanSaleh from "public/team/AllanSaleh.png";
import AvrazZebary from "public/team/AvrazZebary.png";
import PayamAbubakr from "public/team/PayamAbubakr.png";
import SnoorMadih from "public/team/SnoorMadih.png";

import PageIntro from "@/components/PageIntro";
import TeamMember from "@/components/TeamMember";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
            name: "Allan Saleh",
            job: "Lead Engineer & Web Devloper",
            photo: AllanSaleh,
        },
        {
            id: 2,
            name: "Payan Abubakr",
            job: "Junior Designer & FE Developer",
            photo: PayamAbubakr,
        },
        {
            id: 3,
            name: "Ahmed Mohammed",
            job: "Junior Designer & FE Developer",
            photo: AhmedMohammed,
        },
        {
            id: 4,
            name: "Abdulmajeed Jaafer",
            job: "Junior Designer & FE Developer",
            photo: Abdulmajeed,
        },
        {
            id: 5,
            name: "Snoor Mahdi",
            job: "Junior Designer & FE Developer",
            photo: SnoorMadih,
        },
        {
            id: 6,
            name: "Avraz Zebary",
            job: "Lead Engineer & Web Devloper",
            photo: AvrazZebary,
        },
    ];
    return (
        <>
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
            // Will be passed to the page component as props
        },
    };
}
export default withTranslation("team")(Team);
