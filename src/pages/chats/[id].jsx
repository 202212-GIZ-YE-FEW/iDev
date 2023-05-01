import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import {
    addDoc,
    collection,
    orderBy,
    doc,
    query,
    serverTimestamp,
} from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/router";
import EmojiSVG from "public/images/emoji.svg";
import EmptyChatGIF from "public/images/empty-chat.gif";
import PinSVG from "public/images/pin.svg";
import VoiceSVG from "public/images/voice.svg";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { useEffect, useRef } from "react";
import {
    useCollectionData,
    useDocumentData,
} from "react-firebase-hooks/firestore";

import ChatReceived from "@/components/ChatReceived";
import ChatSent from "@/components/ChatSent";
import ChatSidebar from "@/components/ChatSidebar";
import { useAuth } from "@/components/context/AuthContext";

import LayoutChat from "@/layout/LayoutChat";
import getPeer from "@/utils/getPeer";

import { db } from "../../firebase/config";
const Chatroom = () => {
    const [isEmojiPickerVisible, setEmojiPickerVisible] = useState(false);
    const { user } = useAuth();
    const router = useRouter();
    const bottomOfChat = useRef();
    const { id } = router.query;
    const q = query(
        collection(db, `chats/${id}/messages`),
        orderBy("timestamp")
    );
    const [chat] = useDocumentData(doc(db, "chats", id));
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
                    <ChatSent
                        key={index}
                        message={msg.text}
                        time={new Date(msg.timestamp * 1000).toDateString()}
                    />
                );
            } else {
                return (
                    <ChatReceived
                        key={index}
                        message={msg.text}
                        time={new Date(msg.timestamp * 1000).toDateString()}
                    />
                );
            }
        });
    const ScrollToBottom = () => {
        bottomOfChat.current.scrollIntoView({
            behavior: "smooth",
        });
    };
    useEffect(ScrollToBottom, [messages]);
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
        <div class='h-screen p-5 overflow-hidden'>
            <div
                className='shadow-xl rounded-md w-full lg:w-11/12 lg:mx-auto flex'
                style={{ height: "calc(100vh - 110px)" }}
            >
                <ChatSidebar />
                <div class='hidden w-5/6 bg-white h-full lg:flex flex-col justify-start items-stretch border-r-2 border-l-2 border-gray/10 lg:rounded-r-md xl:rounded-none'>
                    <div class='flex flex-row items-center justify-between px-3 py-2 bg-gray/5 bg-opacity-40 border-b-2 border-gray/10'>
                        <h2 class='font-medium'>
                            {getPeer(chat?.users, user.email)}
                        </h2>
                    </div>
                    <div class='flex-auto flex flex-col justify-between overflow-y-auto'>
                        {messages?.length !== 0 ? (
                            <div class='flex flex-col'>
                                {getMessages()}
                                <div ref={bottomOfChat}></div>
                            </div>
                        ) : (
                            <Image
                                class='self-center'
                                src={EmptyChatGIF}
                                alt=''
                                width={300}
                                height={300}
                            />
                        )}
                    </div>
                    <div class='flex flex-row justify-between items-center p-3'>
                        <div class=''>
                            <button
                                type='button'
                                class='p-2 text-gray/40 rounded-full hover:text-gray/60 hover:bg-gray/10 focus:outline-none'
                                aria-label='Upload a files'
                            >
                                <Image src={PinSVG} alt='' />
                            </button>
                        </div>
                        <div class='flex-1 px-3'>
                            <form onSubmit={sendMessage} className='w-full'>
                                <input
                                    placeholder='Write your message!'
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    type='text'
                                    class='w-full border-2 border-gray/10 rounded-full px-4 py-1 outline-none text-gray focus:outline-none'
                                />
                            </form>
                        </div>
                        <div class='flex flex-row'>
                            <button
                                onClick={() =>
                                    setEmojiPickerVisible(!isEmojiPickerVisible)
                                }
                                type='button'
                                class='p-2 text-gray/40 rounded-full hover:text-gray/60 hover:bg-gray/10 focus:outline-none'
                                aria-label='Show emojis'
                            >
                                <Image src={EmojiSVG} alt='' />
                            </button>
                            <button
                                type='button'
                                class='p-2 ml-2 text-gray/40 rounded-full hover:text-gray/60 hover:bg-gray/10 focus:outline-none'
                                aria-label='Record a voice'
                            >
                                <Image src={VoiceSVG} alt='' />
                            </button>
                        </div>
                    </div>
                    {isEmojiPickerVisible && (
                        <div className='mt-5 inline-flex justify-center items-center'>
                            <Picker
                                data={data}
                                previewPosition='none'
                                onEmojiSelect={(e) => {
                                    setInput(e.native);
                                    setEmojiPickerVisible(
                                        !isEmojiPickerVisible
                                    );
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
Chatroom.getLayout = LayoutChat;

export default Chatroom;
