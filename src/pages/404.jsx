import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import _404SVG from "public/images/404.svg";

import NoContent from "@/components/NoContent";

import Layout404 from "@/layout/Layout404";

export default function NotFoundPage() {
    const { t } = useTranslation("404");
    return (
        <>
            <div className='bg-light-cyan min-w-screen min-h-screen p-5 md:p-10 lg:p-20'>
                <div className='container min-h-full min-w-full rounded-3xl bg-light-white shadow-xl p-10 md:p-15 lg:p-20 md:flex items-center text-center md:text-left'>
                    <NoContent
                        title={t("seemYouLost")}
                        text={t("desc")}
                        buttonText={t("goHome")}
                        buttonLink='/'
                        image={_404SVG}
                        alt='404 image'
                    />
                </div>
            </div>
        </>
    );
}

NotFoundPage.getLayout = Layout404;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["404"])),
            // Will be passed to the page component as props
        },
    };
}
