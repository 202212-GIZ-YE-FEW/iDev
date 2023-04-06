import { withTranslation } from "next-i18next";
import { useState } from "react";

import BringsHere from "./BookAppointment/BringsHere";
import CounselingType from "./BookAppointment/CounselingType";
import Issues from "./BookAppointment/Issues";
import RelationshipStatus from "./BookAppointment/RelationshipStatus";
import SpecificQualities from "./BookAppointment/SpecificQualities";
import TherapyBefore from "./BookAppointment/TherapyBefore";
import Stepper from "./Stepper";

const TwoLastSteps = (props) => {
    const { t, title, subtitle } = props;
    return (
        <>
            <div className='flex flex-col justify-center h-full text-center space-y-12 capitalize'>
                <p className='text-base md:text-xl lg:text-3xl'>
                    {t(`${title}`)}
                </p>
                <p className='text-sm md:text-lg lg:text-2xl text-black/80'>
                    {t(`${subtitle}`)}
                </p>
            </div>
        </>
    );
};

function BookAppointment({ t }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [counselingType, setCounselingType] = useState("individual");
    const [relationshipStatus, setRelationshipStatus] = useState("single");
    const [therapyBefore, setTherapyBefore] = useState("yes");
    const [specificQualities, setSpecificQualities] = useState("maleCounselor");
    const [issues, setIssues] = useState("depression");
    const [bringsHere, setBringsHere] = useState("");

    const onSubmit = (data) => {
        setCurrentStep(currentStep + 1);
    };

    return (
        <>
            <div className='mt-[30px]'>
                <Stepper
                    current={currentStep}
                    setCurrent={setCurrentStep}
                    steps={[
                        {
                            pageTitle: "matchWithRightTherapist",
                            pageSubtitle: "fillOutThisShortQuestionnaire",
                            content: (
                                <CounselingType
                                    t={t}
                                    counselingType={counselingType}
                                    setCounselingType={setCounselingType}
                                />
                            ),
                        },
                        {
                            pageTitle: "matchWithRightTherapist",
                            pageSubtitle: "fillOutThisShortQuestionnaire",
                            content: (
                                <RelationshipStatus
                                    t={t}
                                    relationshipStatus={relationshipStatus}
                                    setRelationshipStatus={
                                        setRelationshipStatus
                                    }
                                />
                            ),
                        },
                        {
                            pageTitle: "matchWithRightTherapist",
                            pageSubtitle: "fillOutThisShortQuestionnaire",
                            content: (
                                <TherapyBefore
                                    t={t}
                                    therapyBefore={therapyBefore}
                                    setTherapyBefore={setTherapyBefore}
                                />
                            ),
                        },
                        {
                            pageTitle: "matchWithRightTherapist",
                            pageSubtitle: "fillOutThisShortQuestionnaire",
                            content: (
                                <SpecificQualities
                                    t={t}
                                    specificQualities={specificQualities}
                                    setSpecificQualities={setSpecificQualities}
                                />
                            ),
                        },
                        {
                            pageTitle: "matchWithRightTherapist",
                            pageSubtitle: "fillOutThisShortQuestionnaire",
                            content: (
                                <Issues
                                    t={t}
                                    issues={issues}
                                    setIssues={setIssues}
                                />
                            ),
                        },
                        {
                            pageTitle: "whatBringsYou",
                            pageSubtitle: "whatBringsYouDesc",
                            content: (
                                <BringsHere
                                    bringsHere={bringsHere}
                                    setBringsHere={setBringsHere}
                                />
                            ),
                            asCard: false,
                        },
                        {
                            pageTitle: "submitYourAppointment",
                            pageSubtitle: "clickIfSure",
                            content: (
                                <TwoLastSteps
                                    t={t}
                                    title='toSubmitAppointment'
                                    subtitle='beAwareYouPay'
                                />
                            ),
                        },
                        {
                            pageTitle: "hasBeenSubmitted",
                            pageSubtitle: "receiveEmail",
                            content: (
                                <TwoLastSteps
                                    t={t}
                                    title='requestSubmitted'
                                    subtitle='keepEyeOnEmail'
                                />
                            ),
                        },
                    ]}
                    onSubmit={onSubmit}
                />
            </div>
        </>
    );
}

export default withTranslation("appointment")(BookAppointment);
