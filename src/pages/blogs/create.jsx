import { useFormik } from "formik";
import Head from "next/head";
import Image from "next/image";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { toast } from "react-toastify";

import PageIntro from "@/components/PageIntro";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/textarea/Textarea";

import uploadImage from "@/firebase/addImage";
import { postHandler } from "@/utils/api";

import UploadImageSVG from "/public/images/upload-image.svg";

const CreateBlog = ({ t }) => {
    const [imageUpload, setImageUpload] = useState(null);
    const onSubmit = async (values, actions) => {
        const response = await postHandler("/api/create_blog", values);
        if (response.data.success === 0) {
            // after successfully submit data to firestore database,
            //we will save image in storage according to id of document( response.data.refID)
            try {
                await uploadImage(
                    imageUpload,
                    response.data.refID,
                    "blogImages/"
                );
                setImageUpload(null);
                toast(response.data.message, {
                    hideProgressBar: true,
                    position: "bottom-left",
                    autoClose: 2000,
                    type: "success",
                });
            } catch (error) {
                toast(
                    "Form submitted successfully, but image failed to upload!",
                    {
                        hideProgressBar: true,
                        position: "bottom-left",
                        autoClose: 2000,
                        type: "error",
                    }
                );
            }
        } else {
            toast(response.data.message, {
                hideProgressBar: true,
                position: "bottom-left",
                autoClose: 2000,
                type: "error",
            });
        }
        actions.resetForm();
    };
    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
            en_title: "",
            ar_title: "",
            en_article: "",
            ar_article: "",
        },
        // validationSchema: schema,
        onSubmit,
    });
    return (
        <>
            <Head>
                <title>{t("blog:createBlog")}</title>
            </Head>
            <div className='container mt-10'>
                <PageIntro
                    title={t("uploadYourArticle")}
                    subtitle={t("addYouArticleToOurBlogs")}
                />
                <form onSubmit={handleSubmit} autoComplete='off'>
                    <div className='flex flex-col xl:flex-row md:justify-between gap-x-5 gap-y-16'>
                        <div className='xl:w-1/2 p-4 bg-light-cyan'>
                            <div className='mb-8'>
                                <Input
                                    value={values.en_title}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.en_title}
                                    touched={touched.en_title}
                                    label={t("englishTitle")}
                                    field={t("englishTitle")}
                                    type='text'
                                    name='en_title'
                                    labelColor='text-black'
                                    placeholder={t("enterEnglishTitle")}
                                    shadow='md'
                                    radius='lg'
                                    t={t}
                                    inputWidthSize='w-full'
                                />
                            </div>
                            <div>
                                <Textarea
                                    value={values.en_article}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.en_article}
                                    touched={touched.en_article}
                                    label={t("englishArticle")}
                                    name='en_article'
                                    labelColor='text-black'
                                    placeholder={t("enterEnglishArticle")}
                                    rows='12'
                                    shadow='md'
                                    radius='lg'
                                    t={t}
                                />
                            </div>
                        </div>
                        <div className='xl:w-1/2 p-4 bg-light-cyan'>
                            <div className='mb-8'>
                                <Input
                                    value={values.ar_title}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.ar_title}
                                    touched={touched.ar_title}
                                    label={t("arabicTitle")}
                                    field={t("arabicTitle")}
                                    type='text'
                                    name='ar_title'
                                    labelColor='text-black'
                                    placeholder={t("enterArabicTitle")}
                                    shadow='md'
                                    radius='lg'
                                    t={t}
                                    inputWidthSize='w-full'
                                />
                            </div>
                            <div>
                                <Textarea
                                    value={values.ar_article}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.ar_article}
                                    touched={touched.ar_article}
                                    label={t("arabicArticle")}
                                    name='ar_article'
                                    labelColor='text-black'
                                    placeholder={t("enterArabicArticle")}
                                    rows='12'
                                    shadow='md'
                                    radius='lg'
                                    t={t}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col text-center mt-10 mx-auto p-4 bg-light-cyan'>
                        <label className='mb-5'>
                            {t("uploadArticleImage")}
                        </label>
                        <div className='flex items-center justify-center w-1/3 p-5 border-4 border-gray/70 rounded-lg mx-auto h-80'>
                            <label className='h-full'>
                                <input
                                    className='text-sm cursor-pointer w-36 hidden'
                                    type='file'
                                    onChange={(e) =>
                                        setImageUpload(e.target.files[0])
                                    }
                                />
                                <div className='text-light-gray h-full flex rounded font-semibold cursor-pointer p-1 px-3'>
                                    {imageUpload ? (
                                        <Image
                                            src={URL.createObjectURL(
                                                imageUpload
                                            )}
                                            alt='blog image preview'
                                            className='object-cover w-full h-full'
                                            width='288'
                                            height='288'
                                        />
                                    ) : (
                                        <Image
                                            src={UploadImageSVG}
                                            alt='upload image'
                                            width='100'
                                        />
                                    )}
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className='w-full p-4 flex items-center justify-center'>
                        <Button
                            disabled={isSubmitting}
                            content={t("save")}
                            textTransform='capitalize'
                            filled='true'
                            size='large'
                            fontSize='text-sm md:text-xl'
                            radius='md'
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "blog",
                "validation",
            ])),
            // Will be passed to the page component as props
        },
    };
}
export default withTranslation(["blog", "validation"])(CreateBlog);
