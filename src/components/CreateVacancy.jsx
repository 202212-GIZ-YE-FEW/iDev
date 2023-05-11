import Link from "next/link";
import { withTranslation } from "next-i18next";

import { useAuth } from "@/components/context/AuthContext";
import PageIntro from "@/components/PageIntro";
import Button from "@/components/ui/Button";

const CreateVacancy = ({ t }) => {
    const { authenticated } = useAuth();
    const handleClick = () => {
        const router = require("next/router").default;
        router.push({
            pathname: "/careers/create",
        });
    };

    return (
        <>
            {authenticated ? (
                <>
                    (
                    <div className='container pb-8'>
                        <PageIntro
                            title={t("doYouHavevacancy")}
                            subtitle={t("doYouHavevacancyDescrption")}
                        />
                        <Link href='/careers/create'>
                            <Button
                                content={t("addToCareersList")}
                                textTransform='uppercase'
                                filled='true'
                                size='large'
                                fontSize='text-lg md:text-xl lg:text-2xl'
                                radius='md'
                                onClick={handleClick}
                            />
                        </Link>
                    </div>
                </>
            ) : (
                <></>
            )}
        </>
    );
};
export default withTranslation("career")(CreateVacancy);
