import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";
import "swiper/css";
import "swiper/css/navigation";

export default function NewArrivals() {
    const products = [
      {
        id: 1,
        title: "Nail Polish Set",
        price: 19.99,
        image:
          "https://i.pinimg.com/236x/e2/ef/cc/e2efcc39bd6927fb3cff39f387dca96e.jpg",
      },

      {
        id: 2,
        title: "Luxury Lipstick Set",
        price: 49.99,
        image:
          "https://i.pinimg.com/236x/3b/fb/2c/3bfb2c5f1cd17043d569bc24eeb193cb.jpg",
      },
      {
        id: 3,
        title: "Anti-Aging Serum",
        price: 59.99,
        image:
          "https://i.pinimg.com/236x/48/ec/7b/48ec7b47cb59a44eede48b2eb0abb28b.jpg",
      },
      {
        id: 4,
        title: "Silk Hair Oil",
        price: 29.99,
        image:
          "https://i.pinimg.com/236x/ca/ed/6c/caed6c73294fde4953be0b3479dbfc2a.jpg",
      },
      {
        id: 5,
        title: "Organic Face Cream",
        price: 39.99,
        image:
          "https://i.pinimg.com/236x/6e/79/9a/6e799a5e0fe3fd05c2c93654414a992e.jpg",
      },

      {
        id: 6,
        title: "Glow Highlighter",
        price: 24.99,
        image:
          "https://i.pinimg.com/236x/96/82/5c/96825c788678b49a2ca2e7b2684d6bac.jpg",
      },
      {
        id: 7,
        title: "Facial Mask Pack",
        price: 14.99,
        image:
          "https://i.pinimg.com/236x/1e/0f/28/1e0f28630b5ed22fcbb29abd944e73a7.jpg",
      },
    ];

  return (
    <section className="py-16 bg-[#ffe2c7]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-2xl font-bold mb-10 text-center text-gray-800">
          Trending Products
        </h2>
        <Swiper
          modules={[Navigation]}
          navigation
          loop={true} // Enables continuous looping
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="py-4"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
