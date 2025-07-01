import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate()
    const [submit, setsubmit] = useState(true);
    return (
        <>
            {submit ? (

                <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-400 flex flex-col items-center py-10 px-4">
                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2 text-center">
                        Get in Touch
                    </h1>
                    <p className="text-gray-600 mb-8 text-center max-w-xl">
                        Have a question, suggestion, or just want to say hello? Fill out the form below or reach us directly.
                    </p>

                    {/* Form & Info Container */}
                    <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
                        {/* Contact Form */}
                        <div className="p-8">
                            <form className="space-y-6">
                                {/* Name */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="peer w-full border-b-2 border-gray-300 py-3 text-gray-900 bg-transparent focus:outline-none focus:border-blue-500"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="name"
                                        className="absolute left-0 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-4 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm"
                                    >
                                        Your Name
                                    </label>
                                </div>


                                {/* Email */}
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="peer w-full border-b-2 border-gray-300 py-3 text-gray-900 bg-transparent focus:outline-none focus:border-blue-500"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute left-0 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-4 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm"
                                    >
                                        Your Email
                                    </label>
                                </div>


                                {/* Message */}
                                <div className="relative">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        required
                                        className="peer w-full border-b-2 border-gray-300 py-3 text-gray-900 bg-transparent focus:outline-none focus:border-blue-500 resize-none"
                                        placeholder=" "
                                    ></textarea>
                                    <label
                                        htmlFor="message"
                                        className="absolute left-0 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-4 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm "
                                    >
                                        Your Message
                                    </label>
                                </div>


                                <button
                                    type="submit"
                                    onClick={() => setsubmit(false)}
                                    className="w-full bg-blue-500 cursor-pointer text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="bg-gradient-to-br from-gray-200 to-gray-500 text-gray-800 p-8 flex flex-col justify-center">
                            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                            <p className="mb-4">
                                Feel free to reach out to us anytime. We usually respond within 24 hours.
                            </p>
                            <div className="space-y-3">
                                <p className="flex items-center gap-2">
                                    📞 <span>+91 98765 43210</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    📧 <span>support@yourstore.com</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    📍 <span>Bhilwara, Rajasthan, India</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-400 flex flex-col items-center justify-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-2 text-center">
                        Thanks for reaching out!
                    </h1>
                    <p className="text-gray-600 mb-8 text-center max-w-xl">
                        Thanks for your interest in contacting us. We appreciate your feedback and will get back to you as soon as possible.
                    </p>
                    <button
                        onClick={() => {
                            setsubmit(true);
                            navigate("/home");
                        }}
                        className="relative cursor-pointer inline-flex items-center gap-3 bg-[#7808d0] hover:bg-black text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300 overflow-hidden group"
                    >
                        {/* Icon wrapper */}
                        <span className="flex-shrink-0 w-6 h-6 relative bg-white text-[#7808d0] group-hover:text-black rounded-full grid place-items-center overflow-hidden">
                            {/* First SVG */}
                            <svg
                                viewBox="0 0 14 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"
                                width="10"
                            >
                                <path
                                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                    fill="currentColor"
                                />
                            </svg>
                            {/* Copy SVG */}
                            <svg
                                viewBox="0 0 14 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute translate-x-[-150%] translate-y-[150%] transition-transform duration-300 ease-in-out delay-100 group-hover:translate-x-0 group-hover:translate-y-0"
                                width="10"
                            >
                                <path
                                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                    fill="currentColor"
                                />
                            </svg>
                        </span>
                        explore more
                    </button>

                </div>
            )}
        </>
    );
};

export default Contact;
