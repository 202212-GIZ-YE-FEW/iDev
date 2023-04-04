import Head from "next/head";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import BookAppointment from "@/components/BookAppointment";

function Appointment({ t }) {
    return (
        <>
            <Head>
                <title>{t("bookAppointment")}</title>
            </Head>
            <div className='container my-20'>
                <BookAppointment />
            </div>
        </>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "appointment",
            ])),
        },
    };
}

export default withTranslation("appointment")(Appointment);
