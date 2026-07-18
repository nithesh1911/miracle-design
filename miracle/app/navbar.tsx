/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import { RiMenuSearchLine } from "react-icons/ri";

export default function Footer() {
  const [accordion, setAccordion] = useState(true);

  const openAccordion = () => {
    setAccordion(!accordion);
  };
  return (
    <footer className="flex justify-between font-serif items-center p-5 bg-[#0f3d2e] shadow">
      <Link
        href="/"
        className="flex items-center text-2xl font-bold text-[#ffd54f]"
      >
        <img
          src="/miracle logo gold.png"
          alt="MIRACLE DESIGN"
          className="lg:h-30 lg:w-30 sm:w-10 sm:h-10 md:w-20 md:h-20 w-10 h-10 "
        />
        <h2>MIRACLE DESIGN</h2>
      </Link>
      <RiMenuSearchLine
        className="fill-[#ffd54f] h-10 w-10"
        onClick={openAccordion}
      />
      {!accordion && (
        <div className="absolute top-30 right-7">
          <div className="flex flex-col gap-2 text-[#ffd54f] font-semibold bg-red-700 shadow-xl rounded-xl px-5 py-5">
            <Link href="./service">Services</Link>
            <Link href="./portfolio">Portfolio</Link>
            <Link href="./pricing">Pricing</Link>
            <Link href="./contact">Contact</Link>
          </div>
        </div>
      )}
    </footer>
  );
}
