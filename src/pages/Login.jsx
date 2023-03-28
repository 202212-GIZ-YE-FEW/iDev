import React from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function Login() {
    return (
        <div className='h-full'>
            <div className='g-6 flex h-full flex-wrap items-center lg:justify-center mx-12 my-8 justify-between   space-x-2'>
                <div className='w-full max-w-xs  mb-12 md:mb-4 md:w-3/12 lg:w-5/12 xl:w-5/12  ml-2 leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] p-4'>
                    <form>
                        <div
                            className='relative mb-6 '
                            data-te-input-wrapper-init
                        >
                            <Input
                                type='name'
                                name='name'
                                placeholder='name'
                                inputWidthSize='w-full'
                            />
                        </div>

                        <div
                            className='relative mb-6'
                            data-te-input-wrapper-init
                        >
                            <Input
                                type='email'
                                name='email'
                                placeholder='email'
                                inputWidthSize='w-full'
                            />
                        </div>

                        <div className='text-center flex  lg:text-left font-weight-500 justify-between  space-x-3 sm:flex-row'>
                            <Button
                                content='login'
                                text-transform='uppercase'
                                filled='false'
                                size='small'
                                fontSize='2xl'
                                radius='5px'
                            />
                            <Button
                                content='Singup'
                                text-transform='uppercase'
                                filled='true'
                                size='small'
                                fontSize='2xl'
                                radius='5px'
                            />
                        </div>
                    </form>
                </div>
                <div className='shrink-1 mb-12 mt-12 grow-0 basis-auto  md:mb-0 px-10 md:w-9/12 md:shrink-0 lg:w-7/12 xl:w-7/12'>
                    <img
                        src='https://i.ibb.co/JqH2MTQ/login.png'
                        className='w-full'
                        alt='Sample image'
                    />
                </div>
            </div>
        </div>
    );
}
