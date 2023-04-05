import Image from "next/image";
import Link from "next/link";
import { withTranslation } from "next-i18next";

import PageIntro from "./PageIntro";
import Button from "./ui/Button";
function TrustTherapists({ t }) {
    return (
        <>
            <div className='container flex flex-col space-y-8 justify-between'>
                <PageIntro title={t("trustTherapistTitle")} />
                <Image
                    src='/trust_therapists.png'
                    alt='trust_therapist'
                    width={600}
                    height={300}
                />
                <p className='pb-20'>{t("trustTherapistSubtitle")}.</p>
                <Link
                    className='w-fit xl:w-full rtl:w-full'
                    href='/appointment'
                >
                    <Button
                        content={t("bookAppointment")}
                        textTransform='uppercase'
                        filled='true'
                        size='large'
                        fontSize='text-lg md:text-xl lg:text-2xl'
                        radius='md'
                    />
                </Link>
            </div>
        </>
    );
}
export default withTranslation("home")(TrustTherapists);
