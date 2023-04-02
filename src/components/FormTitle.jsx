import React from "react";
import { withTranslation } from "next-i18next";

function FormTitle({ title, t }) {
    return (
        <>
            <span className=' uppercase font-normal  md:text-xl lg:text-3xl  leading-75 text-center tracking-tighter'>
                {t(title)}
            </span>
        </>
    );
}

export default withTranslation("common")(FormTitle);
