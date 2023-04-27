import { withTranslation } from "next-i18next";

import JobsTable from "./JobsTable";

const jobsAvailable = [
    {
        jobTitle: "Senior Software Developer | Backend | Remote in the USA",
        description:
            "Moz is looking for a Senior Software Developer to join our Application Development team.",
        department: "Application Development",
    },
    {
        jobTitle: "Senior Software Developer | Rapid Prototyping | Remote in",
        description:
            "Moz is looking for a Senior Software Developer to join our Rapid Prototyping Team (RPT). This team is responsible for working closely with product managers to take ideas for new features and quickly validate their technical and business feasibility.",
        department: "Rapid Prototyping",
    },
    {
        jobTitle: "Senior Product Analyst | Remote in Canada",
        description:
            "Moz is looking for a Product Analyst to define our suite of product metrics.",
        department: "Business Intelligence",
    },
    {
        jobTitle: "Business Intelligence Manager | Remote in Canada",
        description:
            "Moz is hiring a Manager of Business Intelligence to lead our analytics and data warehousing efforts in a new phase of development.",
        department: "Business Intelligence",
    },
    {
        jobTitle: "Engineering Manager | Remote in Canada",
        description:
            "Moz is seeking an Engineering Manager within our Application Development team.",
        department: "",
    },
    {
        jobTitle: "Sr. Data Engineer | Remote in Canada",
        description:
            "Moz is looking for a talented Senior Software Developer to join our Data Collection team.",
        department: "Data Collection",
    },
    {
        jobTitle: "Sr. Data Engineer | Remote in Canada",
        description:
            "Moz is looking for a talented Senior Software Developer to join our Data Collection team.",
        department: "Data Collection",
    },
    {
        jobTitle: "Senior Software Developer | Backend | Remote in the USA",
        description:
            "Moz is looking for a Senior Software Developer to join our Application Development team.",
        department: "Application Development",
    },
    {
        jobTitle: "Sr. Data Engineer | Remote in Canada",
        description:
            "Moz is looking for a talented Senior Software Developer to join our Data Collection team.",
        department: "Data Collection",
    },
    {
        jobTitle: "Engineering Manager | Remote in Canada",
        description:
            "Moz is seeking an Engineering Manager within our Application Development team.",
        department: "",
    },
    {
        jobTitle: "Business Intelligence Manager | Remote in Canada",
        description:
            "Moz is hiring a Manager of Business Intelligence to lead our analytics and data warehousing efforts in a new phase of development.",
        department: "Business Intelligence",
    },
];

function AvailableJobs({ t }) {
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
                    {jobsAvailable.map((job, index) => {
                        return (
                            <JobsTable
                                key={index}
                                jobTitle={t(`${job.jobTitle}`)}
                                description={t(`${job.description}`)}
                                department={t(`${job.department}`)}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default withTranslation("career")(AvailableJobs);
