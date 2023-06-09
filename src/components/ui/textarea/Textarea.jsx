export default function Textarea(props) {
    const {
        label,
        placeholder,
        size,
        labelColor = "gray",
        height = "24",
        radius = "md",
        border = "light-gray/30",
        shadow = "sm",
        error,
        touched,
        t,
        ...rest
    } = props;

    const inputClasses = `
    block p-2.5 w-full px-4 py-2 text-base text-gray bg-gray
    h-${height} ${size} rounded-${radius} placeholder-light-gray text-gray bg-white resize-none
    border-${border} shadow-${shadow} border-[1px]
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
            {error && touched && (
                <div className='text-red text-sm md:text-base mt-1'>
                    {t(`validation:${error}`, {
                        field: t(`${label}`),
                        count: "10",
                    })}
                </div>
            )}
        </>
    );
}
