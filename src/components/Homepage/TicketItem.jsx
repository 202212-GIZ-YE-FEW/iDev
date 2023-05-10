import AOS from "aos";
import clsx from "clsx";
import Link from "next/link";
import { withTranslation } from "next-i18next";
import React, { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";

import "aos/dist/aos.css";

import Button from "@/components/ui/Button";
function TicketItem({ t, bestOption, ticketID, numberOfTickets, price }) {
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
                className={clsx(
                    "bg-light-white  flex flex-col items-center justify-center text-center py-16 rounded-3xl space-y-6 drop-shadow-lg",
                    {
                        "border-4 border-cyan": bestOption,
                    }
                )}
            >
                <div className='flex items-center justify-center space-x-2'>
                    <span className='uppercase text-4xl'>
                        {numberOfTickets} {t("ticket")}
                    </span>
                    {bestOption && (
                        <AiFillStar className='text-cyan text-3xl' />
                    )}
                </div>
                <span className='text-base rtl:text-3xl text-black/50'>
                    {price}$
                </span>
                <div className='w-fit'>
                    <Link
                        href={{
                            pathname: "/payment",
                            query: {
                                id: ticketID,
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
