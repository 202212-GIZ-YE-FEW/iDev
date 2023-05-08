import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { withTranslation } from "next-i18next";
import { useEffect, useState } from "react";

import Dropdown from "@/components/Dropdown";
import Button from "@/components/ui/Button";

import { authenticatedDropdown, langs, navigation } from "@/utils/constants";

import { useAuth } from "./context/AuthContext";

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
    const { openHamburger, setActiveDropdown, activeDropdown, i18n, path, t } =
        prop;
    const { authenticated } = useAuth();
    return (
        <div
            className={`lg:hidden absolute top-0 right-0 h-full w-full z-10 bg-background transform ${
                openHamburger
                    ? "ltr:translate-x-0 rtl:-translate-x-0"
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
            </div>
            {/* Dropdown panel */}
            <div className='container flex flex-col bg-background'>
                {/* Navigation links */}
                {navigation.map((nav) => {
                    return nav.name === "about" ? (
                        <Dropdown
                            activeDropdown={activeDropdown}
                            links={nav.links}
                            item='about'
                            mobile={true}
                            setActiveDropdown={setActiveDropdown}
                            icon={
                                <button className='flex items-center'>
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
                                </button>
                            }
                            t={t}
                        />
                    ) : (
                        <NavLink key={nav.name} to={nav.href}>
                            {t(`${nav.name}`)}
                        </NavLink>
                    );
                })}
                <div className='flex space-s-10'>
                    {/* Langs Dropdown */}
                    <Dropdown
                        activeDropdown={activeDropdown}
                        links={langs}
                        mobile={true}
                        item='langs'
                        to={path}
                        i18n={i18n}
                        setActiveDropdown={setActiveDropdown}
                        icon={
                            <button className='p-2 text-black bg-yellow rounded-md focus:outline-none lg:mx-3'>
                                <Image
                                    priority
                                    src='/lang.svg'
                                    width={23}
                                    height={23}
                                    alt=''
                                />
                            </button>
                        }
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

function Navbar({ t, i18n }) {
    const path = usePathname() || "/";

    const [openHamburger, setOpenHamburger] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const { authenticated, user } = useAuth();
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
                    {/* Hamburger button */}
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
                    <div className='hidden lg:flex items-center text-end'>
                        {/* Navigation links */}
                        {navigation.map((nav) => {
                            return nav.name === "about" ? (
                                <Dropdown
                                    activeDropdown={activeDropdown}
                                    links={nav.links}
                                    item='about'
                                    setActiveDropdown={setActiveDropdown}
                                    icon={
                                        <button className='flex items-center md:mx-2 xl:mx-6'>
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
                                        </button>
                                    }
                                    t={t}
                                />
                            ) : (
                                <NavLink key={nav.name} to={nav.href}>
                                    {t(`${nav.name}`)}
                                </NavLink>
                            );
                        })}
                        {/* Langs Dropdown */}
                        <Dropdown
                            activeDropdown={activeDropdown}
                            links={langs}
                            to={path}
                            item='langs'
                            i18n={i18n}
                            setActiveDropdown={setActiveDropdown}
                            icon={
                                <button className='p-2 text-black bg-yellow rounded-md focus:outline-none lg:mx-2'>
                                    <Image
                                        priority
                                        src='/lang.svg'
                                        width={23}
                                        height={23}
                                        alt=''
                                    />
                                </button>
                            }
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
                            activeDropdown={activeDropdown}
                            links={authenticatedDropdown}
                            item='profile'
                            setActiveDropdown={setActiveDropdown}
                            icon={
                                <button className='mx-2 w-9 max-w-14 max-h-14 rounded-full items-center'>
                                    <Image
                                        className='rounded-full w-full h-full object-cover'
                                        width={14}
                                        height={14}
                                        alt='userImage'
                                        src={photo}
                                    />
                                </button>
                            }
                            t={t}
                        />
                    )}
                </div>
            </div>
            <MobileNav
                openHamburger={openHamburger}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
                i18n={i18n}
                t={t}
                path={path}
            />
        </nav>
    );
}
export default withTranslation("common")(Navbar);
