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


const Knowledge = () => {
    return (
        <>
        <div id={"wallpaper"} className={"h-24 static"}>
        </div>
            <div className="opacity-100 inset-0 z-0 flex flex-col items-center justify-between w-100">
                <div className={"w-full p-6 lg:p-[5rem]"}>
                    <div className={"flex flex-col items-end"}>
                        <div className={"text-4xl pb-[3rem] font-bold text-purple-500"}>
                            What I Know
                        </div>
                        <div className={"flex lg:px-3 flex-col lg:flex-row text-white"}>
                            <div className={"flex flex-col w-100 lg:w-6/12"}>
                                <div className={"text-3xl font-bold mb-5"}>
                                    Front-End Development
                                </div>
                                <div className={"lg:p-3"}>
                                    <p className={"font-light"}>
                                        Using <span className={"font-bold text-purple-400"}>JavaScript</span> libraries such as <span className={"font-bold text-purple-400"}>React</span> and <span className={"font-bold text-purple-400"}>jQuery</span> has made a frontend development a breeze.  jQuery's DOM traversing/manipulating is unmatched and React's vast hook library is extremely useful and powerful, paired with <span className={"font-bold text-purple-400"}>Redux</span> Toolkit for state handling allows me to provide users with fast and seamless experiences.
                                    </p>
                                    <p className={"font-light"}>
                                        <span className={"font-bold text-purple-400"}>TailwindCSS</span> and <span className={"font-bold text-purple-400"}>Bootstrap</span> are more tools that I have taken full advantage of when developing an application.  Learning both is tricky but the speed, simplicity, and customization is unparalleled.
                                    </p>
                                </div>
                                <div className={"flex flex-wrap p-3"}>
                                    <JavaScript fill={"white"} className={"w-12 m-2"}/>
                                    <HTML fill={"white"} className={"w-12 m-2"}/>
                                    <CSS fill={"white"} className={"w-12 m-2"}/>
                                    <ReactIcon fill={"white"} className={"w-12 m-2"}/>
                                    <Redux fill={"white"} className={"w-12 m-2"}/>
                                    <JQuery fill={"white"} className={"w-12 m-2"}/>
                                    <Bootstrap fill={"white"} className={"w-12 m-2"}/>
                                    <Tailwind fill={"white"} className={"w-12 m-2"}/>
                                </div>
                            </div>

                            <div className={"flex lg:px-3 flex-col w-100 lg:w-6/12"}>
                                <div className={"text-3xl font-bold mb-5"}>
                                    Back-End Development
                                </div>
                                <div className={"lg:p-3"}>
                                    <p className={"font-light pb-2 border-b-2 border-solid"}>
                                        Programming applications in <span className={"font-bold text-purple-400"}>Java EE</span>, with Servlets and JavaServer Pages, as well as utilizing Prepared Statements to prevent SQL Injection has provided me a wide-ranging experience with legacy programming.
                                    </p>
                                    <p className={"pt-2 font-light pb-2 border-b-2 border-solid"}>
                                        Setting up a full-stack application using <span className={"font-bold text-purple-400"}>Spring Boot</span> is amazingly simple. Creating a <span className={"font-bold text-purple-400"}>MySQL</span> database with Java Beans takes the complicated schema business out of the picture. Defining controllers with Spring couldn't be any easier and by utilizing <span className={"font-bold text-purple-400"}>Thymeleaf</span>, serving the frontend is effortless.
                                    </p>
                                    <p className={"pt-2 font-light pb-2 border-b-2 border-solid"}>
                                        <span className={"font-bold text-purple-400"}>Express</span> is my go to framework for creating a <span className={"font-bold text-purple-400"}>Node.js</span> backend. Express provides a robust set of features and paired with <span className={"font-bold text-purple-400"}>Mongoose</span> for Object modeling, creating <span className={"font-bold text-purple-400"}>MongoDB</span> collections is quick and painless.
                                    </p>
                                    <p className={" pt-2 font-light"}>
                                        <span className={"font-bold text-purple-400"}>Firebase</span> is another great tool under my belt. Everything from storage to user authentication, Google's Firebase brings it all together without any of the extra legwork.
                                    </p>
                                </div>
                                <div className={"flex flex-wrap p-3"}>
                                    <Java fill={"white"} className={"w-12 m-2"}/>
                                    <Spring fill={"white"} className={"w-12 m-2"}/>
                                    <Thymeleaf fill={"white"} className={"w-12 m-2"}/>
                                    <MySQL fill={"white"} className={"w-12 m-2"}/>
                                    <Express fill={"white"} className={"w-12 m-2"}/>
                                    <Node fill={"white"} className={"w-12 m-2"}/>
                                    <MongoDB fill={"white"} className={"w-12 m-2"}/>
                                    <Mongoose fill={"white"} className={"w-12 m-2"}/>
                                    <Firebase fill={"white"} className={"w-12 m-2"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</>
    );
};

export default Knowledge;