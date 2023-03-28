import { React, useState } from "react";

import Button from "./ui/Button";

function Stepper({ steps, currentStep }) {
    const [current, setCurrent] = useState(currentStep);
    const nextStep = () => {
        if (current < steps.length - 1) {
            setCurrent(current + 1);
        }
    };

    const prevStep = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    };

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='max-w-sm p-6 border-gray rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                {steps.map((step, index) => {
                    return (
                        <div
                            key={index}
                            className={`${
                                current === index ? "block" : "hidden"
                            } w-full h-full p-4 text-center`}
                        >
                            <h1 className='text-4xl font-bold'>{step.title}</h1>
                            <p className='text-xl'>{step.content}</p>
                        </div>
                    );
                })}
                <div className='flex flex-row gap-4'>
                    {current > 0 && (
                        <Button
                            content='Prev'
                            onClick={prevStep}
                            radius='md'
                            size='medium'
                        />
                    )}
                    {current < steps.length - 1 && (
                        <Button
                            content='Next'
                            onClick={nextStep}
                            radius='md'
                            size='medium'
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Stepper;
