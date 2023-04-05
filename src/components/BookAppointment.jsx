import { withTranslation } from "next-i18next";
import React from "react";

import Stepper from "./Stepper";
import RadioGroup from "./ui/radiogroup/RadioGroup";
import RadioInputItem from "./ui/radiogroup/RadioInputItem";
import Textarea from "./ui/textarea/Textarea";

const CounselingType = ({ t }) => {
    return (
        <>
            <RadioGroup title={t("counselingTypeTitle")} asButton={true}>
                <RadioInputItem
                    id='individual'
                    name='counselingType'
                    value='individual'
                    title={t("individualCounseling")}
                    checked={true}
                />
                <RadioInputItem
                    id='teen'
                    name='counselingType'
                    value='teen'
                    title={t("teenCounseling")}
                />
            </RadioGroup>
        </>
    );
};

const RelationshipStatus = ({ t }) => {
    return (
        <>
            <RadioGroup title={t("whatRelationshipStatus")} asButton={true}>
                <RadioInputItem
                    id='single'
                    name='relationshipStatus'
                    value='Single'
                    title={t("single")}
                    checked={true}
                />
                <RadioInputItem
                    id='married'
                    name='relationshipStatus'
                    value='Married'
                    title={t("married")}
                />
                <RadioInputItem
                    id='divorced'
                    name='relationshipStatus'
                    value='Divorced'
                    title={t("divorced")}
                />
            </RadioGroup>
        </>
    );
};

const TherapyBefore = ({ t }) => {
    return (
        <>
            <RadioGroup title={t("therapyBefore")} asButton={true}>
                <RadioInputItem
                    id='yes'
                    name='therapyBefore'
                    value='yes'
                    title={t("yes")}
                    checked={true}
                />
                <RadioInputItem
                    id='no'
                    name='therapyBefore'
                    value='no'
                    title={t("no")}
                />
            </RadioGroup>
        </>
    );
};

const SpecificQualities = ({ t }) => {
    return (
        <>
            <RadioGroup title={t("specificQualitiesCounselor")}>
                <RadioInputItem
                    id='male-counselor'
                    name='specificQualities'
                    title={t("maleCounselor")}
                />
                <RadioInputItem
                    id='female-counselor'
                    name='specificQualities'
                    title={t("femaleCounselor")}
                />
                <RadioInputItem
                    id='older-counselor'
                    name='specificQualities'
                    title={t("olderCounselor")}
                />
                <RadioInputItem
                    id='non-religious-counselor'
                    name='specificQualities'
                    title={t("nonReligiousCounselor")}
                />
            </RadioGroup>
        </>
    );
};

const Issues = ({ t }) => {
    return (
        <>
            <RadioGroup title={t("areThereIssues")}>
                <RadioInputItem
                    id='depression'
                    name='issues'
                    title={t("depression")}
                />
                <RadioInputItem
                    id='stress-anxiety'
                    name='issues'
                    title={t("stressAnxiety")}
                />
                <RadioInputItem
                    id='relationship-issues'
                    name='issues'
                    title={t("relationshipIssues")}
                />
                <RadioInputItem
                    id='family-conflicts'
                    name='issues'
                    title={t("familyConflicts")}
                />
                <RadioInputItem
                    id='trauma-abuse'
                    name='issues'
                    title={t("traumaAbuse")}
                />
                <RadioInputItem
                    id='eating-disorders'
                    name='issues'
                    title={t("eatingDisorders")}
                />
            </RadioGroup>
        </>
    );
};

const BringsHere = () => {
    return (
        <>
            <Textarea rows='16' />
        </>
    );
};

function BookAppointment({ t }) {
    return (
        <>
            <div className='flex flex-col justify-center items-center mt-[30px]'>
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
                    ]}
                />
            </div>
        </>
    );
}

export default withTranslation("appointment")(BookAppointment);
