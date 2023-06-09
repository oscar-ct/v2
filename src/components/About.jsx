import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";

const About = () => {

    const [isOpen, setIsOpen] = useState(false)
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
    }

    useEffect(function () {
        setTimeout(function () {
            setIsOpen(true)
        }, 500)
    }, []);


    return (
        <>
        <AnimatePresence>
            <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                className={"backdrop-blur-sm"}
            >
                    <div className={"pt-6 px-5 flex flex-col lg:flex-row w-full"}>
                        <div className={"lg:w-6/12 lg:pl-[4rem] 2xl:pl-[10rem] flex flex-col justify-center text-white antialiased mb-5"}>
                            <div className={"pb-3"}>Hello, my name is</div>
                            <div className={"text-7xl font-bold pb-5"}><span className={"font-black text-purple-600"}>Oscar</span> Castro.</div>
                            <div className={"text-2xl font-bold"}>
                                I am a full stack web developer based in San Antonio, TX.
                            </div>
                        </div>
                        <div className={"lg:w-6/12 flex justify-center items-center h-96"}>
                            <div className="tooltip tooltip-bottom" data-tip="Hi there! thanks for checking out my portfolio.">
                                <img className={"w-96 mask mask-pentagon drop-shadow-xl"} src={"https://firebasestorage.googleapis.com/v0/b/v2-portfolio-oscar.appspot.com/o/portfolio-headshot-cartoon.png?alt=media&token=b2f9cd27-77e1-4314-8a54-4fa678a82c01"} alt={"headshot"}/>
                            </div>
                        </div>
                    </div>
                    <div id={"about"} className={"h-9"}/>
                    <div className={"p-6 lg:mb-0 lg:p-[5rem] flex flex-col text-white"}>
                        <div className={"text-4xl pb-6 font-bold text-purple-500"}>
                            About Me
                        </div>
                                <div className={"leading-7 text-lg font-light pb-6"}>
                                    I began my career as a Software Developer over a year ago after being laid off from the Oil & Gas industry following 6+ years of service. I have always been a tech savvy guy, dating back to the myspace html/css days. I spent all of 2022 gaining knowledge about programming; I attended <span><a href={"https://codeup.com/"} className={"font-bold text-purple-400"}>Codeup</a></span>, a 6-month/700 hour accredited in-person school located in downtown San Antonio and received a Certificate Of Completion in Web Development with an overall grade of 99.20%. Codeup provided me with the knowledge and skills to develop and design software for the web, from simple landing pages to progressive full stack web applications.
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