import PropTypes from "prop-types";

function Dropdown(props) {
    const {
        label,
        placeholder,
        value,
        data,
        FontSize = "3xl",
        FontWeight = "light",
        WidthSize = "w-full",
        radius = "md",
        onChange,
    } = props;

    const inputClasses = `${WidthSize} border border-solid self-center border-gray-300 px-[20px] py-[10px] min-w-0 text-${FontSize} font-${FontWeight} rounded-${radius}`;

    const handleChange = (event) => {
        const { value } = event.target;
        onChange(value);
    };
    return (
        <>
            {label && (
                <label className='font-normal   whitespace-nowrap flex:me-10 flex:self-center'>
                    {label}
                </label>
            )}

            <select
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className={inputClasses}
            >
                {data?.map((item, key) => (
                    <option key={key} value={item.value}>
                        {item.lable}
                    </option>
                ))}
            </select>
        </>
    );
}

Dropdown.propTypes = {
    value: PropTypes.string,
    data: PropTypes.array.isRequired,
    styleClass: PropTypes.srting,
    onChange: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
    value: "",
    styleClass: "",
};

export default Dropdown;
