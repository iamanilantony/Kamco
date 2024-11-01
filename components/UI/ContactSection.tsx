'use client';

import React from 'react';
import Link from 'next/link';

const ContactSection = () => {
    return (
        <div className="flex flex-col md:flex-row py-10">
            {/* Left Side - Contact Information */}
            <div className="md:w-[500px] p-2 border-2 border-[#166434] rounded-[100%] flex flex-col justify-center mx-16">
                <h2 className="text-2xl font-normal mb-4">CHIEF MINISTER’S REDRESSAL CELL</h2>
                <p className="mb-2">Charge Officer - KAMCO:</p>
                <p className="mb-2">Shri. Vijayakumar M C, Sr. Manager (HR)</p>
                <p className="mb-2">Phone: +91-944 699 2031, 0484-2474301</p>
                <p className="mb-2">Email: vijayakumar@kamcoindia.com</p>
                <p className="mb-2">Visiting Time: 3 PM - 4 PM</p>
            </div>

            {/* Right Side - Contact Form */}
            <div className='md:w-1/2 ml-8'>
                <h2 className="text-4xl font-normal mb-8">Connect With Us</h2>
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
                            className="bg-black text-white px-4 py-2 rounded-lg transition hover:bg-gray-700"
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
