"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { useRef } from "react";

const SplitText = ({
  text,
  className = "",
  staggerAmount = 0.5,
  scrolled = false,
  delay = 0,
  blured = false,
}: {
  text: string;
  className?: string;
  staggerAmount?: number;
  scrolled?: boolean;
  delay?: number;
  blured?: boolean;
}) => {
  const ref = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      if (!scrolled) {
        gsap.from(".char", {
          y: 100,
          filter: blured ? "blur(10px)" : "none",
          duration: 1,
          delay: delay,
          stagger: {
            amount: staggerAmount,
          },
          ease: "power4.out",
        });
      } else {
        gsap.from(".char", {
          scrollTrigger: {
            trigger: ".char",
            start: "top 80%",
          },
          y: 100,
          filter: blured ? "blur(10px)" : "none",
          duration: 1,
          delay: delay,
          stagger: {
            amount: staggerAmount,
          },
          ease: "power4.out",
        });
      }
    },
    { scope: ref }
  );

  return (
    <p ref={ref} className={cn("text-center md:text-3xl text-lg", className)}>
      {text.split(" ").map((word, index) => {
        return (
          <span key={index} className="overflow-clip inline-block mr-2">
            {word.split("").map((letter, index) => {
              return (
                <span
                  className="char inline-block"
                  key={index}
                  style={{ lineHeight: "1.19" }}
                >
                  {letter}{" "}
                </span>
              );
            })}{" "}
          </span>
        );
      })}
    </p>
  );
};

export default SplitText;
