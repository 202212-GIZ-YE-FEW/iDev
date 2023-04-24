import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "@/firebase/config";
import Button from "@/components/ui/Button";
import { useTranslation } from "next-i18next";
function BlogCard({ en_title, ar_title, id, ar_article, en_article }) {
    const [imageUrl, setImageUrl] = useState(null);
    const { i18n, t } = useTranslation("blog", "common");
    useEffect(() => {
        const imageRef = ref(storage, `blogImages/${id}`);
        getDownloadURL(imageRef)
            .then((url) => {
                setImageUrl(url);
            })
            .catch((error) => {
                alert(error);
            });
    }, [id]);
    // console.log(i18n?.language)
    return (
        <div className='  py-9 grid place-items-center bg-indigo-400 font-mono'>
            <div className='bg-yellow h-[360px] w-64 rounded-md relative '>
                <div className=' card flex justify-center items-center leading-none  '>
                    <img
                        src={
                            imageUrl ||
                            "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                        }
                        className='  w-56 rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700 border-1 border-gray-100'
                    />
                </div>
                <div className='p-3'>
                    <div>
                        <p className='block mb-1 font-extralight'>
                            {i18n?.language == "ar"
                                ? `${ar_title}`
                                : `${en_title}`}
                        </p>
                        <p className='text-xs tracking-tighter text-gray-600'>
                            {i18n?.language == "ar"
                                ? `${ar_article}`
                                : `${en_article}`}
                        </p>
                    </div>
                    <div className='absolute bottom-0 right-0 pr-1 pb-1'>
                        <div className='mt-auto '>
                            <Button
                                content={t("readMore")}
                                filled='true'
                                size='small'
                                textTransform='uppercase'
                                shadow='shadow-lg'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
