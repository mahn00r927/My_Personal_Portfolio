import pic from "../pic/pic.jpg";
import { Link } from "react-scroll";
const About = () => {
  return (
    <section
      className="w-screen min-h-screen bg-white text-gray-900 flex items-center px-8 lg:px-20 py-20"
      id="about"
    >
      <div className="w-full lg:flex lg:items-center lg:gap-16">
        {/* Left Image */}
        <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0">
          <img
            src={pic}
            alt="About Mahnoor"
            className="w-56 h-72 md:w-64 md:h-80 object-cover rounded-[40%] shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-indigo-600">Me</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
            I’m{" "}
            <span className="font-semibold text-indigo-600">
              Mahnoor Rajput
            </span>
            , a passionate{" "}
            <span className="font-semibold">Full Stack Developer</span>
            who loves crafting clean, modern, and user-friendly web
            applications. I focus on writing scalable code and building smooth
            user experiences that blend functionality with design.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            My journey in web development has equipped me with skills in
            <span className="text-indigo-600 font-medium">
              {" "}
              React, Node.js, MongoDB
            </span>
            and more. Beyond coding, I value creativity, problem-solving, and
            continuous learning to stay updated with modern trends.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <Link
              to="projects"
              smooth={true}
              duration={600} // scroll speed in ms
              offset={-50} // thora adjust krny k liye
             className="bg-[#f0593e] !text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 transition font-medium"
            >
               View Projects
            </Link>

            <Link
              to="skills"
              smooth={true}
              duration={600} // scroll speed in ms
              offset={-50} // thora adjust krny k liye
            className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-600 hover:!text-white transition font-medium"
            >
              My Skills
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
