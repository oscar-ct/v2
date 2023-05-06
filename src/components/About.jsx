import React from 'react';
import Headshot from "../bw-headshot.jpeg";

const About = () => {
    return (
        <>
            <div className={"mb-5 pb-5 mx-5 px-5 flex flex-col lg:flex-row w-full"}>
                <div className={"lg:w-6/12 p-6 flex flex-col items-center justify-center text-white mb-5"}>
                    <div className={"text-6xl text-center pb-5"}>Oscar Castro</div>
                    <div className={"text-2xl text-center"}>
                        I am a full stack web developer based in San Antonio, TX.
                    </div>
                </div>
                <div className={"lg:w-6/12 flex justify-center items-center mt-5"}>
                    <img className={"w-72 rounded-full"} src={Headshot} alt={"headshot"}/>
                </div>
            </div>
            <div className={"p-6 lg:p-[5rem] flex flex-col text-white"}>
                <div className={"text-4xl pb-6 font-bold text-purple-500"}>
                    About Me
                </div>
                <div className={"leading-7 text-lg font-light pb-3"}>
                    I began my career as a Software Developer about a year ago after being laid off from the Oil & Gas industry. I spent all of 2022 gaining knowledge about programming; I attended <a className={"font-bold underline underline-offset-2"} href={""}>Codeup</a>, a 6-month/700 hour accredited in-person school located in downtown San Antonio and received a Certificate Of Completion in Web Development. Codeup provided me with the knowledge and skills to develop and design software for the web, from simple landing pages to progressive full stack web applications.
                </div>
                <div className={"text-lg font-light"}>
                    I am and will continue my education whether that be traditional college or continued self-taught/mentors. I'm always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn. At the end of the day, my goal is to create exciting software with people that bring out the best in me.
                </div>
            </div>
        </>
    );
};

export default About;