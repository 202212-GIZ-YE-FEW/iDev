import Image from "next/image";
import { withTranslation } from "next-i18next";

import Button from "./ui/Button";
function TrustTherapists({ t }) {
    return (
        <>
            <div className='container flex flex-col space-y-8 justify-between'>
                <p className='text-3xl md:text-4xl lg:text-5xl uppercase break-words'>
                    {t("title of trust therapists")}.
                </p>
                <Image
                    src='/trust_therapists.png'
                    alt='trust_therapist'
                    width={600}
                    height={300}
                />
                <p className='pb-20'>{t("description of trust therapists")}.</p>
                <div className='w-fit'>
                    <Button
                        content={t("book an appointment")}
                        text-transform='uppercase'
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
export default withTranslation("home")(TrustTherapists);
