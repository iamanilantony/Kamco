import React from "react";
import { motion } from "framer-motion";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string; // Add videoUrl prop
};

const Modal = ({ isOpen, onClose, videoUrl }: ModalProps) => {
  if (!isOpen) return null;

  // Convert the video URL to the embed URL format
  const embedUrl = videoUrl.replace("watch?v=", "embed/");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className=" rounded-lg overflow-hidden shadow-lg w-full h-full"
      >
        <div className="flex justify-end p-8">
          <button onClick={onClose} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <div
            className="relative"
            style={{ paddingBottom: "56.25%", height: 0 }}
          >
            <iframe
              src={embedUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video"
              className="absolute top-1/2 md:-translate-y-3/4 -translate-x-1/2 left-1/2 md:w-[60%] md:h-[60%] w-full h-[50vh] md:aspect-video"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
