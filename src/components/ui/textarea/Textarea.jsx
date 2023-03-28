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

    const inputClasses = `block p-2.5 w-full px-4 py-2 text-sm text-gray-900 bg-gray-50 h-${height} ${size} rounded-${radius} rounded-md placeholder-gray-400 text-gray-700 bg-white border-${border} shadow-${shadow} focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-gray focus:shadow-outline-indigo`;

    return (
        <>
            {label && (
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
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
