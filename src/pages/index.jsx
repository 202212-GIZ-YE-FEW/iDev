import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import HomePage from "@/components/HomePage";
import ViewProfile from "@/pages/viewprofile";

export default function Index() {
    return (
        <>
            <HomePage />
            <ViewProfile />
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
