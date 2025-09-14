import pic from "../pic/pic.jpg";
import { Link } from "react-scroll";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const HeroBanner = () => {
  return (
    <section className="w-screen h-screen flex overflow-hidden" id="home">
      {/* Left Sidebar */}
      <div className="hidden lg:flex flex-col items-center justify-center w-12 hover:w-16 transition-all duration-300  text-white text-lg space-y-6">
        <a
        href="mailto:mahnoor.rajput11927@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600"
      >
        <FaEnvelope />
      </a>
        {/* Linkedin */}
        <a
          href="https://www.linkedin.com/in/mahnoor-rajput-muhammad-rasheed-89101a373/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-800 transition"
        >
          <FaLinkedinIn />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/mahnoor.rasheed.773?igsh=MXEweTJvNHF2N3hndA==/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-800 transition"
        >
          <FaInstagram />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/1MBZwSRpjo/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-800 transition"
        >
          <FaFacebookF />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/923173322610"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-800 transition"
        >
          <FaWhatsapp />
        </a>

        {/* Call */}
        <a
          href="tel:03173322610"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-800 transition"
        >
          <FiPhone />
        </a>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 bg-white text-gray-900 flex items-center px-8 lg:px-16 pl-20">
        <div className="w-full lg:flex lg:items-center lg:justify-between ml-10">
          {/* Intro Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-3">
              Hello, I’m
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Mahnoor <span className="text-indigo-600">Rajput</span>
            </h1>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              Full Stack Developer
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0">
              Crafting modern, scalable, and user-friendly web applications with
              clean design and smooth, engaging experiences.
            </p>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Link
                to="about"
                smooth={true}
                duration={600}
                offset={-50}
                className="bg-[#f0593e] !text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 transition font-medium"
              >
                About Me
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={600}
                offset={-50}
                className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-600 hover:!text-white transition font-medium"
              >
                My Work
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
            <img
              src={pic}
              alt="Mahnoor"
              className="w-100 h-90 md:w-64 md:h-80 object-cover rounded-[20%] shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
