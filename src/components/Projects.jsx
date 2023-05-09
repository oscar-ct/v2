import React from 'react';
import Slider from "./Slider";
import {projects} from "../data/projects";
import Icon from "./Icon";



const purpleText = (string) => {
   const words = ["JavaScript", "React", "Redux", "jQuery", "TailwindCSS", "Bootstrap", "Java", "Spring", "MySQL", "Thymeleaf", "Express", "Node.js", "Mongoose", "MongoDB", "Firebase"];
   const arr = string.split(" ");
   for (let i = 0; i < arr.length; i++) {
       const word = arr[i];
       for (let j = 0; j < words.length; j++) {
           if (word === words[j]) {
               arr[i] = `${<span className='text-purple font-bold'>arr[i]</span>}`
           }
       }
   }
   return arr.join(" ")
}

const Projects = () => {
    return (
        <>
            <div id={"wallpaper"} className={"h-24"}/>
            <div className="opacity-100 inset-0 z-0 flex flex-col items-center justify-between w-100">
                <div className={"w-full p-6 lg:p-[5rem]"}>
                    <div className={"flex flex-col items-start"}>
                        <div className={"text-4xl font-bold text-purple-500"}>
                            Some Of My Work
                        </div>
                    </div>
                </div>
            </div>

            {
                projects.map(function (project, index) {
                    return (
                        <>
                            <div className={"text-center text-white text-3xl font-bold pb-6"}>
                                {project.name}
                            </div>
                            {
                                project.images !== null &&
                                <div className={"flex pt-3"}>
                                    <Slider array={project.images}/>
                                </div>
                            }
                            <div className={"flex pt-3 justify-center"}>
                                {
                                    project.development.map(function (name) {
                                        return <Icon name={name}/>
                                    })
                                }
                            </div>
                            <div className={"py-5 flex justify-center"}>
                                <div className={"md:rounded-lg p-6 bg-gray-600/60 md:w-10/12"}>
                                    <p className={"text-white leading-7"}>
                                        {project.description}
                                    </p>
                                </div>
                            </div>



                            <div className={"pt-6 opacity-50 mb-8 border-b-2 border-white md:mx-8"}/>
                        </>
                    )
                })
            }

        </>
    );
};

export default Projects;