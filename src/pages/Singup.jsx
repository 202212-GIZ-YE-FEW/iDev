import React from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import AuthSocialMedia from "@/components/ui/AuthSocialMedia";
import FormTitle from "@/components/ui/FormTitle";

export default function Singup() {
    return (
        <div className='h-full'>
            <div className='g-6 flex h-full flex-wrap items-center lg:justify-center mx-12 my-8 justify-between   space-x-2'>
                <div className='shrink-1 mb-12 mt-12 grow-0 basis-auto  md:mb-0 px-10  md:w-12/12 md:shrink-0 lg:w-8/12 xl:w-7/12'>
                    <img
                        src='https://i.ibb.co/RSfKc5F/Signup-Image.png'
                        className='w-full'
                        alt='Sample image'
                    />
                </div>
                <div className='w-full max-w-xs  mb-12 md:mb-2  md:w-12/12 lg:w-4/12 xl:w-5/12  ml-2 leading-normal '>
                    <FormTitle title='Singup Now' />
                    <form className=' shadow-[0_4px_9px_-4px_#3b71ca] mt-8  p-6'>
                        <div
                            className=' flex mb-2 lg:text-left  justify-center space-x-3 sm:flex-row '
                            data-te-input-wrapper-init
                        >
                            <Input
                                type='name'
                                name='Frst Name'
                                placeholder='Frst Name'
                            />
                            <Input
                                type='name'
                                name='Last Name'
                                placeholder='Last Name'
                            />
                        </div>

                        <div
                            className='relative mb-2'
                            data-te-input-wrapper-init
                        >
                            <Input
                                type='email'
                                name='email'
                                placeholder='Email'
                                inputWidthSize='w-full'
                            />
                        </div>
                        <div
                            className='relative mb-2'
                            data-te-input-wrapper-init
                        >
                            <Input
                                type='email'
                                name='email'
                                placeholder='Confirm Email'
                                inputWidthSize='w-full'
                            />
                        </div>
                        <div
                            className=' flex mb-2 lg:text-left  justify-center space-x-3 sm:flex-row '
                            data-te-input-wrapper-init
                        >
                            <Input
                                type='name'
                                name='Password'
                                placeholder='Password'
                            />
                            <Input
                                type='name'
                                name='Confirm Password'
                                placeholder='Confirm Password'
                            />
                        </div>
                        <div
                            className='flex space-x-5 text-center lg:text-left  justify-center mb-6 text-md  font-weight-500 '
                            data-te-input-wrapper-init
                        >
                            <Input
                                label='Brith Date'
                                type='date'
                                name='date'
                                placeholder='Confirm Email'
                                inputWidthSize='w-full'
                            />
                        </div>

                        <div className=' flex justify-center lg:text-left space-x-5 sm:flex-row '>
                            <Button
                                content='login'
                                text-transform='uppercase'
                                filled='false'
                                size='small'
                                fontSize='sm md:text-1xl'
                                radius='md '
                            />
                            <Button
                                content='Singup'
                                text-transform='uppercase'
                                filled='true'
                                size='small'
                                fontSize='sm md:text-1xl'
                                radius='md '
                            />
                        </div>
                    </form>
                    <AuthSocialMedia />
                </div>
            </div>
        </div>
    );
}
