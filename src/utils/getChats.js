import getDocument from "@/firebase/getData";
const getChatsByUser = async (user) => {
    const chats = await getDocument("chats");
    const chatsOfUser = chats.filter((chat) => chat.users.includes(user.email));
    return chatsOfUser;
};
export default getChatsByUser;
