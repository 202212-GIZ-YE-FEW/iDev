import Image from "next/image";
import Link from "next/link";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

import PageIntro from "@/components/PageIntro";
import Button from "@/components/ui/Button";

import getDocument from "@/firebase/getData";

import MasterCardSVG from "/public/images/master-card.svg";
import VisaSVG from "/public/images/visa.svg";
function PaymentMethod({ t, paymentMethods }) {
    const [cards, setCards] = useState([]);

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

    useEffect(() => {
        const data = paymentMethods.map((item) => {
            return {
                ...item,
                cardNumber: item.cardNumber.replace(
                    /^(\d{4}\s){3}/,
                    "xxxx xxxx xxxx "
                ),
                icon: item.type === "mastercard" ? MasterCardSVG : VisaSVG,
            };
        });
        setCards(data);
    }, [paymentMethods]);

    const buttonContent = (
        <div className='flex items-center space-x-2'>
            <span>{t("addNewCard")}</span>
            <AiOutlinePlus className='text-2xl' />
        </div>
    );
    return (
        <>
            <div className='container mt-12'>
                <PageIntro
                    title={t("yourSavedCards")}
                    subtitle={t("yourSavedCardsDesc")}
                />
                <Carousel
                    itemClass='pe-3'
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
                                        className='group block relative w-full min-h-[15rem] rounded-md text-white cursor-pointer'
                                    >
                                        <div
                                            className={`absolute top-0 left-0 w-full flex flex-col h-full py-7 px-8 z-20  bg-[url(/images/${
                                                colors[index % 3]["bg"]
                                            }-overlay.png)] bg-no-repeat bg-cover`}
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
                <Link
                    href='/payment-methods/add-new-card'
                    className='block mx-auto my-20'
                >
                    <Button
                        content={buttonContent}
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
    const paymentMethods = await getDocument("user_payment_methods");
    return {
        props: {
            paymentMethods,
            ...(await serverSideTranslations(locale, ["common", "payment"])),
        },
    };
}
export default withTranslation(["payment"])(PaymentMethod);
