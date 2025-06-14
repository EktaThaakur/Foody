import React from "react";
import FoodNavbar from "./header";
import Footer from "./footer";

export default function ContactUs() {
  return (
    <div>
      <FoodNavbar />

      {/* Section with background image */}
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center pt-20 py-10"
        style={{ backgroundImage: "url('/wallpaper.jpeg')" }} // ✅ Replace with your image path
      >
        <div className="max-w-6xl w-full bg-white/5 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          
          {/* Form Section */}
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#9a3412] mb-6 text-center">Book Your Meal</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-black-700 mb-1" >Name</label>
                <input
                  type="text"
                  placeholder="Your Name" name="name"
                  className="w-full px-4 py-2 border border-[#9a3412] bg-white/60 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black-700 mb-1">Email</label>
                <input
                  type="email" name="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-[#9a3412] bg-white/60 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black-700 mb-1">Phone Number</label>
                <input
                  type="tel" name="phone"
                  placeholder="+91 12345 67890"
                  className="w-full px-4 py-2 border border-[#9a3412] bg-white/60 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black-700 mb-1">Meal Type</label>
                <textarea
                  rows="4"
                  placeholder="Your message" name="message"
                  className="w-full px-4 py-2 border border-[#9a3412] bg-white/60 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#ea580c] text-white font-semibold rounded-md hover:bg-[#d9480f] transition duration-200"
              >
                Book
              </button>
            </form>
          </div>

          {/* Right Side Image */}
          <div className="hidden md:block">
            <img
              src="/contact.jpeg" // ✅ Replace with actual path
              alt="Contact Visual"
              className="w-full h-full p-10 object-cover"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
