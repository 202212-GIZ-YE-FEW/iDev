import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Abdulmajeed from "public/AbdulmajeedJaafer.png";
import AhmedMohammed from "public/AhmedMohammed.png";
import AllanSaleh from "public/AllanSaleh.png";
import AvrazZebary from "public/AvrazZebary.png";
import PayamAbubakr from "public/PayamAbubakr.png";
import SnoorMadih from "public/SnoorMadih.png";

import PageIntro from "@/components/PageIntro";
import TeamMember from "@/components/TeamMember";

export default function Team() {
    const { t } = useTranslation("common");
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
                <PageIntro title={t("WE ARE HEALING, NICE TO MEET YOU!")} />
                <div className='team-members mt-32'>
                    <p className='text-[30px] w-full mb-8 text-center md:text-start'>
                        {t("Meet the Team!")}
                    </p>
                    <div className='flex justify-between flex-wrap items-center gap-10'>
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
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}
