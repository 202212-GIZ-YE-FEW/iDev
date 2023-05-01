import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import getPeer from "@/utils/getPeer";
import { useAuth } from "@/components/context/AuthContext";

import getDocument from "@/firebase/getData";
const ChatSidebar = () => {
    const { user } = useAuth();
    const [chatsOfCurrentUser, setChatsOfCurrentUser] = useState([]);
    const router = useRouter();
    const redirect = (id) => {
        router.push(`/chats/${id}`);
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
        <div class='w-full lg:w-3/6 xl:w-2/6 flex flex-col justify-start items-stretch  bg-white bg-opacity-80 rounded-md lg:rounded-none lg:rounded-l-md p-3'>
            <div class='flex-auto flex flex-col'>
                <div class='flex-auto flex flex-row'>
                    <div class='w-full p-1'>
                        <div class='w-full p-1'>
                            <input
                                type='text'
                                placeholder='Search'
                                class='search-input bg-gray-600 bg-opacity-10 placeholder-gray-500 text-gray-400 text-sm py-1 px-10 rounded-md outline-none w-full focus:outline-none focus:ring'
                            />
                        </div>
                        <ul class='overflow-y-auto'>
                            {chatsOfCurrentUser &&
                                chatsOfCurrentUser.map((chat) => {
                                    if (chat.users.includes(user.email)) {
                                        return (
                                            <li
                                                key={Math.random()}
                                                onClick={() =>
                                                    redirect(chat.id)
                                                }
                                                class='my-2 p-2 flex flex-row cursor-pointer rounded-lg hover:bg-gray-50 hover:bg-opacity-50'
                                            >
                                                <img
                                                    src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-997145684-1547233351.jpg?crop=1xw:1xh;center,top&resize=480:*'
                                                    class='h-12 w-12 rounded-full mr-4'
                                                    alt=''
                                                />
                                                <div class='w-full flex flex-col justify-center'>
                                                    <div class='flex flex-row justify-between items-center'>
                                                        <h2 class='text-xs font-bold'>
                                                            {getPeer(
                                                                chat.users,
                                                                user.email
                                                            )}
                                                        </h2>
                                                        <div class='text-xs flex flex-row'>
                                                            <svg
                                                                class='w-4 h-4 text-blue-600 fill-current mr-1'
                                                                viewBox='0 0 19 14'
                                                            >
                                                                <path
                                                                    fill-rule='nonzero'
                                                                    d='M4.96833846,10.0490996 L11.5108251,2.571972 C11.7472185,2.30180819 12.1578642,2.27443181 12.428028,2.51082515 C12.6711754,2.72357915 12.717665,3.07747757 12.5522007,3.34307913 L12.4891749,3.428028 L5.48917485,11.428028 C5.2663359,11.6827011 4.89144111,11.7199091 4.62486888,11.5309823 L4.54038059,11.4596194 L1.54038059,8.45961941 C1.2865398,8.20577862 1.2865398,7.79422138 1.54038059,7.54038059 C1.7688373,7.31192388 2.12504434,7.28907821 2.37905111,7.47184358 L2.45961941,7.54038059 L4.96833846,10.0490996 L11.5108251,2.571972 L4.96833846,10.0490996 Z M9.96833846,10.0490996 L16.5108251,2.571972 C16.7472185,2.30180819 17.1578642,2.27443181 17.428028,2.51082515 C17.6711754,2.72357915 17.717665,3.07747757 17.5522007,3.34307913 L17.4891749,3.428028 L10.4891749,11.428028 C10.2663359,11.6827011 9.89144111,11.7199091 9.62486888,11.5309823 L9.54038059,11.4596194 L8.54038059,10.4596194 C8.2865398,10.2057786 8.2865398,9.79422138 8.54038059,9.54038059 C8.7688373,9.31192388 9.12504434,9.28907821 9.37905111,9.47184358 L9.45961941,9.54038059 L9.96833846,10.0490996 L16.5108251,2.571972 L9.96833846,10.0490996 Z'
                                                                ></path>
                                                            </svg>
                                                            <span class='text-gray-400'>
                                                                10:45
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class='flex flex-row justify-between items-center'>
                                                        <p class='text-xs text-gray-500'>
                                                            On projection
                                                            apartments
                                                            unsatiable...
                                                        </p>
                                                        <span class='text-sm bg-blue-500 rounded-full w-5 h-5 text-center text-white font-bold'>
                                                            4
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    }
                                })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatSidebar;
