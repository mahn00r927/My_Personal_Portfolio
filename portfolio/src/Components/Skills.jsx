import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaFigma,
} from "react-icons/fa";
import {
  SiRedux,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Skills = () => {
  return (
    <section id="skills" className="w-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-indigo-600">Skills</span>
        </motion.h2>

        {/* Skills Grid */}
        <motion.div
          className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {/* Frontend */}
          <motion.div
            variants={cardVariants}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">
              Frontend Development
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <FaHtml5 className="text-orange-600" /> HTML
              </li>
              <li className="flex items-center gap-2">
                <FaCss3Alt className="text-blue-600" /> CSS
              </li>
              <li className="flex items-center gap-2">
                <FaJs className="text-yellow-500" /> JavaScript
              </li>
              <li className="flex items-center gap-2">
                <FaReact className="text-sky-500" /> React.js
              </li>
              <li className="flex items-center gap-2">
                <SiRedux className="text-purple-600" /> Redux / Formik
              </li>
              <li className="flex items-center gap-2">
                <SiTailwindcss className="text-cyan-500" /> Tailwind CSS
              </li>
            </ul>
          </motion.div>

          {/* Backend */}
          <motion.div
            variants={cardVariants}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">
              Backend Development
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <FaNodeJs className="text-green-600" /> Node.js
              </li>
              <li className="flex items-center gap-2">
                <SiExpress className="text-gray-700" /> Express.js
              </li>
              <li className="flex items-center gap-2">
                <SiPostman className="text-orange-500" /> REST APIs / Postman
              </li>
              <li className="flex items-center gap-2">
                Authentication (JWT, OAuth)
              </li>
            </ul>
          </motion.div>

          {/* Database */}
          <motion.div
            variants={cardVariants}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">
              Database Management
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <SiMongodb className="text-green-700" /> MongoDB / Mongoose
              </li>
              <li className="flex items-center gap-2">
                <FaDatabase className="text-gray-600" /> SQL
              </li>
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div
            variants={cardVariants}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">
              Tools & Design
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <FaGitAlt className="text-red-600" /> Git / GitHub
              </li>
              <li className="flex items-center gap-2">
                <FaFigma className="text-pink-500" /> Figma / Adobe XD
              </li>
              <li className="flex items-center gap-2">Responsive Design</li>
            </ul>
          </motion.div>
          {/* AI & Machine Learning */}
          <motion.div
            variants={cardVariants}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">
              AI & Machine Learning
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                🧠 Python 
              </li>
              <li className="flex items-center gap-2">
                🤖 Scikit-learn / Decision Trees
              </li>
              <li className="flex items-center gap-2">
                🔬 Data Preprocessing & Feature Engineering
              </li>
              <li className="flex items-center gap-2">
                📊 Model Training & Evaluation
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
