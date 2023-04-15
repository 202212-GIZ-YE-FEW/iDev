import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import HomePage from "@/components/HomePage";
import EditProfile from "@/pages/editprofile";

export default function Index() {
    return (
        <>
            <HomePage />
            <EditProfile />
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
