import { withTranslation } from "next-i18next";

import Textarea from "../ui/textarea/Textarea";

const BringsHere = ({ name, bringsHere, onChange }) => {
    return (
        <>
            <Textarea
                rows='17'
                name={name}
                id={name}
                value={bringsHere}
                onChange={(e) => onChange(e)}
            />
        </>
    );
};

export default withTranslation("appointment")(BringsHere);
