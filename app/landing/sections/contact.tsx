"use client";

import { FormEvent, useState, useEffect, useRef } from "react";
import { FaFacebook, FaYoutube, FaEnvelope, FaTwitter } from "react-icons/fa";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { motion, useAnimation, useInView } from "framer-motion";
import ContactForm from "./contactForm";
import Link from "next/link";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inview = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (inview) {
      controls.start("visible");
    }
  }, [inview]);

  const animationVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  return (
     <div ref={ref}>
        <div className='md:max-w-7xl mx-auto py-12 px-6 lg:px-16'>
           <div className='flex flex-col md:flex-row items-center justify-between gap-8 md:gap-32'>
              <ContactForm />

              {/* Map and Contact Info Section */}
              <motion.div
                 animate={controls}
                 initial='hidden'
                 variants={animationVariants}
                 transition={{ duration: 0.5, delay: 0.7 }}
                 className='space-y-6 max-md:w-full'
              >
                 <div className='relative w-full h-[300px] rounded-lg overflow-hidden text-left'>
                    <div className='absolute inset-0 bg-black/50 p-6 text-white'>
                       <div className='flex flex-col items-start gap-8 inter-font'>
                          <CiLocationOn size={24} />

                          <div>
                             <h3 className='font-sm'>Kerala Agro Machinery Corporation Limited</h3>
                             <p className='text-sm'>Reg Office: Athani - 683585,</p>
                             <p className='text-sm'>Ernakulam District, Kerala State, India</p>
                          </div>
                          <button className='bg-green-100 text-black p-2 px-8 text-sm rounded-full hover:bg-green-200 transition-colors'>
                             <Link href='https://maps.app.goo.gl/o8e6wmKyZpHh9qcz5' target='_blank'>
                                View Map
                             </Link>
                          </button>
                       </div>
                    </div>
                    <iframe
                       src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15732.123456789!2d76.35560571104503!3d10.157632542703444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDA5JzI3LjUiTiA3NsKwMjEnMTkuOSJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin'
                       width='100%'
                       height='100%'
                       style={{ border: 0 }}
                       allowFullScreen={false}
                       loading='lazy'
                    ></iframe>
                 </div>

                 <div className='flex flex-col md:flex-row gap-5'>
                    <div className='bg-green-100 rounded-lg p-6 w-full md:w-[95%]'>
                       <div className='flex flex-col md:flex-row space-x-2 gap-12'>
                          <div className='flex items-start gap-2'>
                             <MdOutlinePhoneInTalk className='w-5 h-5 mb-6' />
                             <div className='flex flex-col gap-2 items-start'>
                                <p className='text-sm'>91-484-2474301 (5 Lines)</p>

                                <p className='text-sm'>+91-9400865666</p>
                             </div>
                          </div>
                          <div className='flex items-start gap-2'>
                             <CiMail className='w-5 h-5' />
                             <span className='text-sm'>mail@kamco.in</span>
                          </div>
                       </div>
                    </div>
                    <div className='bg-green-100 rounded-lg p-6 flex flex-wrap gap-6 justify-around items-center'>
                       <a
                          href='https://www.facebook.com/kamcoindia'
                          className='hover:opacity-75 transition-opacity'
                       >
                          <FaFacebook size={32} />
                       </a>
                       <a
                          href='https://www.facebook.com/kamcoindia'
                          className='hover:opacity-75 transition-opacity'
                       >
                          <FaYoutube size={32} />
                       </a>
                       <a
                          href='https://www.instagram.com/kamcoindiaofficial/'
                          className='hover:opacity-75 transition-opacity'
                       >
                          <RiInstagramFill size={32} />
                       </a>
                       <a href='#' className='hover:opacity-75 transition-opacity'>
                          <FaTwitter size={32} />
                       </a>
                    </div>
                 </div>
              </motion.div>
           </div>
        </div>
     </div>
  );
}
