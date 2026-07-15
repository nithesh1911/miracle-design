import Link from "next/dist/client/link";
import Navbar from "../navbar";
import { FaWhatsapp } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="font-serif">
      <Navbar />
      <div className="p-10 text-center flex flex-col gap-5 items-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>

        <p className="mt-5 font-sans">WhatsApp: +91 7845755721</p>

        <Link
          href="https://wa.me/917845755721"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 flex gap-2 items-center text-white px-8 py-3 rounded w-50"
        >
          <FaWhatsapp className="fill-white" />
          Chat WhatsApp
        </Link>
      </div>
    </div>
  );
}
