import { collection, getDocs, query } from "firebase/firestore";
import { where } from "firebase/firestore";
import { createContext, useContext } from "react";
import { useQuery } from "react-query";

import { db } from "@/firebase/config";
const TherapistContext = createContext({});
export const useTherapist = () => useContext(TherapistContext);
export function TherapistContextProvider({ children }) {
    const { data: therapistIDs } = useQuery("therapistIDs", async () => {
        try {
            const q = query(
                collection(db, "users"),
                where("isTherapist", "==", true)
            );
            const querySnapshot = await getDocs(q);
            const data = Promise.all(
                querySnapshot.docs.map(async (doc) => ({ id: doc.id }))
            );
            return data;
        } catch (error) {
            //
        }
    });

    //TODO: isTherapist

    return (
        <TherapistContext.Provider
            value={{
                therapistIDs,
            }}
        >
            {children}
        </TherapistContext.Provider>
    );
}
