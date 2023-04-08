import { useState } from "react";
import { collection, addDoc, setDoc, doc } from "@firebase/firestore";
import { auth, db } from "@/firebase/config";
import Button from "@/components/ui/Button";
import PageIntro from "@/components/PageIntro";
import addDocument from "@/firebase/addData";

const CreateBlog = () => {
    const [enTitle, SetEnTitle] = useState("");
    const [arTitle, setArTitle] = useState("");
    const [enPostText, setEnPostText] = useState("");
    const [arpostText, setArPostText] = useState("");
    const [blognumber, setBlognumber] = useState("2");
    const postCollection = collection(db, "posts");

    const setData = async () => {
        await setDoc(doc(db, `blogs/ar/blog/${blognumber}/`), {
            blog: { title: arTitle, article: arpostText },

            // author:auth.currentUser.displayName
        });
        await setDoc(doc(db, `blogs/en/blog/${blognumber}/`), {
            blog: { title: enTitle, article: enPostText },

            // author:auth?.currentUser?.displayName
        });
    };

    return (
        <>
            <PageIntro
                title={"upload your articel"}
                subtitle={"Add you article to our Blogs "}
            />

            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 p-4 bg-light-cyan'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                        Title in English
                    </label>
                    <input
                        type='text'
                        className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='write the Tiltle Here'
                        onChange={(e) => SetEnTitle(e.target.value)}
                    />

                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                        Article in English{" "}
                    </label>
                    <textarea
                        rows='8'
                        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='write the Article Here'
                        onChange={(e) => setEnPostText(e.target.value)}
                    ></textarea>
                </div>

                <div className='w-full md:w-1/2 p-4 bg-light-cyan'>
                    <label
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                        dir='rtl'
                    >
                        العنوان بالعربية
                    </label>
                    <input
                        type='text'
                        className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='أكتب العنوان هنا'
                        dir='rtl'
                        onChange={(e) => setArTitle(e.target.value)}
                    />
                    <label
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                        dir='rtl'
                    >
                        المقال بالعربية
                    </label>
                    <textarea
                        id='message'
                        rows='8'
                        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='أكتب مقالك هنا'
                        dir='rtl'
                        onChange={(e) => setArPostText(e.target.value)}
                    ></textarea>

                    <label
                        class='block mb-2 text-sm font-medium text-gray-900 items-center'
                        for='file_input'
                    >
                        Upload Article Image
                    </label>
                    <input
                        class='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
                        id='file_input'
                        type='file'
                    />
                </div>
                <div></div>

                <div className=' items-center justify-evenly'>
                    <Button
                        content={"uplaod"}
                        size={"large"}
                        filled={"true"}
                        textTransform={"capitalize"}
                        fontSize={"xl"}
                        radius={"6px"}
                        shadow={"2px"}
                        onClick={setData}
                    />
                </div>
            </div>
        </>
    );
};

export default CreateBlog;
