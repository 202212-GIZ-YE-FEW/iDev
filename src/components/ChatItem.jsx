import { getMyPeer, getPeerData } from "@/utils/getPeer";
import { useDocumentData } from "react-firebase-hooks/firestore";
import {
    addDoc,
    collection,
    doc,
    getDoc,
    orderBy,
    query,
    serverTimestamp,
    updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
const ChatItem = (props) => {
    const { chat, currentUser } = props;
    const { data: peer } = useQuery(["setPeerData", chat.id], async () => {
        const d = getPeerData(chat.users, currentUser);
        return d;
    });
    // const {
    //     data: lastMsg,
    // } = useQuery("getLastMsg", async () => {
    //       // console.log('to test inside query', peerId);
    //       // const docRef = doc(db, "users", peerId);
    //       // const docSnap = await getDoc(docRef);
    //       // return docSnap.data();
    //       return chat.lastMsg;
    // });
    return (
        <>
            <img
                src='https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
                className='h-12 w-12 rounded-full me-4'
                alt=''
            />
            <div className='w-full flex flex-col justify-center'>
                <div className='flex flex-row justify-between items-center'>
                    <h2 className='text-xs font-bold'>
                        {`${peer?.first_name} ${peer?.last_name}`}
                    </h2>
                    <div className='text-xs flex flex-row'>
                        {/* if sender of last message is the current user */}
                        {chat.lastMsg?.sender === currentUser.email && (
                            <svg
                                className='w-4 h-4 text-[#F0FFFF] fill-current mr-1'
                                viewBox='0 0 19 14'
                            >
                                <path
                                    fillRule='nonzero'
                                    d='M4.96833846,10.0490996 L11.5108251,2.571972 C11.7472185,2.30180819 12.1578642,2.27443181 12.428028,2.51082515 C12.6711754,2.72357915 12.717665,3.07747757 12.5522007,3.34307913 L12.4891749,3.428028 L5.48917485,11.428028 C5.2663359,11.6827011 4.89144111,11.7199091 4.62486888,11.5309823 L4.54038059,11.4596194 L1.54038059,8.45961941 C1.2865398,8.20577862 1.2865398,7.79422138 1.54038059,7.54038059 C1.7688373,7.31192388 2.12504434,7.28907821 2.37905111,7.47184358 L2.45961941,7.54038059 L4.96833846,10.0490996 L11.5108251,2.571972 L4.96833846,10.0490996 Z M9.96833846,10.0490996 L16.5108251,2.571972 C16.7472185,2.30180819 17.1578642,2.27443181 17.428028,2.51082515 C17.6711754,2.72357915 17.717665,3.07747757 17.5522007,3.34307913 L17.4891749,3.428028 L10.4891749,11.428028 C10.2663359,11.6827011 9.89144111,11.7199091 9.62486888,11.5309823 L9.54038059,11.4596194 L8.54038059,10.4596194 C8.2865398,10.2057786 8.2865398,9.79422138 8.54038059,9.54038059 C8.7688373,9.31192388 9.12504434,9.28907821 9.37905111,9.47184358 L9.45961941,9.54038059 L9.96833846,10.0490996 L16.5108251,2.571972 L9.96833846,10.0490996 Z'
                                ></path>
                            </svg>
                        )}
                        <span className='text-gray/60'>
                            {/* {chat.id === chatRef
                          ? convertFirebaseTimestamp(
                                lastMsgLive?.time
                            )[0]
                          : convertFirebaseTimestamp(
                                chat.lastMsg?.time
                            )[0]
                      } */}
                            {chat?.lastMsg.text}
                        </span>
                    </div>
                </div>
                <p className='text-xs text-gray/80'>
                    {/* {chat.id === chatRef
                  ? lastMsgLive?.text
                  : chat.lastMsg?.text} */}
                </p>
            </div>
        </>
    );
};
export default ChatItem;
