import Image from "next/image";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import PageIntro from "@/components/PageIntro";
import Button from "@/components/ui/Button";

import MasterCardSVG from "/public/images/master-card.svg";
import VisaSVG from "/public/images/visa.svg";
function PaymentMethod() {
    return (
        <>
            <div className='container'>
                <PageIntro title='' />
                <div className='grid grid-cols-4 gap-2 w-full'>
                    <div class='w-full h-screen flex flex-col justify-center items-center'>
                        <input
                            className='peer hidden'
                            id='radio_1'
                            type='radio'
                            name='radio'
                        />
                        <div
                            id='card'
                            class="relative w-full h-60 rounded-md text-white overflow-hidden cursor-pointer transition-all duration-500 bg-[url('/images/pink-overlay.png')] bg-no-repeat bg-center"
                        >
                            <div class='absolute top-0 left-0 w-full flex flex-col h-full pt-14 pb-7 px-8 from-gray/80 to-gray/20 transition-all duration-100 delay-200 z-20 '>
                                <Image
                                    src={MasterCardSVG}
                                    alt='visa logo'
                                    className='self-end'
                                />
                                <div className='clear-both'></div>
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
                        </div>
                    </div>
                    <div class='w-full h-screen flex flex-col justify-center items-center'>
                        <input
                            className='peer hidden'
                            id='radio_1'
                            type='radio'
                            name='radio'
                        />
                        <div
                            id='card'
                            class="relative w-full h-60 rounded-md text-white overflow-hidden cursor-pointer transition-all duration-500 bg-[url('/images/blue-overlay.png')] bg-no-repeat bg-center"
                        >
                            <div class='absolute top-0 left-0 w-full flex flex-col h-full pt-14 pb-7 px-8 from-gray/80 to-gray/20 transition-all duration-100 delay-200 z-20 '>
                                <Image
                                    src={VisaSVG}
                                    alt='visa logo'
                                    className='self-end'
                                />
                                <div className='clear-both'></div>
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
                        </div>
                    </div>
                    <div class='w-full h-screen flex flex-col justify-center items-center'>
                        <input
                            className='peer hidden'
                            id='radio_1'
                            type='radio'
                            name='radio'
                        />
                        <div
                            id='card'
                            class="relative w-full h-60 rounded-md text-white overflow-hidden cursor-pointer transition-all duration-500 bg-[url('/images/yellow-overlay.png')] bg-no-repeat bg-center"
                        >
                            <div class='absolute top-0 left-0 w-full flex flex-col h-full pt-14 pb-7 px-8 from-gray/80 to-gray/20 transition-all duration-100 delay-200 z-20 '>
                                <Image
                                    src={MasterCardSVG}
                                    alt='visa logo'
                                    className='self-end'
                                />
                                <div className='clear-both'></div>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, "common")),
            // Will be passed to the page component as props
        },
    };
}
export default withTranslation("common")(PaymentMethod);
