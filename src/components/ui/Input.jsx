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
        position = "top",
        labelFontSize = "5xl",
        labelFontWeight = "normal",
        radius = "md",
        inputWidthSize = "",
        inputHightSize = "",
        inputFontSize = "3xl",
        inputFontWeight = "light",

        ...rest
    } = props;

    const inputContainerClasses =
        position === "left" || position === "right"
            ? "flex items-center "
            : "block ";

    const inputClasses = `border border-solid border-gray-300 px-[20px] py-[20px] rounded-${radius} 
    ${inputWidthSize ? `w-${inputWidthSize} ` : ""} ${
        inputHightSize ? `h-${inputHightSize} ` : ""
    } 
  
  text-${inputFontSize} font-${inputFontWeight}`;

    const inputStyles = {
        width: inputWidthSize,
        height: inputHightSize,
    };
    return (
        <div className={` ${inputContainerClasses}`}>
            {label && (
                <label
                    htmlFor={rest.id || rest.name}
                    className={`font-poppins font-normal  text-${labelFontSize} ${
                        position === "left" ? "mr-10 " : "mb-2"
                    } font-${labelFontWeight} flex items-center `}
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
                style={inputStyles}
            />
        </div>
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
 labelFontWeight="normal"

/> */
}
