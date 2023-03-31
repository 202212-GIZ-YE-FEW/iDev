import Image from "next/image";
import { useTranslation } from "next-i18next";

import Button from "./ui/Button";

export default function Hero() {
    const { t } = useTranslation("home");
    const style = {
        backgroundImage: "url(/header.png)",
        backgroundSize: "cover",
        minWidth: "96.5vw",
        position: "relative",
        left: "0",
        right: "0",
        minHeight: "calc(100vh - 5rem)",
    };
    return (
        <header
            style={style}
            className='flex flex-col items-center justify-center'
        >
            <div className='container flex flex-col items-center justify-center md:flex-row md:space-s-20 space-y-10'>
                <div className='flex flex-col'>
                    <p className='text-xl md:text-2xl lg:text-3xl uppercase'>
                        {t("we are here to")}
                    </p>
                    <span className='text-3xl md:text-5xl lg:text-9xl mb-3 lg:mb-0 uppercase'>
                        {t("help")}
                    </span>
                    <Button
                        content={t("book an appointment")}
                        text-transform='uppercase'
                        filled='true'
                        size='large'
                        fontSize='text-lg md:text-xl lg:text-2xl rtl:text-xl rtl:md:text-2xl rtl:lg:text-3xl'
                        radius='md'
                    />
                </div>
                <div>
                    <Image
                        src='/hero.png'
                        className='w-full'
                        width={600}
                        height={500}
                        alt='hero image'
                    />
                </div>
            </div>
        </header>
    );
}
