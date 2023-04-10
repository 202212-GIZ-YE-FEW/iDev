function Dropdown(props) {
    const {
        label,
        placeholder,
        value,
        data,
        // FontSize = "3xl",
        FontWeight = "light",
        WidthSize = "w-full",
        radius = "md",
    } = props;
    const inputClasses = `${WidthSize} border border-solid self-center border-gray-300 px-[20px] py-[10px] min-w-0 text-sm font-${FontWeight} rounded-${radius}`;

    const handleChange = (event) => {
        event.target;
        // onChange(value);
    };
    return (
        <>
            {/* {label && (
                <label className='font-normal   whitespace-nowrap flex:me-10 flex:self-center'>
                    {label}
                </label>
            )} */}

            <select
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className={inputClasses}
            >
                {data?.map((item, key) => {
                    return (
                        <option key={key} value={item.value}>
                            {item.lable}
                        </option>
                    );
                })}
            </select>
        </>
    );
}

export default Dropdown;
