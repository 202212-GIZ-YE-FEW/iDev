export default function Textarea(props) {
    const {
        label,
        placeholder,
        size,
        height = "24",
        radius = "md",
        border = "gray",
        shadow = "md",
        ...rest
    } = props;

    const inputClasses = `block p-2.5 w-full px-4 py-2 text-sm text-gray bg-gray h-${height} ${size} rounded-${radius} placeholder-gray text-gray bg-white border-${border} shadow-${shadow} focus:outline-gray focus:shadow-outline-indigo`;

    return (
        <>
            {label && (
                <label className='block mb-2 text-sm font-medium text-gray'>
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
