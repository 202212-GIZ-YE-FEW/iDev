import { useState } from "react";
import Button from "@/components/ui/Button";
import PageIntro from "@/components/PageIntro";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/navigation";
import addDocument from "@/firebase/addData";
import Input from "@/components/ui/Input";

const Add_Career = ({ t }) => {
    const [enTitle, SetEnTitle] = useState("");
    const [arTitle, setArTitle] = useState("");

    const [enDescrption, setEnDescrption] = useState("");
    const [arDescrption, setArDescrption] = useState("");

    const [enSpecialization, setEnSpecialization] = useState("");
    const [arSpecialization, setArSpecialization] = useState("");

    const [enOccupation, setEnOccupation] = useState("");
    const [arOccupation, setArOccupation] = useState("");

    const router = useRouter();

    const setData = async () => {
        try {
            await addDocument("current_jobs", {
                enTitle: enTitle,
                arTitle: arTitle,
                enDescrption: enDescrption,
                arDescrption: arDescrption,
                enSpecialization: enSpecialization,
                arSpecialization: arSpecialization,
                enOccupation: enOccupation,
                arOccupation: arOccupation,
            });

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
                                onChange={(e) => SetEnTitle(e.target.value)}
                            />
                            <Input
                                label='Descrption of Job'
                                placeholder='Ex: Moz is looking for a Senior Software ...'
                                inputWidthSize='w-full'
                                onChange={(e) =>
                                    setEnDescrption(e.target.value)
                                }
                            />
                            <Input
                                label='specialization of job in english'
                                placeholder='Ex: Engineering'
                                inputWidthSize='w-full'
                                onChange={(e) =>
                                    setEnSpecialization(e.target.value)
                                }
                            />
                            <Input
                                label='Enter Occupation of Job English'
                                placeholder='Ex: Application Development'
                                inputWidthSize='w-full'
                                onChange={(e) =>
                                    setEnOccupation(e.target.value)
                                }
                            />
                        </div>
                        <div className='flex-1 pl-10 ' dir='rtl'>
                            <Input
                                label='المسمى الوظيفي'
                                placeholder='مثال: مدير ذكاء الأعمال'
                                inputWidthSize='w-full'
                                onChange={(e) => setArTitle(e.target.value)}
                                direction='rtl'
                            />
                            <Input
                                label='وصف الوظيفة '
                                placeholder='...مثال:مطور برامج أول للإنضمام'
                                inputWidthSize='w-full'
                                onChange={(e) =>
                                    setArDescrption(e.target.value)
                                }
                            />
                            <Input
                                label='التخصص الوظيفي'
                                placeholder='...مثال:مهندس'
                                inputWidthSize='w-full'
                                onChange={(e) =>
                                    setArSpecialization(e.target.value)
                                }
                            />
                            <Input
                                label='المنصب الوظيفي'
                                placeholder='...مثال:النماذج الأولية السريعة'
                                inputWidthSize='w-full'
                                onChange={(e) =>
                                    setArOccupation(e.target.value)
                                }
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
                    shadow={"2px"}
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
