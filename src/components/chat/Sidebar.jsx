import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { useAuth } from "@/components/context/AuthContext";

import getDocument from "@/firebase/getData";
const Sidebar = () => {
    const { user } = useAuth();
    const [chatsOfCurrentUser, setChatsOfCurrentUser] = useState([]);
    const router = useRouter();
    const redirect = (id) => {
        router.push(`/chats/${id}`);
    };
    const getPeer = (users) => {
        return users?.find((email) => email !== user.email);
    };
    useEffect(() => {
        const chatList = async () => {
            let chats = [];
            try {
                chats = await getDocument("chats");
                setChatsOfCurrentUser(
                    chats.filter((chat) => chat.users.includes(user.email))
                );
            } catch (error) {
                //
            }
        };
        chatList();
    }, []);
    return (
        <>
            <div className='flex flex-col py-8 px-6 lg:w-1/4 bg-white flex-shrink-0 relative top-0 bottom-0'>
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
                    </div>
                    <div className='flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto'>
                        {chatsOfCurrentUser &&
                            chatsOfCurrentUser.map((chat) => {
                                if (chat.users.includes(user.email)) {
                                    return (
                                        <button
                                            key={Math.random()}
                                            onClick={() => redirect(chat.id)}
                                            className='flex flex-row items-center hover:bg-gray-100 rounded-xl p-2'
                                        >
                                            <div className='ml-2 text-sm font-semibold'>
                                                {getPeer(chat.users)}
                                            </div>
                                        </button>
                                    );
                                }
                            })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
