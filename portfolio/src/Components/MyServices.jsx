import React from "react";
import { FaLaptopCode, FaServer, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

const Services = () => {
  return (
    <section className="w-screen min-h-screen bg-gray-50 text-gray-900 flex items-center px-8 lg:px-20 py-20">
      <div className="w-full text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          My <span className="text-indigo-600">Services</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          I provide modern, scalable, and user-friendly web solutions that
          combine functionality with clean design.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
            <FaLaptopCode className="text-4xl text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
            <p className="text-gray-600">
              Building responsive and interactive UIs using React, Tailwind, and modern web tech.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
            <FaServer className="text-4xl text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
            <p className="text-gray-600">
              Creating secure, scalable server-side apps with Node.js and Express.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
            <FaPaintBrush className="text-4xl text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
            <p className="text-gray-600">
              Designing clean, user-focused layouts that ensure great experiences.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
            <FaMobileAlt className="text-4xl text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
            <p className="text-gray-600">
              Making websites fully responsive and mobile-friendly across devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
