import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useState } from "react";

import Button from "@/components/ui/Button";

import { navigation } from "@/constants";

function LangDropdown(prop) {
    const onChangeDir = (locale) => {
        document.dir = locale === "en" ? "ltr" : "rtl";
    };
    const { setOpenLangDropdown, openLangDropdown, router } = prop;
    return (
        <div
            className='relative inline-block'
            onClick={() => {
                setOpenLangDropdown(!openLangDropdown);
            }}
        >
            <button className='relative z-10 block p-2 text-black bg-yellow border border-transparent rounded-md focus:outline-none mx-3'>
                <Image priority src='/lang.svg' width={23} height={23} alt='' />
            </button>
            {openLangDropdown ? (
                <div className='absolute start-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl'>
                    <Link
                        href={router.pathname}
                        className='block px-4 py-3 text-sm md:text:lg text-gray font-medium capitalize transition-colors duration-300 transform hover:bg-cyan'
                        locale='en'
                        onClick={() => onChangeDir("en")}
                    >
                        English
                    </Link>
                    <Link
                        href={router.pathname}
                        className='block px-4 py-3 text-sm md:text:lg text-gray font-medium capitalize transition-colors duration-300 transform hover:bg-cyan'
                        locale='ar'
                        onClick={() => onChangeDir("ar")}
                    >
                        العربية
                    </Link>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

function NavLink({ to, children }) {
    return (
        <Link
            href={to}
            className='my-4 md:my-0 md:mx-2 lg:mx-4 xl:mx-5 text-md md:text-md lg:text-lg'
        >
            {children}
        </Link>
    );
}
function MobileNav(prop) {
    const {
        openHamburger,
        setOpenHamburger,
        openLangDropdown,
        setOpenLangDropdown,
        router,
        t,
    } = prop;
    return (
        <div
            className={`md:hidden absolute top-0 right-0 h-full w-full z-20 bg-background transform ${
                openHamburger
                    ? "-translate-x-0"
                    : "ltr:-translate-x-full rtl:translate-x-full "
            } transition-transform duration-300 ease-in-out`}
        >
            <div className='flex items-center justify-between bg-light-cyan h-20 px-4'>
                <Link
                    className='text-2xl font-semibold flex items-center space-s-4'
                    href='/'
                >
                    <Image
                        priority
                        src='/logo.svg'
                        alt='Healing Logo'
                        width={35}
                        height={35}
                    />
                    <span className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase'>
                        Healing
                    </span>
                </Link>
            </div>
            <div className='flex flex-col px-4'>
                {navigation.map((nav) => {
                    return (
                        <NavLink
                            key={nav.name}
                            to={nav.href}
                            onClick={() =>
                                setTimeout(() => {
                                    setOpenHamburger(!openHamburger);
                                }, 100)
                            }
                        >
                            {t(`${nav.name}`)}
                        </NavLink>
                    );
                })}
                <div className='flex space-s-10'>
                    <LangDropdown
                        setOpenLangDropdown={setOpenLangDropdown}
                        openLangDropdown={openLangDropdown}
                        router={router}
                    />
                    <Button
                        content={t("login")}
                        text-transform='capitalize'
                        filled='true'
                        size='large'
                        fontSize='text-sm md:text-xl'
                        radius='md'
                    />
                </div>
            </div>
        </div>
    );
}

export default function Navbar() {
    const { t } = useTranslation("common");
    const router = useRouter();
    const [openHamburger, setOpenHamburger] = useState(false);
    const [openLangDropdown, setOpenLangDropdown] = useState(false);
    return (
        <nav className='bg-light-cyan'>
            <div className='container flex h-20 py-8 items-center'>
                <MobileNav
                    openHamburger={openHamburger}
                    setOpenHamburger={setOpenHamburger}
                    setOpenLangDropdown={setOpenLangDropdown}
                    openLangDropdown={openLangDropdown}
                    router={router}
                    t={t}
                />
                <div className='w-3/12 flex items-center'>
                    <Link
                        className='text-2xl font-semibold flex items-center space-s-4'
                        href='/'
                    >
                        <Image
                            priority
                            src='/logo.svg'
                            alt='Healing Logo'
                            width={40}
                            height={40}
                        />
                        <span className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase'>
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
                                openHamburger ? "hidden" : "w-full"
                            }`}
                        />
                        <span
                            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                                openHamburger
                                    ? "-rotate-45 -translate-y-2.5"
                                    : ""
                            }`}
                        />
                    </div>
                    <div className='hidden md:flex items-center'>
                        {navigation.map((nav) => {
                            return (
                                <NavLink key={nav.name} to={nav.href}>
                                    {t(`${nav.name}`)}
                                </NavLink>
                            );
                        })}
                        <LangDropdown
                            setOpenLangDropdown={setOpenLangDropdown}
                            openLangDropdown={openLangDropdown}
                            router={router}
                        />
                        <Link href='/signup'>
                            <Button
                                content={t("login")}
                                text-transform='capitalize'
                                filled='true'
                                size='small'
                                fontSize='text-sm md:text-lg'
                                radius='md'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
