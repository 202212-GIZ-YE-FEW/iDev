import clsx from "clsx";
import React from "react";

const Input = (props) => {
    const {
        t,
        onChange,
        value,
        register,
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
        errors,
        className = "",
        suffixIcon,
        ...rest
    } = props;

    const inputClasses = `${inputWidthSize} ${inputHeightSize} border text-base text-light-black border-solid border-light-gray/30 shadow-${shadow} self-center placeholder-light-gray leading-[2.15] px-[20px] py-[10px] min-w-0 text-${inputFontSize} font-${inputFontWeight} rounded-${radius} ${className}`;

    return (
        <>
            {label && (
                <label
                    className={`mt-1 mb-2 whitespace-wrap text-sm md:text-base lg:text-lg flex:me-10 text-${labelColor} font-light flex:self-center capitalize text-sm md:text-base lg:text-lg flex-1`}
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                value={value}
                name={name}
                type={type}
                required={isRequired}
                placeholder={placeholder}
                className={clsx(
                    `${inputClasses}`,
                    errors &&
                        errors[name] &&
                        errors[name].type === "required" &&
                        "border-red"
                )}
                onChange={register ? register.onChange : onChange}
                onBlur={register ? register.onBlur : undefined}
                ref={register ? register.ref : undefined}
                {...rest}
            />
            {suffixIcon && (
                <span className='absolute mt-5 -ms-8 transform -translate-y-1/2 text-sm md:text-base lg:text-lg'>
                    {suffixIcon}
                </span>
            )}
            {errors && errors[name] && errors[name].message && (
                <span
                    className='text-red text-sm md:text-base mt-1'
                    role='alert'
                >
                    {errors[name].message}
                </span>
            )}
            {error && (
                <div className='text-red text-sm md:text-base mt-1'>
                    {t(`validation:${error}`, {
                        field: t(`${field}`),
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
