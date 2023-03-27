import clsx from "clsx";
export default function Button(prop) {
    const {
        content,
        size = "large",
        filled = "true",
        textTransform = "capitalize",
        fontSize = "xl",
        radius = "6px",
    } = prop;
    return (
        <button
            className={clsx(
                `font-normal cursor-pointer ${textTransform} text-${fontSize} rounded-${radius}`,
                {
                    "px-[28px] py-[4.7px]": size === "small",
                    "px-[59px] py-[12px] font-medium": size === "large",
                    "bg-cyan text-black": filled === "true",
                    "border-2 border-cyan text-cyan": filled === "false",
                }
            )}
        >
            {content}
        </button>
    );
}

// Example of using
{
    /* <Button
    content='login'
    text-transform='uppercase'
    filled='false'
    size='large'
    fontSize="5xl"
    radius="5px"
/> */
}
