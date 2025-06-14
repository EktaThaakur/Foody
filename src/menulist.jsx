import React, { useState } from "react";

const AccordionItem = ({ title, items, index, activeIndex, setActiveIndex }) => {
  const isOpen = index === activeIndex;

  return (
    <div className="border-b border-[#ea580c]">
      <button
        onClick={() => setActiveIndex(isOpen ? null : index)}
        className={`w-full text-left py-4 px-5 font-semibold text-lg flex justify-between items-center 
          ${isOpen ? "bg-[#ea580c] text-white" : "bg-white text-[#9a3412] hover:bg-[#ffedd5]"}`}
      >
        {title}
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="bg-[#ffedd5] px-5 py-3 text-[#9a3412]">
          <ul className="list-disc ml-6">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const AccordionComponentMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const menuItems = [
    {
      title: "Starters",
      items: ["Garlic Bread", "Paneer Tikka", "Chicken Wings"]
    },
    {
      title: "Main Course",
      items: ["Butter Chicken", "Veg Biryani", "Palak Paneer"]
    },
    {
      title: "Beverages",
      items: ["Lassi", "Mango Shake", "Cold Coffee"]
    },
    {
      title: "Desserts",
      items: ["Gulab Jamun", "Rasmalai", "Ice Cream Sundae"]
    },
    {
      title: "Snacks",
      items: ["Samosa", "Pakora", "Spring Rolls"]
    }
  ];

  return (
    <div className=" mx-auto mt-10 shadow-lg rounded-md overflow-hidden border border-[#ea580c] ">
      {menuItems.map((menu, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={menu.title}
          items={menu.items}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  );
};

export default AccordionComponentMenu;
