import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import HomePage from "@/components/HomePage";

import getDocument from "@/firebase/getData";

export default function Index({ blogs }) {
    return (
        <>
            <HomePage blogs={blogs} />
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
            // Will be passed to the page component as props
        },
    };
}
