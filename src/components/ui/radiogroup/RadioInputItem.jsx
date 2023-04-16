import clsx from "clsx";

export default function RadioInputItem(props) {
    const { id, name, value, checked = false, onChange, content, as } = props;

    const inputProps = {
        id,
        name,
        value,
        checked,
        onChange,
    };

    const labelClassNames = clsx({
        "w-full py-2 ms-2 text-base lg:text-xl font-medium text-black ps-3":
            as === "standard",
        "w-full flex cursor-pointer rounded-md p-4 text-base md:text-xl lg:text-2xl shadow-md border-[1px] border-light-gray/80 hover:border-gray peer-checked:border-none peer-checked:bg-cyan peer-checked:text-white":
            as === "button",
        "block w-full h-full cursor-pointer peer-checked:border-[5px] peer-checked:border-cyan peer-checked:border-dashed peer-checked:rounded-lg":
            as === "card",
    });

    return (
        <div
            className={clsx("", {
                "flex items-center": as === "standard",
                "flex items-center space-y-4": as === "button",
                "h-full rounded-md min-h-[14rem]": as === "card",
            })}
        >
            <input
                type='radio'
                {...inputProps}
                className={clsx({
                    "w-5 h-5 bg-black border-black": as === "standard",
                    "peer hidden": as === "button" || as === "card",
                })}
            />
            {content && (
                <label htmlFor={id} className={labelClassNames}>
                    {content}
                </label>
            )}
        </div>
    );
}
