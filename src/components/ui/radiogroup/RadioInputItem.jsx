import clsx from "clsx";

export default function RadioInputItem(props) {
    const {
        id,
        name,
        value,
        checked = false,
        onChange,
        title,
        asButton,
    } = props;

    const inputProps = {
        id,
        name,
        value,
        checked,
        onChange,
    };

    const labelClassNames = clsx({
        "w-full flex cursor-pointer rounded-md p-4 text-3xl shadow-md border-[1px] border-light-gray/80 hover:border-gray peer-checked:border-none peer-checked:bg-cyan peer-checked:text-white":
            asButton,
        "w-full py-2 ms-2 text-xl font-medium text-black ps-3": !asButton,
    });

    return (
        <div
            className={clsx("flex items-center", {
                "space-y-4": asButton,
            })}
        >
            <input
                type='radio'
                {...inputProps}
                className={clsx({
                    "w-5 h-5 bg-black border-black": !asButton,
                    "peer hidden": asButton,
                })}
            />
            {title && (
                <label htmlFor={id} className={labelClassNames}>
                    {title} {asButton}
                </label>
            )}
        </div>
    );
}
