import { withTranslation } from "next-i18next";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import addDocument from "@/firebase/addData";
import getDocument from "@/firebase/getData";

function Subscribe({
    t,
    title = "subscribe",
    subtitle = "emailCommitment",
    placeholder = "enterEmail",
    titleTextTransform = "capitalize",
}) {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const form = useRef();
    const [formData, setFormData] = useState({});
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            e.target.reset();

            const collection = "newsletter"; // collection name
            const userData = {
                email: formData.user_email,
            };
            const newsletter = await getDocument(collection);
            var arr = [];
            for (var i = 0; i < newsletter.length; i++) {
                arr.push(newsletter[i].email);
            }
            console.log(arr);
            const result = arr.includes(formData.user_email);
            if (!formData.user_email) {
                alert("! Please enter an email ! الرجاء ادخال ايميل ");
            } else if (
                !formData.user_email
                    .trim()
                    .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
            ) {
                alert("! Please enter a valid email ! الرجاء ادخال ايميل صحيح");
            } else if (result === true) {
                alert("! This email already exist ! هذا الايميل موجود بالفعل ");
            } else {
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
                            alert(
                                "Subscription done! تمت عملية الاشتراك بنجاح!"
                            );
                        },
                        (error) => {
                            console.log(error.text);
                        }
                    );

                addDocument(collection, userData);

                const router = require("next/router").default;
                router.push({
                    pathname: "/thanks",
                    query: {
                        subtitle: "Subscription",
                    },
                });
            }
        } catch (error) {
            if (error.inner) {
                const newErrors = {};
                error.inner.forEach((e) => {
                    newErrors[e.path] = e.message;
                });
                setFormErrors(newErrors);
            }
        }
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
                <form className='mt-[24px]' ref={form} onSubmit={handleSubmit}>
                    <label htmlFor='subscribe-newsletter' className='sr-only'>
                        {t(`${title}`)}
                    </label>
                    <div className='flex max-w-[20rem] bg-white border-2 border-light-gray/80 rounded-md'>
                        <input
                            type='text'
                            name='user_email'
                            id='subscribe-newsletter'
                            className='block flex-1 min-w-0 w-full focus:outline-none text-sm py-2.5 px-3 bg-transparent'
                            placeholder={t(`${placeholder}`)}
                            onChange={handleChange}
                        />
                        <button type='submit' value='Send'>
                            <span className='h-full inline-flex items-center text-2xl px-3 bg-cyan border-s-2 border-light-gray/80 text-light-black rounded-e-1.5'>
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
