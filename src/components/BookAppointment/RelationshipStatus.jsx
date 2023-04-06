import { withTranslation } from "next-i18next";

import RadioGroup from "../ui/radiogroup/RadioGroup";
import RadioInputItem from "../ui/radiogroup/RadioInputItem";

const RelationshipStatus = ({
    t,
    relationshipStatus,
    setRelationshipStatus,
}) => {
    return (
        <>
            <RadioGroup title={t("whatRelationshipStatus")} asButton={true}>
                <RadioInputItem
                    id='single'
                    name={relationshipStatus}
                    value='single'
                    title={t("single")}
                    checked={relationshipStatus === "single"}
                    onChange={(e) => setRelationshipStatus(e.target.value)}
                />
                <RadioInputItem
                    id='married'
                    name={relationshipStatus}
                    value='married'
                    title={t("married")}
                    checked={relationshipStatus === "married"}
                    onChange={(e) => setRelationshipStatus(e.target.value)}
                />
                <RadioInputItem
                    id='divorced'
                    name={relationshipStatus}
                    value='divorced'
                    title={t("divorced")}
                    checked={relationshipStatus === "divorced"}
                    onChange={(e) => setRelationshipStatus(e.target.value)}
                />
            </RadioGroup>
        </>
    );
};

export default withTranslation("appointment")(RelationshipStatus);
