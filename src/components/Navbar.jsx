import {useEffect, useState} from "react";
import {useScroll} from "../hooks/useScroll";
import {ReactComponent as Github} from "../icons/github.svg";
import {ReactComponent as LinkedIn} from "../icons/linkedin.svg";
import {ReactComponent as Gmail} from "../icons/gmail.svg";
import {motion} from "framer-motion";


const Navbar = () => {

    const { scrollY, scrollDirection } = useScroll();
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
        if (openNav) {
            window.addEventListener(
                "scroll",
                () => setOpenNav(false)
            );
        }

    }, [openNav]);


    const styles = {
        active: {
            visibility: "visible",
            transition: "all 0.5s"
        },
        hidden: {
            visibility: "hidden",
            transition: "all 0.5s",
            transform: "translateY(-100%)"
        },
        hidden2: {
            visibility: "hidden",
            // display: "none",
            transition: "all 0.5s",
            transform: "translateX(-100%)"
        }
    }



    return (
        <>
            <nav className={`sticky inset-0 z-10 block h-max w-full max-w-full rounded-none py-5 text-white shadow-md backdrop-blur-sm  lg:py-4 lg:mb-8`}
                 style={scrollY < 25 || scrollDirection === "up" || (scrollDirection === "down" && scrollY < 25) ? styles.active: styles.hidden}
            >
                <div className="px-5 flex justify-between items-center text-white">
                    <div className={"hidden lg:flex lg:items-center"}>
                        <div className={"h-[1px] w-48 border-b-[1px] border-white"}/>
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 1.0 }}
                            href={"https://github.com/oscar-ct"}><Github className={"ml-4 w-6"} fill={"white"}/></motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 1.0 }}
                            href={"https://www.linkedin.com/in/oscar-ct/"}><LinkedIn className={"ml-4 w-6"} fill={"white"}/></motion.a>
                        <div className="dropdown dropdown-bottom">
                            <motion.div
                                style={{cursor: "pointer"}}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 1.0 }}
                                tabIndex={0}>
                                    <Gmail className={"ml-4 w-6"} fill={"white"}/>
                            </motion.div>
                            <ul tabIndex={0} className="mt-1 dropdown-content menu p-2 shadow bg-transparent antialiased rounded-lg">
                                <li className={"text-white"}>oscar.a.castro818@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className={"flex"}>
                        <ul className="ml-auto mr-8 hidden items-center gap-6 lg:flex">
                            <li onClick={() => {window.location.href = "/#about"}} className="block p-1 font-normal antialiased hover:subpixel-antialiased">
                                <button className="a flex items-center">
                                    About Me
                                </button>
                            </li>
                            <li onClick={() => {window.location.href = "/#skills"}} className="block p-1 font-normal antialiased hover:subpixel-antialiased">
                                <button className="a flex items-center">
                                    What I Know
                                </button>
                            </li>
                            <li onClick={() => {window.location.href = "/#projects"}} className="block p-1  font-normal antialiased hover:subpixel-antialiased">
                                <button className="a flex items-center">
                                    My Projects
                                </button>
                            </li>
                        </ul>
                        <div className={"flex justify-end"}>
                            {/*<label htmlFor="modal-message" className="btn">open modal</label>*/}

                            <label
                                htmlFor="modal-message"
                                style={{cursor: "pointer"}}
                                className="antialiased hover:subpixel-antialiased middle none center hidden rounded-lg bg-gradient-to-tr from-purple-700 to-purple-500 py-2 px-4 font-bold text-sm uppercase text-white shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                            >
                                <span>MESSAGE ME</span>
                            </label>
                        </div>
                    </div>




                    <button className="middle none relative mr-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center uppercase transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden" onClick={() => setOpenNav(!openNav)}>
                            {openNav ? (
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      className="h-7 w-7"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                  >
                                      <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M6 18L18 6M6 6l12 12"
                                      />
                                  </svg>
                            ) : (
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-7 w-7"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor">
                                      <path
                                          strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16"
                                      />
                                  </svg>
                            )}

                    </button>
                </div>

                <div className={`fixed top-[4rem] left-0 w-9/12 md:w-6/12 h-screen bg-black/90 rounded-r-xl lg:hidden`} style={openNav ? styles.active : styles.hidden2}>
                    <div className={"flex flex-col justify-center h-full w-full"}>
                        <ul className="flex flex-col pb-24 font-bold text-xl">
                            <li onClick={() => {window.location.href = "/#about"}} className="block  pt-4 font-normal antialiased hover:subpixel-antialiased hover:bg-purple-500/40">
                                <button className="w-full a flex justify-start px-8">
                                    About Me
                                </button>
                            </li>
                            <li onClick={() => {window.location.href = "/#skills"}} className="block font-normal pt-4 antialiased hover:subpixel-antialiased hover:bg-purple-500/40">
                                <button className="w-full  a flex justify-start px-8">
                                    What I Know
                                </button>
                            </li>
                            <li onClick={() => {window.location.href = "/#projects"}} className="block font-normal pt-4 antialiased hover:subpixel-antialiased  hover:bg-purple-500/40">
                                <button className="w-full a flex justify-start px-8">
                                    My Projects
                                </button>
                            </li>
                            <li onClick={() => {window.location.href = "/#contact"}} className="block font-normal pt-4 antialiased hover:subpixel-antialiased  hover:bg-purple-500/40">
                                <button className="w-full a flex justify-start px-8">
                                    Contact
                                </button>
                            </li>
                            <div className={"px-8 pt-4 flex justify-start"}>
                                <label
                                    style={{cursor: "pointer"}}
                                    htmlFor="modal-message"
                                    className="antialiased text-center hover:subpixel-antialiased text-lg mb-2 block rounded-lg bg-gradient-to-tr from-purple-600 to-purple-400 py-2 px-4 font-bold uppercase text-white shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                >
                                    <span>MESSAGE ME</span>
                                </label>
                            </div>

                        </ul>
                    </div>
                </div>
            </nav>
            </>
    );
};

export default Navbar;