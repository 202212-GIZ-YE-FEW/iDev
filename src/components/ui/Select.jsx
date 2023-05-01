import clsx from "clsx";

function Select(props) {
    const {
        label,
        placeholder,
        value,
        options,
        labelColor = "light-gray",
        fontSize = "xl",
        fontWeight = "light",
        widthSize = "w-full",
        heightSize = "h-auto",
        radius = "md",
        shadow = "sm",
        onChange,
        className = "",
    } = props;

    const inputClasses = clsx(
        `${widthSize} ${heightSize} block border text-sm border-solid self-center text-light-gray border-light-gray/30 px-[10px] min-w-0 font-${fontWeight} rounded-${radius} shadow-${shadow} flex-[2_1_0%] ${className}`,
        {
            [`text-${fontSize}`]: heightSize === "h-auto",
        }
    );

    return (
        <>
            {label && (
                <label
                    className={`mt-1 mb-2 whitespace-wrap text-sm md:text-base lg:text-lg flex:me-10 text-${labelColor} font-light flex:self-center capitalize flex-1`}
                >
                    {label}
                </label>
            )}

            <select
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={inputClasses}
            >
                {options?.map((item, key) => {
                    return (
                        <option key={key} value={item.value}>
                            {item.label}
                        </option>
                    );
                })}
            </select>
        </>
    );
}

export default Select;
