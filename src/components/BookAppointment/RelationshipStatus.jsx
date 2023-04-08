import { withTranslation } from "next-i18next";

import RadioGroup from "../ui/radiogroup/RadioGroup";
import RadioInputItem from "../ui/radiogroup/RadioInputItem";

const RelationshipStatus = ({ t, name, relationshipStatus, onChange }) => {
    return (
        <>
            <RadioGroup title={t("whatRelationshipStatus")} asButton={true}>
                <RadioInputItem
                    id='single'
                    name={name}
                    value='single'
                    title={t("single")}
                    checked={relationshipStatus === "single"}
                    onChange={(e) => onChange(e)}
                />
                <RadioInputItem
                    id='married'
                    name={name}
                    value='married'
                    title={t("married")}
                    checked={relationshipStatus === "married"}
                    onChange={(e) => onChange(e)}
                />
                <RadioInputItem
                    id='divorced'
                    name={name}
                    value='divorced'
                    title={t("divorced")}
                    checked={relationshipStatus === "divorced"}
                    onChange={(e) => onChange(e)}
                />
            </RadioGroup>
        </>
    );
};

export default withTranslation("appointment")(RelationshipStatus);
