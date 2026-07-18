/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between font-serif items-center p-5 bg-[#0f3d2e] shadow">
      <Link
        href="/"
        className="flex items-center text-2xl font-bold text-[#ffd54f]"
      >
        <img
          src="/miracle logo gold.png"
          alt="Miracle Designs"
          className="h-30 w-30"
        />
        Miracle Designs
      </Link>

      <div className="flex flex-col gap-3 items-center text-[#ffd54f] font-extrabold">
        <Link
          href="/service"
          className="hover:text-red-500 lg:text-xl md:text-base sm:text-sm"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="hover:text-red-500 lg:text-xl md:text-base sm:text-sm"
        >
          Contact
        </Link>
      </div>
    </footer>
  );
}
