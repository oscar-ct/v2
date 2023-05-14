import React from 'react';
import {ReactComponent as JavaScript} from "../icons/javascript.svg";
import {ReactComponent as HTML} from "../icons/html5.svg";
import {ReactComponent as CSS} from "../icons/css3.svg";
import {ReactComponent as ReactIcon} from "../icons/react.svg";
import {ReactComponent as Redux} from "../icons/redux.svg";
import {ReactComponent as JQuery} from "../icons/jquery.svg";
import {ReactComponent as Tailwind} from "../icons/tailwindcss.svg";
import {ReactComponent as Bootstrap} from "../icons/bootstrap.svg";
import {ReactComponent as Java} from "../icons/java.svg";
import {ReactComponent as Spring} from "../icons/spring.svg";
import {ReactComponent as Node} from "../icons/nodedotjs.svg";
import {ReactComponent as Mongoose} from "../icons/mongoose.svg";
import {ReactComponent as Firebase} from "../icons/firebase.svg";
import {ReactComponent as Express} from "../icons/express.svg";
import {ReactComponent as MySQL} from "../icons/mysql.svg";
import {ReactComponent as MongoDB} from "../icons/mongodb.svg";
import {ReactComponent as Thymeleaf} from "../icons/thymeleaf.svg";


const Icon = ({name, fill}) => {

    const svg = (string) => {
        switch (string.toLowerCase()) {
            case 'react':
                return <ReactIcon fill={fill} className={"w-7 m-2"}/>;
            case 'redux':
                return <Redux fill={fill} className={"w-7 m-2"}/>;
            case 'jquery':
                return <JQuery fill={fill} className={"w-7 m-2"}/>;
            case 'javascript':
                return <JavaScript fill={fill} className={"w-7 m-2"}/>;
            case 'java':
                return <Java fill={fill} className={"w-7 m-2"}/>;
            case 'html':
                return <HTML fill={fill} className={"w-7 m-2"}/>;
            case 'css':
                return <CSS fill={fill} className={"w-7 m-2"}/>;
            case 'tailwindcss':
                return <Tailwind fill={fill} className={"w-7 m-2"}/>;
            case 'bootstrap':
                return <Bootstrap fill={fill} className={"w-7 m-2"}/>;
            case 'spring':
                return <Spring fill={fill} className={"w-7 m-2"}/>;
            case 'node.js':
                return <Node fill={fill} className={"w-7 m-2"}/>;
            case 'mongoose':
                return <Mongoose fill={fill} className={"w-7 m-2"}/>;
            case 'firebase':
                return <Firebase fill={fill} className={"w-7 m-2"}/>;
            case 'express':
                return <Express fill={fill} className={"w-7 m-2"}/>;
            case 'mysql':
                return <MySQL fill={fill} className={"w-7 m-2"}/>;
            case 'mongodb':
                return <MongoDB fill={fill} className={"w-7 m-2"}/>;
            case 'thymeleaf':
                return <Thymeleaf fill={fill} className={"w-7 m-2"}/>;
            default:
                console.log("Hi :)");
        }
    }
    return svg(name)
};

export default Icon;