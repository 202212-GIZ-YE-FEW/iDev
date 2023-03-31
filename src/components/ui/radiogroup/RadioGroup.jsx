import React from "react";
import { Children } from "react";

export default function RadioGroup(props) {
    const { title, children, asButton = false } = props;
    return (
        <div className='p-4'>
            <p className='mb-4 p-2 text-3xl font-normal break-words text-black'>
                {title}
            </p>
            <fieldset className='space-y-4'>
                <div className='text-9xl font-normal text-black'>
                    {Children.map(children, (child) => {
                        return React.cloneElement(child, { asButton });
                    })}
                </div>
            </fieldset>
        </div>
    );
}
