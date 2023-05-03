import getDocument from "@/firebase/getData";
const getTherapists = async () => {
    // const chats = await getDocument("chats");
    const users = await getDocument("users");
    const therapists = users.filter((user) => user.isTherapist === true); // this will be changed
    return therapists;
};
export default getTherapists;
