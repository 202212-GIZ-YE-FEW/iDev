import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useQuery } from "react-query";

import HomePage from "@/components/HomePage";

import getDocument from "@/firebase/getData";

export default function Index({ blogs }) {
    const { data } = useQuery("tickets", async () => {
        const data = await getDocument("tickets");
        return data;
    });
    return (
        <>
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
            // Will be passed to the page component as props
        },
    };
}
