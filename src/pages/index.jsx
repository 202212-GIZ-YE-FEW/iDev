import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Hero from "@/components/Hero";
import TrustTherapists from "@/components/TrustTherapists";
import Therapist from "./therapist";

export default function HomePage() {
    return (
        <>
            <Hero />
            <Therapist />
            <TrustTherapists />
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
