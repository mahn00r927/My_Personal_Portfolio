import React from "react";
import {
  FaLaptopCode,
  FaServer,
  FaPaintBrush,
  FaMobileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const Services = () => {
  return (
    <section
      className="w-screen min-h-screen bg-gray-50 text-gray-900 flex items-center px-8 lg:px-20 py-20"
      id="services"
    >
      <div className="w-full text-center">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-indigo-600">Services</span>
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          I provide modern, scalable, and user-friendly web solutions that
          combine functionality with clean design.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaLaptopCode className="text-4xl text-indigo-600 mb-4 mx-auto" />,
              title: "Frontend Development",
              desc: "Building responsive and interactive UIs using React, Tailwind, and modern web tech.",
            },
            {
              icon: <FaServer className="text-4xl text-indigo-600 mb-4 mx-auto" />,
              title: "Backend Development",
              desc: "Creating secure, scalable server-side apps with Node.js and Express.",
            },
            {
              icon: <FaPaintBrush className="text-4xl text-indigo-600 mb-4 mx-auto" />,
              title: "UI/UX Design",
              desc: "Designing clean, user-focused layouts that ensure great experiences.",
            },
            {
              icon: <FaMobileAlt className="text-4xl text-indigo-600 mb-4 mx-auto" />,
              title: "Responsive Design",
              desc: "Making websites fully responsive and mobile-friendly across devices.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-105"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={i}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
