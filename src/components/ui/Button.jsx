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
                `font-normal whitespace-nowrap cursor-pointer ${textTransform} ${fontSize} rounded-${radius}`,
                {
                    "px-[10] md:px-[18px] lg:px-[28px] py-[4.7px]":
                        size === "small",
                    "px-[25px] md:px-[35px] lg:px-[59px] py-[12px] font-medium":
                        size === "large",
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
    radius="md"
/> */
}
