import { doc, getDocs, query, addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { where } from "firebase/firestore";

import { db } from "@/firebase/config";
export default async function create_chat(participants) {
    const { user, therapist } = participants;
    try {
        const q = query(
            collection(db, "chats"),
            where("users", "array-contains", user)
        );
        const querySnapshot = await getDocs(q);
        const chats = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        const isExist = chats.find((chat) => chat.users?.includes(therapist));
        let chatRef = isExist;
        if (!isExist) {
            // No chat found for these two users, create a new chat
            chatRef = await addDoc(collection(db, "chats"), {
                users: [user, therapist],
                lastMsg: null,
            });
        }
        return chatRef;
    } catch (error) {
        alert(error);
    }
}
