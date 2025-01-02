"use client";
import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [ismobile, setismobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setismobile(true);
      } else {
        setismobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return { ismobile };
};

export default useIsMobile;
