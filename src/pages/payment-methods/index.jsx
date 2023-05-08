import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
import Carousel from "react-multi-carousel";
import { useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import "react-multi-carousel/lib/styles.css";

import { useAuth } from "@/components/context/AuthContext";
import PageIntro from "@/components/PageIntro";
import Button from "@/components/ui/Button";

import deleteDocument from "@/firebase/deleteData";
import getDocument from "@/firebase/getData";
import parseCardData from "@/utils/payment";

function PaymentMethod({ t }) {
    const { user } = useAuth();

    const collectionPath = `users/${user.uid}/Personal_data/payment_methods/data`;

    const {
        isLoading,
        error,
        data: result,
    } = useQuery("paymentMethods", async () => {
        const data = await getDocument(collectionPath);
        return parseCardData(data);
    });
    const queryClient = useQueryClient();

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: result?.length > 1 ? 2 : 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const buttonContent = (
        <div className='flex items-center space-x-2'>
            <span>{t("addNewCard")}</span>
            <AiOutlinePlus className='text-2xl' />
        </div>
    );

    const deleteCard = async (e, id) => {
        e.stopPropagation();
        await deleteDocument(collectionPath, id);
        toast(t("common:deletedSuccessfully"), {
            hideProgressBar: true,
            position: "bottom-left",
            autoClose: 2000,
            type: "success",
        });
        const updatedData = result.filter((item) => item.id !== id);
        queryClient.setQueryData("paymentMethods", updatedData);
    };

    return (
        <>
            <Head>
                <title>{t("payment:yourPaymentMethods")}</title>
            </Head>
            <div className='container mt-12'>
                <PageIntro
                    title={t("yourSavedCards")}
                    subtitle={t("yourSavedCardsDesc")}
                />
                {isLoading ? (
                    <div className='text-center'>
                        <div
                            className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-cyan motion-reduce:animate-[spin_1.5s_linear_infinite]'
                            role='status'
                        ></div>
                    </div>
                ) : (
                    <>
                        {result?.length > 0 ? (
                            <Carousel
                                itemClass='pe-3'
                                className='mt-28'
                                responsive={responsive}
                            >
                                {result?.map((item, index) => {
                                    return (
                                        <div className='me-3' key={index}>
                                            <div className='group block relative w-full min-h-[15rem] rounded-md text-white cursor-pointer'>
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
                                                    <div className='fit-content self-end lg:self-end md:self-end'>
                                                        <Button
                                                            content={t(
                                                                "deleteCard"
                                                            )}
                                                            text-transform='capitalize'
                                                            filled='true'
                                                            size='medium'
                                                            fontSize='text-sm md:text-base'
                                                            radius='lg'
                                                            useConfirm={true}
                                                            onClick={(e) =>
                                                                deleteCard(
                                                                    e,
                                                                    item.id
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </Carousel>
                        ) : (
                            <div className='flex flex-col items-center justify-center mt-28'>
                                <MdOutlinePayment className='text-6xl text-gray mx-auto' />
                                {t("noPaymentMethodsFound")}
                            </div>
                        )}
                    </>
                )}
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
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "payment"])),
            requireAuth: true,
        },
    };
}
export default withTranslation(["payment"])(PaymentMethod);
