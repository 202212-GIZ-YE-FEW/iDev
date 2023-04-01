import Layout from "@/layout/Layout";
import { i18n, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function NotFoundPage() {
    const { t } = useTranslation("common");
    return (
        <Layout i18n={i18n}>
            <div className='text-center text-[100px]'>404</div>
        </Layout>
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
