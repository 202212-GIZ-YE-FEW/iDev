import {
    addDoc,
    collection,
    orderBy,
    query,
    serverTimestamp,
} from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/router";
import { withTranslation } from "next-i18next";
import CameraSVG from "public/images/camera.svg";
import EmojiSVG from "public/images/emoji.svg";
import PinSVG from "public/images/pin.svg";
import VoiceSVG from "public/images/voice.svg";
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
                                    <Image src={VoiceSVG} alt='' />
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
                                    <Image src={PinSVG} alt='' />
                                </button>
                                <button
                                    type='button'
                                    className='inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none'
                                >
                                    <Image src={CameraSVG} alt='' />
                                </button>
                                <button
                                    type='button'
                                    className='inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none'
                                >
                                    <Image src={EmojiSVG} alt='' />
                                </button>
                                <button
                                    type='button'
                                    className='inline-flex items-center justify-center cursor-pointer rounded-md px-4 py-3 transition duration-500 ease-in-out text-black bg-cyan hover:bg-light-cyan focus:outline-none'
                                >
                                    <span className='font-bold'>Send</span>
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
