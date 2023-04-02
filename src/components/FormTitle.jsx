import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export default function FormTitle({ title }) {
    const { t } = useTranslation("common");
    return (
        <>
            <span className=' uppercase font-normal  md:text-xl lg:text-3xl  leading-75 text-center tracking-tighter'>
                {t(title)}
            </span>
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
