import React from "react";

const Input = (props) => {
    const {
        handleChange,
        value,
        id,
        name,
        type,
        isRequired = false,
        placeholder,
        label,
        inputFontSize = "3xl",
        inputFontWeight = "light",

        ...rest
    } = props;

    const inputClasses = `border border-solid border-gray-300 px-[20px] py-[20px]  text-${inputFontSize} font-${inputFontWeight}`;

    return (
        <>
            {label && <label htmlFor={rest.id || rest.name}>{label}</label>}
            <input
                onChange={handleChange}
                value={value}
                id={id}
                name={name}
                type={type}
                required={isRequired}
                placeholder={placeholder}
                className={inputClasses}
            />
        </>
    );
};
export default Input;

// Example of using
{
    /* <Input
label="email"
 type="name"
 name="name"
 placeholder="name"
 inputWidthSize="100px" 
 inputHightSize="40px"

/> */
}
