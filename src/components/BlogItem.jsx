import { getDownloadURL, ref } from "firebase/storage";
import Image from "next/image";
import Link from "next/link";
import { useTranslation, withTranslation } from "next-i18next";
import { useEffect, useState } from "react";

import { storage } from "@/firebase/config";
function BlogItem({ en_title, ar_title, id, isOdd }) {
    const [imageUrl, setImageUrl] = useState(null);
    const { i18n } = useTranslation();

    useEffect(() => {
        const imageRef = ref(storage, `blogImages/${id}`);
        getDownloadURL(imageRef)
            .then((url) => {
                setImageUrl(url);
            })
            .catch((error) => {
                // handle the error
            });
    }, [id]);
    return (
        <>
            <div className='relative mx-3'>
                <Link href={`/blogs/${id}`}>
                    <div className='h-60'>
                        <Image
                            src={
                                imageUrl ||
                                "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                            }
                            width={200}
                            height={140}
                            alt={`${en_title} thumbnail`}
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            className='w-full h-full'
                        />
                    </div>
                </Link>

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
export default withTranslation("common")(BlogItem);
