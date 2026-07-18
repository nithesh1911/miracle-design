import Link from "next/dist/client/link";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="font-serif">
      <Navbar />

      <section className="bg-[#0b1f3a] h-screen text-[#d4af37] text-center py-24">
        <h1 className="text-5xl font-bold">Professional Menu Card Design</h1>

        <p className="mt-5 text-xl text-[#d4af37]">
          Restaurant | Cafe | Bakery | Fast Food
        </p>

        <Link
          href="./contact"
          className="animate-bounce bg-[#0f3d2e] px-8 py-3 inline-block rounded-full mt-8 hover:bg-red-700 hover:text-white shadow-2xl"
        >
          Order Menu Design
        </Link>
      </section>
      <Footer />
    </div>
  );
}
