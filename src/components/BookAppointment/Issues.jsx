import { withTranslation } from "next-i18next";

import RadioGroup from "../ui/radiogroup/RadioGroup";
import RadioInputItem from "../ui/radiogroup/RadioInputItem";

const Issues = ({ t, name, issues, onChange }) => {
    return (
        <>
            <RadioGroup title={t("areThereIssues")}>
                <RadioInputItem
                    id='depression'
                    name={name}
                    content={t("depression")}
                    value='depression'
                    checked={issues === "depression"}
                    onChange={(e) => onChange(e)}
                />
                <RadioInputItem
                    id='stress-anxiety'
                    name={name}
                    content={t("stressAnxiety")}
                    value='stressAnxiety'
                    checked={issues === "stressAnxiety"}
                    onChange={(e) => onChange(e)}
                />
                <RadioInputItem
                    id='relationship-issues'
                    name={name}
                    content={t("relationshipIssues")}
                    value='relationshipIssues'
                    checked={issues === "relationshipIssues"}
                    onChange={(e) => onChange(e)}
                />
                <RadioInputItem
                    id='family-conflicts'
                    name={name}
                    content={t("familyConflicts")}
                    value='familyConflicts'
                    checked={issues === "familyConflicts"}
                    onChange={(e) => onChange(e)}
                />
                <RadioInputItem
                    id='trauma-abuse'
                    name={name}
                    content={t("traumaAbuse")}
                    value='traumaAbuse'
                    checked={issues === "traumaAbuse"}
                    onChange={(e) => onChange(e)}
                />
                <RadioInputItem
                    id='eating-disorders'
                    name={name}
                    content={t("eatingDisorders")}
                    value='eatingDisorders'
                    checked={issues === "eatingDisorders"}
                    onChange={(e) => onChange(e)}
                />
            </RadioGroup>
        </>
    );
};

export default withTranslation("appointment")(Issues);
