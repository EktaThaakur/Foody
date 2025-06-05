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
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h2 className="text-center mb-8 text-[#9a3412] font-bold text-4xl">
        Our Menu
      </h2>

      <Swiper
        modules={[Navigation, Autoplay, EffectFlip]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        centeredSlides={true}
        slidesPerView={1.5}
        spaceBetween={40}
        breakpoints={{
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 2.75 },
          1080: { slidesPerView: 3.25 },
          1280: { slidesPerView: 3.75 },
        }}
        style={{ paddingBottom: 40 }}
        onSlideChange={(swiper) => {
          const activeSlide = swiper.activeIndex;
          const slides = swiper.slides;
          for (let i = 0; i < slides.length; i++) {
            const slide = slides[i];
            if (i === activeSlide) {
              slide.style.transform = "translateY(-10px)";
            } else {
              slide.style.transform = "translateY(0)";
            }
          }
        }}
      >
        {cards.map((card) => (
          <SwiperSlide
            key={card.id}
            style={{
              height: 280,
              backgroundColor: "white",
              borderRadius: 24,
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: "bold",
              color: "white",
              transition: "transform 0.3s",
              userSelect: "none",
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {card.title}
          </SwiperSlide>
        ))}
        <div className="swiper-button-next" style={{ color: "white" }}></div>
        <div className="swiper-button-prev" style={{ color: "white" }}></div>
      </Swiper>
    </motion.div>
  );
};

export default CoverflowMenu;
