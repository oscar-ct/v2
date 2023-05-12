import React from 'react';
import Knowledge from "../components/Knowledge";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import About from "../components/About";

const Home = () => {
    return (
        <>
            <About/>
            <Knowledge/>
            <Projects/>
            <Contact/>
        </>
    );
};

export default Home;