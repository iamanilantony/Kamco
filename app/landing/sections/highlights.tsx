"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Animatedheading from "@/components/new_ui/animatedheading";

export default function Highlights() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const highlightsData = [
    {
      title: "Tech-Driven Farming: Bridging Innovation and Sustainability",
      description:
        "How emerging technologies are reshaping farming practices, unlocking new possibilities, and ensuring that agriculture thrives in harmony with the planet.",
      readMore:
        "https://medium.com/@support_62461/tech-driven-farming-bridging-innovation-and-sustainability-4d7b8529ae90",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*BxUsu9cFqbQhlbyFCEZBaA.jpeg",
    },
    {
      title: "Sustainable Growth: Empowering Farmers for the Future",
      description:
        "How empowering farmers with sustainable practices, technology, and market access can drive resilience and prosperity.",
      readMore:
        "https://medium.com/@support_62461/sustainable-growth-empowering-farmers-for-the-future-c7f22696c3f1",
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*QvR0Cb85rjSP6YCSDg8iwg.jpeg",
    },
    {
      title: "Harvest Insights: Modern Farming Tips and Techniques",
      description:
        "The transformative power of modern farming and share actionable tips for farmers, entrepreneurs, and agriculture enthusiasts to harness these advancements effectively.",
      readMore:
        "https://medium.com/@support_62461/harvest-insights-modern-farming-tips-and-techniques-701ee55ccace",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*qQn57ePtDCwJJGmIX79WxA.jpeg",
    },
  ];

  const swiperRef = useRef(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: "easeOut" }}
      className="relative overflow-hidden py-3 sm:py-16 sm:pb-4"
    >
      {/* Background Wheat Pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/new_images/wheat.webp" // Replace with your image path
          alt="Wheat pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div ref={containerRef} className="relative mx-auto w-[94vw]">
        <div ref={contentRef} className="relative">
          <Animatedheading className="mb-8">Highlights</Animatedheading>

          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            onSwiper={(swiper) => {
              //@ts-ignore
              swiperRef.current = swiper;
            }}
            className="mySwiper"
          >
            {highlightsData.map((highlight, index) => (
              <SwiperSlide key={index}>
                <div className="overflow-hidden rounded-lg bg-white shadow-xl">
                  <div className="grid lg:grid-cols-2">
                    {/* Image Section */}
                    <div className="relative h-[400px] overflow-hidden lg:h-full">
                      <Image
                        src={highlight.image}
                        alt={highlight.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 text-left">
                      <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                          <span className="inline-block rounded-full bg-[#d7ffbf] px-3 py-1 text-sm font-medium text-[#274321]">
                            Highlights
                          </span>
                          <span className="text-sm text-gray-500">
                            5 min read
                          </span>
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight text-left text-gray-900 sm:text-4xl">
                          {highlight.title}
                        </h2>

                        <p className="text-base leading-relaxed text-left text-gray-600 sm:text-lg">
                          {highlight.description}
                          <span className="font-semibold text-[#274321]">
                            {" "}
                            .......
                          </span>
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                          <Link
                            href={highlight.readMore}
                            target="_blank"
                            className="group inline-flex items-center gap-2 rounded-full bg-[#274321] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#1a2d15] sm:text-base"
                          >
                            Read Article
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                          <Link
                            href="/articles"
                            className="group hidden items-center gap-2 rounded-full bg-[#d7ffbf] px-6 py-3 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-[#c1f7a1] sm:text-base"
                          >
                            View All Articles
                          </Link>
                        </div>
                      </div>

                      {/* Navigation Controls */}
                      <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6">
                        <div className="text-sm text-gray-500">
                          Article {index + 1} of {highlightsData.length}
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            //@ts-ignore
                            onClick={() => swiperRef.current?.slidePrev()}
                            className=" group rounded-full bg-gray-100 p-3 transition-all duration-300 hover:bg-[#274321] hover:text-white"
                            aria-label="Previous article"
                          >
                            <ArrowLeft className="h-5 w-5" />
                          </button>
                          <button
                            //@ts-ignore
                            onClick={() => swiperRef.current?.slideNext()}
                            className="group rounded-full bg-gray-100 p-3 transition-all duration-300 hover:bg-[#274321] hover:text-white"
                            aria-label="Next article"
                          >
                            <ArrowRight className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -left-4 top-1/4 h-72 w-72 rounded-full bg-[#d7ffbf]/20 blur-3xl" />
      <div className="absolute -right-4 bottom-1/4 h-72 w-72 rounded-full bg-[#274321]/10 blur-3xl" />
    </motion.section>
  );
}
