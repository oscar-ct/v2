import React from 'react';
import JavaScript from "../icons/javascript.svg";
import HTML from "../icons/html5.svg";
import CSS from "../icons/css3.svg";
import ReactIcon from "../icons/react.svg";
import Redux from "../icons/redux.svg";
import JQuery from "../icons/jquery.svg";
import Tailwind from "../icons/tailwindcss.svg";
import Bootstrap from "../icons/bootstrap.svg";
import Java from "../icons/java.svg";
import Spring from "../icons/spring.svg";
import Node from "../icons/nodedotjs.svg";
import Mongoose from "../icons/mongoose.svg";
import Firebase from "../icons/firebase.svg";
import Express from "../icons/express.svg";
import MySQL from "../icons/mysql.svg";
import MongoDB from "../icons/mongodb.svg";
import Thymeleaf from "../icons/thymeleaf.svg";


const Icon = ({name}) => {

    const svg = (string) => {
        switch (string.toLowerCase()) {
            case 'react':
                return ReactIcon;
            case 'redux':
                return Redux;
            case 'jquery':
                return JQuery;
            case 'javascript':
                return JavaScript;
            case 'java':
                return Java;
            case 'html':
                return HTML;
            case 'css':
                return CSS;
            case 'tailwindcss':
                return Tailwind;
            case 'bootstrap':
                return Bootstrap;
            case 'spring':
                return Spring;
            case 'node.js':
                return Node;
            case 'mongoose':
                return Mongoose;
            case 'firebase':
                return Firebase;
            case 'express':
                return Express;
            case 'mysql':
                return MySQL;
            case 'mongodb':
                return MongoDB;
            case 'thymeleaf':
                return Thymeleaf;
            default:
                console.log("Hi :)");
        }
    }

    return (
        <icon className={"m-3"}>
            <img className={"w-7"} src={svg(name)} alt={"tech"}/>
        </icon>
    );
};

export default Icon;