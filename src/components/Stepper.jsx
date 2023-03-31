import { React, useState } from "react";

import Button from "./ui/Button";

function Stepper(props) {
    const { steps, currentStep } = props;
    const [current, setCurrent] = useState(
        currentStep >= 0 && currentStep < steps.length ? currentStep : 0
    );
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
        <div className='flex items-start justify-between sm:p-6 lg:p-8 flex-col'>
            <div className='max-w-sm p-6 border-gray rounded-lg shadow'>
                {steps.map((step, index) => {
                    return (
                        <div
                            key={index}
                            className={`${
                                current === index ? "block" : "hidden"
                            } w-full h-full p-4 text-center`}
                        >
                            <p className='text-3xl font-normal text-start'>
                                {step.title}
                            </p>
                            {step.content}
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
