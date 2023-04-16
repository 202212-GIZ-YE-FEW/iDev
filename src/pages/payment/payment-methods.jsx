import Image from "next/image";
import Link from "next/link";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

import PageIntro from "@/components/PageIntro";
import Button from "@/components/ui/Button";
import RadioInputItem from "@/components/ui/radiogroup/RadioInputItem";

import MasterCardSVG from "/public/images/master-card.svg";
import VisaSVG from "/public/images/visa.svg";
function PaymentMethod({ t }) {
    const [paymentMethod, setPaymentMethod] = useState("mastercard");

    const handleChange = ({ target }) => {
        setPaymentMethod(() => target.value);
    };
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
    const cards = [
        {
            type: "mastercard",
            icon: MasterCardSVG,
            cardNumber: "xxxx xxxx xxxx 2000",
            cvv: "123",
            expireDate: "02/2020",
            holder: "Abrar",
            bg: "pink",
        },
        {
            type: "visa",
            icon: VisaSVG,
            cardNumber: "xxxx xxxx xxxx 1990",
            cvv: "113",
            expireDate: "02/2030",
            holder: "Maha",
            bg: "blue",
        },
        {
            type: "paypal",
            icon: MasterCardSVG,
            cardNumber: "xxxx xxxx xxxx 1980",
            cvv: "133",
            expireDate: "02/2040",
            holder: "Mawaheb",
            bg: "yellow",
        },
        {
            type: "konafa",
            icon: MasterCardSVG,
            cardNumber: "xxxx xxxx xxxx 1980",
            cvv: "133",
            expireDate: "02/2040",
            holder: "Mawaheb",
            bg: "pink",
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
                    itemClass='pe-3'
                    className='mt-28'
                    responsive={responsive}
                >
                    {cards.map((item, index) => (
                        <RadioInputItem
                            key={index}
                            id={index}
                            as='card'
                            name='payment_method'
                            value={item.type}
                            title={
                                <div
                                    className='w-full h-full flex flex-col text-white justify-between py-7 px-8 rounded-md bg-no-repeat bg-cover'
                                    style={{
                                        backgroundImage: `url(/images/${item.bg}-overlay.png)`,
                                    }}
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
                                </div>
                            }
                            checked={paymentMethod === item.type}
                            onChange={(e) => handleChange(e)}
                        />
                    ))}
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
