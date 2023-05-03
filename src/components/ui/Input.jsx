import React from "react";

const Input = (props) => {
    const {
        t,
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
        inputHeightSize = "h-auto",
        radius = "md",
        field = "",
        shadow = "sm",
        error,
        className = "",
        suffixIcon,
        ...rest
    } = props;

    const inputClasses = `${inputWidthSize} ${inputHeightSize} border text-base text-light-black border-solid border-light-gray/30 shadow-${shadow} self-center placeholder-light-gray leading-[2.15] px-[20px] py-[10px] min-w-0 text-${inputFontSize} font-${inputFontWeight} rounded-${radius} ${className}`;

    return (
        <>
            {label && (
                <label
                    className={`mt-1 mb-2 whitespace-wrap text-sm md:text-base lg:text-lg flex:me-10 text-${labelColor} font-light flex:self-center capitalize text-sm md:text-base lg:text-lg w-4/12`}
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <div>
                <input
                    onChange={onChange}
                    value={value}
                    name={name}
                    type={type}
                    required={isRequired}
                    placeholder={placeholder}
                    className={inputClasses}
                    {...rest}
                />
                {suffixIcon && (
                    <span className='absolute mt-5 -ms-8 transform -translate-y-1/2 text-sm md:text-base lg:text-lg'>
                        {suffixIcon}
                    </span>
                )}

                {error && (
                    <div className=' text-red text-sm md:text-base mt-1 '>
                        {t(`validation:${error}`, {
                            field: t(`${field}`),
                            count: "3",
                        })}
                    </div>
                )}
            </div>
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
