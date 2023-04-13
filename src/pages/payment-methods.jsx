import Image from "next/image";
import Link from "next/link";
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
    const colors = [
        { color: "#e62151", bg: "pink" },
        { color: "#1d40c0", bg: "blue" },
        { color: "#daa00a", bg: "yellow" },
    ];
    const cards = [
        {
            type: "mastercard",
            icon: MasterCardSVG,
            cardNumber: "xxxx xxxx xxxx 2000",
            cvv: "123",
            expireDate: "02/2020",
            holder: "Abrar",
        },
        {
            type: "visa",
            icon: VisaSVG,
            cardNumber: "xxxx xxxx xxxx 1990",
            cvv: "113",
            expireDate: "02/2030",
            holder: "Maha",
        },
        {
            type: "mastercard",
            icon: MasterCardSVG,
            cardNumber: "xxxx xxxx xxxx 1980",
            cvv: "133",
            expireDate: "02/2040",
            holder: "Mawaheb",
        },
    ];
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
                    {cards.map((item, index) => {
                        return (
                            <>
                                <div className='me-3' key={index}>
                                    <input
                                        className='peer hidden'
                                        id={`${item.name}-id`}
                                        type='radio'
                                        name='card'
                                    />
                                    <label
                                        htmlFor={`${item.name}-id`}
                                        className='group block relative w-full min-h-[15rem] rounded-md text-white cursor-pointer transition-all duration-500 peer-checked:border-[3px] peer-checked:border-cyan peer-checked:border-dashed'
                                    >
                                        <div
                                            className={`absolute top-0 left-0 w-full flex flex-col h-full py-7 px-8 transition-all duration-100 delay-200 z-20  bg-[url(/images/${
                                                colors[index % 3]["bg"]
                                            }-overlay.png)] bg-no-repeat bg-cover`}
                                        >
                                            <Image
                                                src={item.icon}
                                                alt={`${item.name} logo`}
                                                className='self-end'
                                            />
                                            <div className='w-full h-full flex flex-col mb-6 justify-between text-sm'>
                                                <p aria-label='expire date'>
                                                    {item.expireDate}
                                                </p>
                                                <p aria-label='card number'>
                                                    {item.cardNumber}
                                                </p>
                                                <p aria-label='card holder'>
                                                    {item.holder}
                                                </p>
                                            </div>
                                            <div className='fit-content self-center lg:self-end'>
                                                <Button
                                                    content={t("deleteCard")}
                                                    text-transform='capitalize'
                                                    filled='true'
                                                    size='medium'
                                                    fontSize='text-sm md:text-base'
                                                    radius='lg'
                                                />
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </>
                        );
                    })}
                </Carousel>
                <p className='text-base lg:text-3xl my-20 text-center font-medium'>
                    {t("confirmBuyDesc", {
                        count: "5",
                        price: "$50",
                    })}
                </p>
                <Link href='#' className='block text-center mx-auto my-20'>
                    <Button
                        content={t("confirmPurchase")}
                        textTransform='uppercase'
                        filled='true'
                        size='medium'
                        fontSize='text-sm md:text-xl'
                        radius='md'
                    />
                </Link>
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
