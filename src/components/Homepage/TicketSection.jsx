import { withTranslation } from "next-i18next";
import { useQuery } from "react-query";

import "react-multi-carousel/lib/styles.css";

import getDocument from "@/firebase/getData";

import AreYouCounselor from "./AreYouCounselor";
import TicketItem from "./TicketItem";
import PageIntro from "../PageIntro";

function TicketSection({ t }) {
    const {
        isLoading,
        error,
        data: result,
    } = useQuery("tickets", async () => {
        const data = await getDocument("tickets");
        return data;
    });

    return (
        <>
            <div className='container flex flex-col justify-between'>
                {isLoading ? (
                    <div className='text-center'>
                        <div
                            className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-cyan motion-reduce:animate-[spin_1.5s_linear_infinite]'
                            role='status'
                        ></div>
                    </div>
                ) : (
                    <>
                        {result?.length > 0 ? (
                            <>
                                <PageIntro
                                    title={t("purchaseTicketsTitle")}
                                    subtitle={t("purchaseTicketsSubtitle")}
                                />
                                <div className='grid sm:grid-cols-1 md:grid-cols-2 my-10 lg:grid-cols-3 gap-7'>
                                    {result?.map((item, index) => {
                                        return (
                                            <TicketItem
                                                key={index}
                                                ticketID={item.id}
                                                numberOfTickets={
                                                    item.number_of_tickets
                                                }
                                                price={item.price}
                                            />
                                        );
                                    })}
                                </div>
                            </>
                        ) : (
                            <></>
                        )}
                    </>
                )}
                <AreYouCounselor />
            </div>
        </>
    );
}
export default withTranslation("home")(TicketSection);
