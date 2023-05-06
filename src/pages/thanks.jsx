import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import PageIntro from "@/components/PageIntro";
import Button from "@/components/ui/Button";
export default function Thanks() {
    const { t } = useTranslation();
    const router = useRouter();
    const { subtitle, subtitle1 } = router.query;
    return (
        <>
            <Head>
                <title>{t("thankYou")} | purpose </title>
            </Head>
            <div className='container'>
                <PageIntro
                    title={t("thankYou")}
                    subtitle={t(`signup:${subtitle}`)}
                    subtitle1={t(`Subscription:${subtitle1}`)}
                />
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
            ...(await serverSideTranslations(locale, ["common", "signup"])),
            // Will be passed to the page component as props
        },
    };
}
