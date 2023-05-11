import { getFirestore } from "firebase/firestore";

import getDocById from "@/firebase/getDocById";

import firebase_app from "../firebase/config";

const db = getFirestore(firebase_app);
export const getMyPeer = (users, currentUser) => {
    return users?.find((user) => user !== currentUser);
};

export const getPeerData = async (users, currentUser) => {
    const peerId = getMyPeer(users, currentUser);
    try {
        const data = await getDocById("users", peerId);
        return data;
    } catch {
        //
    }
};

export const getAllMyPeers = async (users, currentUser) => {
    return users?.filter((user) => user !== currentUser?.uid);
};
