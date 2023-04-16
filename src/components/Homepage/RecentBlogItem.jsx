import { withTranslation, useTranslation } from "next-i18next";
import { storage } from "@/firebase/config";
import { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";

import { useRouter } from "next/navigation";
function BlogItem({
    en_title,
    ar_title,
    en_article,
    ar_article,
    thumbnail,
    isOdd,
}) {
    const router = useRouter();
    const [imageUrl, setImageUrl] = useState(null);
    const { i18n } = useTranslation("common");

    useEffect(() => {
        const imageRef = ref(storage, `blogImages/${thumbnail}.jpeg`);

        getDownloadURL(imageRef)
            .then((url) => {
                setImageUrl(url);
                // do something with the URL, e.g. display the image using an <img> tag
            })
            .catch((error) => {
                // handle the error
            });
    }, []);
    const handleBlogClick = () => {
        router.push({
            pathname: "/blog",
            query: { en_title },
        });
    };

    return (
        <>
            <div className='relative mx-3'>
                <a onClick={() => handleBlogClick()}>
                    <div className=' border border-gray max-h-250'>
                        <img
                            src={imageUrl}
                            width={200}
                            height={140}
                            sizes='(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw'
                            className='w-full max-w-100%   md:max-h-[315px] sm:max-h-[208px]'
                        />
                    </div>
                </a>

                {isOdd ? (
                    <div className='w-32 absolute bottom-2 left-2'>
                        <p className='uppercase text-base box-decoration-clone inline leading-7 bg-light-gray text-white px-2'>
                            {i18n.language == "ar"
                                ? `${ar_title}`
                                : `${en_title}`}
                        </p>
                    </div>
                ) : (
                    <p className='uppercase absolute top-2 left-2 text-base bg-light-gray text-white px-2'>
                        {i18n.language == "ar" ? `${ar_title}` : `${en_title}`}
                    </p>
                )}
            </div>
        </>
    );
}
export default withTranslation("home")(BlogItem);
