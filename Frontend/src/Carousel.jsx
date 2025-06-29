import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Example banners
const banners = [
  {
    id: 1,
    image: '../images/image1.jpg', // Replace with your image path
    alt: 'Big Sale',
    text: 'Mega Summer Sale - Up to 70% Off',
  },
  {
    id: 2,
    image: '../images/download.png', // Replace with your image path
    alt: 'Electronics Offer',
    text: 'Latest Electronics - Limited Time Offers',
  },
  {
    id: 3,
    image: '../images/download1.png', // Replace with your image path
    alt: 'Fashion Discounts',
    text: 'Trendy Fashion - Flat 25% Off',
  },
];

const Carousel = () => (
  <div className="w-full max-w-screen-2xl mx-auto mb-6">
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="shadow-lg"
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <div className="relative">
            <img
              src={banner.image}
              alt={banner.alt}
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
                {banner.text}
              </h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default Carousel;
