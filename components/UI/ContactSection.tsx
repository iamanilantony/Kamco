'use client';

import React from 'react';

const ContactSection = () => {
    return (
        <div>
            <h2 className="text-4xl font-normal md:mb-4 mb-8 text-center">Connect With Us</h2>
            <div className="flex flex-col md:flex-row justify-between py-10 md:mx-20">
                {/* Right Side - Contact Form */}
                <div className='w-full md:w-1/3'> {/* Adjust width for mobile */}
                    <div className="p-8 bg-[#166434] text-white rounded-lg shadow-lg font-sans w-full">
                        <form>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full p-2 rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-2 rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full p-2 rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    placeholder="Your Message"
                                    className="w-full p-2 rounded-lg h-32"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-black text-white px-4 py-2 rounded-lg transition hover:bg-gray-700 w-full md:w-auto"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
