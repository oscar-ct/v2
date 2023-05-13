import React from 'react';
import Knowledge from "../components/Knowledge";
import Projects from "../components/Projects";
import About from "../components/About";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

const Home = () => {
    return (
        <>
            <About/>
            <Knowledge/>
            <Projects/>
            <Footer/>
            <Modal/>
        </>
    );
};

export default Home;