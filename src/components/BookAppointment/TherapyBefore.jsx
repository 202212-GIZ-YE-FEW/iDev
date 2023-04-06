import { withTranslation } from "next-i18next";

import RadioGroup from "../ui/radiogroup/RadioGroup";
import RadioInputItem from "../ui/radiogroup/RadioInputItem";

const TherapyBefore = ({ t, therapyBefore, setTherapyBefore }) => {
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

export default withTranslation("appointment")(TherapyBefore);
