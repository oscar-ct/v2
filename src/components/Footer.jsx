import React from 'react';
import {motion} from "framer-motion";
import {ReactComponent as Github} from "../icons/github.svg";
import {ReactComponent as LinkedIn} from "../icons/linkedin.svg";
import {ReactComponent as Gmail} from "../icons/gmail.svg";

const Footer = () => {
    return (
        <div id={"footer-bg"}>
            <div className={"mt-3 pt-16 pb-20 lg:pb-16 flex flex-col items-center justify-center"}>
                <p className={"text-white md:text-black font-footer text-xl"}>
                    Designed & Built By Oscar Castro
                </p>
                <div className={"md:hidden flex pt-12"}>
                    <div className="dropdown dropdown-bottom">
                        <motion.div
                            style={{cursor: "pointer"}}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 1.0 }}
                            tabIndex={0}>
                            <Gmail className={"mx-6 w-10"} fill={"white"}/>
                        </motion.div>
                        <ul tabIndex={0} className="mt-2 dropdown-content menu p-2 shadow bg-transparent antialiased rounded-lg">
                            <li className={"text-white"}>oscar.a.castro818@gmail.com</li>
                        </ul>
                    </div>
                    <motion.a
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.0 }}
                        href={"https://github.com/oscar-ct"}><Github className={"mx-6 w-10"} fill={"white"}/></motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.0 }}
                        href={"https://www.linkedin.com/in/oscar-ct/"}><LinkedIn className={"mx-6 w-10"} fill={"white"}/></motion.a>
                </div>
            </div>
        </div>
    );
};

export default Footer;