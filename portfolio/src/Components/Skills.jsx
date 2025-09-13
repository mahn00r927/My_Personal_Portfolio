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
import { SiRedux, SiExpress, SiMongodb, SiTailwindcss, SiPostman } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="w-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          My <span className="text-indigo-600">Skills</span>
        </h2>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 text-left">
          {/* Frontend */}
          <div>
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
          </div>

          {/* Backend */}
          <div>
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
              <li className="flex items-center gap-2">Authentication (JWT, OAuth)</li>
            </ul>
          </div>

          {/* Database */}
          <div>
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
          </div>

          {/* Tools / Design */}
          <div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Tools & Design</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <FaGitAlt className="text-red-600" /> Git / GitHub
              </li>
              <li className="flex items-center gap-2">
                <FaFigma className="text-pink-500" /> Figma / Adobe XD
              </li>
              <li className="flex items-center gap-2">Responsive Design</li>
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
