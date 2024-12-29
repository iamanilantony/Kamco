"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type AnimatedheadingProps = {
  children: React.ReactNode;
  className?: string;
};

const Animatedheading = ({ children, className }: AnimatedheadingProps) => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className={cn("flex justify-center w-full", className)}
    >
      <h2 className="mb-0 text-2xl text-center font-bold tracking-tight text-[#274321] sm:text-3xl lg:text-4xl">
        {children}
      </h2>
    </motion.div>
  );
};

export default Animatedheading;
