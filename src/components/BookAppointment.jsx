import { withTranslation } from "next-i18next";
import { useState } from "react";

import Stepper from "./Stepper";
import RadioGroup from "./ui/radiogroup/RadioGroup";
import RadioInputItem from "./ui/radiogroup/RadioInputItem";
import Textarea from "./ui/textarea/Textarea";
const CounselingType = ({ t }) => {
    const [counselingType, setCounselingType] = useState("individual");
    return (
        <>
            <RadioGroup title={t("counselingTypeTitle")} asButton={true}>
                <RadioInputItem
                    id='individual'
                    name={counselingType}
                    value='individual'
                    title={t("individualCounseling")}
                    checked={counselingType === "individual"}
                    onChange={(e) => setCounselingType(e.target.value)}
                />
                <RadioInputItem
                    id='teen'
                    name={counselingType}
                    value='teen'
                    title={t("teenCounseling")}
                    checked={counselingType === "teen"}
                    onChange={(e) => setCounselingType(e.target.value)}
                />
            </RadioGroup>
        </>
    );
};

const RelationshipStatus = ({ t }) => {
    const [relationshipStatus, setRelationshipStatus] = useState("single");
    return (
        <>
            <RadioGroup title={t("whatRelationshipStatus")} asButton={true}>
                <RadioInputItem
                    id='single'
                    name={relationshipStatus}
                    value='single'
                    title={t("single")}
                    checked={relationshipStatus === "single"}
                    onChange={(e) => setRelationshipStatus(e.target.value)}
                />
                <RadioInputItem
                    id='married'
                    name={relationshipStatus}
                    value='married'
                    title={t("married")}
                    checked={relationshipStatus === "married"}
                    onChange={(e) => setRelationshipStatus(e.target.value)}
                />
                <RadioInputItem
                    id='divorced'
                    name={relationshipStatus}
                    value='divorced'
                    title={t("divorced")}
                    checked={relationshipStatus === "divorced"}
                    onChange={(e) => setRelationshipStatus(e.target.value)}
                />
            </RadioGroup>
        </>
    );
};

const TherapyBefore = ({ t }) => {
    const [therapyBefore, setTherapyBefore] = useState("yes");
    return (
        <>
            <RadioGroup title={t("therapyBefore")} asButton={true}>
                <RadioInputItem
                    id='yes'
                    name={therapyBefore}
                    value='yes'
                    title={t("yes")}
                    checked={therapyBefore === "yes"}
                    onChange={(e) => setTherapyBefore(e.target.value)}
                />
                <RadioInputItem
                    id='no'
                    name={therapyBefore}
                    value='no'
                    title={t("no")}
                    checked={therapyBefore === "no"}
                    onChange={(e) => setTherapyBefore(e.target.value)}
                />
            </RadioGroup>
        </>
    );
};

const SpecificQualities = ({ t }) => {
    const [specificQualities, setSpecificQualities] =
        useState("male_counselor");
    return (
        <>
            <RadioGroup title={t("specificQualitiesCounselor")}>
                <RadioInputItem
                    id='male-counselor'
                    name={specificQualities}
                    title={t("maleCounselor")}
                    value='male_counselor'
                    checked={specificQualities === "male_counselor"}
                    onChange={(e) => setSpecificQualities(e.target.value)}
                />
                <RadioInputItem
                    id='female-counselor'
                    name={specificQualities}
                    title={t("femaleCounselor")}
                    value='female_counselor'
                    checked={specificQualities === "female_counselor"}
                    onChange={(e) => setSpecificQualities(e.target.value)}
                />
                <RadioInputItem
                    id='older-counselor'
                    name={specificQualities}
                    title={t("olderCounselor")}
                    value='older_counselor'
                    checked={specificQualities === "older_counselor"}
                    onChange={(e) => setSpecificQualities(e.target.value)}
                />
                <RadioInputItem
                    id='non-religious-counselor'
                    name={specificQualities}
                    title={t("nonReligiousCounselor")}
                    value='non_religious_counselor'
                    checked={specificQualities === "non_religious_counselor"}
                    onChange={(e) => setSpecificQualities(e.target.value)}
                />
            </RadioGroup>
        </>
    );
};

const Issues = ({ t }) => {
    const [issues, setIssues] = useState("male_counselor");
    return (
        <>
            <RadioGroup title={t("areThereIssues")}>
                <RadioInputItem
                    id='depression'
                    name={issues}
                    title={t("depression")}
                    value='depression'
                    checked={issues === "depression"}
                    onChange={(e) => setIssues(e.target.value)}
                />
                <RadioInputItem
                    id='stress-anxiety'
                    name='issues'
                    title={t("stressAnxiety")}
                    value='stressAnxiety'
                    checked={issues === "stressAnxiety"}
                    onChange={(e) => setIssues(e.target.value)}
                />
                <RadioInputItem
                    id='relationship-issues'
                    name='issues'
                    title={t("relationshipIssues")}
                    value='relationshipIssues'
                    checked={issues === "relationshipIssues"}
                    onChange={(e) => setIssues(e.target.value)}
                />
                <RadioInputItem
                    id='family-conflicts'
                    name='issues'
                    title={t("familyConflicts")}
                    value='familyConflicts'
                    checked={issues === "familyConflicts"}
                    onChange={(e) => setIssues(e.target.value)}
                />
                <RadioInputItem
                    id='trauma-abuse'
                    name='issues'
                    title={t("traumaAbuse")}
                    value='traumaAbuse'
                    checked={issues === "traumaAbuse"}
                    onChange={(e) => setIssues(e.target.value)}
                />
                <RadioInputItem
                    id='eating-disorders'
                    name='issues'
                    title={t("eatingDisorders")}
                    value='eatingDisorders'
                    checked={issues === "eatingDisorders"}
                    onChange={(e) => setIssues(e.target.value)}
                />
            </RadioGroup>
        </>
    );
};

const BringsHere = () => {
    return (
        <>
            <Textarea rows='17' />
        </>
    );
};

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
    return (
        <>
            <div className='mt-[30px]'>
                <Stepper
                    currentStep={0}
                    steps={[
                        {
                            pageTitle: "matchWithRightTherapist",
                            pageSubtitle: "fillOutThisShortQuestionnaire",
                            content: <CounselingType t={t} />,
                        },
                        {
                            pageTitle: "matchWithRightTherapist",
                            pageSubtitle: "fillOutThisShortQuestionnaire",
                            content: <RelationshipStatus t={t} />,
                        },
                        {
                            pageTitle: "matchWithRightTherapist",
                            pageSubtitle: "fillOutThisShortQuestionnaire",
                            content: <TherapyBefore t={t} />,
                        },
                        {
                            pageTitle: "matchWithRightTherapist",
                            pageSubtitle: "fillOutThisShortQuestionnaire",
                            content: <SpecificQualities t={t} />,
                        },
                        {
                            pageTitle: "matchWithRightTherapist",
                            pageSubtitle: "fillOutThisShortQuestionnaire",
                            content: <Issues t={t} />,
                        },
                        {
                            pageTitle: "whatBringsYou",
                            pageSubtitle: "whatBringsYouDesc",
                            content: <BringsHere />,
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
                />
            </div>
        </>
    );
}

export default withTranslation("appointment")(BookAppointment);
