import AOS from "aos";
import Link from "next/link";
import { withTranslation } from "next-i18next";
import React, { useEffect } from "react";

import "aos/dist/aos.css";

import Button from "@/components/ui/Button";
function TicketItem({ t, numberOfTickets, price }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 500,
        });
    }, []);
    return (
        <>
            <div
                data-aos='flip-down'
                className='bg-light-white  flex flex-col items-center justify-center text-center py-16 rounded-3xl space-y-6 drop-shadow-lg'
            >
                <span className='uppercase text-4xl'>
                    {numberOfTickets} {t("ticket")}
                </span>
                <span className='text-base rtl:text-3xl text-black/50'>
                    {price}$
                </span>
                <div className='w-fit'>
                    <Link
                        href={{
                            pathname: "/payment",
                            query: {
                                numberOfTickets: numberOfTickets,
                                price: price,
                            },
                            state: {
                                numberOfTickets: numberOfTickets,
                                price: price,
                            },
                        }}
                    >
                        <Button
                            content={t("purchase")}
                            textTransform='uppercase'
                            filled='true'
                            size='large'
                            fontSize='text-lg md:text-xl lg:text-2xl'
                            radius='md'
                        />
                    </Link>
                </div>
            </div>
        </>
    );
}
export default withTranslation("home")(TicketItem);
