function Dropdown(props) {
    const {
        label,
        placeholder,
        value,
        data,
        labelColor = "light-gray",
        FontSize = "xl",
        FontWeight = "light",
        WidthSize = "w-full",
        radius = "md",
        shadow = "sm",
        onChange,
    } = props;

    const inputClasses = `${WidthSize} border border-solid self-center text-light-gray border-light-gray/30 px-[20px] py-[10px] min-w-0 text-${FontSize} font-${FontWeight} rounded-${radius} shadow-${shadow} flex-[2_1_0%]`;

    return (
        <>
            {label && (
                <label
                    className={`mt-1 mb-2 whitespace-wrap text-sm md:text-base lg:text-lg flex:me-10 text-${labelColor} font-light flex:self-center capitalize text-sm md:text-base lg:text-lg flex-1`}
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
                {data?.map((item, key) => {
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

export default Dropdown;
