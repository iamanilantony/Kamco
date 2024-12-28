"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
import useIsMobile from "@/lib/hooks/useIsMobile";
import { cn } from "@/lib/utils";

export default function Hero() {
  const { ismobile } = useIsMobile();
  return (
    <div>
      <div className="relative max-sm:h-[60vh] max-sm:mt-8 lg:h-[90vh] overflow-hidden w-[94vw] mx-auto rounded-lg">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-2xl md:object-cover"
            src="/new_images/hero.webm"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex min-h-screen flex-col items-start justify-center gap-8 py-10 lg:py-20"
          >
            {/* Hero Text */}
            <div className="max-w-3xl space-y-6">
              <h1 className="font-heading text-3xl font-bold text-left leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                A Boon for the Farmer,
                <br />A Gain for the Nation.
              </h1>
              <p className="max-w-xl text-lg text-gray-200 sm:text-xl text-left">
                Unleashing the power of innovation—tools that turn hard work
                into unstoppable growth, enabling greater efficiency and
                sustainable success.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-2 flex flex-col gap-4 sm:flex-row sm:gap-6"
            >
              <Link
                href="/projects"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-green-600 px-8 py-3 text-lg font-medium text-white transition duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative">New Initiatives</span>
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                href={"/dealers"}
                className="group inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-3 text-lg font-medium text-white transition duration-300 hover:bg-white hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Explore Dealers
              </Link>
            </motion.div>

            {/* Statistics Grid */}
            <div
              className={cn(
                "mt-2 grid w-full grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6",
                ismobile ? "opacity-0" : "opacity-100"
              )}
            >
              {[
                { number: "50+", label: "Years of Experience" },
                { number: "80+", label: "Dealers Across Country" },
                { number: "1L+", label: "Happy Customers" },
                { number: "900+", label: "Skilled Manpower" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.2, // Staggered delay for each card
                  }}
                  className="rounded-xl bg-white/10 p-4 backdrop-blur-sm transition-transform duration-300 hover:scale-105 sm:p-6"
                >
                  <div className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                    {stat.number}
                  </div>
                  <div className="mt-1 text-sm text-gray-300 sm:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute -left-48 top-1/4 h-96 w-96 rounded-full bg-green-500/20 blur-3xl" />
        <div className="absolute -right-48 top-3/4 h-96 w-96 rounded-full bg-green-500/20 blur-3xl" />
        <div className="pt-8  flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-10">
          {/* Stats */}
        </div>
      </div>
      {ismobile && (
        <div className="flex justify-center py-8 lg:justify-start space-x-6 md:space-x-20 ml-4 md:ml-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-3xl md:text-5xl urbanist-font font-bold text-gray-900">
              50+
            </h2>
            <p className="text-xs sm:text-sm md:text-lg font-medium text-gray-600">
              Years of <br /> Experience
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl sm:text-3xl md:text-5xl urbanist-font font-bold text-gray-900">
              80+
            </h2>
            <p className="text-xs sm:text-sm md:text-lg font-medium text-gray-600">
              Dealers <br /> Across Country
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl sm:text-3xl md:text-5xl urbanist-font font-bold text-gray-900">
              1L+
            </h2>
            <p className="text-xs sm:text-sm md:text-lg font-medium text-gray-600">
              Happy <br /> Customers
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl sm:text-3xl md:text-5xl urbanist-font font-bold text-gray-900">
              900+
            </h2>
            <p className="text-xs sm:text-sm md:text-lg font-medium text-gray-600">
              Skilled <br /> Manpower
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
