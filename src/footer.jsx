import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-200 pt-12 pb-6 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & Tagline */}
        <div>
          <h2 className="text-3xl font-bold text-orange-500 mb-3">Foodie's Hub</h2>
          <p className="text-sm text-gray-400 text-justify">
            Food is more than just fuel — it’s an experience. From the first sip of hot chai to the sweetness of a soft rasgulla, every bite tells a story. Whether it's street snacks or homemade delights, the flavors we crave connect us to comfort, culture, and cherished memories.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition duration-300">Home</a></li>
            <li><a href="/about" className="hover:text-white transition duration-300">About Us</a></li>
            <li><a href="/menu" className="hover:text-white transition duration-300">Menu</a></li>
            <li><a href="/contact" className="hover:text-white transition duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-400">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-orange-400" />
              <a href="mailto:info@foodieapp.com" className="hover:text-white transition">info@foodieapp.com</a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-orange-400" />
              <a href="tel:+1234567890" className="hover:text-white transition">+1 234 567 890</a>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-orange-400" />
              New Delhi, India
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-400">Follow Us</h3>
          <div className="flex gap-4">
            <a href="facebook.com" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition shadow-md">
              <FaFacebookF />
            </a>
            <a href="twiter.com" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition shadow-md">
              <FaTwitter />
            </a>
            <a href="instagram.com" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition shadow-md">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Foodie's Hub. Crafted with 🍴 & ❤️.
      </div>
    </footer>
  );
};

export default Footer;
