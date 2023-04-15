import React from "react";
import { Children } from "react";

export default function RadioGroup(props) {
    const { title, children, as = "standard" } = props;
    return (
        <>
            {title && (
                <p className='mb-4 p-2 text:lg md:text-2xl lg:text-3xl font-normal break-words text-black'>
                    {title}
                </p>
            )}
            <fieldset className='space-y-4'>
                <div className='text-9xl font-normal text-black'>
                    {Children.map(children, (child) => {
                        return React.cloneElement(child, { as });
                        // return React.cloneElement(child);
                    })}
                </div>
            </fieldset>
        </>
    );
}
