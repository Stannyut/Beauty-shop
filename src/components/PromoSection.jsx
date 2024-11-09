import React from "react";

export default function PromoSection() {
  const promos = [
    {
      discount: "25% Discount",
      title: "Cosmetic Skin Perfectly",
      buttonText: "Shop Now",
      image:
        "https://i.pinimg.com/564x/6e/17/6d/6e176dda1df657ac1801a5449b27861d.jpg", // replace with actual image URL
    },
    {
      discount: "30% Discount",
      title: "Hydrated Skin Perfectly",
      buttonText: "Shop Now",
      image:
        "https://i.pinimg.com/564x/66/5b/1d/665b1d3b202669f5d7cf611892492e52.jpg", // replace with actual image URL
    },
  ];

  return (
    <section className="py-16 bg-[#ffe2c7]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promos.map((promo, index) => (
            <div
              key={index}
              className="bg-[#f9f4f0] rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center"
            >
              {/* Promo Text */}
              <div className="md:w-1/2 text-center md:text-left">
                <p className="text-gray-600 text-sm mb-2">{promo.discount}</p>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {promo.title}
                </h3>
                <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-200">
                  {promo.buttonText}
                </button>
              </div>
              {/* Promo Image */}
              <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center md:justify-end">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-32 h-32 md:w-48 md:h-48 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
