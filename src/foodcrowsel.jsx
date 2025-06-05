import React, { useRef, useEffect } from "react";

const foodItems = [
    { name: "Rosgulla", image: "/rosgulla.jpeg" },
    { name: "Rasmalai", image: "/rasmaliai.jpeg" },
    { name: "Cake", image: "/cake.jpeg" },
    { name: "Tea", image: "/chai.jpeg" },
    { name: "Rasmalai", image: "/rasmaliai.jpeg" },
    { name: "Cake", image: "/cake.jpeg" },
    { name: "Tea", image: "/chai.jpeg" },
    { name: "Tea", image: "/chai.jpeg" },
    { name: "Rasmalai", image: "/rasmaliai.jpeg" },
    { name: "Rasmalai", image: "/rasmaliai.jpeg" },
    { name: "Cake", image: "/cake.jpeg" },
    { name: "Tea", image: "/chai.jpeg" },
    { name: "Tea", image: "/chai.jpeg" },
    { name: "Rasmalai", image: "/rasmaliai.jpeg" },
];

const FoodCarousel = () => {
    const carouselRef = useRef(null);

    useEffect(() => {
        const ref = carouselRef.current;

        if (!ref) return; // early return if the ref isn't attached

        const interval = setInterval(() => {
            ref.scrollBy({ left: 20, behavior: "smooth" });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleScroll = (event) => {
        const ref = carouselRef.current;
        if (!ref) return; // early return if the ref isn't attached
        if (event.target.dataset.type === "next") {
            ref.scrollBy({ left: 400, behavior: "smooth" });
        } else if (event.target.dataset.type === "prev") {
            ref.scrollBy({ left: -400, behavior: "smooth" });
        }
    };

    return (
        <div className="w-full overflow-x-auto whitespace-nowrap py-6 px-4">
            {/* <h2 className="text-center text-4xl font-bold text-[#9a3412] mb-4">
                Pick Your Craving!
            </h2> */}
              <h2 className="text-4xl text-center md:text-5xl font-bold text-[#9a3412] mb-6 pb-4">
            Pick Your Craving!
          </h2>

            <div
                className="flex gap-8 snap-x snap-mandatory overflow-x-scroll scrollbar-hide"
                style={{ scrollBehavior: "smooth" }}
                ref={carouselRef}
            >
                {foodItems.map((item, index) => (
                    <div key={index} className="flex-shrink-0 snap-center text-center">
                        <div className="rounded-full overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-24 w-24 object-cover"
                            />
                        </div>
                        <p className="mt-2 text-gray-700 font-medium">{item.name}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-6 gap-4">
                <button
                    onClick={handleScroll}
                    data-type="prev"
                    className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold px-4 py-2 rounded-full shadow-md transition-all duration-300"
                    aria-label="Scroll Left"
                >
                    &#8592;
                </button>
                <button
                    onClick={handleScroll}
                    data-type="next"
                    className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold px-4 py-2 rounded-full shadow-md transition-all duration-300"
                    aria-label="Scroll Right"
                >
                    &#8594;
                </button>
            </div>

        </div>
    );
};

export default FoodCarousel;

