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
    <footer className="flex justify-between font-serif items-center p-5 bg-white shadow">
      <Link
        href="/"
        className="flex items-center text-2xl font-bold text-black"
      >
        <img
          src="/MIRACLE DESIGN.png"
          alt="Miracle Designs"
          className="lg:h-30 lg:w-30 sm:w-10 sm:h-10 md:w-20 md:h-20 w-10 h-10 "
        />
        <h2>Miracle Designs</h2>
      </Link>
      <RiMenuSearchLine
        className="fill-black h-10 w-10"
        onClick={openAccordion}
      />
      {!accordion && (
        <div className="absolute top-30 right-7">
          <div className="flex flex-col gap-2 text-white font-semibold bg-red-600 shadow-xl rounded-xl px-5 py-5">
            <Link href="/service">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      )}
    </footer>
  );
}
