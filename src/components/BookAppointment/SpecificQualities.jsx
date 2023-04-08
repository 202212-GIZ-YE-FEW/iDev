import { withTranslation } from "next-i18next";

import RadioGroup from "../ui/radiogroup/RadioGroup";
import RadioInputItem from "../ui/radiogroup/RadioInputItem";

const SpecificQualities = ({ t, name, specificQualities, onChange }) => {
    return (
        <>
            <RadioGroup title={t("specificQualitiesCounselor")}>
                <RadioInputItem
                    id='male-counselor'
                    name={name}
                    title={t("maleCounselor")}
                    value='maleCounselor'
                    checked={specificQualities === "maleCounselor"}
                    onChange={(e) => onChange(e)}
                />
                <RadioInputItem
                    id='female-counselor'
                    name={name}
                    title={t("femaleCounselor")}
                    value='femaleCounselor'
                    checked={specificQualities === "femaleCounselor"}
                    onChange={(e) => onChange(e)}
                />
                <RadioInputItem
                    id='older-counselor'
                    name={name}
                    title={t("olderCounselor")}
                    value='olderCounselor'
                    checked={specificQualities === "olderCounselor"}
                    onChange={(e) => onChange(e)}
                />
                <RadioInputItem
                    id='non-religious-counselor'
                    name={name}
                    title={t("nonReligiousCounselor")}
                    value='nonReligiousCounselor'
                    checked={specificQualities === "nonReligiousCounselor"}
                    onChange={(e) => onChange(e)}
                />
            </RadioGroup>
        </>
    );
};

export default withTranslation("appointment")(SpecificQualities);
