import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Header from "@/components/Header";

import Layout from "@/layout/Layout";
import Singup from "./signup";
export default function HomePage() {
    const { t } = useTranslation("common");

    return (
        <Layout>
            <Header>
                <p>{t("test")}</p>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                    }}
                >
                    <Link href='/' locale='en'>
                        English
                    </Link>
                    <Link href='/' locale='ar'>
                        العربية
                    </Link>
                </div>
            </Header>
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
