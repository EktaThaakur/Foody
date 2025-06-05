// src/HomePage.jsx
import FoodNavbar from "./header";
// import Home from "../src/home1.jpg";
import burgerimg from "../src/burger.png";
import FoodCarousel from "./foodcrowsel";
import Footer from "./footer";
import RecipeCard from "./recipy";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar Section */}
      <FoodNavbar />
     
      {/* Hero Section */}
      <section
        className="hero text-center text-gray-800 px-6 sm:px-12 md:px-16 lg:px-20"
        style={{
          backgroundSize: "cover",
          backgroundColor: "rgb(228 229 233)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          minHeight: "500px",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 animate-unfold">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2d4356] leading-tight">
              Your Daily Dose of <span className="text-[#9a3412] italic font-serif">Delicious</span>
            </h1>

            <p className="mt-4 md:mt-6 text-[#2d4356] text-base sm:text-lg md:text-xl">
              Discover handcrafted meals made with love. Browse our menu and find your next favorite dish.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <FoodTag icon="🍕" text="Margarita Pizza" />
              <FoodTag icon="🥗" text="Grilled Caesar Salad" />
              <FoodTag icon="🍔" text="Burger Bliss Combo" />

            </div>

          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 animate-unfold">
              <img
                src={burgerimg}
                alt="Delicious taco"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
       <div className=" px-6 sm:px-12 md:px-16 lg:px-20">
        <FoodCarousel />
      </div>

      <RecipeCard />
      <Footer />


    </div>
  );
}





const FoodTag = ({ icon, text }: { icon: string; text: string }) => {
  return (
    <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
      <span className="text-xl">{icon}</span>
      <span className="text-[#2d4356]">{text}</span>
    </div>
  );
};
