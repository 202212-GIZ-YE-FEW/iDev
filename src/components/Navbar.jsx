import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { withTranslation } from "next-i18next";
import { useState, useEffect } from "react";

import Dropdown from "@/components/Dropdown";
import Button from "@/components/ui/Button";

import { authenticatedDropdown, navigation } from "@/utils/constants";

import { useAuth } from "./context/AuthContext";
function LangDropdown(props) {
    const { setOpenLangDropdown, openLangDropdown, to } = props;
    const router = useRouter();
    const query = router.query;

    return (
        <div
            className='relative inline-block'
            onClick={() => {
                setOpenLangDropdown(!openLangDropdown);
            }}
        >
            <button className='relative z-10 block p-2 text-black bg-yellow rounded-md focus:outline-none mx-3'>
                <Image priority src='/lang.svg' width={23} height={23} alt='' />
            </button>
            {openLangDropdown ? (
                <div className='absolute start-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl'>
                    <Link
                        href={{
                            pathname: to,
                            query: query,
                        }}
                        className='block px-4 py-3 text-sm md:text:lg text-gray font-medium capitalize transition-colors duration-300 transform hover:bg-cyan'
                        locale='en'
                        onClick={() => (document.dir = "ltr")}
                    >
                        English
                    </Link>
                    <Link
                        href={{
                            pathname: to,
                            query: query,
                        }}
                        className='block px-4 py-3 text-sm md:text:lg text-gray font-medium capitalize transition-colors duration-300 transform hover:bg-cyan'
                        locale='ar'
                        onClick={() => (document.dir = "rtl")}
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
            className={clsx(
                "my-4 lg:my-0 lg:mx-2 xl:mx-5 text-md lg:text-md xl:text-lg relative hover:text-yellow",
                {
                    "text-yellow font-semibold underline": usePathname() === to,
                }
            )}
        >
            {children}
        </Link>
    );
}
function MobileNav(prop) {
    const [photo, uploadimg] = useState("");
    const {
        openHamburger,
        setOpenHamburger,
        openLangDropdown,
        openAuthenticatedDropdown,
        setOpenAuthenticatedDropdown,
        setOpenLangDropdown,
        openAboutDropdown,
        setOpenAboutDropdown,
        to,
        t,
    } = prop;
    const { authenticated } = useAuth();
    return (
        <div
            className={`lg:hidden absolute top-0 right-0 h-full w-full z-10 bg-background transform ${
                openHamburger
                    ? "ltr:translate-x-0 rtl:-translate-x-0 opacity-100"
                    : "hidden"
            } transition-transform duration-300 ease-in-out`}
        >
            <div className='container flex items-center bg-light-cyan h-20'>
                {/* Logo */}
                <div className='flex items-center'>
                    <Link
                        className='text-2xl font-semibold flex items-center space-s-4'
                        href='/'
                    >
                        <Image
                            priority
                            src='/logo.svg'
                            alt='Healing Logo'
                            width={30}
                            height={30}
                        />
                        <span className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase'>
                            Healing
                        </span>
                    </Link>
                </div>
                {/* {authenticated && (
                    <Dropdown
                        openDropdown={
                            openAuthenticatedDropdown
                        }
                        links={authenticatedDropdown}
                        name="profile"
                        setOpenDropdown={
                            setOpenAuthenticatedDropdown
                        }
                        icon={
                            (
                                <div className='m-4 w-14 h-14 rounded-full text-center '>
                                    <Image
                                        className='rounded-full w-full h-full object-contain'
                                        width={14}
                                        height={14}
                                        alt='userImage'
                                        src={photo}
                                    />
                                </div>
                            )
                        }
                    />
                )} */}
            </div>
            {/* Dropdown panel */}
            <div className='container flex flex-col bg-background'>
                {navigation.map((nav) => {
                    return nav.name === "about" ? (
                        <Dropdown
                            openDropdown={openAboutDropdown}
                            links={nav.links}
                            setOpenDropdown={setOpenAboutDropdown}
                            icon={
                                <div className='flex'>
                                    <Image
                                        priority
                                        src='/arrow.svg'
                                        width={15}
                                        height={15}
                                        alt=''
                                    />
                                    <span className='inline-block ms-1'>
                                        {t(`${nav.name}`)}
                                    </span>
                                </div>
                            }
                        />
                    ) : (
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
                        to={to}
                    />
                    {!authenticated && (
                        <Link href='/login'>
                            <Button
                                content={t("login")}
                                textTransform='capitalize'
                                filled='true'
                                size='large'
                                fontSize='text-sm md:text-xl'
                                radius='md'
                            />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

function Navbar({ t }) {
    const path = usePathname();
    const [openHamburger, setOpenHamburger] = useState(false);
    const [openLangDropdown, setOpenLangDropdown] = useState(false);
    const [openAboutDropdown, setOpenAboutDropdown] = useState(false);
    const { authenticated, user } = useAuth();
    const [openAuthenticatedDropdown, setOpenAuthenticatedDropdown] =
        useState(false);
    const [photo, uploadimg] = useState("");

    useEffect(() => {
        uploadimg(user.photoURL);
    }, [user]);
    return (
        <nav className='bg-light-cyan'>
            <div className='container flex h-20 py-8 items-center'>
                {/* Logo */}
                <div className='w-4/12 flex items-center'>
                    <Link
                        className='text-2xl font-semibold flex items-center space-s-4'
                        href='/'
                    >
                        <Image
                            priority
                            src='/logo.svg'
                            alt='Healing Logo'
                            width={30}
                            height={30}
                        />
                        <span className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase'>
                            Healing
                        </span>
                    </Link>
                </div>
                <div className='w-8/12 justify-end flex items-center'>
                    {/* hamburger button */}
                    <div
                        className='flex relative z-20 order-last w-8 h-5 flex-col justify-between items-center lg:hidden'
                        onClick={() => setOpenHamburger(!openHamburger)}
                    >
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
                    <div className='hidden lg:flex items-center'>
                        {navigation.map((nav) => {
                            return nav.name === "about" ? (
                                <Dropdown
                                    openDropdown={openAboutDropdown}
                                    links={nav.links}
                                    setOpenDropdown={setOpenAboutDropdown}
                                    icon={
                                        <div className='flex'>
                                            <Image
                                                priority
                                                src='/arrow.svg'
                                                width={15}
                                                height={15}
                                                alt=''
                                            />
                                            <span className='inline-block ms-1'>
                                                {t(`${nav.name}`)}
                                            </span>
                                        </div>
                                    }
                                />
                            ) : (
                                <NavLink key={nav.name} to={nav.href}>
                                    {t(`${nav.name}`)}
                                </NavLink>
                            );
                        })}
                        <LangDropdown
                            setOpenLangDropdown={setOpenLangDropdown}
                            openLangDropdown={openLangDropdown}
                            to={path}
                        />
                        {!authenticated && (
                            <Link href='/login'>
                                <Button
                                    content={t("login")}
                                    text-transform='capitalize'
                                    filled='true'
                                    size='small'
                                    fontSize='text-sm md:text-base'
                                    radius='md'
                                    interaction='transform hover:bg-yellow transition hover:scale-75 active:bg-cyan focus:outline-none focus:ring focus:ring-cyan'
                                />
                            </Link>
                        )}
                    </div>
                    {/* Dropdown for authenticated user */}
                    {authenticated && (
                        <Dropdown
                            openDropdown={openAuthenticatedDropdown}
                            links={authenticatedDropdown}
                            name='profile'
                            setOpenDropdown={setOpenAuthenticatedDropdown}
                            icon={
                                <div className='m-4 w-14 h-14 rounded-full text-center '>
                                    <Image
                                        className='rounded-full w-full h-full object-contain'
                                        width={14}
                                        height={14}
                                        alt='userImage'
                                        src={photo}
                                    />
                                </div>
                            }
                        />
                    )}
                </div>
            </div>
            <MobileNav
                openHamburger={openHamburger}
                setOpenHamburger={setOpenHamburger}
                setOpenLangDropdown={setOpenLangDropdown}
                openLangDropdown={openLangDropdown}
                openAboutDropdown={openAboutDropdown}
                setOpenAboutDropdown={setOpenAboutDropdown}
                to={path}
                t={t}
            />
        </nav>
    );
}
export default withTranslation("common")(Navbar);
