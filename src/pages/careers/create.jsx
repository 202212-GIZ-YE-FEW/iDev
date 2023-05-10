import { useState } from "react";
import Button from "@/components/ui/Button";
import PageIntro from "@/components/PageIntro";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/navigation";
import addDocument from "@/firebase/addData";
import Input from "@/components/ui/Input";

const Add_Career = ({ t }) => {
    const [formData, setFormData] = useState({
        enTitle: "",
        arTitle: "",
        enDescrption: "",
        arDescrption: "",
        enSpecialization: "",
        arSpecialization: "",
        enOccupation: "",
        arOccupation: "",
    });

    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const setData = async () => {
        try {
            await addDocument("current_jobs", formData);
            await router.push({
                pathname: "/careers",
            });
        } catch (error) {
            router.push("/404");
        }
    };

    return (
        <>
            <div className='container'>
                <PageIntro
                    title={t("AddYourJob")}
                    subtitle={t("weAreHiringDescrption")}
                />
            </div>
            <div className='bg-light-cyan'>
                <div className='container'>
                    <div className='flex' dir='ltr'>
                        <div className='flex-1 pr-10' dir='ltr'>
                            <Input
                                label='Title of Job'
                                placeholder='Ex: Business Intelligence Manager'
                                inputWidthSize='w-full'
                                name='enTitle'
                                value={formData.enTitle}
                                onChange={handleChange}
                            />
                            <Input
                                label='Descrption of Job'
                                placeholder='Ex: Moz is looking for a Senior Software ...'
                                inputWidthSize='w-full'
                                name='enDescrption'
                                value={formData.enDescrption}
                                onChange={handleChange}
                            />
                            <Input
                                label='specialization of job in english'
                                placeholder='Ex: Engineering'
                                inputWidthSize='w-full'
                                name='enSpecialization'
                                value={formData.enSpecialization}
                                onChange={handleChange}
                            />
                            <Input
                                label='Enter Occupation of Job English'
                                placeholder='Ex: Application Development'
                                inputWidthSize='w-full'
                                name='enOccupation'
                                value={formData.enOccupation}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex-1 pl-10 ' dir='rtl'>
                            <Input
                                label='المسمى الوظيفي'
                                placeholder='مثال: مدير ذكاء الأعمال'
                                inputWidthSize='w-full'
                                name='arTitle'
                                value={formData.arTitle}
                                onChange={handleChange}
                                direction='rtl'
                            />
                            <Input
                                label='وصف الوظيفة '
                                placeholder='...مثال:مطور برامج أول للإنضمام'
                                inputWidthSize='w-full'
                                name='arDescrption'
                                value={formData.arDescrption}
                                onChange={handleChange}
                            />
                            <Input
                                label='التخصص الوظيفي'
                                placeholder='...مثال:مهندس'
                                inputWidthSize='w-full'
                                name='arSpecialization'
                                value={formData.arSpecialization}
                                onChange={handleChange}
                            />
                            <Input
                                label='المنصب الوظيفي'
                                placeholder='...مثال:النماذج الأولية السريعة'
                                inputWidthSize='w-full'
                                name='arOccupation'
                                value={formData.arOccupation}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full p-4 flex items-center justify-center'>
                <Button
                    content={t("addNewJob")}
                    size={"large"}
                    filled={"true"}
                    textTransform={"capitalize"}
                    fontSize={"2xl"}
                    radius={"6px"}
                    shadow={"4px"}
                    onClick={setData}
                />
            </div>
        </>
    );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "career"])),
            // Will be passed to the page component as props
        },
    };
}

export default withTranslation("career")(Add_Career);
