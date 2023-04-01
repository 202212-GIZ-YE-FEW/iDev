import { withTranslation } from "next-i18next";

import Button from "@/components/ui/Button";
function TicketItem({ t, numberOfTickets, price }) {
    return (
        <>
            <div className='bg-light-white flex flex-col items-center justify-center text-center py-16 rounded-3xl space-y-6 drop-shadow-lg'>
                <span className='uppercase text-4xl'>
                    {numberOfTickets} {t("ticket")}
                </span>
                <span className='text-base rtl:text-3xl text-black/50'>
                    {price}$
                </span>
                <Button
                    content={t("purchase")}
                    textTransform='uppercase'
                    filled='true'
                    size='large'
                    fontSize='text-lg md:text-xl lg:text-2xl'
                    radius='md'
                />
            </div>
        </>
    );
}
export default withTranslation("home")(TicketItem);
