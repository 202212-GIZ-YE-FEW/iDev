import Image from "next/image";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
function Chatroom({ t }) {
    return (
        <div class='flex antialiased'>
            <div class='flex flex-col lg:flex-row h-full w-full overflow-x-hidden'>
                <div class='flex flex-col py-8 px-6 lg:w-1/4 bg-white flex-shrink-0'>
                    <div class='me-2 font-bold text-xl text-center'>
                        LKJF87KJKJL4123jlkJL
                    </div>
                    <div class='flex flex-col items-center w-1/2 mx-auto lg:w-full bg-white border border-gray/20 mt-4 py-6 px-4 rounded-lg'>
                        <div class='h-20 w-20 rounded-full border overflow-hidden'>
                            <Image
                                className='object-cover w-full h-full rounded-3xl'
                                src='https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
                                alt='Blog.png'
                                width={700}
                                height={250}
                            />
                        </div>
                        <div class='text-sm font-semibold mt-2'>
                            Abrar Abdulwahed
                        </div>
                        <div class='text-xs text-gray-500'>
                            Fullstack web developer
                        </div>
                    </div>
                </div>
                <div class='flex flex-col flex-auto lg:w-3/4 flex-shrink-0 bg-background p-4'>
                    <div class='flex flex-col'>
                        <div class='w-2/3 self-start p-3 rounded-lg'>
                            <div class='flex items-center'>
                                <div class='inline-flex items-center justify-center h-10 w-10 rounded-full bg-light-gray'>
                                    A
                                </div>
                                <div class='relative ms-3 text-sm bg-light-cyan py-2 px-4 shadow rounded-xl'>
                                    <div>Hey How are you today?</div>
                                </div>
                            </div>
                        </div>
                        <div class='w-2/3 self-start p-3 rounded-lg'>
                            <div class='flex items-center'>
                                <div class='inline-flex items-center justify-center h-10 w-10 rounded-full bg-light-gray flex-shrink-0'>
                                    A
                                </div>
                                <div class='relative ms-3 text-sm bg-light-cyan py-2 px-4 shadow rounded-xl'>
                                    <div>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Vel ipsa commodi illum
                                        saepe numquam maxime asperiores
                                        voluptate sit, minima perspiciatis.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='w-2/3 self-end p-3 rounded-lg'>
                            <div class='flex items-center flex-row-reverse'>
                                <div class='inline-flex items-center justify-center h-10 w-10 rounded-full bg-light-gray flex-shrink-0'>
                                    A
                                </div>
                                <div class='relative me-3 text-sm bg-yellow py-2 px-4 shadow rounded-xl'>
                                    <div>Im ok what about you?</div>
                                </div>
                            </div>
                        </div>
                        <div class='w-2/3 self-end p-3 rounded-lg'>
                            <div class='flex items-center flex-row-reverse'>
                                <div class='inline-flex items-center justify-center h-10 w-10 rounded-full bg-light-gray flex-shrink-0'>
                                    A
                                </div>
                                <div class='relative me-3 text-sm bg-yellow py-2 px-4 shadow rounded-xl'>
                                    <div>
                                        ومن هنا وجب على المصمم أن يضع نصوصا
                                        مؤقتة على التصميم ليظهر للعميل الشكل
                                        كاملاً
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='w-2/3 self-start p-3 rounded-lg'>
                            <div class='flex items-center'>
                                <div class='inline-flex items-center justify-center h-10 w-10 rounded-full bg-light-gray flex-shrink-0'>
                                    A
                                </div>
                                <div class='relative ms-3 text-sm bg-light-cyan py-2 px-4 shadow rounded-xl'>
                                    <div>Lorem ipsum dolor sit amet !</div>
                                </div>
                            </div>
                        </div>
                        <div class='w-2/3 self-end p-3 rounded-lg'>
                            <div class='flex items-center flex-row-reverse'>
                                <div class='inline-flex items-center justify-center h-10 w-10 rounded-full bg-light-gray flex-shrink-0'>
                                    A
                                </div>
                                <div class='relative me-3 text-sm bg-yellow py-2 px-4 shadow rounded-xl'>
                                    <div>
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing. ?
                                    </div>
                                    <div class='absolute text-xs bottom-0 right-0 -mb-5 me-2 text-gray-500'>
                                        Seen
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='w-2/3 self-start p-3 rounded-lg'>
                            <div class='flex items-center'>
                                <div class='inline-flex items-center justify-center h-10 w-10 rounded-full bg-light-gray flex-shrink-0'>
                                    A
                                </div>
                                <div class='relative ms-3 text-sm bg-light-cyan py-2 px-4 shadow rounded-xl'>
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Perspiciatis, in.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='w-2/3 self-start p-3 rounded-lg'>
                            <div class='flex items-center'>
                                <div class='inline-flex items-center justify-center h-10 w-10 rounded-full bg-light-gray flex-shrink-0'>
                                    A
                                </div>
                                <div class='relative ms-3 text-sm bg-light-cyan py-2 px-4 shadow rounded-xl'>
                                    <div>
                                        هذا النص هو مثال لنص يمكن أن يستبدل في
                                        نفس المساحة، لقد تم توليد هذا النص من
                                        مولد النص العربى، حيث يمكنك أن تولد مثل
                                        هذا النص أو العديد من النصوص الأخرى
                                        إضافة إلى زيادة عدد الحروف التى يولدها
                                        التطبيق. إذا كنت تحتاج إلى عدد أكبر من
                                        الفقرات يتيح لك مولد النص العربى زيادة
                                        عدد الفقرات كما تريد
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='flex flex-row items-center h-16 rounded-xl bg-white w-full px-4'>
                        <div class='flex-grow ms-4'>
                            <input
                                type='text'
                                class='w-full border rounded-xl focus:outline-none px-4 h-10'
                            />
                        </div>
                        <div class='ms-4'>
                            <button class='flex items-center justify-center h-10 cursor-pointer bg-cyan hover:bg-light-cyan rounded-xl text-black px-4 py-1 flex-shrink-0'>
                                <span>{t("chatroom:submit")}</span>
                                <span class='ms-2'>
                                    <svg
                                        class='w-4 h-4 transform rotate-45 -mt-px'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                        xmsns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            stroke-width='2'
                                            d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                                        ></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "chatroom"])),
            // Will be passed to the page component as props
        },
    };
}
export default withTranslation("chatroom")(Chatroom);
