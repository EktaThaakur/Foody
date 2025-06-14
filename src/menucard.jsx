// CoverflowMenu.jsx
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFlip } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-flip";

const cards = [
  { id: 1, title: "Pizza", image: "/pizza.jpeg" },
  { id: 2, title: "Burger", image: "/burger.jpeg" },
  { id: 3, title: "Pasta", image: "/pasta.jpeg" },
  { id: 4, title: "Sushi", image: "/sushi.jpeg" },
  { id: 5, title: "Tacos", image: "/tacos.jpeg" },
  { id: 6, title: "Fries", image: "/fries.jpeg" },
  { id: 7, title: "Salad", image: "/salad.jpeg" },
];


const CoverflowMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="px-4 sm:px-6 md:px-12 lg:px-20 py-8"
    >
      <h2 className="text-center mb-8 text-[#9a3412] font-bold text-3xl sm:text-4xl lg:text-5xl">
        Our Menu
      </h2>

      <Swiper
        modules={[Navigation, Autoplay, EffectFlip]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        centeredSlides={true}
        slidesPerView={1.1}
        spaceBetween={15}
        breakpoints={{
          480: { slidesPerView: 1.5, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 30 },
          768: { slidesPerView: 2.5, spaceBetween: 35 },
          1024: { slidesPerView: 3.25, spaceBetween: 40 },
          1280: { slidesPerView: 3.75, spaceBetween: 45 },
        }}
        
        onSlideChange={(swiper) => {
          const activeSlide = swiper.activeIndex;
          swiper.slides.forEach((slide, i) => {
            slide.style.transform = i === activeSlide ? "translateY(-10px)" : "translateY(0)";
          });
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div
              className="h-[200px] sm:h-[240px] md:h-[260px] lg:h-[280px] rounded-2xl shadow-lg bg-cover bg-center text-white flex items-end justify-center text-xl sm:text-2xl font-bold pb-5 transition-transform duration-300"
              style={{ backgroundImage: `url(${card.image})` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div className="bg-black bg-opacity-40 px-4 py-1 rounded-md">{card.title}</div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="swiper-button-next" style={{ color: "#9a3412", right: 10 }}></div>
        <div className="swiper-button-prev" style={{ color: "#9a3412", left: 10 }}></div>
      </Swiper>
    </motion.div>
  );
};

export default CoverflowMenu;
