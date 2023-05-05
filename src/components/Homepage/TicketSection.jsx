import { withTranslation } from "next-i18next";

import "react-multi-carousel/lib/styles.css";

import AreYouCounselor from "./AreYouCounselor";
import TicketItem from "./TicketItem";
import PageIntro from "../PageIntro";

function TicketSection({ t, tickets }) {
    return (
        <>
            <div className='container flex flex-col justify-between'>
                {tickets?.length > 0 ? (
                    <>
                        <PageIntro
                            title={t("purchaseTicketsTitle")}
                            subtitle={t("purchaseTicketsSubtitle")}
                        />
                        <div className='grid sm:grid-cols-1 md:grid-cols-2 my-10 lg:grid-cols-3 gap-7'>
                            {tickets?.map((item, index) => {
                                return (
                                    <TicketItem
                                        key={index}
                                        ticketID={item.id}
                                        numberOfTickets={item.number_of_tickets}
                                        price={item.price}
                                    />
                                );
                            })}
                        </div>
                    </>
                ) : (
                    <></>
                )}
                <AreYouCounselor />
            </div>
        </>
    );
}
export default withTranslation("home")(TicketSection);
