import Head from "next/head";
import Image from "next/image";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";

import "react-multi-carousel/lib/styles.css";

import PageIntro from "@/components/PageIntro";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

import getCitiesOfCountry from "@/utils/city";
import getAllCountries from "@/utils/country";

import MasterCardCopySVG from "/public/images/master-card-copy.svg";
import VisaCardCopySVG from "/public/images/visa-card-copy.svg";

function AddNewCard({ t }) {
    const [cities, setCities] = useState([]);
    const countries = getAllCountries().map((country) => ({
        value: country.isoCode,
        label: country.name,
    }));

    const [formData, setFormData] = useState({});
    const [formErrors, setFormErrors] = useState({});

    const {
        cardNumber = "cardNumber",
        expiryDate = "expiryDate",
        cvv = "cvv",
        nameOnCard = "nameOnCard",
        country = "country",
        zipCode = "zipCode",
        city = "city",
        address = "address",
    } = {};

    const handleCountryChange = (e) => {
        const countryName = e.target.value;
        const cities = getCitiesOfCountry(countryName).map((city) => ({
            value: city.name,
            label: city.name,
        }));
        setCities(cities);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const cardType = (cardNumber) => {
        if (!cardNumber) {
            return null;
        }
        if (cardNumber.startsWith("4")) {
            return <FaCcVisa />;
        } else if (cardNumber.startsWith("5")) {
            return <FaCcMastercard />;
        } else {
            return <BsFillCreditCardFill />;
        }
    };

    const handleCardNumberChange = (e) => {
        const { value } = e.target;
        const cardNumber = value
            .replace(/\s+/g, "")
            .replace(/[^0-9]/gi, "")
            .replace(/\s/g, "")
            .match(/.{1,4}/g)
            ?.join(" ");
        setFormData({ ...formData, cardNumber });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Head>
                <title>{t("payment:addNewPaymentMethod")}</title>
            </Head>
            <div className='container mt-12'>
                <PageIntro
                    title={t("addCardDetails")}
                    subtitle={t("addCardDetailsDesc")}
                />
                <div className='grid grid-cols-1 xl:grid-cols-2 my-10'>
                    <form
                        autoComplete='off'
                        className='flex flex-col md:flex-row md:justify-between xl:flex-col gap-x-5 mb-16 gap-y-6'
                        onSubmit={handleSubmit}
                    >
                        <div className='min-w-fit md:min-w-[25rem] lg:min-w-[30rem]'>
                            <div className='grid grid-cols-1 xl:grid-cols-2 my-10 gap-24'>
                                <div className='flex flex-col gap-5'>
                                    <div className='flex-col mt-[0.8rem] mb-2'>
                                        <span className='mb-2 whitespace-wrap md:text-base lg:text-lg flex:me-10 text-light-gray font-light flex:self-center capitalize text-sm flex-1'>
                                            {t("supportedCardTypes")}
                                        </span>
                                        <div className='flex mt-1'>
                                            <div className='w-full border border-cyan px-5 rounded-md rounded-e-none text-center'>
                                                <span className='mt-1 mb-2 whitespace-wrap md:text-base lg:text-lg text-cyan'>
                                                    Visa
                                                </span>
                                            </div>
                                            <div className='w-full border border-cyan px-5 rounded-md rounded-s-none text-center'>
                                                <span className='mt-1 mb-2 whitespace-wrap md:text-base lg:text-lg text-cyan'>
                                                    Mastercard
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex-col mt-[0.8rem]'>
                                        <Input
                                            field={cardNumber}
                                            label={t("cardNumber")}
                                            placeholder='4287  8874 9511 3263'
                                            type='text'
                                            name='cardNumber'
                                            inputHeightSize='h-10'
                                            value={formData.cardNumber || ""}
                                            onChange={handleCardNumberChange}
                                            error={formErrors.cardNumber}
                                            maxLength='19'
                                            suffixIcon={cardType(
                                                formData.cardNumber
                                            )}
                                            t={t}
                                        />
                                    </div>
                                    <div className='flex space-x-[0.7rem] rtl:space-x-reverse'>
                                        <div className='flex-col mt-[0.8rem] w-1/2'>
                                            <Input
                                                field='Expiry Date'
                                                label={t("expiryDate")}
                                                type='month'
                                                name='expiryDate'
                                                inputHeightSize='h-10'
                                                value={
                                                    formData.expiryDate || ""
                                                }
                                                onChange={handleInputChange}
                                                error={formErrors.expiryDate}
                                                t={t}
                                            />
                                        </div>
                                        <div className='flex-col mt-[0.8rem]'>
                                            <Input
                                                field='CVV'
                                                label={t("cvv")}
                                                placeholder='***'
                                                type='text'
                                                name='cvv'
                                                inputHeightSize='h-10'
                                                value={formData.cvv || ""}
                                                onChange={handleInputChange}
                                                error={formErrors.cvv}
                                                maxLength='3'
                                                t={t}
                                            />
                                        </div>
                                    </div>
                                    <div className='flex-col mt-[0.8rem]'>
                                        <Input
                                            field='Name on Card'
                                            label={t("nameOnCard")}
                                            placeholder='Irene Ramos'
                                            type='text'
                                            name='nameOnCard'
                                            inputHeightSize='h-10'
                                            value={formData.nameOnCard || ""}
                                            onChange={handleInputChange}
                                            error={formErrors.nameOnCard}
                                            t={t}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <div className='flex-col mt-[0.8rem]'>
                                        <Select
                                            label={t("country")}
                                            placeholder='select'
                                            options={countries}
                                            heightSize='h-10'
                                            onChange={handleCountryChange}
                                        />
                                    </div>
                                    <div className='flex-col mt-[0.8rem]'>
                                        <Input
                                            field='ZIP Code'
                                            label={t("zipCode")}
                                            placeholder='17121-1300'
                                            type='text'
                                            name='zipCode'
                                            inputHeightSize='h-10'
                                            value={formData.zipCode || ""}
                                            onChange={handleInputChange}
                                            error={formErrors.zipCode}
                                            t={t}
                                        />
                                    </div>
                                    <div className='flex-col mt-[0.8rem]'>
                                        <Select
                                            label={t("city")}
                                            placeholder='select'
                                            options={cities}
                                            heightSize='h-10'
                                        />
                                    </div>
                                    <div className='flex-col mt-[0.8rem]'>
                                        <Input
                                            field='Address'
                                            label={t("address")}
                                            placeholder='509 Adele Mills Suite 833'
                                            type='text'
                                            name='address'
                                            inputHeightSize='h-10'
                                            value={formData.address || ""}
                                            onChange={handleInputChange}
                                            error={formErrors.address}
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
                    <div className='grid md:grid-cols-2 xl:grid-cols-1 gap-10'>
                        <div className='mx-auto max-w-[28rem]'>
                            <Image
                                data-aos='zoom-in-up'
                                src={MasterCardCopySVG}
                                alt='Master Card Copy'
                            />
                            <Image
                                data-aos='zoom-in-up'
                                src={VisaCardCopySVG}
                                alt='Visa Card Copy'
                            />
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
            ...(await serverSideTranslations(locale, ["common", "payment"])),
        },
    };
}
export default withTranslation(["payment"])(AddNewCard);
