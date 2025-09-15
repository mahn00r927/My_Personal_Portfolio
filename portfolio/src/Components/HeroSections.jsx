import pic from "../pic/pic.jpg";
import { Link } from "react-scroll";
import { FaLinkedinIn, FaWhatsapp, FaEnvelope, FaGithub } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <section className="w-screen h-screen flex overflow-hidden" id="home">
      {/* Left Sidebar */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden lg:flex flex-col items-center justify-center w-12 hover:w-16 transition-all duration-300 text-white text-lg space-y-6"
      >
        {/* Email */}
        <a
          href="mailto:mahnoor.rajput11927@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-800 transition"
        >
          <FaEnvelope />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mahnoor-rajput-muhammad-rasheed-89101a373/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-800 transition"
        >
          <FaLinkedinIn />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/mahn00r927/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-800 transition"
        >
          <FaGithub />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/923173322610"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-800 transition"
        >
          <FaWhatsapp />
        </a>

        {/* Phone */}
        <a
          href="tel:03173322610"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-800 transition"
        >
          <FiPhone />
        </a>
      </motion.div>

      {/* Right Content Area */}
      <div className="flex-1 bg-white text-gray-900 flex items-center px-8 lg:px-16 pl-20">
        <div className="w-full lg:flex lg:items-center lg:justify-between ml-10">
          {/* Intro Text */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-3">
              Hello, I’m
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Mahnoor <span className="text-indigo-600">Rajput</span>
            </h1>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              Full Stack Developer
            </h3>
            <p className="inline-block bg-green-100 text-indigo-700 px-4 py-2 mb-3 rounded-full font-medium shadow-sm animate-pulse">
              ✅ Currently available for opportunities
            </p>

            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0 mt-2">
              Crafting modern, scalable, and user-friendly web applications with
              clean design and smooth, engaging experiences.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <Link
                to="about"
                smooth={true}
                duration={600}
                offset={-50}
                className="bg-[#f0593e] !text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 transition font-medium cursor-pointer"
              >
                About Me
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={600}
                offset={-50}
                className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-600 hover:!text-white transition font-medium cursor-pointer"
              >
                My Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center"
          >
            <img
              src={pic}
              alt="Mahnoor"
              className="w-100 h-90 md:w-64 md:h-80 object-cover rounded-[20%] shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
