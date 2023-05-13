import emailjs from '@emailjs/browser';
import {useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

const EMAILJS_SERVICE = process.env.REACT_APP_SERVICE_ID
const EMAILJS_TEMPLATE = process.env.REACT_APP_TEMPLATE_ID
const EMAILJS_KEY = process.env.REACT_APP_PUBLIC_KEY

const Modal = () => {
    const form = useRef();
    const [message, setMessage] = useState("");
    const [isAlerting, setIsAlerting] = useState(false);


    const handleMessage = (e) => {
        const msg = e.target.value
        setMessage(msg);
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(`${EMAILJS_SERVICE}`, `${EMAILJS_TEMPLATE}`, form.current, `${EMAILJS_KEY}`)
            .then((result) => {
                setMessage("")
                setIsAlerting(true);
                setTimeout(function () {
                    setIsAlerting(false)
                }, 2000)
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <input type="checkbox" id="modal-message" className="modal-toggle" />
            <label htmlFor="modal-message" className="modal backdrop-blur-sm cursor-pointer modal-bottom sm:modal-middle">
                <label className="modal-box bg-white/80 relative" htmlFor="">
                    <h3 className="text-2xl font-bold">Let's Get In Touch.</h3>
                    <form id="email-form" onSubmit={sendEmail} ref={form}/>
                        <div className="mt-4 mb-4">
                            <textarea
                                id="message"
                                value={message}
                                name="message"
                                form="email-form"
                                placeholder="Message must be at least 5 characters"
                                className="w-full h-20 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                onChange={handleMessage}
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                form="email-form"
                                type="submit"
                                disabled={message.trim().length <= 5}
                                style={{cursor: "pointer"}}
                                className="antialiased hover:subpixel-antialiased rounded-lg bg-gradient-to-tr from-purple-700 to-purple-500 py-2 px-4 font-bold text-sm uppercase text-white shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-20 disabled:shadow-none lg:inline-block"
                            >
                                SEND MESSAGE
                            </button>
                        </div>
                    <form/>
                    <AnimatePresence>
                        {isAlerting &&
                            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                                <div className="mt-4 alert alert-success shadow-lg">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>Message sent successfully</span>
                                    </div>
                                </div>
                            </motion.div>
                        }
                    </AnimatePresence>
                </label>
            </label>
        </>
    );
};

export default Modal;