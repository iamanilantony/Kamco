'use client';

import React from 'react';

const ContactSection = () => {
    return (
        <div className="flex flex-col md:flex-row py-10">
            {/* Left Side - Contact Information */}
            <div className="md:w-[500px] p-2 border-2 border-[#166434] md:rounded-full rounded-xl flex flex-col justify-center mx-auto md:mx-16 mb-8 md:mb-0"> {/* Centered on mobile */}
                <h2 className="text-2xl font-normal mb-4 text-center">CHIEF MINISTER’S REDRESSAL CELL</h2>
                <p className="mb-2 text-center">Charge Officer - KAMCO:</p>
                <p className="mb-2 text-center">Shri. Vijayakumar M C, Sr. Manager (HR)</p>
                <p className="mb-2 text-center">Phone: +91-944 699 2031, 0484-2474301</p>
                <p className="mb-2 text-center">Email: vijayakumar@kamcoindia.com</p>
                <p className="mb-2 text-center">Visiting Time: 3 PM - 4 PM</p>
            </div>

            {/* Right Side - Contact Form */}
            <div className='w-full md:w-1/2 md:ml-8'> {/* Adjust width for mobile */}
                <h2 className="text-4xl font-normal md:mb-4 mb-8 text-center md:text-left">Connect With Us</h2>
                <div className="p-8 bg-[#166434] text-white rounded-lg shadow-lg font-sans">
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
    );
};

export default ContactSection;
