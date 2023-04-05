import clsx from "clsx";
import { withTranslation } from "next-i18next";
import { React, useState } from "react";

import PageIntro from "./PageIntro";
import Button from "./ui/Button";

function Stepper(props) {
    const { t, steps, currentStep } = props;
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
        <>
            {steps.map((step, index) => {
                return (
                    <>
                        <div
                            key={index}
                            className={`${
                                current === index ? "flex flex-col" : "hidden"
                            }`}
                        >
                            <PageIntro
                                title={t(`${step.pageTitle}`)}
                                subtitle={t(`${step.pageSubtitle}`)}
                            />
                            <div
                                className={clsx("w-full mx-auto py-5", {
                                    "bg-light-white flex flex-col justify-between max-w-3xl h-[30rem] px-8 rounded-md drop-shadow-lg":
                                        index !== 5,
                                })}
                            >
                                <div className='w-full mb-4'>
                                    <p className='text-3xl font-normal text-start'>
                                        {step.title}
                                    </p>
                                    {step.content}
                                </div>
                                <div className='flex justify-center gap-4 mb-5'>
                                    {current > 0 && (
                                        <Button
                                            content={t("previous")}
                                            onClick={prevStep}
                                            textTransform='uppercase'
                                            filled='true'
                                            size='large'
                                            fontSize='text-lg md:text-xl lg:text-2xl'
                                            radius='md'
                                        />
                                    )}
                                    {current < steps.length - 1 && (
                                        <Button
                                            content={t("next")}
                                            onClick={nextStep}
                                            textTransform='uppercase'
                                            filled='true'
                                            size='large'
                                            fontSize='text-lg md:text-xl lg:text-2xl'
                                            radius='md'
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}
        </>
    );
}

export default withTranslation("appointment")(Stepper);
