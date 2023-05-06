import React from 'react';
import Knowledge from "../components/Knowledge";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Intro from "../components/Intro";

const Home = () => {
    return (
        <>
            <Intro/>
            <Knowledge/>
            <Skills/>
            <Projects/>
            <Contact/>
        </>
    );
};

export default Home;