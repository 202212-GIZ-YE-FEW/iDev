import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import PageIntro from "@/components/PageIntro";
import Button from "@/components/ui/Button";
import { useRouter } from "next/router";
export default function Thanks() {
    const { t } = useTranslation("common", "validation");
    const router = useRouter();
    const { subtitle } = router.query;
    return (
        <>
            <Head>
                <title>{t("thankYou")} | purpose </title>
            </Head>
            <div className='container -mt-28'>
                <PageIntro title={t("thankYou")} subtitle={t(`${subtitle}`)} />
                <Link href='/'>
                    <Button
                        content={t("backToHome")}
                        textTransform='uppercase'
                        radius='md'
                        fontSize='text-lg md:text-xl lg:text-2xl'
                    />
                </Link>
            </div>
        </>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "validation"])),
            // Will be passed to the page component as props
        },
    };
}
