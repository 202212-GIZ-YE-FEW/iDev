import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "./context/AuthContext";
function Dropdown(prop) {
    const { Logout } = useAuth();
    const { setOpenDropdown, openDropdown, icon, mobile = false, links } = prop;
    return (
        <div
            className='relative z-20'
            onClick={() => {
                setOpenDropdown(!openDropdown);
            }}
        >
            {icon}
            {openDropdown ? (
                <div
                    className={clsx(
                        "w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl",
                        {
                            "absolute start-0 z-20": mobile === false,
                        }
                    )}
                >
                    {links.map((link) => {
                        return link.name === "logout" ? (
                            <Link
                                key={link.name}
                                href=''
                                onClick={Logout}
                                className='block px-4 py-3 text-sm md:text:lg text-gray font-medium capitalize transition-colors duration-300 transform hover:bg-cyan'
                            >
                                {link.name}
                            </Link>
                        ) : (
                            <Link
                                key={link.name}
                                href={link.href}
                                className='block px-4 py-3 text-sm md:text:lg text-gray font-medium capitalize transition-colors duration-300 transform hover:bg-cyan'
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            ) : (
                ""
            )}
        </div>
    );
}
export default Dropdown;
