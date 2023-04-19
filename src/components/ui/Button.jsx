import clsx from "clsx";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Button(props) {
    const {
        content,
        size = "large",
        filled = "true",
        textTransform = "capitalize",
        fontSize = "xl",
        radius = "6px",
        shadow = "",
        onClick,
        disabled = false,
    } = props;
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 0,
        });
    }, []);
    return (
        <button
            data-aos='fade-right'
            disabled={disabled}
            onClick={onClick}
            className={clsx(
                `transform hover:bg-yellow transition duration-500 hover:scale-75 hover:animate-bounce
                active:bg-cyan focus:outline-none focus:ring focus:ring-cyan
                font-normal whitespace-nowrap cursor-pointer ${shadow} ${textTransform} ${fontSize} rounded-${radius}`,
                {
                    "px-[10px] lg:px-[28px] py-[4.7px]": size === "small",
                    /// for medium size button
                    "px-[15px] md:px-[25px] lg:px-[35px] py-[7px]":
                        size === "medium",
                    "px-[25px] md:px-[35px] py-[8px] font-medium":
                        size === "large",
                    "bg-cyan text-black ": filled === "true",
                    "border-2 border-cyan text-cyan": filled === "false",
                    "bg-light-gray text-gray": disabled === true,
                }
            )}
        >
            {content}
        </button>
    );
}
// Example of using
/* <Button
content='book an appointment'
textTransform='uppercase'
filled='true'
size='large'
fontSize='text-lg md:text-xl lg:text-2xl'
radius='md'
/> */
