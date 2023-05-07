import React from 'react';
import Navbar from "./Navbar";
import About from "./About";


const Intro = () => {
    return (
        <>
            <div className={"relative"}>
                <img className="w-screen bg-center bg-no-repeat bg-cover min-h-[77rem]" src={"https://wallpapercrafter.com/desktop/13142-hill-night-horizon-dark-minimalism-4k.jpg"}/>
                <div className="absolute opacity-100 inset-0 z-0 flex flex-col items-center justify-between w-100">
                    <Navbar/>
                    <About/>
                </div>
            </div>
        </>
    );
};

export default Intro;