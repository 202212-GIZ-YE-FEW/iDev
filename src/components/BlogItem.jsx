import AOS from "aos";
import { getDownloadURL, ref } from "firebase/storage";
import Image from "next/image";
import Link from "next/link";
import { useTranslation, withTranslation } from "next-i18next";
import { useEffect, useState } from "react";

import "aos/dist/aos.css";

import Button from "@/components/ui/Button";

import { storage } from "@/firebase/config";
function BlogItem({ en_title, ar_title, id, isOdd, t }) {
    const [imageUrl, setImageUrl] = useState(null);
    const { i18n } = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 500,
        });

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
                        className='w-full h-full rounded-3xl'
                    />
                </div>
                <div className='absolute h-full w-full bg-black/70 text-yellow flex flex-col items-center justify-center bottom-0 opacity-0 rounded-3xl hover:bottom-0  hover:opacity-100 transition-all duration-1000'>
                    {/* <p data-aos='fade-top' className='mb-5'>
                        {i18n.language == "ar" ? `${ar_title}` : `${en_title}`}
                    </p> */}
                    <Link href={`/blogs/${id}`}>
                        <Button
                            content={t("more")}
                            text-transform='capitalize'
                            filled='false'
                            size='large'
                            fontSize='text-sm md:text-xl'
                            radius='md'
                        />
                    </Link>
                </div>

                {isOdd ? (
                    <div className='w-32 absolute bottom-2 left-[1rem]'>
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
