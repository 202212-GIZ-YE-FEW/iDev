import getDocById from "@/firebase/getDocById";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import firebase_app from "../firebase/config";

const db = getFirestore(firebase_app);
export const getMyPeer = (users, currentUser) => {
    return users?.find((user) => user !== currentUser?.uid);
};

export const getPeerData = async (users, currentUser) => {
    const peerId = getMyPeer(users, currentUser);
    try {
        const docRef = doc(db, "users", peerId);
        const docSnap = await getDoc(docRef);
        // const data =  await getDocById("users", peerId);
        return docSnap.data();
        // return data;
    } catch {
        //
    }
};

export const getAllMyPeers = async (users, currentUser) => {
    return users?.filter((user) => user !== currentUser?.uid);
};
