import data from "@emoji-mart/data";
import moment from "moment/moment";
import Picker from "@emoji-mart/react";
import {
    addDoc,
    collection,
    doc,
    getDoc,
    orderBy,
    query,
    serverTimestamp,
    updateDoc,
} from "firebase/firestore";
import Image from "next/image";
// import { withTranslation } from "next-i18next";
import EmojiSVG from "public/images/emoji.svg";
import EmptyChatGIF from "public/images/empty-chat.gif";
import PinSVG from "public/images/pin.svg";
import VoiceSVG from "public/images/voice.svg";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { Fragment } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useMutation, useQuery, useQueryClient } from "react-query";

import ChatLabel from "@/components/ChatLabel";
import ChatReceived from "@/components/ChatReceived";
import ChatSent from "@/components/ChatSent";
import ChatSidebar from "@/components/ChatSidebar";
import { useAuth } from "@/components/context/AuthContext";

import LayoutChat from "@/layout/LayoutChat";
import convertFirebaseTimestamp from "@/utils/convertFirebaseTimestamp";
import { getPeerData } from "@/utils/getPeer";

import { db } from "../../firebase/config";
const Chatroom = ({ chat, id, t }) => {
    chat = JSON.parse(chat);
    const [isEmojiPickerVisible, setEmojiPickerVisible] = useState(false);
    const { user } = useAuth();
    const bottomOfChat = useRef();
    const { data: peer } = useQuery(
        ["setPeerData", "chatroom", id],
        async () => {
            const d = getPeerData(chat.users, user.uid);
            return d;
        }
    );

    const queryClient = useQueryClient();
    const newMessage = useMutation({
        mutationFn: (e) => sendMessage(e),
        onSuccess: () => {
            queryClient.invalidateQueries(["setMessages"]);
        },
    });

    const q_messages = query(
        collection(db, `chats/${id}/messages`),
        orderBy("timestamp")
    );
    const [messages] = useCollectionData(q_messages);
    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();
        const lastMsgRef = await addDoc(
            collection(db, `chats/${id}/messages`),
            {
                text: input,
                sender: user.uid,
                timestamp: serverTimestamp(),
            }
        );
        try {
            const docRef = doc(db, `chats`, id);
            await updateDoc(docRef, {
                lastMsg: lastMsgRef.id,
            });
        } catch (error) {
            // console.error("Error updating document:", error);
        }
        setInput("");
    };
    const getMessages = () => {
        // label & newDay: to show date of message every new day
        let label = null;
        let newDay = "";
        return messages?.map((msg, index) => {
            if (index === 0) {
                newDay = moment(msg.timestamp.toDate()).format("MM-DD-YYYY");
                label = (
                    <ChatLabel
                        label={convertFirebaseTimestamp(msg.timestamp)[0]}
                    />
                );
            } else {
                if (
                    moment(msg?.timestamp?.toDate()).format("MM-DD-YYYY") >
                    newDay
                ) {
                    newDay = moment(msg.timestamp.toDate()).format(
                        "MM-DD-YYYY"
                    );
                    label = (
                        <ChatLabel
                            label={convertFirebaseTimestamp(msg.timestamp)[0]}
                        />
                    );
                } else {
                    label = "";
                }
            }
            const sender = msg.sender === user.uid;
            if (sender) {
                return (
                    <Fragment key={msg.id}>
                        {label}
                        <ChatSent
                            message={msg.text}
                            time={moment(msg?.timestamp?.seconds * 1000).format(
                                "LT"
                            )}
                        />
                    </Fragment>
                );
            } else {
                return (
                    <Fragment key={msg.id}>
                        {label}
                        <ChatReceived
                            message={msg.text}
                            time={moment(msg?.timestamp?.seconds * 1000).format(
                                "LT"
                            )}
                        />
                    </Fragment>
                );
            }
        });
    };

    const ScrollToBottom = () => {
        bottomOfChat?.current?.scrollIntoView({
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
        <div className='h-screen overflow-hidden'>
            <div
                className='shadow-xl rounded-md w-full lg:w-full lg:mx-auto flex'
                style={{ height: "calc(100vh - 80px)" }}
            >
                <ChatSidebar chatRef={id} lastMsgLive={chat?.lastMsg} />
                <div
                    className='hidden w-5/6 bg-background h-full lg:flex flex-col justify-start items-stretch border-gray/10'
                    style={{
                        background:
                            "linear-gradient(rgba(254,232,158, 0.3), rgba(45,211,227, 0.1)), url(/images/chat-texture.jpg)",
                    }}
                >
                    <div className='flex justify-between px-3 py-[.4rem] bg-white/80 border-b-2 border-gray/10'>
                        <div className='font-medium'>
                            <span className="'font-medium'">{`${peer?.first_name} ${peer?.last_name}`}</span>
                            <br />
                            <span className='text-gray/50 text-sm'>
                                Last seen:{" "}
                                {moment(peer?.last_seen.toDate()).fromNow()}
                            </span>
                        </div>
                        {user.isTherapist && <button>Eliminate Chat</button>}
                    </div>
                    <div className='flex-auto flex flex-col justify-between overflow-y-auto'>
                        {messages?.length !== 0 ? (
                            <div className='flex flex-col'>
                                {getMessages()}
                                <div ref={bottomOfChat}></div>
                            </div>
                        ) : (
                            <Image
                                className='self-center'
                                src={EmptyChatGIF}
                                alt=''
                                width={300}
                                height={300}
                            />
                        )}
                    </div>
                    <div className='flex bg-background mt-3 shadow-to-xl justify-between items-center p-3'>
                        <div className=''>
                            <button
                                type='button'
                                className='p-2 text-gray/40 rounded-full hover:text-gray/60 hover:bg-gray/10 focus:outline-none'
                                aria-label='Upload a files'
                            >
                                <Image src={PinSVG} alt='' />
                            </button>
                        </div>
                        <div className='flex-1 px-3'>
                            <form
                                onSubmit={newMessage.mutate}
                                className='w-full'
                            >
                                <input
                                    placeholder='Write your message!'
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    type='text'
                                    className='w-full border-2 border-gray/10 rounded-full px-4 py-3 outline-none text-gray focus:outline-none'
                                />
                            </form>
                        </div>
                        <div className='flex flex-row'>
                            <button
                                onClick={() =>
                                    setEmojiPickerVisible(!isEmojiPickerVisible)
                                }
                                type='button'
                                className='p-2 text-gray/40 rounded-full hover:text-gray/60 hover:bg-gray/10 focus:outline-none'
                                aria-label='Show emojis'
                            >
                                <Image src={EmojiSVG} alt='' />
                            </button>
                            <button
                                type='button'
                                className='p-2 ml-2 text-gray/40 rounded-full hover:text-gray/60 hover:bg-gray/10 focus:outline-none'
                                aria-label='Record a voice'
                            >
                                <Image src={VoiceSVG} alt='' />
                            </button>
                        </div>
                    </div>
                    {isEmojiPickerVisible && (
                        <div className='pt-5 inline-flex justify-center items-center bg-background'>
                            <Picker
                                data={data}
                                previewPosition='none'
                                onEmojiSelect={(e) => {
                                    setInput((prev) => prev + e.native);
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
export async function getServerSideProps(context) {
    const id = context.query.id;
    const docRef = doc(db, "chats", id);
    const docSnap = await getDoc(docRef);
    return {
        props: {
            // ...(await serverSideTranslations(["chatroom", "common"])),
            chat: JSON.stringify(docSnap.data()),
            id,
        },
    };
}
// export default withTranslation(["chatroom", "common"])(Chatroom);
