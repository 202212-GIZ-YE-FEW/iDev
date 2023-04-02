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
        inputFontSize = "sm",
        inputFontWeight = "light",
        inputWidthSize = "w-full",
        radius = "md",
        ...rest
    } = props;

    const inputClasses = `${inputWidthSize} border border-solid self-center border-light-gray/30 text-light-black px-[20px] py-[10px] leading-[2.15] min-w-0 text-${inputFontSize} font-${inputFontWeight} rounded-${radius}`;

    return (
        <>
            {label && (
                <label
                    className='  mt-1 whitespace-wrap flex:me-10 text-light-gray/80 font-light flex:self-center'
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
