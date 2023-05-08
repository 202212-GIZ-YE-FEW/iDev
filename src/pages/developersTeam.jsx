import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import userIcon from "public/images/userIcon.svg";

import PageIntro from "@/components/PageIntro";
import TeamMember from "@/components/TeamMember";

function developersTeam({ t }) {
    const developers = [
        {
            id: 1,
            name: "Abrar Alkhorasani",
            job: "Full Stack Developer",
            photo: userIcon,
            linkedIn: "www.linkedin.com",
        },
        {
            id: 2,
            name: "Dhia' Alhaq Shalabi",
            job: "Full Stack Developer",
            photo: userIcon,
            linkedIn: "www.linkedin.com",
        },
        {
            id: 3,
            name: "Haneen",
            job: "Full Stack Developer",
            photo: userIcon,
            linkedIn: "www.linkedin.com",
        },
        {
            id: 4,
            name: "Jehad",
            job: "Full Stack Developer",
            photo: userIcon,
            linkedIn: "www.linkedin.com",
        },
        {
            id: 5,
            name: "Mohammed Basura",
            job: "Full Stack Developer",
            photo: userIcon,
            linkedIn: "www.linkedin.com",
        },
        {
            id: 6,
            name: "Mohammed Al-jaberi",
            job: "Front-end Developer",
            photo: userIcon,
            linkedIn: "www.linkedin.com",
        },
    ];

    return (
        <div className='container py-20'>
            <PageIntro
                title={t("developersTeam")}
                subtitle={t("recodedCapstone")}
                t={t}
            />
            <div className='team-members mt-32'>
                <div
                    data-aos='zoom-in-up'
                    className='flex justify-between flex-wrap items-center gap-x-1 gap-y-7'
                >
                    {developers.map((member) => {
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
    );
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "developers"])),
            // Will be passed to the page component as props
        },
    };
}

export default withTranslation("developers")(developersTeam);
