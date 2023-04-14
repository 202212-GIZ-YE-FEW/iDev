function Dropdown(props) {
    const {
        label,
        placeholder,
        value,
        data,
        FontSize = "1xl",
        FontWeight = "light",
        WidthSize = "w-full",
        radius = "md",
        onChange,
    } = props;

    const inputClasses = `${WidthSize} border border-solid self-center text-light-gray border-gray-300 px-[20px] py-[10px] min-w-0 text-${FontSize} font-${FontWeight} rounded-${radius}`;

    const handleChange = (event) => {
        const { value } = event.target;
        onChange(value);
    };

    return (
        <>
            {label && (
                <label className='font-normal text-light-gray  whitespace-nowrap flex:me-10 flex:self-center'>
                    {label}
                </label>
            )}

            <select
                value={value}
                onChange={handleChange}
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
