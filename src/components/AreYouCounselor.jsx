import { withTranslation } from "next-i18next";

import Button from "@/components/ui/Button";
function AreYouCounselor({ t }) {
    return (
        <>
            <div className='bg-light-white flex flex-col items-center justify-center text-center py-10 px-5 rounded-md space-y-6 drop-shadow-lg'>
                <span className='uppercase text-4xl'>
                    {t("askIfCounselor")}
                </span>
                <span className='text-base rtl:text-xl text-black'>
                    {t("askCounselor")}
                </span>
                <div className=''>
                    <Button
                        content={t("learnMore")}
                        textTransform='uppercase'
                        filled='true'
                        size='large'
                        fontSize='text-lg md:text-xl lg:text-2xl'
                        radius='md'
                    />
                </div>
            </div>
        </>
    );
}
export default withTranslation("home")(AreYouCounselor);
