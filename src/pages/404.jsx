import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import _404SVG from "public/images/404.svg";

// import LogoSVG from "public/logo.svg";
import Button from "@/components/ui/Button";

import Layout404 from "@/layout/Layout404";
export default function NotFoundPage() {
    const { t } = useTranslation("404");
    return (
        <>
            <div className='bg-light-cyan min-w-screen min-h-screen p-5 md:p-10 lg:p-20'>
                <div className='container min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 md:p-15 lg:p-20 md:flex items-center text-center md:text-left'>
                    <div className='w-full md:w-1/2'>
                        {/* <div className="mb-10 lg:mb-20">
                        <Link className="text-2xl font-semibold flex items-center space-s-4" href="/">
                            <Image src={LogoSVG} alt="Healing Logo"/>
                            <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase">
                                Healing</span>
                        </Link>
                    </div> */}
                        <div className='mb-10 md:mb-20 text-gray-600 font-light'>
                            <h1 className='font-black uppercase text-3xl lg:text-5xl text-yellow-500 mb-10'>
                                {t("seemYouLost")}
                            </h1>
                            <p className='text-light-gray'>{t("desc")}</p>
                        </div>
                        <div className='mb-20 md:mb-0'>
                            <Link
                                href='/'
                                className='transform transition-all hover:scale-110'
                            >
                                <Button
                                    content={t("goHome")}
                                    textTransform='uppercase'
                                    filled='true'
                                    size='large'
                                    fontSize='text-lg md:text-xl lg:text-2xl'
                                    radius='md'
                                />
                            </Link>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 text-center'>
                        <Image src={_404SVG} alt='404 image' />
                    </div>
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
