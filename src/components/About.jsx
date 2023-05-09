import React from 'react';
import Headshot from "../images/lg-headshot.png";
import {AnimatePresence, motion} from "framer-motion";

const About = () => {
    return (
        <>
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                    <div className={"mb-5 pb-5 px-5 flex flex-col lg:flex-row w-full"}>
                        <div className={"lg:w-6/12 lg:pl-[4rem] 2xl:pl-[10rem] flex flex-col  justify-center text-white mb-5"}>
                            <div>Hello, my name is</div>
                            <div className={"text-6xl pb-5"}><span className={"font-bold text-purple-600"}>Oscar</span> Castro.</div>
                            <div className={"text-2xl"}>
                                I am a full stack web developer based in San Antonio, TX.
                            </div>
                        </div>
                        <div className={"lg:w-6/12 flex justify-center items-center mt-5"}>
                            <img className={"w-96 mask mask-squircle"} src={Headshot} alt={"headshot"}/>
                        </div>
                    </div>
                    <div className={"p-6 lg:p-[5rem] flex flex-col text-white"}>
                        <div className={"text-4xl pb-6 font-bold text-purple-500"}>
                            About Me
                        </div>
                                <div className={"leading-7 text-lg font-light pb-3"}>
                                    I began my career as a Software Developer over a year ago after being laid off from the Oil & Gas industry following 6+ years of service. I have always been a tech savvy guy, dating back to the myspace html/css days. I spent all of 2022 gaining knowledge about programming; I attended <a className={"font-bold underline underline-offset-2"} href={""}>Codeup</a>, a 6-month/700 hour accredited in-person school located in downtown San Antonio and received a Certificate Of Completion in Web Development with an overall grade of 99.20%. Codeup provided me with the knowledge and skills to develop and design software for the web, from simple landing pages to progressive full stack web applications.
                                </div>
                                <div className={"text-lg font-light"}>
                                    I am and will continue my education whether that be traditional college or continued self-taught/mentors. I'm always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn. At the end of the day, my goal is to create exciting software with people that bring out the best in me.
                                </div>

                    </div>
            </motion.div>
        </AnimatePresence>
        </>
    );
};

export default About;