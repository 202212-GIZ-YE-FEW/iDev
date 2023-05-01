import { withTranslation } from "next-i18next";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
function Subscribe({
    t,
    title = "subscribe",
    subtitle = "emailCommitment",
    placeholder = "enterEmail",
    titleTextTransform = "capitalize",
}) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        e.target.reset();

        emailjs
            .sendForm(
                "service_jv7251u",
                "template_348izhd",
                form.current,
                "emXiZkH_auFjA1mtI"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Subscription done!");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <>
            <div className='flex flex-col'>
                <span
                    className={`text-xl md:text-3xl font-medium mb-[12px] ${titleTextTransform}`}
                >
                    {t(`${title}`)}
                </span>
                <p className='text-sm md:text-lg lg:text-xl text-light-gray'>
                    {t(`${subtitle}`)}
                </p>
                <form className='mt-[24px]' ref={form} onSubmit={sendEmail}>
                    <label htmlFor='subscribe-newsletter' className='sr-only'>
                        {t(`${title}`)}
                    </label>
                    <div className='flex max-w-[20rem] bg-white border-2 border-light-gray/80 rounded-md'>
                        <input
                            type='email'
                            name='user_email'
                            id='subscribe-newsletter'
                            className='block flex-1 min-w-0 w-full focus:outline-none text-sm py-2.5 px-3 bg-transparent'
                            placeholder={t(`${placeholder}`)}
                        />
                        <button type='submit' value='Send'>
                            <span className='inline-flex items-center text-2xl px-3 bg-cyan border-s-2 border-light-gray/80 text-light-black rounded-e-1.5'>
                                <svg
                                    width='20'
                                    height='20'
                                    viewBox='0 0 25 25'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M12.6327 12.3673L8.04212 14.5401C7.59967 14.7861 7.05302 14.7438 6.65376 14.4325L0.486233 9.74981C-0.307758 9.13085 -0.0922473 7.87688 0.862835 7.55852L23.3377 0.0669056C24.3237 -0.261766 25.2618 0.676297 24.9331 1.66231L17.4415 24.1372C17.1231 25.0922 15.8691 25.3078 15.2502 24.5138L10.5675 18.3462C10.2562 17.947 10.2139 17.4003 10.4599 16.9579L12.6327 12.3673Z'
                                        fill='#1A1A1A'
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default withTranslation("common")(Subscribe);
