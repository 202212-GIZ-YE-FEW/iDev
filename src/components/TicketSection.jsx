import { withTranslation } from "next-i18next";

import "react-multi-carousel/lib/styles.css";

import AreYouCounselor from "./AreYouCounselor";
import PageIntro from "./PageIntro";
import TicketItem from "./TicketItem";
function TicketSection({ t }) {
    const ticketPlans = [
        {
            numberOfTickets: 5,
            price: 10,
        },
        {
            numberOfTickets: 25,
            price: 40,
        },
        {
            numberOfTickets: 50,
            price: 70,
        },
    ];
    return (
        <>
            <div className='container flex flex-col justify-between'>
                <PageIntro
                    title={t("purchaseTicketsTitle")}
                    subtitle={t("purchaseTicketsSubtitle")}
                />
                <div className='grid sm:grid-cols-1 md:grid-cols-2 my-10 lg:grid-cols-3 gap-7'>
                    {ticketPlans.map((item, index) => {
                        return (
                            <TicketItem
                                key={index}
                                numberOfTickets={item.numberOfTickets}
                                price={item.price}
                            />
                        );
                    })}
                </div>
                <AreYouCounselor />
            </div>
        </>
    );
}
export default withTranslation("home")(TicketSection);
