import {
    addDoc,
    collection,
    doc,
    orderBy,
    query,
    serverTimestamp,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { withTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import {
    useCollectionData,
    useDocumentData,
} from "react-firebase-hooks/firestore";

import Received from "@/components/Chat/Received";
import Sent from "@/components/Chat/Sent";
import Sidebar from "@/components/Chat/Sidebar";
import { useAuth } from "@/components/context/AuthContext";

import { db } from "../../firebase/config";
function Chatroom({ t }) {
    const { user } = useAuth();
    const router = useRouter();
    const { id } = router.query;
    const [chat] = useDocumentData(doc(db, "chats", id));
    const q = query(
        collection(db, `chats/${id}/messages`),
        orderBy("timestamp")
    );
    const [messages] = useCollectionData(q);
    const [input, setInput] = useState("");
    // const [messages, setMessages] = useState([]);
    const sendMessage = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, `chats/${id}/messages`), {
            text: input,
            sender: user.email,
            timestamp: serverTimestamp(),
        });
        setInput("");
    };
    // useEffect(() => {
    //     const chatList = async () => {
    //         let chats = [];
    //         try {
    //             chats = await getDocument("chats");
    //             setChatsOfCurrentUser(
    //                 chats.filter((chat) => chat.users.includes(user.email))
    //             );
    //         } catch (error) {
    //             //
    //         }
    //     };
    //     chatList();
    // }, []);
    const getMessages = () =>
        messages?.map((msg, index) => {
            const sender = msg.sender === user.email;
            if (sender) {
                return (
                    <Sent
                        key={index}
                        sender={user.fullname || "A"}
                        message={msg.text}
                    />
                );
            } else {
                return (
                    <Received
                        key={index}
                        sender={user.fullname || "A"}
                        message={msg.text}
                    />
                );
            }
        });
    // const therapists = getTherapists();

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
                <div className='flex flex-col flex-auto lg:w-3/4 flex-shrink-0 bg-background p-4'>
                    <div className='flex flex-col'>{getMessages()}</div>
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

export default withTranslation("chatroom")(Chatroom);
