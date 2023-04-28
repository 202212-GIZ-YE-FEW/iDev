import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "@firebase/firestore";
import { db } from "../../firebase/config";
function Chat({ t }) {
    const [input, setInput] = useState("");
    const sendMessage = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, `chats/HLTXHvruo3KuhR91WGzQ/messages`), {
            text: input,
            sender: "abrar.abdulwahed@gmail.com",
            timestamp: serverTimestamp(),
        });
        setInput("");
    };
    useEffect(() => {
        const newChat = async () => {
            await addDoc(collection(db, "chats"), {
                users: [
                    "abrar.abdulwahed@gmail.com",
                    "abrar_abdulwahed@yahoo.com",
                ],
            });
        };
        newChat();
    }, [input]);
    return (
        <div>
            <form onSubmit={sendMessage}>
                lkjkjlk
                <input
                    class='border border-black'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </form>
        </div>
    );
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}

export default withTranslation("common")(Chat);
