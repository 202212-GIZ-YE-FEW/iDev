import clsx from "clsx";

export default function RadioInputItem(props) {
    const { id, name, value, checked = false, onChange, title, as } = props;

    const inputProps = {
        id,
        name,
        value,
        checked,
        onChange,
    };

    const labelClassNames = clsx({
        "w-full flex cursor-pointer rounded-md p-4 text-base md:text-xl lg:text-2xl shadow-md border-[1px] border-light-gray/80 hover:border-gray peer-checked:border-none peer-checked:bg-cyan peer-checked:text-white":
            as === "button",
        "w-full py-2 ms-2 text-base lg:text-xl font-medium text-black ps-3":
            as === "standard",
    });

    return (
        <div
            className={clsx("flex items-center", {
                "space-y-4": as === "button",
            })}
        >
            <input
                type='radio'
                {...inputProps}
                className={clsx({
                    "w-5 h-5 bg-black border-black": as === "standard",
                    "peer hidden": as === "button",
                })}
            />
            {title && (
                <label htmlFor={id} className={labelClassNames}>
                    {title}
                </label>
            )}
        </div>
    );
}
