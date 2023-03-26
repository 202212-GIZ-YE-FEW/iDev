import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import Layout from "@/layout/Layout";

export default function HomePage() {
    const { t } = useTranslation("common");

    return (
        <Layout>
            <p>{t("test")}</p>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                <Link href='/' locale='en'>
                    English
                </Link>
                <Link href='/' locale='ar'>
                    العربية
                </Link>
                <div className='container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal'>
                    <p className='text-brand font-extrabold text-3xl md:text-5xl'>
                        {" "}
                        Ghostwind CSS
                    </p>
                    <p className='text-gray-500 bg-light-cyan text-yellow w-80 rounded-md px-md text-9xl font-normal px-lg'>
                        Welcome to my Blog
                    </p>
                </div>
            </div>
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
