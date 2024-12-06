"use client";

import { FormEvent, useState } from "react";
import { FaFacebook, FaYoutube, FaEnvelope } from "react-icons/fa";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div>
      <div className="max-w-[94vw] mx-auto py-12 px-4 md:px-48">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6 max-w-md mx-auto lg:mx-0 flex flex-col justify-start items-center">
            <h1 className="text-3xl md:text-5xl text-center font-bold mb-1 urbanist-font">
              Connect With Us
            </h1>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 w-full md:flex md:flex-col justify-center items-center"
            >
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 rounded-md border border-[rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-green-200"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-md border border-[rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-green-200"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 rounded-md border border-[rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-green-200"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-[rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-green-200"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <button className="bg-[#c0eba6] py-3 md:py-4 px-8 md:px-20 rounded-2xl text-xl md:text-2xl urbanist-font">
                Submit
              </button>
            </form>
          </div>

          {/* Map and Contact Info Section */}
          <div className="space-y-6">
            <div className="relative w-full h-[250px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black/50 p-6 text-white">
                <div className="flex flex-col items-start gap-8 inter-font">
                  <CiLocationOn size={24} />

                  <div>
                    <h3 className="font-sm">
                      Kerala Agro Machinery Corporation Limited
                    </h3>
                    <p className="text-sm">Reg Office: Athani - 683585,</p>
                    <p className="text-sm">
                      Ernakulam District, Kerala State, India
                    </p>
                  </div>
                  <button className="bg-[#c0eba6] text-black p-2 px-8 text-sm rounded-full hover:bg-green-600 transition-colors">
                    View Map
                  </button>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15732.123456789!2d76.35560571104503!3d10.157632542703444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDA5JzI3LjUiTiA3NsKwMjEnMTkuOSJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <div className="bg-[#c0eba6] rounded-lg p-6 w-full md:w-[95%]">
                <div className="flex flex-col md:flex-row space-x-2 gap-12">
                  <div className="flex flex-col items-start gap-2">
                    <MdOutlinePhoneInTalk className="w-5 h-5 mb-6" />
                    <span className="text-sm">91-484-2474301 (5 Lines)</span>
                    <span className="text-sm">+91-9400865666</span>
                  </div>
                  <div className="flex flex-col items-start justify-between gap-2">
                    <CiMail className="w-5 h-5" />
                    <span className="text-sm">mail@kamco.in</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#c0eba6] rounded-lg p-6 flex flex-wrap gap-6 justify-between items-center">
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <FaFacebook size={32} />
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <FaYoutube size={32} />
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <RiInstagramFill size={32} />
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <FaEnvelope size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
