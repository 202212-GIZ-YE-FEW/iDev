import React from "react";

const Input = (props) => {
    const {
        onChange,
        value,
        id,
        name,
        type,
        isRequired = false,
        placeholder,
        label,
        labelColor = "light-gray",
        inputFontSize = "sm",
        inputFontWeight = "light",
        inputWidthSize = "w-full",
        radius = "md",
        shadow = "sm",
        border = "gray",
        error,
    } = props;

    const inputClasses = `${inputWidthSize} border text-base text-gray border-solid border-${border} shadow-${shadow} self-center placeholder-light-gray px-[20px] py-[10px] min-w-0 text-${inputFontSize} font-${inputFontWeight} rounded-${radius}`;

    return (
        <>
            {label && (
                <label
                    className={`mt-1 mb-2 whitespace-wrap text-sm md:text-base lg:text-lg flex:me-10 text-${labelColor} font-light flex:self-center capitalize text-sm md:text-base lg:text-lg`}
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                onChange={onChange}
                value={value}
                id={id}
                name={name}
                type={type}
                required={isRequired}
                placeholder={placeholder}
                className={inputClasses}
            />
            {error && (
                <div className='text-red text-sm md:text-base mt-1'>
                    {error}
                </div>
            )}
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
