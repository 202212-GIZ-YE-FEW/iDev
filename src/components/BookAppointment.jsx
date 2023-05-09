import { withTranslation } from "next-i18next";
import { useState } from "react";
import { toast } from "react-toastify";

import { postHandler } from "@/utils/api";

import BringsHere from "./BookAppointment/BringsHere";
import CounselingType from "./BookAppointment/CounselingType";
import Issues from "./BookAppointment/Issues";
import RelationshipStatus from "./BookAppointment/RelationshipStatus";
import SpecificQualities from "./BookAppointment/SpecificQualities";
import TherapyBefore from "./BookAppointment/TherapyBefore";
import { useAuth } from "./context/AuthContext";
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
    const { user } = useAuth();
    const [currentStep, setCurrentStep] = useState(0);

    const initialValues = {
        dateTime: new Date(),
        counselingType: "individual",
        relationshipStatus: "single",
        therapyBefore: "yes",
        specificQualities: "maleCounselor",
        issue: "depression",
        bringsHere: "",
    };

    const [values, setValues] = useState(initialValues);

    const handelChange = ({ target }) => {
        setValues({ ...values, [target.name]: target.value });
    };

    const onSubmit = async () => {
        values.participants = { user: user.uid };
        const res = await postHandler("/api/appointments", values);
        if (res.data.success === 0) {
            setCurrentStep(currentStep + 1);
        }
        toast(t(`${res.data.message}`), {
            hideProgressBar: true,
            position: "bottom-left",
            autoClose: 2000,
            type: res.data.success === 1 ? "error" : "success",
        });
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
                                    counselingType={values.counselingType}
                                    onChange={handelChange}
                                    name='counselingType'
                                />
                            ),
                        },
                        {
                            pageTitle: "matchWithRightTherapist",
                            pageSubtitle: "fillOutThisShortQuestionnaire",
                            content: (
                                <RelationshipStatus
                                    t={t}
                                    relationshipStatus={
                                        values.relationshipStatus
                                    }
                                    onChange={handelChange}
                                    name='relationshipStatus'
                                />
                            ),
                        },
                        {
                            pageTitle: "matchWithRightTherapist",
                            pageSubtitle: "fillOutThisShortQuestionnaire",
                            content: (
                                <TherapyBefore
                                    t={t}
                                    therapyBefore={values.therapyBefore}
                                    onChange={handelChange}
                                    name='therapyBefore'
                                />
                            ),
                        },
                        {
                            pageTitle: "matchWithRightTherapist",
                            pageSubtitle: "fillOutThisShortQuestionnaire",
                            content: (
                                <SpecificQualities
                                    t={t}
                                    specificQualities={values.specificQualities}
                                    onChange={handelChange}
                                    name='specificQualities'
                                />
                            ),
                        },
                        {
                            pageTitle: "matchWithRightTherapist",
                            pageSubtitle: "fillOutThisShortQuestionnaire",
                            content: (
                                <Issues
                                    t={t}
                                    issues={values.issue}
                                    onChange={handelChange}
                                    name='issue'
                                />
                            ),
                        },
                        {
                            pageTitle: "whatBringsYou",
                            pageSubtitle: "whatBringsYouDesc",
                            content: (
                                <BringsHere
                                    bringsHere={values.bringsHere}
                                    onChange={handelChange}
                                    name='bringsHere'
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
