import Button from "@/components/ui/Button";
import Router from "next/router";
import PageIntro from "@/components/PageIntro";
import { withTranslation } from "next-i18next";

const CreateVacancy = ({ t }) => {
    const handleClick = () => {
        const router = require("next/router").default;
        router.push({
            pathname: "/careers/create",
        });
    };

    return (
        <>
            (
            <div className='container pb-8'>
                <PageIntro
                    title={t("doYouHavevacancy")}
                    subtitle={t("doYouHavevacancyDescrption")}
                />
                <Button
                    content={t("addToCareersList")}
                    textTransform='uppercase'
                    filled='true'
                    size='large'
                    fontSize='text-lg md:text-xl lg:text-2xl'
                    radius='md'
                    onClick={handleClick}
                />
            </div>
        </>
    );
};
export default withTranslation("career")(CreateVacancy);
