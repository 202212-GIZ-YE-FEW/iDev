import { doc, where } from "firebase/firestore";
import Link from "next/link";
import { withTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { useQuery, useFilter } from "react-query";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useAuth } from "@/components/context/AuthContext";
import { collection, getDocs, query } from "firebase/firestore";
import getDocument from "@/firebase/getData";

import ChatItem from "./ChatItem";
import { getPeerData } from "@/utils/getPeer";
import { getFullName } from "@/utils/getFullName";
import { db } from "@/firebase/config";
import { getMyPeer } from "./../utils/getPeer";
const ChatSidebar = (props) => {
    const { chatRef, t } = props;
    const { user } = useAuth();
    const [search, setSearch] = useState("");
    const { data: chats } = useQuery("setChatsOfCurrentUser", async () => {
        try {
            const q = query(
                collection(db, "chats"),
                where("users", "array-contains", user?.uid)
            );
            const querySnapshot = await getDocs(q);
            const data = await Promise.all(
                querySnapshot.docs.map(async (doc) => ({
                    id: doc.id,
                    peer: await getPeerData(doc.data().users, user.uid),
                    ...doc.data(),
                }))
            );
            return data;
        } catch (error) {
            //
        }
    });

    const chatsOfCurrentUser = () => {
        return chats?.filter((chat) => {
            if (search)
                return (
                    getFullName(chat.peer?.first_name, chat.peer?.last_name)
                        ?.toLowerCase()
                        .includes(search?.toLowerCase()) ||
                    chat.peer?.email
                        ?.toLowerCase()
                        .includes(search?.toLowerCase())
                );
            return chats;
        });
    };

    return (
        <div
            className={`${
                chatRef ? "sm:hidden lg:block" : "w-full"
            }  lg:w-3/6 xl:w-2/6 flex flex-col justify-start items-stretch bg-white rounded-md lg:rounded-none lg:rounded-l-md z-50`}
        >
            <div className='w-full bg-background/80 border-b-[3px] border-gray/20 px-5 h-[4rem] inline-flex items-center justify-center'>
                <input
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={t("search")}
                    className=' placeholder-gray/50 text-gray/80 text-sm py-2 px-10 rounded-full outline-none w-full focus:outline-none'
                />
            </div>
            <div className='overflow-y-auto'>
                {chatsOfCurrentUser()?.map((chat) => {
                    return (
                        <Link
                            key={chat.id}
                            href={`/chats/${chat.id}`}
                            className={`py-2 px-5 flex flex-row cursor-pointer border-b-2 border-gray/30 hover:bg-gray/20 ${
                                chat.id === chatRef && "bg-cyan/60"
                            }`}
                        >
                            <ChatItem
                                chat={chat}
                                currentUser={user}
                                peer={chat.peer}
                                lastMsg={chat.lastMsg}
                            />
                        </Link>
                    );
                })}
                {/* {chatsOfCurrentUser &&
                    chatsOfCurrentUser.map((chat) => {
                        return (
                            <Link
                                key={chat.id}
                                href={`/chats/${chat.id}`}
                                className={`py-2 px-5 flex flex-row cursor-pointer border-b-2 border-gray/30 hover:bg-gray/20 ${
                                    chat.id === chatRef && "bg-cyan/60"
                                }`}
                            >
                                <ChatItem
                                    chat={chat}
                                    currentUser={user}
                                    lastMsg={chat.lastMsg}
                                />
                            </Link>
                        );
                    })} */}
            </div>
        </div>
    );
};

export default withTranslation("chatroom")(ChatSidebar);
