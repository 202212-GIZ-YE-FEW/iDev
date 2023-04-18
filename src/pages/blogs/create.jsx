import { useFormik } from "formik";
import Head from "next/head";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { toast } from "react-toastify";

import PageIntro from "@/components/PageIntro";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/textarea/Textarea";

import { postHandler } from "@/utils/api";
import schema from "@/utils/validationSchema";
export const extractFirstName = (str) => {
    //this fn to rename the Img to first word of the Title
    const firstSpaceIndex = str.indexOf(" ");
    if (firstSpaceIndex === -1) {
        return str;
    }
    return str.slice(0, firstSpaceIndex).toLowerCase();
};
const CreateBlog = ({ t }) => {
    // const onSubmit = async (values, actions) => {
    //     const response = await postHandler("/api/contact", values);
    //     if (response.data.success === 0) {
    //         toast(response.data.message, {
    //             hideProgressBar: true,
    //             position: "bottom-left",
    //             autoClose: 2000,
    //             type: "success",
    //         });
    //     } else {
    //         toast(response.data.message, {
    //             hideProgressBar: true,
    //             position: "bottom-left",
    //             autoClose: 2000,
    //             type: "error",
    //         });
    //     }
    //     actions.resetForm();
    // };
    // const {
    //     values,
    //     errors,
    //     touched,
    //     isSubmitting,
    //     handleBlur,
    //     handleChange,
    //     handleSubmit,
    // } = useFormik({
    //     initialValues: {
    //         en_title: "",
    //         ar_title: "",
    //         en_article: "",
    //         ar_article: "",
    //     },
    //     validationSchema: schema,
    //     onSubmit,
    // });
    // return (
    //     <>
    //         <Head>
    //             <title>{t("create_blog:createBlog")}</title>
    //         </Head>
    //         <div className='container w-full p-4 flex items-center justify-center lg:justify-start'>
    //             <PageIntro
    //                 title={t("uploadYourArticle")}
    //                 subtitle={t("addYouArticleToOurBlogs")}
    //             />
    //             <div className='flex flex-wrap'>
    //                 <form
    //                     onSubmit={handleSubmit}
    //                     autoComplete='off'
    //                     className='flex flex-col md:flex-row md:justify-between xl:flex-col gap-x-5 gap-y-16'
    //                 >
    //                     <div className='w-full md:w-1/2 p-4 bg-light-cyan'>
    //                         <Input
    //                             value={values.fullName}
    //                             onChange={handleChange}
    //                             onBlur={handleBlur}
    //                             error={errors.fullName}
    //                             touched={touched.fullName}
    //                             label={t("englishTitle")}
    //                             filed={t("englishTitle")}
    //                             type='text'
    //                             name='en_title'
    //                             labelColor='text-black'
    //                             placeholder={t("enterEnglishTitle")}
    //                             shadow='md'
    //                             radius='lg'
    //                             t={t}
    //                             inputWidthSize='w-full'
    //                         />
    //                         <Textarea
    //                             value={values.en_article}
    //                             onChange={handleChange}
    //                             onBlur={handleBlur}
    //                             error={errors.en_article}
    //                             touched={touched.en_article}
    //                             label={t("englishArticle")}
    //                             name='ar_article'
    //                             labelColor='text-black'
    //                             placeholder={t("enterEnglishArticle")}
    //                             rows='12'
    //                             shadow='md'
    //                             radius='lg'
    //                             t={t}
    //                         />
    //                     </div>
    //                     <div className='w-full md:w-1/2 p-4 bg-light-cyan'>
    //                         <Input
    //                             value={values.ar_title}
    //                             onChange={handleChange}
    //                             onBlur={handleBlur}
    //                             error={errors.ar_title}
    //                             touched={touched.ar_title}
    //                             label={t("arabicTitle")}
    //                             filed={t("arabicTitle")}
    //                             type='text'
    //                             name='ar_title'
    //                             labelColor='text-black'
    //                             placeholder={t("enterArabicTitle")}
    //                             shadow='md'
    //                             radius='lg'
    //                             t={t}
    //                             inputWidthSize='w-full'
    //                         />
    //                         <Textarea
    //                             value={values.ar_article}
    //                             onChange={handleChange}
    //                             onBlur={handleBlur}
    //                             error={errors.ar_article}
    //                             touched={touched.ar_article}
    //                             label={t("arabicArticle")}
    //                             name='ar_article'
    //                             labelColor='text-black'
    //                             placeholder={t("enterArabicArticle")}
    //                             rows='12'
    //                             shadow='md'
    //                             radius='lg'
    //                             t={t}
    //                         />
    //                         {/* <label className='mt-4 block mb-2 text-sm font-medium text-gray-900 items-center'>
    //                             {t("uploadArticleImage")}
    //                         </label>
    //                         <input
    //                             className='block w-full text-sm text-gray-900 border border-gray-300  rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
    //                             id='file_input'
    //                             type='file'
    //                             onChange={(e) => setImageUpload(e.target.files[0])}
    //                         /> */}
    //                     </div>
    //                     <div className='w-full p-4 flex items-center justify-center'>
    //                         <Button
    //                             disabled={isSubmitting}
    //                             content={t("upload")}
    //                             textTransform='capitalize'
    //                             filled='true'
    //                             size='large'
    //                             fontSize='text-sm md:text-xl'
    //                             radius='md'
    //                         />
    //                     </div>
    //                 </form>
    //             </div>
    //         </div>
    //     </>
    // );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "create_blog",
                "validation",
            ])),
            // Will be passed to the page component as props
        },
    };
}
export default withTranslation(["create_blog", "validation"])(CreateBlog);
