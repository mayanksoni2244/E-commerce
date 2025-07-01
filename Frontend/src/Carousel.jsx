import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Example banners
const banners = [
  {
    id: 1,
    image: "../images/image1.jpg",
    alt: "Big Sale",
    text: "Mega Summer Sale - Up to 70% Off",
  },
  {
    id: 2,
    image: "../images/download.png",
    alt: "Electronics Offer",
    text: "Latest Electronics - Limited Time Offers",
  },
  {
    id: 3,
    image: "../images/download1.png",
    alt: "Fashion Discounts",
    text: "Trendy Fashion - Flat 25% Off",
  },
];

const Carousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full max-w-screen-2xl mx-auto mb-6 relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-xl overflow-hidden"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative group">
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 flex items-center justify-center pl-8">
                <h2 className="text-white text-2xl md:text-4xl font-extrabold max-w-full   leading-tight drop-shadow-lg">
                  {banner.text}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom navigation buttons */}
        <button
          ref={prevRef}
          className="absolute z-10 top-1/2 -translate-y-1/2 left-4 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-colors"
        >
          <FiChevronLeft className="text-2xl" />
        </button>
        <button
          ref={nextRef}
          className="absolute z-10 top-1/2 -translate-y-1/2 right-4 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-colors"
        >
          <FiChevronRight className="text-2xl" />
        </button>
      </Swiper>

      {/* Custom pagination */}
      <div className="custom-pagination flex justify-center mt-4 space-x-2"></div>
    </div>
  );
};

export default Carousel;
