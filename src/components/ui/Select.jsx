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
        `${widthSize} ${heightSize} border text-base text-light-black border-solid border-light-gray/30 shadow-${shadow} self-center placeholder-light-gray leading-[2.15] px-[20px] py-[10px] min-w-0 text-${widthSize} font-${fontWeight} rounded-${radius} ${className}`,
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
