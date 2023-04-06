import { withTranslation } from "next-i18next";

import RadioGroup from "../ui/radiogroup/RadioGroup";
import RadioInputItem from "../ui/radiogroup/RadioInputItem";

const SpecificQualities = ({ t, specificQualities, setSpecificQualities }) => {
    return (
        <>
            <RadioGroup title={t("specificQualitiesCounselor")}>
                <RadioInputItem
                    id='male-counselor'
                    name={specificQualities}
                    title={t("maleCounselor")}
                    value='maleCounselor'
                    checked={specificQualities === "maleCounselor"}
                    onChange={(e) => setSpecificQualities(e.target.value)}
                />
                <RadioInputItem
                    id='female-counselor'
                    name={specificQualities}
                    title={t("femaleCounselor")}
                    value='femaleCounselor'
                    checked={specificQualities === "femaleCounselor"}
                    onChange={(e) => setSpecificQualities(e.target.value)}
                />
                <RadioInputItem
                    id='older-counselor'
                    name={specificQualities}
                    title={t("olderCounselor")}
                    value='olderCounselor'
                    checked={specificQualities === "olderCounselor"}
                    onChange={(e) => setSpecificQualities(e.target.value)}
                />
                <RadioInputItem
                    id='non-religious-counselor'
                    name={specificQualities}
                    title={t("nonReligiousCounselor")}
                    value='nonReligiousCounselor'
                    checked={specificQualities === "nonReligiousCounselor"}
                    onChange={(e) => setSpecificQualities(e.target.value)}
                />
            </RadioGroup>
        </>
    );
};

export default withTranslation("appointment")(SpecificQualities);
