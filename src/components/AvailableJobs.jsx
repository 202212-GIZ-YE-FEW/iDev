import { withTranslation } from "next-i18next";

import JobsTable from "./JobsTable";
import { useTranslation } from "next-i18next";

function AvailableJobs({ careers }) {
    const { i18n, t } = useTranslation("career", "common");

    return (
        <div>
            <div className='lg:text-5xl md:text-3xl text-2xl leading-6 lg:mt-12 mt-4 lg:pt-12 pt-8 lg:ms-28 ms-10 text-gray-700 uppercase'>
                <h1>{t("cuurentOpenPosition")}</h1>
            </div>
            <div className='text-lg leading-6 mt-4 lg:text-xl lg:ms-28 ms-10 lg:me-0 me-10 text-[#b2a7a7]'>
                <h3>{t("pleaseSendUsEmail")}</h3>
            </div>
            <div>
                <div className=' overflow-y-auto mb-12 lg:ms-24 ms-10 mt-6 lg:me-20 me-10 h-[35em] '>
                    {Array.isArray(careers) ? (
                        careers.map((job, index) => {
                            return i18n.language === "en" ? (
                                <JobsTable
                                    key={index}
                                    jobTitle={job.enTitle}
                                    description={job.enDescrption}
                                    department={job.enOccupation}
                                    specialization={job.enSpecialization}
                                />
                            ) : (
                                <JobsTable
                                    key={index}
                                    jobTitle={job.arTitle}
                                    description={job.arDescrption}
                                    department={job.arOccupation}
                                    specialization={job.arSpecialization}
                                />
                            );
                        })
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
}

export default withTranslation("career")(AvailableJobs);
