import { withTranslation } from "next-i18next";

import RadioGroup from "../ui/radiogroup/RadioGroup";
import RadioInputItem from "../ui/radiogroup/RadioInputItem";

const RelationshipStatus = ({ t, name, relationshipStatus, onChange }) => {
    return (
        <>
            <RadioGroup title={t("whatRelationshipStatus")} as='button'>
                <RadioInputItem
                    id='single'
                    name={name}
                    value='single'
                    content={t("single")}
                    checked={relationshipStatus === "single"}
                    onChange={(e) => onChange(e)}
                />
                <RadioInputItem
                    id='married'
                    name={name}
                    value='married'
                    content={t("married")}
                    checked={relationshipStatus === "married"}
                    onChange={(e) => onChange(e)}
                />
                <RadioInputItem
                    id='divorced'
                    name={name}
                    value='divorced'
                    content={t("divorced")}
                    checked={relationshipStatus === "divorced"}
                    onChange={(e) => onChange(e)}
                />
            </RadioGroup>
        </>
    );
};

export default withTranslation("appointment")(RelationshipStatus);
