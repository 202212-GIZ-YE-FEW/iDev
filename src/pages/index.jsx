import { i18n, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Hero from "@/components/Hero";
import TrustTherapists from "@/components/TrustTherapists";

import Layout from "@/layout/Layout";
export default function HomePage() {
    const { t } = useTranslation("common");

    return (
        <>
            <Layout i18n={i18n}>
                <Hero />
                <TrustTherapists />
            </Layout>
        </>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "home"])),
            // Will be passed to the page component as props
        },
    };
}
