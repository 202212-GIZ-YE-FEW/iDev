import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Payment from "public/payment.png";

import Button from "@/components/ui/Button";

import Layout404 from "@/layout/Layout404";

export default function Success() {
    const { t } = useTranslation("success");
    return (
        <>
            <Head>
                <title>{t("common:paymentSuccess")}</title>
            </Head>
            <div className='bg-light-cyan min-w-screen min-h-screen p-5 md:p-10 lg:p-20'>
                <div className='container min-h-full min-w-full rounded-3xl bg-light-white shadow-xl p-10 md:p-15 lg:p-20 md:flex items-center text-center md:text-left'>
                    <>
                        <div className='w-full md:w-1/2'>
                            <div className='mb-10 md:mb-20 font-light'>
                                <h1 className='font-black uppercase text-3xl lg:text-5xl mb-10'>
                                    {t("paymentSuccess")}
                                </h1>
                                <p className='text-light-gray'>
                                    {t("paymentSuccessDec")}
                                </p>
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
                            <Image src={Payment} alt='payment' />
                        </div>
                    </>
                </div>
            </div>
        </>
    );
}

Success.getLayout = Layout404;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["success"])),
        },
    };
}
