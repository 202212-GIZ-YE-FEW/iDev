import { withTranslation } from "next-i18next";

import RadioGroup from "../ui/radiogroup/RadioGroup";
import RadioInputItem from "../ui/radiogroup/RadioInputItem";

const Issues = ({ t, issues, setIssues }) => {
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

export default withTranslation("appointment")(Issues);
