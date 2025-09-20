import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold text-gray-800">
              Mahnoor Rajput
            </span>
          </a>

          {/* Desktop Links */}
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

          {/* Desktop "Let's Connect" Button */}
          <a
            href="#contact"
            className="hidden md:inline-block bg-[#f0593e] text-white px-5 py-2 rounded-md font-semibold shadow hover:bg-red-600 transition"
          >
            Let's Connect
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-indigo-600 transition duration-300"
            >
              {isOpen ? (
                <FaTimes size={24} color="red" />
              ) : (
                <FaBars size={24} color="black" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Dropdown */}
      <div className="md:hidden relative">
        <div
          className={`absolute top-full  ml-50 transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="w-3.5/4 bg-white flex right-0 flex-col space-y-5 py-6 px-6 font-medium text-gray-700 shadow-lg z-50">
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

            {/* Mobile "Let's Connect" button */}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-[#f0593e] text-white h-10 text-xs w-full px-5 py-2 rounded-md font-semibold shadow hover:bg-red-600 transition text-center"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
