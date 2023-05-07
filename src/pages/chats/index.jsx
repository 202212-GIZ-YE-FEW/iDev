import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LogoSVG from "public/logo.svg";
import { useTranslation } from "next-i18next";
import ChatSidebar from "@/components/ChatSidebar";

import LayoutChat from "@/layout/LayoutChat";
const Chat = () => {
    const { t } = useTranslation("chatroom");
    return (
        <div className='h-screen overflow-hidden'>
            <div
                className='shadow-xl rounded-md w-full lg:w-full lg:mx-auto flex'
                style={{ height: "calc(100vh - 80px)" }}
            >
                <ChatSidebar />
                <div className='hidden w-5/6 bg-background h-full lg:flex flex-col justify-center items-center border-r-2 border-l-2 border-gray/10 lg:rounded-r-md xl:rounded-none'>
                    <div className='flex items-center justify-center space-s-4'>
                        <Image src={LogoSVG} />
                        <span className='font-semibold flex items-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase'>
                            Healing
                        </span>
                    </div>
                    <p className='mt-10 text-center text-light-gray px-10'>
                        {t("introChat")}
                    </p>
                </div>
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
            requireAuth: true,
            // Will be passed to the page component as props
        },
    };
}
