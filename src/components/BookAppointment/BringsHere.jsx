import { withTranslation } from "next-i18next";

import Textarea from "../ui/textarea/Textarea";

const BringsHere = ({ bringsHere, setBringsHere }) => {
    return (
        <>
            <Textarea
                rows='17'
                name='whatBringsYouHere'
                id='what-brings-you-here'
                value={bringsHere}
                onChange={(e) => setBringsHere(e.target.value)}
            />
        </>
    );
};

export default withTranslation("appointment")(BringsHere);
