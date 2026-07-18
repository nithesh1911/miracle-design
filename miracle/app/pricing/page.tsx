/* eslint-disable react/jsx-key */
import Link from "next/dist/client/link";
import Navbar from "../navbar";
import Footer from "../footer";

export default function Pricing() {
  const plans = [
    ["Basic", "₹499"],
    ["Premium", "₹999"],
    ["Business", "₹1999"],
  ];

  return (
    <div className="font-serif bg-[#0b1f3a]">
      <Navbar />
      <h1 className="text-4xl font-bold text-center  text-[#ffd54f] mt-10">
        Pricing Plans
      </h1>
      <div className="grid md:grid-cols-3 gap-5 p-10">
        {plans.map((plan) => (
          <div className="shadow p-8 rounded-xl text-center">
            <h2 className="text-2xl text-[#ffd54f] font-bold">{plan[0]}</h2>
            <h3 className="animate-bounce text-[#c62828] text-3xl mt-5 font-sans">
              {plan[1]}
            </h3>
            <Link
              href="/contact"
              className="bg-[#0b1f3a] text-white px-5 py-2 mt-5 inline-block rounded"
            >
              Order Now
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
