export default function Textarea(props) {
    const {
        label,
        placeholder,
        size,
        labelColor = "gray",
        height = "24",
        radius = "md",
        border = "gray",
        shadow = "sm",
        ...rest
    } = props;

    const inputClasses = `
    block p-2.5 w-full px-4 py-2 text-base text-gray bg-gray
    h-${height} ${size} rounded-${radius} placeholder-light-gray text-gray bg-white resize-none
    border-${border} shadow-${shadow} focus:outline-none border-[1px]
    `;

    return (
        <>
            {label && (
                <label
                    className={`block mb-2 font-medium text-sm md:text-base lg:text-lg text-${labelColor} capitalize`}
                >
                    {label}
                </label>
            )}
            <textarea
                className={inputClasses}
                placeholder={placeholder}
                {...rest}
            />
        </>
    );
}
