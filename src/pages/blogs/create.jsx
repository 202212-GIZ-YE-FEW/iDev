import { useState } from "react";
import Button from "@/components/ui/Button";
import PageIntro from "@/components/PageIntro";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/navigation";
import addDocument from "@/firebase/addData";
import uploadImage from "@/firebase/addImage";
import Textarea from "@/components/ui/textarea/Textarea";
import Input from "@/components/ui/Input";
export const extractFirstName = (str) => {
    //this fn to rename the Img to first word of the Title
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
    const router = useRouter();

    const setData = async () => {
        try {
            const imageName = extractFirstName(enTitle);
            await uploadImage(imageUpload, imageName, "blogImages/");
            await addDocument("blogs", {
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
            router.push("/404");
        }
    };

    return (
        <>
            <div className='w-full p-4   flex lg:justify-start sm:items-center sm:justify-center'>
                {" "}
                <PageIntro
                    title={t("uploadYourArticle")}
                    subtitle={t("addYouArticleToOurBlogs")}
                />
            </div>

            <div className='flex flex-wrap '>
                <div className='w-full md:w-1/2 p-4 bg-light-cyan  '>
                    <Input
                        label={t("englishTitle")}
                        placeholder={t("englishTitle")}
                        inputWidthSize='w-full'
                        onChange={(e) => SetEnTitle(e.target.value)}
                    />

                    <Textarea
                        label={t("articleInEnglish")}
                        name='details'
                        labelColor='text-black'
                        placeholder={t("articleInEnglish")}
                        rows='12'
                        shadow='md'
                        radius='lg'
                        onChange={(e) => setEnPostText(e.target.value)}
                    />
                </div>

                <div className='w-full md:w-1/2 p-4 bg-light-cyan'>
                    <Input
                        label={t("arabicTitle")}
                        type='name'
                        name='name'
                        placeholder={t("arabicTitle")}
                        inputWidthSize='w-full'
                        onChange={(e) => setArTitle(e.target.value)}
                    />

                    <Textarea
                        label={t("articleInArabic")}
                        name='details'
                        labelColor='text-black'
                        placeholder={t("articleInArabic")}
                        rows='12'
                        shadow='md'
                        radius='lg'
                        t={t}
                        onChange={(e) => setArPostText(e.target.value)}
                    />

                    <label className='mt-4 block mb-2 text-sm font-medium text-gray-900 items-center'>
                        {t("uploadArticleImage")}
                    </label>
                    <input
                        className='block w-full text-sm text-gray-900 border border-gray-300  rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
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
