"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Assets
import logo from "../../../public/assets/logo.svg";

// Constants
import { navItems } from "../constants/constants";

// Components
import CustomButton from "./CustomButton";
import { scrollToTop } from "@/utils";

export default function Navbar() {
  const lastIndex = navItems.length - 1;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between items-center py-4 z-10 pr-shorter2 sticky top-0 ${
        scrolled ? "bg-black/90 transition-bg duration-500 ease-in-out" : ""
      }`}
    >
      <a href="#" onClick={scrollToTop}>
        <Image src={logo} width={200} height={200} alt="Nodewave logo" />
      </a>
      <ul className="flex items-center gap-5">
        {navItems?.map((item, index) => {
          return index === lastIndex ? (
            <CustomButton
              label={item?.label}
              className="font-medium text-lg"
              onClick={scrollToTop}
            />
          ) : (
            <a
              href="#"
              onClick={scrollToTop}
              className="font-medium text-lg"
              key={item?.id}
            >
              {item?.label}
            </a>
          );
        })}
      </ul>
    </nav>
  );
}
