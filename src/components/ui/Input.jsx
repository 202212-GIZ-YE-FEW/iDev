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
        inputFontSize = "sm",
        inputFontWeight = "light",
        inputWidthSize = "w-full",
        radius = "md",
        error,
        t,
    } = props;

    const inputClasses = `${inputWidthSize} border border-solid self-center border-light-gray/30 text-light-black px-[20px] py-[10px] leading-[2.15] min-w-0 text-${inputFontSize} font-${inputFontWeight} rounded-${radius}`;

    return (
        <>
            {label && (
                <label
                    className='  mt-1 whitespace-wrap flex:me-10 text-light-gray/80 font-light flex:self-center'
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                onChange={onChange}
                value={value}
                name={name}
                type={type}
                required={isRequired}
                placeholder={placeholder}
                className={inputClasses}
            />
            {error && (
                <div className='text-red text-sm md:text-base mt-1'>
                    {t(`validation:${error}`, {
                        field: t(`${label}`),
                        count: "3",
                    })}
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
