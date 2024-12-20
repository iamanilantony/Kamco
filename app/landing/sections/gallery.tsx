"use client";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Link from "next/link";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Gallery = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const imagesToShow = isMobile ? 2 : 4;

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray<HTMLDivElement>(".parall-img").forEach((img) => {
        const randomDuration = gsap.utils.random(0.5, 1.5);
        gsap.from(img, {
          opacity: 0,
          y: "500px",
          duration: randomDuration,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 50%",
            end: "bottom 50%",
            //   markers: true,
          },
        });
        gsap.to(img, {
          yPercent: -gsap.utils.random(35, 50),
          duration: randomDuration,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 50%",
            end: "bottom 50%",
            // markers: true,
            scrub: 1,
          },
        });
      });
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      className="my-32 flex flex-col justify-between relative gap-48"
    >
      <Link
        href="/dealers"
        className="bg-[#d7ffbf] py-3 md:py-5 px-8 md:px-16 rounded-2xl text-xl md:text-2xl urbanist-font absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      >
        Explore Dealers
      </Link>
      <div className="flex justify-between items-center gap-5 pl-5">
        {Array.from({ length: imagesToShow }).map((_, index) => (
          <div
            style={{
              transform: `translateY(${Math.sin(index * 5) * 100}px)`,
            }}
          >
            <Image
              key={index}
              src={`/new_images/gallery/img${index + 1}.webp`}
              alt="Gallery Image"
              className="rounded-lg parall-img w-full"
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center gap-5">
        {Array.from({ length: imagesToShow }).map((_, index) => (
          <div
            style={{
              transform: `translateY(${Math.sin(index * 5) * 100}px)`,
            }}
          >
            <Image
              key={index}
              src={`/new_images/gallery/img${index + 4 + 1}.webp`}
              alt="Gallery Image"
              className="rounded-lg parall-img w-full"
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
