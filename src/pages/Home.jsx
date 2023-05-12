import React from 'react';
import Knowledge from "../components/Knowledge";
import Projects from "../components/Projects";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <About/>
            <Knowledge/>
            <Projects/>
            <Footer/>
        </>
    );
};

export default Home;