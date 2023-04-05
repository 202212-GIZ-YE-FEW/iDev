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
    block p-2.5 w-full px-4 py-2 text-sm text-gray bg-gray
    h-${height} ${size} rounded-${radius} placeholder-gray text-gray bg-white resize-none
    border-${border} shadow-${shadow} focus:outline-none border-[1px] border-light-gray/60
    `;

    return (
        <>
            {label && (
                <label
                    className={`block mb-2 text-sm font-medium text-${labelColor}`}
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
