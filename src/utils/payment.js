import MasterCardSVG from "/public/images/master-card.svg";
import VisaSVG from "/public/images/visa.svg";

const parseCardData = (data) => {
    return data.map((item) => ({
        ...item,
        cardNumber: item.cardNumber.replace(/^(\d{4}\s){3}/, "xxxx xxxx xxxx "),
        icon: item.type === "mastercard" ? MasterCardSVG : VisaSVG,
    }));
};

export default parseCardData;
