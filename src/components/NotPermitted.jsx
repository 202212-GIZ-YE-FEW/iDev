import { withTranslation } from "next-i18next";
import _403SVG from "public/images/403.svg";
import React from "react";

import NoContent from "./NoContent";

function NotPermitted({ t }) {
    return (
        <div className='container p-10 md:p-15 lg:p-20 md:flex items-center text-center md:text-left'>
            <NoContent
                title={t("seemYouAreNotPermitted")}
                text={t("permittedDesc")}
                buttonText={t("login")}
                buttonLink='/'
                image={_403SVG}
                alt='403 image'
            />
        </div>
    );
}
export default withTranslation("common")(NotPermitted);
