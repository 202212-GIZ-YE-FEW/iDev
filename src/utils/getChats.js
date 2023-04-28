import getDocument from "@/firebase/getData";
async function getChatsByUser(user) {
    let chats = await getDocument("chats");
    const chatsOfUser = chats.filter((chat) => chat.users.includes(user.email));
    return chatsOfUser;
}
export default getChatsByUser;
