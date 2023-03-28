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
        inputWidthSize = "w-full",
        radius = "md",
        ...rest
    } = props;

    const inputClasses = `${inputWidthSize} border border-solid self-center border-gray-300 px-[20px] py-[10px] min-w-0 text-${inputFontSize} font-${inputFontWeight} rounded-${radius}`;

    return (
        <>
            {label && (
                <label
                    className='font-normal   whitespace-nowrap flex:me-10 flex:self-center'
                    htmlFor={rest.id || rest.name}
                >
                    {label}
                </label>
            )}
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
 inputWidthSize="w-full" 


/> */
}
