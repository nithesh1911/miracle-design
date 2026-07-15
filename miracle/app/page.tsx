import Link from "next/dist/client/link";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="font-serif">
      <Navbar />

      <section className="bg-black h-screen text-white text-center py-24 mt-50">
        <h1 className="text-5xl font-bold">Professional Menu Card Design</h1>

        <p className="mt-5 text-xl">Restaurant | Cafe | Bakery | Fast Food</p>

        <Link
          href="./contact"
          className="bg-red-600 px-8 py-3 inline-block rounded mt-8 hover:bg-red-700"
        >
          Order Menu Design
        </Link>
      </section>
      <Footer />
    </div>
  );
}
