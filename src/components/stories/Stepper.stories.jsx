import React from "react";

import Stepper from "../Stepper";

export default {
    title: "UI/Stepper",
    component: Stepper,
    argTypes: {
        steps: {
            control: {
                type: "object",
            },
        },
        currentStep: {
            control: {
                type: "number",
            },
        },
    },
};

const Template = (args) => <Stepper {...args} />;
export const Default = Template.bind({});
Default.args = {
    steps: [
        {
            title: "Step 1",
            content: "This is the first step",
        },
        {
            title: "Step 2",
            content: "This is the second step",
        },
        {
            title: "Step 3",
            content: "This is the third step",
        },
    ],
    currentStep: 0,
};

const StepperComplexContent = () => {
    return (
        <div className='flex gap-8'>
            <div className='relative'>
                <details className='group [&_summary::-webkit-details-marker]:hidden'>
                    <summary className='flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600'>
                        <span className='text-sm font-medium'>
                            {" "}
                            Availability{" "}
                        </span>
                        <span className='transition group-open:-rotate-180'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke-width='1.5'
                                stroke='currentColor'
                                className='w-4 h-4'
                            >
                                <path
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                                />
                            </svg>
                        </span>
                    </summary>
                    <div className='z-50 group-open:absolute group-open:top-auto group-open:left-0 group-open:mt-2'>
                        <div className='bg-white border border-gray-200 rounded w-96'>
                            <header className='flex items-center justify-between p-4'>
                                <span className='text-sm text-gray-700'>
                                    {" "}
                                    0 Selected{" "}
                                </span>
                                <button
                                    type='button'
                                    className='text-sm text-gray-900 underline underline-offset-4'
                                >
                                    Reset
                                </button>
                            </header>
                            <ul className='p-4 space-y-1 border-t border-gray-200'>
                                <li>
                                    <label
                                        for='FilterInStock'
                                        className='inline-flex items-center gap-2'
                                    >
                                        <input
                                            type='checkbox'
                                            id='FilterInStock'
                                            className='w-5 h-5 border-gray-300 rounded'
                                        />
                                        <span className='text-sm font-medium text-gray-700'>
                                            In Stock (5+)
                                        </span>
                                    </label>
                                </li>
                                <li>
                                    <label
                                        for='FilterPreOrder'
                                        className='inline-flex items-center gap-2'
                                    >
                                        <input
                                            type='checkbox'
                                            id='FilterPreOrder'
                                            className='w-5 h-5 border-gray-300 rounded'
                                        />
                                        <span className='text-sm font-medium text-gray-700'>
                                            Pre Order (3+)
                                        </span>
                                    </label>
                                </li>
                                <li>
                                    <label
                                        for='FilterOutOfStock'
                                        className='inline-flex items-center gap-2'
                                    >
                                        <input
                                            type='checkbox'
                                            id='FilterOutOfStock'
                                            className='w-5 h-5 border-gray-300 rounded'
                                        />
                                        <span className='text-sm font-medium text-gray-700'>
                                            Out of Stock (10+)
                                        </span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </details>
            </div>
            <div className='relative'>
                <details className='group [&_summary::-webkit-details-marker]:hidden'>
                    <summary className='flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600'>
                        <span className='text-sm font-medium'> Price </span>
                        <span className='transition group-open:-rotate-180'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke-width='1.5'
                                stroke='currentColor'
                                className='w-4 h-4'
                            >
                                <path
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                                />
                            </svg>
                        </span>
                    </summary>
                    <div className='z-50 group-open:absolute group-open:top-auto group-open:left-0 group-open:mt-2'>
                        <div className='bg-white border border-gray-200 rounded w-96'>
                            <header className='flex items-center justify-between p-4'>
                                <span className='text-sm text-gray-700'>
                                    The highest price is $600
                                </span>
                                <button
                                    type='button'
                                    className='text-sm text-gray-900 underline underline-offset-4'
                                >
                                    Reset
                                </button>
                            </header>
                            <div className='p-4 border-t border-gray-200'>
                                <div className='flex justify-between gap-4'>
                                    <label
                                        for='FilterPriceFrom'
                                        className='flex items-center gap-2'
                                    >
                                        <span className='text-sm text-gray-600'>
                                            $
                                        </span>
                                        <input
                                            type='number'
                                            id='FilterPriceFrom'
                                            placeholder='From'
                                            className='w-full border-gray-200 rounded-md shadow-sm sm:text-sm'
                                        />
                                    </label>
                                    <label
                                        for='FilterPriceTo'
                                        className='flex items-center gap-2'
                                    >
                                        <span className='text-sm text-gray-600'>
                                            $
                                        </span>
                                        <input
                                            type='number'
                                            id='FilterPriceTo'
                                            placeholder='To'
                                            className='w-full border-gray-200 rounded-md shadow-sm sm:text-sm'
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </details>
            </div>
        </div>
    );
};

export const ComplexContent = Template.bind({});
ComplexContent.args = {
    steps: [
        {
            title: "Step 1",
            content: "This is the first step",
        },
        {
            title: "Step 2",
            content: "This is the second step",
        },
        {
            title: "Step 3",
            content: <StepperComplexContent />,
        },
    ],
    currentStep: 0,
};
