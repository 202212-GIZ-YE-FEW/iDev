import Image from "next/image";
import Link from "next/link";
import { withTranslation } from "next-i18next";

import Button from "../ui/Button";

function Hero({ t }) {
    const style = {
        backgroundImage: "url(/header.png)",
        minHeight: "calc(100vh - 5rem)",
    };
    return (
        <header style={style} className='min-w-[96vw] bg-cover'>
            <div className='container flex flex-col h-full justify-center lg:flex-row gap-y-10 lg:justify-between items-center'>
                <div className='flex flex-col justify-center text-center lg:text-start'>
                    <h1 className='text-xl sm:text-3xl md:text-4xl xl:text-5xl uppercase'>
                        {t("weAreHereTo")}
                    </h1>
                    <p className='text-3xl sm:text-5xl md:text-9xl rtl:lg:text-9xl mb-3 lg:mb-0 uppercase'>
                        {t("help")}
                    </p>
                    <Link className='w-fit xl:w-full rtl:w-full' href='#'>
                        <Button
                            content={t("bookAppointment")}
                            text-transform='uppercase'
                            filled='true'
                            size='large'
                            fontSize='text-lg md:text-xl lg:text-2xl'
                            radius='md'
                        />
                    </Link>
                </div>
                <div className='basis-1/2'>
                    <Image
                        src='/hero.png'
                        width={900}
                        height={200}
                        alt=''
                        className='object-fit w-full lg:min-w-[29rem] lg:max-w-[36rem] xl:min-w-[40rem]'
                    />
                </div>
            </div>
        </header>
    );
}
export default withTranslation("home")(Hero);
