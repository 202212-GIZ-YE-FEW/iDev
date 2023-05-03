import Head from "next/head";
import Image from "next/image";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import "react-multi-carousel/lib/styles.css";

import PageIntro from "@/components/PageIntro";
import AddNewCardForm from "@/components/Payment/AddNewCardForm";

import MasterCardCopySVG from "/public/images/master-card-copy.svg";
import VisaCardCopySVG from "/public/images/visa-card-copy.svg";

function AddNewCard({ t }) {
    return (
        <>
            <Head>
                <title>{t("payment:addNewPaymentMethod")}</title>
            </Head>
            <div className='container mt-12'>
                <PageIntro
                    title={t("addCardDetails")}
                    subtitle={t("addCardDetailsDesc")}
                />
                <div className='grid grid-cols-1 xl:grid-cols-2 my-10'>
                    <AddNewCardForm />
                    <div className='grid md:grid-cols-2 xl:grid-cols-1 gap-24'>
                        <div className='mx-auto max-w-[28rem]'>
                            <Image
                                data-aos='zoom-in-up'
                                src={MasterCardCopySVG}
                                alt='Master Card Copy'
                            />
                            <Image
                                data-aos='zoom-in-up'
                                src={VisaCardCopySVG}
                                alt='Visa Card Copy'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "payment"])),
            requireAuth: true,
        },
    };
}
export default withTranslation(["payment"])(AddNewCard);
