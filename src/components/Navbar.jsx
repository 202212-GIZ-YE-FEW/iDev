import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useState } from "react";

import Button from "@/components/ui/Button";

import { navigation } from "@/constants";
function MobileNav({ openHamburger, setOpenHamburger, t }) {
    return (
        <div
            className={`md:hidden absolute top-0 left-0 h-full w-full z-20 bg-background transform ${
                openHamburger ? "-translate-x-[2px]" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
        >
            <div className='flex items-center justify-between bg-light-cyan h-20 px-4'>
                <Link
                    className='text-2xl font-semibold flex items-center space-s-4'
                    href='/'
                >
                    <span>
                        <svg
                            width='45'
                            height='50'
                            viewBox='0 0 52 57'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                        >
                            <rect
                                width='45'
                                height='50'
                                fill='url(#pattern0)'
                            />
                            <defs>
                                <pattern
                                    id='pattern0'
                                    patternContentUnits='objectBoundingBox'
                                    width='1'
                                    height='1'
                                >
                                    <use
                                        xlinkHref='#image0_279_4996'
                                        transform='matrix(0.00952381 0 0 0.00868839 0 -0.00392648)'
                                    />
                                </pattern>
                                <image
                                    id='image0_279_4996'
                                    width='105'
                                    height='116'
                                    xlinkHref='data:image/png;base64,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'
                                />
                            </defs>
                        </svg>
                    </span>
                    <span className='text-3xl md:text-4xl lg:text-5xl uppercase'>
                        Healing
                    </span>
                </Link>
            </div>
            <div className='flex flex-col px-4'>
                {navigation.map((nav) => {
                    return (
                        <Link
                            key={nav.name}
                            href={nav.href}
                            className='my-4'
                            onClick={() =>
                                setTimeout(() => {
                                    setOpenHamburger(!openHamburger);
                                }, 100)
                            }
                        >
                            {t("about")}
                        </Link>
                    );
                })}
                <Button
                    className='self-center w-fit'
                    content='log in'
                    text-transform='capitalize'
                    filled='true'
                    size='large'
                    fontSize='text-sm md:text-xl'
                    radius='md'
                />
            </div>
        </div>
    );
}

export default function Navbar(prop) {
    const { t } = useTranslation("common");
    const router = useRouter();
    const [openHamburger, setOpenHamburger] = useState(false);
    const [openLangDropdown, setOpenLangDropdown] = useState(false);
    return (
        <nav className='bg-light-cyan'>
            <div className='container flex py-8 h-20 items-center'>
                <MobileNav
                    openHamburger={openHamburger}
                    setOpenHamburger={setOpenHamburger}
                    t={t}
                />
                <div className='w-3/12 flex items-center'>
                    <Link
                        className='text-2xl font-semibold flex items-center space-s-4'
                        href='/'
                    >
                        <svg
                            width='45'
                            height='50'
                            viewBox='0 0 52 57'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                        >
                            <rect
                                width='45'
                                height='50'
                                fill='url(#pattern0)'
                            />
                            <defs>
                                <pattern
                                    id='pattern0'
                                    patternContentUnits='objectBoundingBox'
                                    width='1'
                                    height='1'
                                >
                                    <use
                                        xlinkHref='#image0_279_4996'
                                        transform='matrix(0.00952381 0 0 0.00868839 0 -0.00392648)'
                                    />
                                </pattern>
                                <image
                                    id='image0_279_4996'
                                    width='105'
                                    height='116'
                                    xlinkHref='data:image/png;base64,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'
                                />
                            </defs>
                        </svg>
                        <span className='text-3xl md:text-4xl lg:text-5xl uppercase'>
                            Healing
                        </span>
                    </Link>
                </div>
                <div className='w-9/12 flex justify-end items-center'>
                    <div
                        className='z-50 flex relative w-8 h-5 flex-col justify-between items-center md:hidden'
                        onClick={() => {
                            setOpenHamburger(!openHamburger);
                        }}
                    >
                        {/* hamburger button */}
                        <span
                            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                                openHamburger ? "rotate-45 translate-y-1.5" : ""
                            }`}
                        />
                        <span
                            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
                                openHamburger ? "w-0" : "w-full"
                            }`}
                        />
                        <span
                            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                                openHamburger
                                    ? "-rotate-45 -translate-y-1.5"
                                    : ""
                            }`}
                        />
                    </div>
                    <div className='hidden md:flex items-center md:space-s-5 lg:space-s-10'>
                        {navigation.map((nav) => {
                            return (
                                <Link
                                    key={nav.name}
                                    href={nav.href}
                                    className='md:mx-3 lg:mx-6'
                                >
                                    {t("about")}
                                    {/* {t(`${nav.name}`)} */}
                                </Link>
                            );
                        })}
                        <div
                            className='relative inline-block'
                            onClick={() => {
                                setOpenLangDropdown(!openLangDropdown);
                            }}
                        >
                            <button className='relative z-10 block p-2 text-black bg-yellow border border-transparent rounded-md focus:outline-none'>
                                <svg
                                    fill='none'
                                    height='23'
                                    viewBox='0 0 28 28'
                                    width='23'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        clipRule='evenodd'
                                        d='M14 27.75C21.5939 27.75 27.75 21.5939 27.75 14C27.75 6.40608 21.5939 0.25 14 0.25C6.40608 0.25 0.25 6.40608 0.25 14C0.25 21.5939 6.40608 27.75 14 27.75ZM11.6258 25.2121C9.49226 21.8802 8.30818 18.5222 8.08965 15.1458H2.59824C3.09437 20.1428 6.80075 24.1954 11.6258 25.2121ZM8.08965 12.8542C8.30818 9.47784 9.49226 6.11978 11.6258 2.78795C6.80075 3.80459 3.09437 7.85719 2.59824 12.8542H8.08965ZM19.9104 12.8542C19.6918 9.47784 18.5077 6.11978 16.3742 2.78795C21.1993 3.80459 24.9056 7.85719 25.4018 12.8542H19.9104ZM16.3742 25.2121C18.5077 21.8802 19.6918 18.5222 19.9104 15.1458H25.4018C24.9056 20.1428 21.1993 24.1954 16.3742 25.2121ZM10.3869 12.8542C10.621 9.71035 11.8191 6.54607 14 3.35196C16.1809 6.54607 17.379 9.71035 17.6131 12.8542H10.3869ZM14 24.648C11.8191 21.4539 10.621 18.2896 10.3869 15.1458H17.6131C17.379 18.2896 16.1809 21.4539 14 24.648Z'
                                        fill='black'
                                        fillRule='evenodd'
                                    />
                                </svg>
                            </button>
                            {openLangDropdown ? (
                                <div className='absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl'>
                                    <Link
                                        href={router.pathname}
                                        className='block px-4 py-3 text-sm text-gray capitalize transition-colors duration-300 transform hover:bg-cyan'
                                        locale='en'
                                        dir='ltr'
                                    >
                                        {" "}
                                        English{" "}
                                    </Link>
                                    <Link
                                        href={router.pathname}
                                        className='block px-4 py-3 text-sm text-gray capitalize transition-colors duration-300 transform hover:bg-cyan'
                                        locale='ar'
                                        dir='rtl'
                                    >
                                        {" "}
                                        العربية{" "}
                                    </Link>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                        <Button
                            content='log in'
                            text-transform='capitalize'
                            filled='true'
                            size='small'
                            fontSize='text-sm md:text-lg'
                            radius='md'
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}
