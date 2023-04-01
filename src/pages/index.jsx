import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Hero from "@/components/Hero";
import TrustTherapists from "@/components/TrustTherapists";
import PreviewProfile from "@/components/ui/PreviewProfile";

import Layout from "@/layout/Layout";
export default function HomePage() {
    return (
        <>
            <Layout>
                {/* <Hero />
                <TrustTherapists /> */}
                <PreviewProfile />
            </Layout>
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
