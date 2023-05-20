import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="hero">
            <div className="text-center hero-content">
                <div className="max-w-lg text-white">
                    <h1 className="text-8xl font-bold mb-8"> Oops!
                    </h1>
                    <p className="text-5xl mb-8">
                        404 - Page not found!
                    </p>
                    <Link to="/" className={"flex justify-center"}>
                        <button
                            style={{cursor: "pointer"}}
                            className="antialiased text-center hover:subpixel-antialiased text-lg mb-2 block rounded-lg bg-gradient-to-tr from-purple-600 to-purple-400 py-2 px-4 font-bold uppercase text-white shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        >
                            <span>BACK TO PORTFOLIO</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;