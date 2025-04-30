"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if we're on the client side
  const isBrowser = useCallback(() => typeof window !== "undefined", []);

  const handleScroll = useCallback(() => {
    if (!isBrowser()) return;
    const scrollY = window.scrollY;
    const threshold = 400;
    setIsVisible(scrollY > threshold);
  }, [isBrowser]);

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (!isBrowser()) return;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isBrowser, handleScroll]);

  return (
    <Button
      className={`fixed right-5 bottom-5 z-50 p-3 rounded-full opacity-0 transition-all duration-300 bg-primary hover:bg-primary/90 ${
        isVisible ? "opacity-100 translate-y-0" : "translate-y-10"
      }`}
      onClick={scrollToTop}
      size="icon"
      aria-label="Scroll to top"
    >
      <Image
        src="/images/top-arrow.svg"
        alt="Scroll to top"
        width={16}
        height={16}
        className="w-4 h-4"
      />
    </Button>
  );
};

export default ScrollToTop;
