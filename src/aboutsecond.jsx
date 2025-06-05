import React from "react";
import { motion } from "framer-motion";

const cols = 4;
const rows = 2;
const tiles = Array.from({ length: cols * rows });

const Banner = () => {
  return (
    <div className="w-full h-[500px] relative overflow-hidden">
      {/* Animated Tiles (Full Background) */}
      {tiles.map((_, i) => {
        const row = Math.floor(i / cols);
        const col = i % cols;
        const delay = (row + col) * 0.2;

        const tileWidth = 100 / cols;
        const tileHeight = 100 / rows;

        return (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 500 - 250,
              y: Math.random() * 500 - 250,
              opacity: 0,
              scale: 1.5,
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1.2, delay }}
            className="absolute overflow-hidden"
            style={{
              width: `${tileWidth}%`,
              height: `${tileHeight}%`,
              top: `${row * tileHeight}%`,
              left: `${col * tileWidth}%`,
              backgroundImage: "url('/aboutbanner.jpeg')",
              backgroundSize: `${cols * 100}% ${rows * 100}%`,
              backgroundPosition: `${(col / (cols - 1)) * 100}% ${(row / (rows - 1)) * 100}%`,
              backgroundRepeat: "no-repeat",
            }}
          />
        );
      })}

      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-10">
        <div className="text-[#f97316] text-center drop-shadow-lg">
          <h1 className="text-5xl font-bold mb-4">Breaking Boundaries, Building Futures</h1>
          <p className="text-lg mb-6">Innovative Solutions Through Seamless Integration</p>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;

