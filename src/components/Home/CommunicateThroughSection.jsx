import { withTranslation } from "next-i18next";

import PageIntro from "@/components/PageIntro";

import CommunicateThroughItem from "./CommunicateThroughItem";
function CommunicateThroughSection({ t }) {
    const communicationMeans = [
        {
            name: t("voiceCall"),
            icon: "voice",
            description: t("voiceCallDesc"),
        },
        {
            name: t("chat"),
            icon: "chat",
            description: t("chatDesc"),
        },
        {
            name: t("videoCall"),
            icon: "video",
            description: t("videoCallDesc"),
        },
    ];
    return (
        <>
            <div className='container flex flex-col space-y-20 justify-between'>
                <PageIntro title={t("commThroughTitle")} />
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {communicationMeans.map((item) => {
                        return (
                            <CommunicateThroughItem
                                key={item.name}
                                name={item.name}
                                icon={item.icon}
                                description={item.description}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
export default withTranslation("home")(CommunicateThroughSection);
