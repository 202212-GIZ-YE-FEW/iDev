import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { MdOutlinePayment } from "react-icons/md";
import Carousel from "react-multi-carousel";
import { useQuery } from "react-query";

import "react-multi-carousel/lib/styles.css";

import { useAuth } from "@/components/context/AuthContext";
import PageIntro from "@/components/PageIntro";
import Button from "@/components/ui/Button";
import RadioInputItem from "@/components/ui/radiogroup/RadioInputItem";

import getDocument from "@/firebase/getData";
import getDocById from "@/firebase/getDocById";
import { checkout } from "@/pages/api/checkout";
import parseCardData from "@/utils/payment";

function Payment({ t }) {
    const { user } = useAuth();
    const [paymentMethod, setPaymentMethod] = useState("");
    const router = useRouter();
    const query = router.query;

    const collectionPath = `users/${user.uid}/Personal_data/payment_methods/data`;

    const cardsQuery = useQuery({
        queryKey: "paymentMethods",
        queryFn: async () => {
            const data = await getDocument(collectionPath);
            return parseCardData(data);
        },
    });

    const ticketQuery = useQuery({
        queryKey: "ticket",
        queryFn: async () => {
            const ticket = await getDocById("tickets", query.id);
            return ticket;
        },
    });

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
    console.log(ticketQuery.data);

    return (
        <>
            <div className='container mt-12'>
                <PageIntro
                    title={t("selectCard")}
                    subtitle={t("selectCardDesc")}
                />
                {cardsQuery.isLoading ? (
                    <div className='text-center'>
                        <div
                            className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-cyan motion-reduce:animate-[spin_1.5s_linear_infinite]'
                            role='status'
                        ></div>
                    </div>
                ) : (
                    <>
                        {cardsQuery.data?.length > 0 ? (
                            <Carousel
                                itemClass='pe-3'
                                className='mt-28'
                                responsive={responsive}
                            >
                                {cardsQuery.data?.map((item, index) => (
                                    <RadioInputItem
                                        key={index}
                                        id={index}
                                        as='card'
                                        name='payment_method'
                                        value={item.cardNumber}
                                        content={
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
                                                        {item.expiryDate}
                                                    </p>
                                                    <p aria-label='card number'>
                                                        {item.cardNumber}
                                                    </p>
                                                    <p aria-label='card holder'>
                                                        {item.nameOnCard}
                                                    </p>
                                                </div>
                                            </div>
                                        }
                                        checked={
                                            paymentMethod === item.cardNumber
                                        }
                                        onChange={(e) => handleChange(e)}
                                    />
                                ))}
                            </Carousel>
                        ) : (
                            <div className='flex flex-col items-center justify-center mt-28'>
                                <MdOutlinePayment className='text-6xl text-gray mx-auto' />
                                {t("noPaymentMethodsFound")}
                            </div>
                        )}
                    </>
                )}
                {!ticketQuery.isLoading && (
                    <p className='text-base lg:text-3xl my-20 text-center font-medium'>
                        {t("confirmBuyDesc", {
                            count: ticketQuery.data.number_of_tickets,
                            price: `${
                                ticketQuery.data.number_of_tickets *
                                ticketQuery.data.price
                            }$`,
                        })}
                    </p>
                )}
                <div className='flex items-center space-x-4'>
                    {cardsQuery.data?.length > 0 ? (
                        <>
                            <div className='flex items-center'>
                                <Link
                                    href='#'
                                    className='block text-center mx-auto my-20'
                                >
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
                            <div className='flex items-center'>
                                <span className='text-gray-400 text-sm md:text-xl uppercase'>
                                    {t("or")}
                                </span>
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                    <div className='flex items-center'>
                        <Button
                            content={t("payWithOtherCard")}
                            textTransform='uppercase'
                            filled='true'
                            size='medium'
                            fontSize='text-sm md:text-xl'
                            radius='md'
                            onClick={() => {
                                checkout({
                                    customerEmail: user.email,
                                    lineItems: [
                                        {
                                            price: ticketQuery.data.price_id,
                                            quantity: parseInt(
                                                ticketQuery.data
                                                    .number_of_tickets
                                            ),
                                        },
                                    ],
                                    successUrl: `${window.location.origin}/success`,
                                });
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "payment"])),
            requireAuth: true,
        },
    };
}
export default withTranslation(["payment"])(Payment);
