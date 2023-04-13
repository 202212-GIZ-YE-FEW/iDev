import Image from "next/image";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

import PageIntro from "@/components/PageIntro";
import Button from "@/components/ui/Button";

import MasterCardSVG from "/public/images/master-card.svg";
import VisaSVG from "/public/images/visa.svg";
function PaymentMethod({ t }) {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <>
            <div className='container mt-12'>
                <PageIntro
                    title={t("selectCard")}
                    subtitle={t("selectCardDesc")}
                />

                <Carousel
                    infinite='true'
                    className='mt-28'
                    responsive={responsive}
                >
                    <div className='me-2'>
                        <input
                            className='peer hidden'
                            id='radio_1'
                            type='radio'
                            name='radio'
                        />
                        <label class="block relative w-full min-h-[15rem] rounded-md text-white overflow-hidden cursor-pointer transition-all duration-500 bg-[url('/images/pink-overlay.png')] bg-no-repeat bg-cover">
                            <div class='absolute top-0 left-0 w-full flex flex-col h-full pt-14 pb-7 px-8 from-gray/80 to-gray/20 transition-all duration-100 delay-200 z-20 '>
                                <Image
                                    src={MasterCardSVG}
                                    alt='visa logo'
                                    className='self-end'
                                />
                                <div class='w-full h-full flex flex-col justify-between text-sm'>
                                    <p id='' aria-label='expire date'>
                                        20/2030
                                    </p>
                                    <p id='' aria-label='card number'>
                                        xxxx xxxx xxxx 1983
                                    </p>
                                    <p id='' aria-label='card holder'>
                                        Natasha Black
                                    </p>
                                </div>
                                <div className='fit-content self-end'>
                                    <Button
                                        content='Delete Card --'
                                        text-transform='capitalize'
                                        filled='true'
                                        size='small'
                                        fontSize='text-sm md:text-base'
                                        radius='lg'
                                    />
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class='me-2'>
                        <input
                            className='peer hidden'
                            id='radio_1'
                            type='radio'
                            name='radio'
                        />
                        <label class="block relative w-full min-h-[15rem] rounded-md text-white overflow-hidden cursor-pointer transition-all duration-500 bg-[url('/images/blue-overlay.png')] bg-no-repeat bg-cover">
                            <div class='absolute top-0 left-0 w-full flex flex-col h-full pt-14 pb-7 px-8 from-gray/80 to-gray/20 transition-all duration-100 delay-200 z-20 '>
                                <Image
                                    src={VisaSVG}
                                    alt='visa logo'
                                    className='self-end'
                                />
                                <div class='w-full h-full flex flex-col justify-between text-sm'>
                                    <p id='' aria-label='expire date'>
                                        20/2030
                                    </p>
                                    <p id='' aria-label='card number'>
                                        xxxx xxxx xxxx 1983
                                    </p>
                                    <p id='' aria-label='card holder'>
                                        Natasha Black
                                    </p>
                                </div>
                                <div className='fit-content self-end'>
                                    <Button
                                        content='Delete Card --'
                                        text-transform='capitalize'
                                        filled='true'
                                        size='small'
                                        fontSize='text-sm md:text-base'
                                        radius='lg'
                                    />
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class='me-2'>
                        <input
                            className='peer hidden'
                            id='radio_1'
                            type='radio'
                            name='radio'
                        />
                        <label class="block relative w-full min-h-[15rem] rounded-md text-white overflow-hidden cursor-pointer transition-all duration-500 bg-[url('/images/yellow-overlay.png')] bg-no-repeat bg-cover">
                            <div class='absolute top-0 left-0 w-full flex flex-col h-full pt-14 pb-7 px-8 from-gray/80 to-gray/20 transition-all duration-100 delay-200 z-20 '>
                                <Image
                                    src={MasterCardSVG}
                                    alt='visa logo'
                                    className='self-end'
                                />
                                <div class='w-full h-full flex flex-col justify-between text-sm'>
                                    <p id='' aria-label='expire date'>
                                        20/2030
                                    </p>
                                    <p id='' aria-label='card number'>
                                        xxxx xxxx xxxx 1983
                                    </p>
                                    <p id='' aria-label='card holder'>
                                        Natasha Black
                                    </p>
                                </div>
                                <div className='fit-content self-end'>
                                    <Button
                                        content='Delete Card --'
                                        text-transform='capitalize'
                                        filled='true'
                                        size='small'
                                        fontSize='text-sm md:text-base'
                                        radius='lg'
                                    />
                                </div>
                            </div>
                        </label>
                    </div>
                </Carousel>
            </div>
        </>
    );
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "payment"])),
            // Will be passed to the page component as props
        },
    };
}
export default withTranslation(["payment"])(PaymentMethod);
