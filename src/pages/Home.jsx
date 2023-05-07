import React from 'react';
import Knowledge from "../components/Knowledge";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
// import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import About from "../components/About";

const Home = () => {
    return (
        <>
            <Navbar/>
            <About/>
            <Knowledge/>
            <Skills/>
            <Projects/>
            <Contact/>
        </>
    );
};

export default Home;