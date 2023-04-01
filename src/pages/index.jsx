import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import CommunicateThrough from "@/components/communicate/CommunicateThrough";
import Hero from "@/components/Hero";
import TrustTherapists from "@/components/TrustTherapists";

export default function HomePage() {
    return (
        <>
            <Hero />
            <TrustTherapists />
            <CommunicateThrough />
        </>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, "common")),
            // Will be passed to the page component as props
        },
    };
}
