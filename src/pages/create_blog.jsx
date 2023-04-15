import { useState } from "react";
import { collection, addDoc } from "@firebase/firestore";
import { db, storage } from "@/firebase/config";
import { ref, uploadBytes } from "firebase/storage";
import Button from "@/components/ui/Button";
import PageIntro from "@/components/PageIntro";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/navigation";

export const extractFirstName = (str) => {
    const firstSpaceIndex = str.indexOf(" ");
    if (firstSpaceIndex === -1) {
        return str;
    }
    return str.slice(0, firstSpaceIndex).toLowerCase();
};
const CreateBlog = ({ t }) => {
    const [enTitle, SetEnTitle] = useState("");
    const [arTitle, setArTitle] = useState("");
    const [enPostText, setEnPostText] = useState("");
    const [arpostText, setArPostText] = useState("");
    const [imageUpload, setImageUpload] = useState(null);
    const postCollection = collection(db, "blogs");
    const router = useRouter();
    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(
            storage,
            `blogImages/${extractFirstName(enTitle)}.jpeg`
        );
        uploadBytes(imageRef, imageUpload).then(() => alert("Image uploaded"));
    };

    const setData = async () => {
        try {
            await uploadImage();
            await addDoc(postCollection, {
                ar_title: arTitle,
                en_title: enTitle,
                ar_article: arpostText,
                en_article: enPostText,
            });
            await router.push({
                pathname: "/blog",
                query: { en_title: enTitle },
            });
        } catch (error) {
            console.error(error);
            router.push("/404");
        }
    };

    return (
        <>
            <div className='w-full p-4   flex lg:justify-start sm:items-center sm:justify-center'>
                {" "}
                <PageIntro
                    title={t("uploadYourArticle")}
                    subtitle={t("AddYouArticleToOurBlogs")}
                />
            </div>

            <div className='flex flex-wrap '>
                <div className='w-full md:w-1/2 p-4 bg-light-cyan  '>
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
                        className='block mb-2 text-sm font-medium text-gray-900 items-center'
                        for='file_input'
                    >
                        {t("UploadArticleImage")}
                    </label>
                    <input
                        className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
                        id='file_input'
                        type='file'
                        onChange={(e) => setImageUpload(e.target.files[0])}
                    />
                </div>

                <div className='w-full p-4 flex items-center justify-center'>
                    <Button
                        content={t("upload")}
                        size={"large"}
                        filled={"true"}
                        textTransform={"capitalize"}
                        fontSize={"2xl"}
                        radius={"6px"}
                        shadow={"2px"}
                        onClick={setData}
                    />
                </div>
            </div>
        </>
    );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "create_blog",
            ])),
            // Will be passed to the page component as props
        },
    };
}
export default withTranslation("create_blog")(CreateBlog);
