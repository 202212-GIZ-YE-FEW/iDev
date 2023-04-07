import { collection, getDocs, query } from "firebase/firestore";

import { db } from "./config";

export default async function getDocument(doc, criterions) {
    const q = query(collection(db, doc));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    return data;
}
//just update the commit message
