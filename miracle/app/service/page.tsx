/* eslint-disable react/jsx-key */

import Navbar from "../navbar";

export default function Services() {
  const services = [
    "Restaurant Menu Design",
    "Cafe Menu Design",
    "Tri Fold Menu",
    "Digital WhatsApp Menu",
    "Printing Support",
    "Logo Design",
  ];

  return (
    <div className="font-serif">
      <Navbar />

      <h1 className="text-4xl font-bold text-center mt-10">Our Services</h1>

      <div className="grid md:grid-cols-3 gap-5 p-10">
        {services.map((item) => (
          <div className="bg-white shadow p-6 rounded-xl">
            <h2 className="text-xl font-bold text-black">{item}</h2>

            <p className="mt-3 text-gray-600">
              Creative and professional designs
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
