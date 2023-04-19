import { withTranslation } from "next-i18next";

import RadioGroup from "../ui/radiogroup/RadioGroup";
import RadioInputItem from "../ui/radiogroup/RadioInputItem";

const TherapyBefore = ({ t, name, therapyBefore, onChange }) => {
    return (
        <>
            <RadioGroup title={t("therapyBefore")} as='button'>
                <RadioInputItem
                    id='yes'
                    name={name}
                    value='yes'
                    content={t("yes")}
                    checked={therapyBefore === "yes"}
                    onChange={(e) => onChange(e)}
                />
                <RadioInputItem
                    id='no'
                    name={name}
                    value='no'
                    content={t("no")}
                    checked={therapyBefore === "no"}
                    onChange={(e) => onChange(e)}
                />
            </RadioGroup>
        </>
    );
};

export default withTranslation("appointment")(TherapyBefore);
