import React, { useState } from "react";
import FoodNavbar from "./header";
import Footer from "./footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbx0g0UUcOwCCYGY7CjX8fDkb2lgWnHTGP0yqodyCBvuFPRUTSt6sw5FURK3w_8TpDMyTg/exec";

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("message", formData.message);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: form,
      });

      const text = await response.text();
      console.log("Response from Google Script:", text);

      if (response.ok) {
        alert("Booking submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      alert("There was an error submitting the form.");
      console.error("Submit Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <FoodNavbar />
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center pt-20 py-10"
        style={{ backgroundImage: "url('/wallpaper.jpeg')" }}
      >
        <div className="max-w-6xl w-full bg-white/5 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#9a3412] mb-6 text-center">Book Your Meal</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-black-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[#9a3412] bg-white/60 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[#9a3412] bg-white/60 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 12345 67890"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[#9a3412] bg-white/60 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black-700 mb-1">Meal Type</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[#9a3412] bg-white/60 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-4 bg-[#ea580c] text-white font-semibold rounded-md hover:bg-[#d9480f] transition duration-200 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Booking..." : "Book"}
              </button>
            </form>
          </div>
          <div className="hidden md:block">
            <img
              src="/contact.jpeg"
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
