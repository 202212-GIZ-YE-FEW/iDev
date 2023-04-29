import {
    addDoc,
    collection,
    orderBy,
    query,
    serverTimestamp,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { withTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

import Received from "@/components/Chat/Received";
import Sent from "@/components/Chat/Sent";
import Sidebar from "@/components/Chat/Sidebar";
import { useAuth } from "@/components/context/AuthContext";
import LayoutChat from "@/layout/LayoutChat";
import { db } from "../../firebase/config";
function Chatroom({ t }) {
    const { user } = useAuth();
    const router = useRouter();
    const { id } = router.query;
    const q = query(
        collection(db, `chats/${id}/messages`),
        orderBy("timestamp")
    );
    const [messages] = useCollectionData(q);
    const [input, setInput] = useState("");
    const sendMessage = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, `chats/${id}/messages`), {
            text: input,
            sender: user.email,
            timestamp: serverTimestamp(),
        });
        setInput("");
    };
    const getMessages = () =>
        messages?.map((msg, index) => {
            const sender = msg.sender === user.email;
            if (sender) {
                return (
                    <Sent
                        key={index}
                        sender={`${user.email[0]}`}
                        message={msg.text}
                    />
                );
            } else {
                return (
                    <Received
                        key={index}
                        sender={`${user.email[0]}`}
                        message={msg.text}
                    />
                );
            }
        });

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
                <Sidebar />
                <div className='flex flex-col justify-between flex-auto lg:w-3/4 flex-shrink-0 bg-background p-4'>
                    <div className='flex flex-col'>{getMessages()}</div>
                    <div className='border-t-2 border-gray/20  px-4 pt-4 mb-2 sm:mb-0'>
                        <div className='relative flex'>
                            <span className='absolute inset-y-0 flex items-center'>
                                <button
                                    type='button'
                                    className='inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                        className='h-6 w-6 text-gray-600'
                                    >
                                        <path
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            stroke-width='2'
                                            d='M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z'
                                        ></path>
                                    </svg>
                                </button>
                            </span>
                            <form onSubmit={sendMessage} className='w-full'>
                                <input
                                    placeholder='Write your message!'
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    type='text'
                                    className='w-full focus:outline-none focus:placeholder-gray/40 text-gray placeholder-gray/60 ps-12 pe-60 bg-white rounded-md py-3'
                                />
                            </form>
                            <div className='absolute end-0 items-center inset-y-0 hidden sm:flex'>
                                <button
                                    type='button'
                                    className='inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                        className='h-6 w-6 text-gray-600'
                                    >
                                        <path
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            stroke-width='2'
                                            d='M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13'
                                        ></path>
                                    </svg>
                                </button>
                                <button
                                    type='button'
                                    className='inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                        className='h-6 w-6 text-gray-600'
                                    >
                                        <path
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            stroke-width='2'
                                            d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'
                                        ></path>
                                        <path
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            stroke-width='2'
                                            d='M15 13a3 3 0 11-6 0 3 3 0 016 0z'
                                        ></path>
                                    </svg>
                                </button>
                                <button
                                    type='button'
                                    className='inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                        className='h-6 w-6 text-gray-600'
                                    >
                                        <path
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            stroke-width='2'
                                            d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                        ></path>
                                    </svg>
                                </button>
                                <button
                                    type='button'
                                    className='inline-flex items-center justify-center rounded-md px-4 py-3 transition duration-500 ease-in-out text-black bg-cyan hover:bg-light-cyan focus:outline-none'
                                >
                                    <span className='font-bold'>Send</span>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 20 20'
                                        fill='currentColor'
                                        className='h-6 w-6 ml-2 transform rotate-90'
                                    >
                                        <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z'></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// export async function getStaticPaths() {
//     let chats = [];
//     try {
//         chats = await getDocument("chats");
//     } catch (error) {
//         //
//     }
//     const paths = chats.map((chat) => {
//         return {
//             params: {
//                 id: chat.id,
//             },
//         };
//     });
//     return {
//         paths,
//         fallback: false,
//     };
// }
// export async function getStaticProps({ locale, params }) {
//     let chat = null;
//     try {
//         chat = await getDocById("chats", params.id);
//     } catch (error) {
//         //
//     }
//     return {
//         props: {
//             ...(await serverSideTranslations(locale, ["common", "chatroom"])),
//             chat,
//         },
//     };
// }
Chatroom.getLayout = LayoutChat;

export default withTranslation("chatroom")(Chatroom);
