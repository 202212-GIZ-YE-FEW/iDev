import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import HomePage from "@/components/HomePage";

export default function Index() {
    return (
        <>
            <HomePage />
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
