import { i18n, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Hero from "@/components/Hero";

import Layout from "@/layout/Layout";
export default function HomePage() {
    const { t } = useTranslation("common");

    return (
        <>
            <Layout i18n={i18n}>
                <Hero />
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
