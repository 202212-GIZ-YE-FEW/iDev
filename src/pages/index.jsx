import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useQuery } from "react-query";

import HomePage from "@/components/HomePage";

import getDocument from "@/firebase/getData";

export default function Index({ blogs }) {
    const { t } = useTranslation("common");
    const { data } = useQuery("tickets", async () => {
        const data = await getDocument("tickets");
        return data.sort((a, b) => a.price - b.price);
    });
    return (
        <>
            <Head>
                <title>{t("home")}</title>
            </Head>
            <HomePage blogs={blogs} tickets={data} />
        </>
    );
}
export async function getStaticProps({ locale }) {
    let blogs = [];
    try {
        blogs = await getDocument("blogs");
    } catch (error) {
        //
    }
    return {
        props: {
            ...(await serverSideTranslations(locale, "common")),
            blogs,
        },
    };
}
