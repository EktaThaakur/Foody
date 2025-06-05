import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

// import { header } from "framer-motion/client";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];


export default function FoodNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-orange-100 shadow-md fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#9a3412]">🍔 Foodie's Hub</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-orange-800 font-semibold">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: "#f97316" }}
              className="cursor-pointer transition-all"
            >
              <Link to={item.path}>{item.name}</Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-orange-600 cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.ul
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          exit={{ y: -200 }}
          transition={{ duration: 0.4 }}
          className="md:hidden flex flex-col items-center bg-orange-50 text-orange-800 gap-6 py-6"
        >
          {navItems.map((item, index) => (
            <li key={index} className="text-lg font-medium hover:text-orange-600 cursor-pointer">
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}
// export default FoodNavbar;
