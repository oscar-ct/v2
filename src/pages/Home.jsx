import React from 'react';
import Knowledge from "../components/Knowledge";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import About from "../components/About";

const Home = () => {
    return (
        <>
            <About/>
            <Knowledge/>
            <Skills/>
            <Projects/>
            <Contact/>
        </>
    );
};

export default Home;