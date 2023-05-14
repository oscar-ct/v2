import React from 'react';
import Slider from "./Slider";
import {projects} from "../data/projects";
import Icon from "./Icon";
import {ReactComponent as Github} from "../icons/github.svg";
import {ReactComponent as Link} from "../icons/external.svg";
import { motion } from "framer-motion"



// const purpleText = (string) => {
//    const words = ["JavaScript", "React", "Redux", "jQuery", "TailwindCSS", "Bootstrap", "Java", "Spring", "MySQL", "Thymeleaf", "Express", "Node.js", "Mongoose", "MongoDB", "Firebase"];
//    const arr = string.split(" ");
//    for (let i = 0; i < arr.length; i++) {
//        const word = arr[i];
//        for (let j = 0; j < words.length; j++) {
//            if (word === words[j]) {
//                arr[i] = `${<span className='text-purple font-bold'>arr[i]</span>}`
//            }
//        }
//    }
//    return arr.join(" ")
// }

const Projects = () => {

    return (
        <>
            <div id={"wallpaper"} className={"h-24"}/>
            <div className="opacity-100 inset-0 z-0 flex flex-col items-center justify-between w-100">
                <div className={"w-full p-6 lg:pt-[5rem] lg:pb-[3rem] lg:px-[5rem]"}>
                    <div className={"flex flex-col lg:items-start lg:flex-row items-start"}>
                        <div className={"lg:w-5/12 pt-2 lg:pt-0 text-4xl font-bold text-purple-500"}>
                            Some Of My Work
                        </div>
                        <div className={"lg:w-7/12 p-1 mt-12 lg:mt-0 lg:m-0 rounded-lg backdrop-blur-xl"}>
                            <p className={"text-white text-lg antialiased"}>
                                These are some of my most notable projects, I am always coding so be sure to stop by and check out all my repositories <span><a href={"https://github.com/oscar-ct?tab=repositories"} className={"font-bold text-purple-400"}>here</a></span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"opacity-50 mb-8 border-b-2 border-white md:mx-8"}/>

            {
                projects.map(function (project, index) {
                    return (
                        <div key={index} className={"flex flex-col"}>
                            {
                                project.images !== null &&
                                <>
                                    <div className={`flex pt-3`}>
                                        <Slider key={index} array={project.images}/>
                                    </div>
                                </>
                            }
                            <div className={"pb-5 flex justify-center"}>
                                <div className={"text-gray-200 md:rounded-b-lg md:w-10/12 lg:w-8/12 2xl:w-6/12 p-6 bg-white/20 backdrop-blur-lg"}>
                                    <div className={"mb-4 lg:mb-2 flex lg:items-start flex-col lg:flex-row lg:justify-between"}>
                                        <div className={"text-3xl font-bold pb-3"}>
                                            {project.name}
                                        </div>

                                        <div className={"flex justify-start flex-wrap"}>
                                            {/*<span className={"text-3xl font-bold"}>&#123;</span>*/}
                                            {
                                                project.development.map(function (name, index) {
                                                    return <Icon key={index} fill={"rgb(192 132 252)"} name={name}/>
                                                })
                                            }
                                            {/*<span className={"text-3xl font-bold"}>&#125;</span>*/}
                                        </div>
                                    </div>
                                    <p className={"leading-7 pb-5"}>
                                        {project.description}
                                    </p>
                                    <div className={"flex items-center justify-between"}>
                                        <motion.button
                                            onClick={() => {window.location = project.github_link}}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 1.0 }}
                                            className={"btn glass lg:btn-wide"}>
                                            <Github fill={"white"} className={"w-8"}/>
                                        </motion.button>
                                        {
                                            project.demo_link && (
                                                <motion.button
                                                    onClick={() => {window.location = project.demo_link}}
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className={"btn glass lg:btn-wide"}>
                                                    <Link fill={"white"} className={"w-7"}/>
                                                </motion.button>
                                            )
                                        }

                                    </div>

                                </div>
                            </div>

                            <div className={"pt-6 opacity-50 mb-8 border-b-2 border-white md:mx-8"}/>
                        </div>
                    )
                })
            }

        </>
    );
};

export default Projects;