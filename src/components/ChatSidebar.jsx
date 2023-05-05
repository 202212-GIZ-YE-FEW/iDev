import { where } from "firebase/firestore";
import Link from "next/link";
import { withTranslation } from "next-i18next";
import { useQuery } from "react-query";

// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useAuth } from "@/components/context/AuthContext";

import getDocument from "@/firebase/getData";

import ChatItem from "./ChatItem";
const ChatSidebar = (props) => {
    const { chatRef, t } = props;
    const { user } = useAuth();
    const { data: chatsOfCurrentUser } = useQuery(
        "setChatsOfCurrentUser",
        async () => {
            try {
                const chats = await getDocument(
                    "chats",
                    where("users", "array-contains", user?.uid)
                );
                return chats;
            } catch (error) {
                //
            }
        }
    );

    return (
        <div
            className={`${
                chatRef ? "sm:hidden lg:block" : "w-full"
            }  lg:w-3/6 xl:w-2/6 flex flex-col justify-start items-stretch bg-white rounded-md lg:rounded-none lg:rounded-l-md z-50`}
        >
            <div className='w-full bg-background/80 border-b-[3px] border-gray/20 px-5 h-[4rem] inline-flex items-center justify-center'>
                <input
                    type='text'
                    placeholder={t("search")}
                    className=' placeholder-gray/50 text-gray/80 text-sm py-2 px-10 rounded-full outline-none w-full focus:outline-none'
                />
            </div>
            <div className='overflow-y-auto'>
                {chatsOfCurrentUser &&
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
                    })}
            </div>
        </div>
    );
};

export default withTranslation("chatroom")(ChatSidebar);
