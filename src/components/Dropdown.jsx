import clsx from "clsx";
import Link from "next/link";
import { useAuth } from "./context/AuthContext";

function Dropdown(prop) {
    const { Logout } = useAuth();
    const {
        icon,
        mobile = false,
        links,
        item,
        setActiveDropdown,
        activeDropdown,
        i18n,
        to = "/",
        t = null,
    } = prop;
    const handleDropdownClick = (dropdownName) => {
        setActiveDropdown(
            activeDropdown === dropdownName ? null : dropdownName
        );
    };
    return (
        <div
            className='relative z-20'
            onClick={() => handleDropdownClick(item)}
        >
            {icon}
            {activeDropdown === item ? (
                <div
                    className={clsx(
                        "w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl",
                        {
                            "absolute end-0 z-20": mobile === false,
                        }
                    )}
                >
                    {item === "langs"
                        ? links?.map((link) => (
                              <Link
                                  key={link.name}
                                  href={to}
                                  className='block px-4 py-3 text-sm md:text:lg text-gray font-medium capitalize transition-colors duration-300 transform hover:bg-cyan'
                                  locale={link.locale}
                                  onClick={() => {
                                      document.dir = link.dir;
                                      i18n.changeLanguage(link.locale);
                                  }}
                              >
                                  {link.name}
                              </Link>
                          ))
                        : links?.map((link) => {
                              return link.name === "logout" ? (
                                  <Link
                                      key={link.name}
                                      href=''
                                      onClick={Logout}
                                      className='block px-4 py-3 text-sm md:text:lg text-gray font-medium capitalize transition-colors duration-300 transform hover:bg-cyan'
                                  >
                                      {t(`${link.name}`)}
                                  </Link>
                              ) : (
                                  <Link
                                      key={link.name}
                                      href={link.href}
                                      className='block px-4 py-3 text-sm md:text:lg text-gray font-medium capitalize transition-colors duration-300 transform hover:bg-cyan'
                                  >
                                      {t(`${link.name}`)}
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
