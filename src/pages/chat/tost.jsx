import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";

import Sidebar from "@/components/Chat/Sidebar";
import { useAuth } from "@/components/context/AuthContext";

import getDocument from "@/firebase/getData";

import { db } from "../../firebase/config";
function Chatroom({ t }) {
    const { user } = useAuth();
    const [chatsOfCurrentUser, setChatsOfCurrentUser] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, `chats/cJRmbJL9pY64LNUoCeOU/messages`), {
            text: input,
            sender: user.email,
            timestamp: serverTimestamp(),
        });
        setInput("");
    };
    // const therapists = getTherapists();
    useEffect(() => {
        const chatList = async () => {
            let chats = await getDocument("chats");
            setChatsOfCurrentUser(
                chats.filter((chat) => chat.users.includes(user.email))
            );
        };
        chatList();
    }, []);

    // useEffect(() => {
    //     const newChat = async () => {
    //         await addDoc(collection(db, "chats"), {
    //             users: [
    //                 "abrar.abdulwahed@gmail.com",
    //                 "abrar_abdulwahed@yahoo.com",
    //             ],
    //         });
    //     };
    //     newChat();
    // }, [input]);
    return (
        <div className='flex antialiased'>
            <div className='flex flex-col lg:flex-row h-full w-full overflow-x-hidden'>
                <Sidebar chatsOfCurrentUser={chatsOfCurrentUser} />
                <div className='flex flex-col flex-auto lg:w-3/4 flex-shrink-0 bg-background p-4'>
                    <div className='flex flex-col'>
                        <div className='w-2/3 self-start p-3 rounded-lg'>
                            <div className='flex items-center'>
                                <div className='inline-flex items-center justify-center h-10 w-10 rounded-full bg-light-gray'>
                                    A
                                </div>
                                <div className='relative ms-3 text-sm bg-light-cyan py-2 px-4 shadow rounded-xl'>
                                    <div>Hey How are you today?</div>
                                </div>
                            </div>
                        </div>
                        <div className='w-2/3 self-start p-3 rounded-lg'>
                            <div className='flex items-center'>
                                <div className='inline-flex items-center justify-center h-10 w-10 rounded-full bg-light-gray flex-shrink-0'>
                                    A
                                </div>
                                <div className='relative ms-3 text-sm bg-light-cyan py-2 px-4 shadow rounded-xl'>
                                    <div>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Vel ipsa commodi illum
                                        saepe numquam maxime asperiores
                                        voluptate sit, minima perspiciatis.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-2/3 self-end p-3 rounded-lg'>
                            <div className='flex items-center flex-row-reverse'>
                                <div className='inline-flex items-center justify-center h-10 w-10 rounded-full bg-light-gray flex-shrink-0'>
                                    A
                                </div>
                                <div className='relative me-3 text-sm bg-yellow py-2 px-4 shadow rounded-xl'>
                                    <div>Im ok what about you?</div>
                                </div>
                            </div>
                        </div>
                        <div className='w-2/3 self-end p-3 rounded-lg'>
                            <div className='flex items-center flex-row-reverse'>
                                <div className='inline-flex items-center justify-center h-10 w-10 rounded-full bg-light-gray flex-shrink-0'>
                                    A
                                </div>
                                <div className='relative me-3 text-sm bg-yellow py-2 px-4 shadow rounded-xl'>
                                    <div>
                                        ومن هنا وجب على المصمم أن يضع نصوصا
                                        مؤقتة على التصميم ليظهر للعميل الشكل
                                        كاملاً
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-2/3 self-start p-3 rounded-lg'>
                            <div className='flex items-center'>
                                <div className='inline-flex items-center justify-center h-10 w-10 rounded-full bg-light-gray flex-shrink-0'>
                                    A
                                </div>
                                <div className='relative ms-3 text-sm bg-light-cyan py-2 px-4 shadow rounded-xl'>
                                    <div>Lorem ipsum dolor sit amet !</div>
                                </div>
                            </div>
                        </div>
                        <div className='w-2/3 self-end p-3 rounded-lg'>
                            <div className='flex items-center flex-row-reverse'>
                                <div className='inline-flex items-center justify-center h-10 w-10 rounded-full bg-light-gray flex-shrink-0'>
                                    A
                                </div>
                                <div className='relative me-3 text-sm bg-yellow py-2 px-4 shadow rounded-xl'>
                                    <div>
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing. ?
                                    </div>
                                    <div className='absolute text-xs bottom-0 right-0 -mb-5 me-2 text-gray-500'>
                                        Seen
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-2/3 self-start p-3 rounded-lg'>
                            <div className='flex items-center'>
                                <div className='inline-flex items-center justify-center h-10 w-10 rounded-full bg-light-gray flex-shrink-0'>
                                    A
                                </div>
                                <div className='relative ms-3 text-sm bg-light-cyan py-2 px-4 shadow rounded-xl'>
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Perspiciatis, in.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-2/3 self-start p-3 rounded-lg'>
                            <div className='flex items-center'>
                                <div className='inline-flex items-center justify-center h-10 w-10 rounded-full bg-light-gray flex-shrink-0'>
                                    A
                                </div>
                                <div className='relative ms-3 text-sm bg-light-cyan py-2 px-4 shadow rounded-xl'>
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
                    <div className='flex flex-row items-center h-16 rounded-xl bg-white w-full px-4'>
                        <div className='flex-grow ms-4'>
                            <form onSubmit={sendMessage}>
                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    type='text'
                                    className='w-full border rounded-xl focus:outline-none px-4 h-10'
                                />
                            </form>
                        </div>
                        <div className='ms-4'>
                            <button className='flex items-center justify-center h-10 cursor-pointer bg-cyan hover:bg-light-cyan rounded-xl text-black px-4 py-1 flex-shrink-0'>
                                <span>{t("chatroom:submit")}</span>
                                <span className='ms-2'>
                                    <svg
                                        className='w-4 h-4 transform rotate-45 -mt-px'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                        xmsns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
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
        },
    };
}

export default withTranslation("chatroom")(Chatroom);
