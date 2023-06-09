import clsx from "clsx";
import Link from "next/link";
import { withTranslation } from "next-i18next";

import PageIntro from "./PageIntro";
import Button from "./ui/Button";

function Stepper(props) {
    const { t, steps, current, setCurrent, onSubmit } = props;

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
                const {
                    pageTitle,
                    pageSubtitle,
                    title,
                    content,
                    asCard = true,
                } = step;
                return (
                    <div
                        key={index}
                        className={`${
                            current === index ? "flex flex-col" : "hidden"
                        }`}
                    >
                        <PageIntro
                            title={t(`${pageTitle}`)}
                            subtitle={t(`${pageSubtitle}`)}
                        />
                        <div
                            className={clsx("w-full mx-auto py-5", {
                                "bg-light-white flex flex-col justify-between max-w-3xl h-[30rem] px-8 rounded-md drop-shadow-lg":
                                    asCard,
                            })}
                        >
                            <div className='w-full h-full mb-4'>
                                <p className='text-3xl font-normal text-start'>
                                    {title}
                                </p>
                                {content}
                            </div>
                            <div className='flex justify-center gap-4 mb-5'>
                                {/* Exclude last step from having previous button */}
                                {current > 0 && current < steps.length - 1 && (
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
                                {current < steps.length - 2 && (
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
                                {/* Submission step:one step before completed step */}
                                {current === steps.length - 2 && (
                                    <Button
                                        content={t("submit")}
                                        onClick={onSubmit}
                                        textTransform='uppercase'
                                        filled='true'
                                        size='large'
                                        fontSize='text-lg md:text-xl lg:text-2xl'
                                        radius='md'
                                        disabled={props.isSubmitting}
                                    />
                                )}
                                {/* After submission:Completed step */}
                                {current === steps.length - 1 && (
                                    <Link href='/'>
                                        <Button
                                            content={t("backToHome")}
                                            textTransform='uppercase'
                                            filled='true'
                                            size='large'
                                            fontSize='text-lg md:text-xl lg:text-2xl'
                                            radius='md'
                                        />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default withTranslation("appointment")(Stepper);
