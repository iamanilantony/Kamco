"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type AnimatedbuttonProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
  viewBased?: boolean;
  navigateto?: string | null;
};

const Animatedbutton = ({
  children,
  className,
  delay,
  onClick,
  viewBased = false,
  navigateto = null,
}: AnimatedbuttonProps) => {
  const ref = useRef(null);
  let inview = useInView(ref, { once: true });
  const controls = useAnimation();
  const router = useRouter();
  function handleNavigation() {
    if (navigateto) {
      router.push(navigateto);
    }
  }
  if (!viewBased) {
    inview = true;
  }
  useEffect(() => {
    if (inview) {
      controls.start("visible");
      controls.start("visible");
    }
  }, [inview]);
  return (
    <motion.button
      ref={ref}
      onClick={navigateto ? handleNavigation : onClick}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, delay: delay },
        },
      }}
      className={cn(
        " text-black py-3 md:py-5 px-8 md:px-16 rounded-2xl text-base sm:text-lg md:text-2xl urbanist-font cursor-pointer z-10",
        className
      )}
    >
      {children}
    </motion.button>
  );
};

export default Animatedbutton;
