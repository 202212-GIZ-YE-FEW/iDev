import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { withTranslation } from "next-i18next";
import { useEffect, useState } from "react";

import { useAuth } from "@/components/context/AuthContext";

import getDocument from "@/firebase/getData";
const Sidebar = () => {
    const { user } = useAuth();
    const [chatsOfCurrentUser, setChatsOfCurrentUser] = useState([]);
    const router = useRouter();
    const redirect = (id) => {
        router.push(`./chat/${id}`);
    };
    useEffect(() => {
        const chatList = async () => {
            let chats = [];
            try {
                chats = await getDocument("chats");
            } catch (error) {
                //
            }
            setChatsOfCurrentUser(
                chats.filter((chat) => chat.users.includes(user.email))
            );
        };
        chatList();
    }, []);
    return (
        <div className='flex flex-col py-8 px-6 lg:w-1/4 bg-white flex-shrink-0'>
            <div className='me-2 font-bold text-xl text-center'>
                LKJF87KJKJL4123jlkJL
            </div>
            <div className='flex flex-col items-center w-1/2 mx-auto lg:w-full bg-white border border-gray/20 mt-4 py-6 px-4 rounded-lg'>
                <div className='h-20 w-20 rounded-full border overflow-hidden'>
                    <Image
                        className='object-cover w-full h-full rounded-3xl'
                        src='https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
                        alt='Blog.png'
                        width={700}
                        height={250}
                    />
                </div>
                <div className='text-sm font-semibold mt-2'>
                    Abrar Abdulwahed
                </div>
                <div className='text-xs text-gray-500'>
                    Fullstack web developer
                </div>
            </div>
            <div className='flex flex-col mt-8'>
                <div className='flex flex-row items-center justify-between text-xs'>
                    <span className='font-bold'>Conversations</span>
                    <span className='flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full'>
                        4
                    </span>
                </div>
                <div className='flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto'>
                    {console.log("chatsOfCurrentUser", chatsOfCurrentUser)}
                    {chatsOfCurrentUser &&
                        chatsOfCurrentUser.map((chat) => {
                            if (chat.users.includes(user.email)) {
                                return (
                                    <Link
                                        href={`/chat/${chat.id}`}
                                        key={Math.random()}
                                        // onClick={() => redirect(chat.id)}
                                        className='flex flex-row items-center hover:bg-gray-100 rounded-xl p-2'
                                    >
                                        <div className='ml-2 text-sm font-semibold'>
                                            {chat.users[1]}
                                        </div>
                                    </Link>
                                );
                            }
                        })}
                </div>
                <div className='flex flex-row items-center justify-between text-xs mt-6'>
                    <span className='font-bold'>Archivied</span>
                    <span className='flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full'>
                        7
                    </span>
                </div>
                <div className='flex flex-col space-y-1 mt-4 -mx-2'>
                    <button className='flex flex-row items-center hover:bg-gray-100 rounded-xl p-2'>
                        <div className='flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full'>
                            H
                        </div>
                        <div className='ml-2 text-sm font-semibold'>
                            Henry Boyd
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default withTranslation("chat")(Sidebar);
