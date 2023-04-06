import { withTranslation } from "next-i18next";

import RadioGroup from "../ui/radiogroup/RadioGroup";
import RadioInputItem from "../ui/radiogroup/RadioInputItem";

const CounselingType = ({ t, counselingType, setCounselingType }) => {
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

export default withTranslation("appointment")(CounselingType);
