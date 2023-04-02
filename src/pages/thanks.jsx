import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import PageIntro from "@/components/PageIntro";
import Button from "@/components/ui/Button";

export default function Thanks(prop) {
    const { t } = useTranslation("common");
    const {
        subtitle = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    } = prop;
    return (
        <>
            <div className='container my-20'>
                <PageIntro title={t("thankYou")} subtitle={subtitle} />
                <Link href='/'>
                    <Button
                        content={t("back to home")}
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
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}
