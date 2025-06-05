import React from "react";
import { motion } from "framer-motion";

const recipes = [
    {
        name: "Pastry",
        description:
            "Rasgulla is a syrupy dessert made from ball-shaped dumplings of chhena and semolina dough, cooked in light syrup made of sugar.",
        image: "/rosgulla.jpeg",
    },
    {
        name: "Laddu",
        description:
            "Rasmalai is a dessert consisting of white cream, sugar, milk, and cardamom-flavored paneer cheese known as chenna.",
        image: "/rasmaliai.jpeg",
    },
    {
        name: "Cake",
        description:
            "Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked and comes in many flavors.",
        image: "/cake.jpeg",
    },
];

const CardGrid = () => {
    return (
        <div className="flex flex-wrap -mx-4 px-10 py-10">
            {recipes.map((recipe, index) => (
                <motion.div
                    key={index}
                    className="w-full md:w-1/3 px-4 mb-8 md:mb-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }} // animate once when 30% is visible
                >
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
                        <motion.img
                            src={recipe.image}
                            alt={recipe.name}
                            className="w-full h-48 object-cover"
                            initial={{ rotateY: 0 }}
                            whileHover={{ rotateY: 180 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold text-orange-600 mb-2">
                                {recipe.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                {recipe.description.length > 200
                                    ? recipe.description.slice(0, 100) + "..."
                                    : recipe.description}
                            </p>
                            {/* <a
                                href="#"
                                className="inline-block text-sm font-medium text-white bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 transition"
                            >
                                Read More
                            </a> */}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default CardGrid;
