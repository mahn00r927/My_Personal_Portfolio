import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold text-gray-800">
              Mahnoor Rajput
            </span>
          </a>

          <div className="hidden md:flex space-x-10 font-medium text-gray-700">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative group transition duration-300 hover:text-indigo-600"
              >
                {link}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 rounded-full transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className={`hidden md:inline-block !bg-[#f0593e] !text-white px-5 py-2 rounded-md font-semibold shadow hover:!bg-red-600 transition ${
              isOpen ? "hidden" : ""
            }`}
          >
            Hire Me
          </a>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-indigo-600 transition duration-300"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden  shadow-lg transition-all duration-500 overflow-hidden ${
          isOpen
            ? "max-h-72 opacity-100 w-2/4 ml-auto"
            : "max-h-0 opacity-0 w-0"
        }`}
      >
        <div className="flex flex-col space-y-5 py-6 px-6 font-medium text-gray-700">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="transition duration-300 hover:text-indigo-600"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="!bg-[#f0593e] text-white px-5 py-2 rounded-md font-semibold shadow hover:bg-red-600 transition text-center"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
