import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import "react-multi-carousel/lib/styles.css";

import PageIntro from "@/components/PageIntro";

function AddNewCard({ t }) {
    return (
        <>
            <div className='container mt-12'>
                <PageIntro
                    title={t("addCardDetails")}
                    subtitle={t("addCardDetailsDesc")}
                />
            </div>
        </>
    );
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "payment"])),
        },
    };
}
export default withTranslation(["payment"])(AddNewCard);
