/* eslint-disable react/jsx-key */
import Navbar from "../navbar";

export default function Portfolio() {
  const images = [
    "Restaurant Menu",
    "Fast Food Menu",
    "Cafe Menu",
    "Bakery Menu",
  ];

  return (
    <div className="font-serif">
      <Navbar />

      <h1 className="text-4xl font-bold text-center mt-10 text-white">
        Our Portfolio
      </h1>

      <p className="text-center mt-5 text-white">
        Check out our previous work and designs
      </p>

      <div className="grid md:grid-cols-4 gap-5 p-10">
        {images.map((item) => (
          <div className="bg-white text-black p-10 rounded-xl text-center">
            <h2 className="font-bold">{item}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
