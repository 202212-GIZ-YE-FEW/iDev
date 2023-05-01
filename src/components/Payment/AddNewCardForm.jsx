import clsx from "clsx";
import { useRouter } from "next/router";
import { withTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { toast } from "react-toastify";

import "react-multi-carousel/lib/styles.css";

import { useAuth } from "@/components/context/AuthContext";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

import addDocument from "@/firebase/addData";
import getCitiesOfCountry from "@/utils/city";
import { getAllCountries, getCountryByCode } from "@/utils/country";

function AddNewCardForm({ t }) {
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const router = useRouter();

    const [cities, setCities] = useState([]);
    const countries = getAllCountries().map((country) => ({
        value: country.isoCode,
        label: country.name,
    }));

    const [cardType, setCardType] = useState(null);
    const [cardTypeClass, setCardTypeClass] = useState("");

    const handleCountryChange = (e) => {
        const countryName = e.target.value;
        const cities = getCitiesOfCountry(countryName).map((city) => ({
            value: city.name,
            label: city.name,
        }));
        setCities(cities);
    };

    const cardNumberData = watch("cardNumber");

    useEffect(() => {
        if (!cardNumberData) {
            setCardType(<BsFillCreditCardFill />);
            setCardTypeClass("");
            return;
        }
        if (cardNumberData.startsWith("4")) {
            setCardType(<FaCcVisa />);
            setCardTypeClass("visa");
        } else if (cardNumberData.startsWith("5")) {
            setCardType(<FaCcMastercard />);
            setCardTypeClass("mastercard");
        } else {
            setCardType(<BsFillCreditCardFill />);
            setCardTypeClass("");
        }
    }, [cardNumberData]);

    const handleCardNumberChange = (e) => {
        const cardNumber = e.target.value
            .replace(/\s+/g, "")
            .replace(/[^0-9]/gi, "")
            .replace(/\s/g, "")
            .match(/.{1,4}/g)
            ?.join(" ");
        e.target.value = cardNumber || "";
    };

    const collectionPath = `users/${user.uid}/Personal_data/payment_methods/data`;

    const cardColors = ["yellow", "pink", "blue"];

    const onSubmit = (data) => {
        const cardData = {
            ...data,
            country: getCountryByCode(data.country).name,
            bg: cardColors[Math.floor(Math.random() * cardColors.length)],
        };
        try {
            addDocument(collectionPath, cardData).then(() => {
                toast(t("cardAddedSuccessfully"), {
                    hideProgressBar: true,
                    position: "bottom-left",
                    autoClose: 2000,
                    type: "success",
                });
                router.push({
                    pathname: "/thanks",
                    query: {
                        subtitle: "paymentUnderReview",
                    },
                });
            });
        } catch (error) {
            toast(t("errorOccurred"), {
                hideProgressBar: true,
                position: "bottom-left",
                autoClose: 2000,
                type: "error",
            });
        }
    };

    const supportedCardClass =
        "w-full border border-cyan px-5 rounded-md text-center";
    const supportedCardTextClass =
        "mt-1 mb-2 whitespace-wrap md:text-base lg:text-lg text-cyan";

    return (
        <>
            <form
                autoComplete='off'
                className='flex flex-col md:flex-row md:justify-between xl:flex-col gap-x-5 mb-16 gap-y-6'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='min-w-fit md:min-w-[25rem] lg:min-w-[30rem]'>
                    <div className='grid grid-cols-1 xl:grid-cols-2 my-10 gap-24'>
                        <div className='flex flex-col gap-5'>
                            <div className='flex-col mt-[0.8rem] mb-2'>
                                <span className='mb-2 whitespace-wrap md:text-base lg:text-lg flex:me-10 text-grayish-cyan font-light flex:self-center capitalize text-sm flex-1'>
                                    {t("supportedCardTypes")}
                                </span>
                                <div className='flex mt-1'>
                                    <div
                                        className={clsx(
                                            `${supportedCardClass} rounded-e-none`,
                                            cardTypeClass === "visa" &&
                                                "bg-cyan"
                                        )}
                                    >
                                        <span
                                            className={clsx(
                                                `${supportedCardTextClass}`,
                                                cardTypeClass === "visa" &&
                                                    "text-white"
                                            )}
                                        >
                                            Visa
                                        </span>
                                    </div>
                                    <div
                                        className={clsx(
                                            `${supportedCardClass} rounded-s-none`,
                                            cardTypeClass === "mastercard" &&
                                                "bg-cyan"
                                        )}
                                    >
                                        <span
                                            className={clsx(
                                                `${supportedCardTextClass}`,
                                                cardTypeClass ===
                                                    "mastercard" && "text-white"
                                            )}
                                        >
                                            Mastercard
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-col mt-[0.8rem]'>
                                <Input
                                    field='cardNumber'
                                    label={t("cardNumber")}
                                    labelColor='grayish-cyan'
                                    placeholder='4287  8874 9511 3263'
                                    type='text'
                                    name='cardNumber'
                                    inputHeightSize='h-10'
                                    register={register("cardNumber", {
                                        onChange: (e) => {
                                            handleCardNumberChange(e);
                                        },
                                        required: true,
                                        validate: (value) => {
                                            if (
                                                !value.startsWith("4") &&
                                                !value.startsWith("5")
                                            ) {
                                                return t(
                                                    "cardNumberNotSupported"
                                                );
                                            }
                                        },
                                    })}
                                    errors={errors}
                                    maxLength='19'
                                    suffixIcon={cardType}
                                    t={t}
                                />
                            </div>
                            <div className='flex space-x-[0.7rem] rtl:space-x-reverse'>
                                <div className='flex-col mt-[0.8rem] w-1/2'>
                                    <Input
                                        field='expiryDate'
                                        label={t("expiryDate")}
                                        labelColor='grayish-cyan'
                                        type='month'
                                        name='expiryDate'
                                        inputHeightSize='h-10'
                                        register={register("expiryDate", {
                                            required: true,
                                        })}
                                        errors={errors}
                                        t={t}
                                    />
                                </div>
                                <div className='flex-col mt-[0.8rem]'>
                                    <Input
                                        field='cvv'
                                        label={t("cvv")}
                                        labelColor='grayish-cyan'
                                        placeholder='***'
                                        type='text'
                                        name='cvv'
                                        inputHeightSize='h-10'
                                        register={register("cvv", {
                                            required: true,
                                            validate: (value) => {
                                                if (
                                                    value.length < 3 ||
                                                    value.length > 3
                                                ) {
                                                    return t(
                                                        "cvvMustBe3Digits"
                                                    );
                                                }
                                            },
                                        })}
                                        errors={errors}
                                        maxLength='3'
                                        t={t}
                                    />
                                </div>
                            </div>
                            <div className='flex-col mt-[0.8rem]'>
                                <Input
                                    field='nameOnCard'
                                    label={t("nameOnCard")}
                                    labelColor='grayish-cyan'
                                    placeholder='Irene Ramos'
                                    type='text'
                                    name='nameOnCard'
                                    inputHeightSize='h-10'
                                    register={register("nameOnCard", {
                                        required: true,
                                    })}
                                    errors={errors}
                                    t={t}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className='flex-col mt-[0.8rem]'>
                                <Select
                                    label={t("country")}
                                    name='country'
                                    labelColor='grayish-cyan'
                                    placeholder='Select'
                                    register={register("country", {
                                        onChange: (e) => {
                                            handleCountryChange(e);
                                        },
                                    })}
                                    options={countries}
                                    heightSize='h-10'
                                />
                            </div>
                            <div className='flex-col mt-[0.8rem]'>
                                <Input
                                    field='zipCode'
                                    label={t("zipCode")}
                                    labelColor='grayish-cyan'
                                    placeholder='17121-1300'
                                    type='text'
                                    name='zipCode'
                                    inputHeightSize='h-10'
                                    register={register("zipCode")}
                                    errors={errors}
                                    t={t}
                                />
                            </div>
                            <div className='flex-col mt-[0.8rem]'>
                                <Select
                                    label={t("city")}
                                    name='city'
                                    labelColor='grayish-cyan'
                                    placeholder='select'
                                    register={register("city")}
                                    options={cities}
                                    heightSize='h-10'
                                />
                            </div>
                            <div className='flex-col mt-[0.8rem]'>
                                <Input
                                    field='address'
                                    label={t("address")}
                                    labelColor='grayish-cyan'
                                    placeholder='509 Adele Mills Suite 833'
                                    type='text'
                                    name='address'
                                    inputHeightSize='h-10'
                                    register={register("address")}
                                    errors={errors}
                                    t={t}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='self-start'>
                    <Button
                        content={t("addCard")}
                        textTransform='capitalize'
                        filled='true'
                        size='large'
                        fontSize='text-sm md:text-xl'
                        radius='md'
                    />
                </div>
            </form>
        </>
    );
}

export default withTranslation("payment")(AddNewCardForm);
