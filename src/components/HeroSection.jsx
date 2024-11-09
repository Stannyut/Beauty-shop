import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSection() {
  const images = [
    "https://i.pinimg.com/564x/0d/56/4b/0d564bf27b0dbaac35619c2e5061ec63.jpg",
    "https://i.pinimg.com/736x/2a/00/50/2a0050c67d0b0842ff28c124216e7ec2.jpg",
    "https://i.pinimg.com/564x/0f/37/6f/0f376f1bb0a88034ab1a262d3719057d.jpg",
  ];

  return (
    <div className="pt-16">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-[500px] w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="bg-pink-500 bg-opacity-30 h-full flex items-center justify-center">
                <div className="text-center text-white p-4 md:p-8">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Enhance Your Beauty
                  </h2>
                  <p className="text-lg md:text-xl mb-6">
                    Discover the best in beauty and skincare.
                  </p>
                  <button className="bg-white text-pink-600 px-6 py-2 rounded-full hover:bg-gray-100 transition duration-150">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
