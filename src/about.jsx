import FoodNavbar from "./header";
import Footer from "./footer";
import { motion } from "framer-motion";
import Banner from "./aboutsecond";

const teamMembers = [
  {
    id: "01",
    name: "Chef Antonio",
    role: "Master of Italian Cuisine",
    description:
      "With 20+ years of experience, Antonio brings authentic Italian flavors to life with every dish.",
    image: "/2.jpeg",
  },
  {
    id: "02",
    name: "Chef Maya",
    role: "Pastry Perfectionist",
    description:
      "Specializing in desserts, Maya’s pastries are both eye-catching and mouthwatering.",
    image: "/1.jpeg",
  },
  {
    id: "03",
    name: "Chef Rahul",
    role: "Fusion Food Specialist",
    description:
      "Rahul is known for bold and creative combinations that blend tradition with innovation.",
    image: "/3.jpeg",
  },
];

export default function AboutTeam() {
  return (
    <div>
      <FoodNavbar />
      <Banner />
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#9a3412] mb-4">
            Meet Our Culinary Dream Team
          </h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            The chefs behind <span className="font-semibold text-orange-600">TastyBites</span> are not just
            cooks — they’re artists, flavor architects, and passionate food lovers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40, rotateX: 30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: parseFloat("0." + member.id) }}
                viewport={{ once: true }}
                className="bg-gray-50 border border-gray-100 rounded-3xl p-6 shadow hover:shadow-lg transition-all"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full  object-cover rounded-2xl mb-4"
                />
                <div className="text-left">
                  <div className="text-sm text-gray-500 font-semibold mb-1">#{member.id}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {member.role}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{member.description}</p>
                  <span className="text-sm font-medium text-orange-600">{member.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      

      <Footer />
    </div>
  );
}

