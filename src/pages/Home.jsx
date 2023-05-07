import React from 'react';
import Knowledge from "../components/Knowledge";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import About from "../components/About";

const Home = () => {
    return (
        <>
            <Navbar/>
            <About/>
            <Knowledge/>
            <Projects/>
            <Contact/>
        </>
    );
};

export default Home;