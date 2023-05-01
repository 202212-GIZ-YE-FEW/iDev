import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Sidebar from "@/components/ChatSidebar";

import LayoutChat from "@/layout/LayoutChat";
const Chat = () => {
    return (
        <div className='flex antialiased'>
            <div className='flex flex-col lg:flex-row h-full w-full overflow-x-hidden'>
                <Sidebar />
                <div className='flex flex-col flex-auto lg:w-3/4 flex-shrink-0 bg-background p-4'></div>
            </div>
        </div>
    );
};
export default Chat;
Chat.getLayout = LayoutChat;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["chatroom", "common"])),
            // Will be passed to the page component as props
        },
    };
}
