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


const Knowledge = () => {
    return (
        <>
        <div id={"wallpaper"} className={"h-24 static"}>
        </div>
           {/*<img className={"static opacity-40 w-screen bg-center bg-no-repeat bg-cover"} src={"https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-1280.jpg"} alt={"space"}/>*/}
            <div className="opacity-100 inset-0 z-0 flex flex-col items-center justify-between w-100">
                <div className={"w-full p-6 lg:p-[5rem]"}>
                    <div className={"flex flex-col items-end"}>
                        <div className={"text-4xl pb-[4rem] font-bold text-purple-500"}>
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
                                <div className={"flex flex-wrap p-6"}>
                                    <icon className={"m-3"}>
                                        <img className={"w-10 lg:w-12"} src={JavaScript} alt={"JS"}/>
                                    </icon>
                                    <icon className={"m-3"}>
                                        <img className={"w-10 lg:w-12"} src={HTML} alt={"JS"}/>
                                    </icon>
                                    <icon className={"m-3"}>
                                        <img className={"w-10 lg:w-12"} src={CSS} alt={"JS"}/>
                                    </icon>
                                    <icon className={"m-3"}>
                                        <img className={"w-10 lg:w-12"} src={ReactIcon} alt={"JS"}/>
                                    </icon>
                                    <icon className={"m-3"}>
                                        <img className={"w-10 lg:w-12"} src={Redux} alt={"JS"}/>
                                    </icon>
                                    <icon className={"m-3"}>
                                        <img className={"w-10 lg:w-12"} src={JQuery} alt={"JS"}/>
                                    </icon>
                                    <icon className={"m-3"}>
                                        <img className={"w-10 lg:w-12"} src={Bootstrap} alt={"JS"}/>
                                    </icon>
                                    <icon className={"m-3"}>
                                        <img className={"w-10 lg:w-12"} src={Tailwind} alt={"JS"}/>
                                    </icon>
                                </div>
                                {/*<div className={"text-3xl font-bold mb-5"}>*/}
                                {/*    Tools*/}
                                {/*</div>*/}
                            </div>

                            <div className={"flex lg:px-3 flex-col w-100 lg:w-6/12"}>
                                <div className={"text-3xl font-bold mb-5"}>
                                    Back-End Development
                                </div>
                                <div className={"lg:p-3"}>
                                    <p className={"font-light pb-2 border-b-2 border-dotted"}>
                                        Programming applications in <span className={"font-bold text-purple-400"}>Java EE</span>, with Servlets and JavaServer Pages, as well as utilizing Prepared Statements to prevent SQL Injection has provided me a wide-ranging experience with legacy programming.
                                    </p>
                                    <p className={"pt-2 font-light pb-2 border-b-2 border-dotted"}>
                                        Setting up a full-stack application using <span className={"font-bold text-purple-400"}>Spring Boot</span> is amazingly simple. Creating a <span className={"font-bold text-purple-400"}>MySQL</span> database with Java Beans takes the complicated schema business out of the picture. Defining controllers with Spring couldn't be any easier and by utilizing <span className={"font-bold text-purple-400"}>Thymeleaf</span>, serving the frontend is effortless.
                                    </p>
                                    <p className={"pt-2 font-light pb-2 border-b-2 border-dotted"}>
                                        <span className={"font-bold text-purple-400"}>Express</span> is my go to framework for creating a <span className={"font-bold text-purple-400"}>Node.js</span> backend. Express provides a robust set of features and paired with <span className={"font-bold text-purple-400"}>Mongoose</span> for Object modeling, creating <span className={"font-bold text-purple-400"}>MongoDB</span> collections is quick and painless.
                                    </p>
                                    <p className={" pt-2 font-light"}>
                                        <span className={"font-bold text-purple-400"}>Firebase</span> is another great tool under my belt. Everything from storage to user authentication, Google's Firebase brings it all together without any of the extra legwork.
                                    </p>
                                </div>
                                <div className={"flex flex-wrap p-6"}>
                                    <icon className={"m-3"}>
                                        <img className={"w-10 lg:w-12"} src={Java} alt={"JS"}/>
                                    </icon>
                                    <icon className={"m-3"}>
                                        <img className={"w-10 lg:w-12"} src={Spring} alt={"JS"}/>
                                    </icon>
                                    <icon className={"m-3"}>
                                        <img className={"w-10 lg:w-12"} src={Thymeleaf} alt={"JS"}/>
                                    </icon>
                                    <icon className={"m-3"}>
                                        <img className={"w-10 lg:w-12"} src={MySQL} alt={"JS"}/>
                                    </icon>
                                    <icon className={"m-3"}>
                                        <img className={"w-10 lg:w-12"} src={Express} alt={"JS"}/>
                                    </icon>
                                    <icon className={"m-3"}>
                                        <img className={"w-10 lg:w-12"} src={Node} alt={"JS"}/>
                                    </icon>
                                    <icon className={"m-3"}>
                                        <img className={"w-10 lg:w-12"} src={MongoDB} alt={"JS"}/>
                                    </icon>
                                    <icon className={"m-3"}>
                                        <img className={"w-10 lg:w-12"} src={Mongoose} alt={"JS"}/>
                                    </icon>
                                    <icon className={"m-3"}>
                                        <img className={"w-10 lg:w-12"} src={Firebase} alt={"JS"}/>
                                    </icon>
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