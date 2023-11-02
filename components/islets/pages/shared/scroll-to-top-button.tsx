"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  return (
    <button
      className={cn(
        `fixed bottom-2 right-2 z-50 rounded-full bg-foreground/20 p-2 outline-none transition-opacity duration-200 hover:bg-foreground/10 2xl:bottom-12 2xl:right-12`,
        {
          "opacity-100": isVisible,
          "opacity-0": !isVisible,
        },
      )}
      onClick={scrollToTop}
    >
      <ArrowUpIcon />
    </button>
  );
}
