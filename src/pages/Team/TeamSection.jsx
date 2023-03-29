import TeamMember from "@/components/TeamMember";
import { useState } from "react";

import Abdulmajeed from "public/Abdulmajeed Jaafer.png";
import AhmedMohammed from "public/AhmedMohammed.png";
import AllanSaleh from "public/AllanSaleh.png";
import AvrazZebary from "public/AvrazZebary.png";
import PayamAbubakr from "public/PayamAbubakr.png";
import SnoorMadih from "public/SnoorMadih.png";

const TeamSection = () => {
    const [title, seTtitle] = useState("");
    const [job, setJob] = useState("");
    const [photo, setPhoto] = useState();
    return (
        <>
            <div className='flex justify-center '>
                <div className='flex flex-wrap'>
                    <h1 className='text-[30px]  w-full p-4 flex-wrap nowrap md:text-start sm:text-center'>
                        Meet theTeam!
                    </h1>
                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/6  p-4 '>
                        <TeamMember
                            title={"Allan Saleh "}
                            job={"Lead Engineer   &Web Devloper"}
                            photo={AllanSaleh}
                        />{" "}
                    </div>

                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4 '>
                        <TeamMember
                            title={"Payam Abubkr"}
                            job={"Junior Designer& FE Developer"}
                            photo={PayamAbubakr}
                        />{" "}
                    </div>

                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4 '>
                        <TeamMember
                            title={"Ahmed Mohammed"}
                            job={"Junior Designer & FE Developer"}
                            photo={AhmedMohammed}
                        />{" "}
                    </div>

                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4 '>
                        <TeamMember
                            title={"Abdulmajeed Jaafer "}
                            job={"Junior Designer & FE Developer"}
                            photo={Abdulmajeed}
                        />{" "}
                    </div>

                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4 '>
                        <TeamMember
                            title={"Snoor Madih"}
                            job={"Junior Designer & FE Developer"}
                            photo={SnoorMadih}
                        />{" "}
                    </div>

                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4'>
                        <TeamMember
                            title={"Avraz Zebary"}
                            job={"Lead Engineer   &Web Devloper"}
                            photo={AvrazZebary}
                        />{" "}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamSection;
