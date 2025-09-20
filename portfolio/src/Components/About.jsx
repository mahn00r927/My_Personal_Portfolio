import { Link } from "react-scroll";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="w-screen min-h-screen bg-white text-gray-900 flex flex-col items-center px-8 lg:px-20 py-20"
      id="about"
    >
      {/* Centered Content */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-indigo-600">Me</span>
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 leading-relaxed mb-6 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          I’m{" "}
          <span className="font-semibold text-indigo-600">
            Mahnoor Rajput
          </span>
          , a passionate <span className="font-semibold">Full Stack Developer </span>
          who loves crafting clean, modern, and user-friendly web
          applications. I focus on writing scalable code and building smooth
          user experiences that blend functionality with design.
        </motion.p>

        <motion.p
          className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          My journey in web development has equipped me with skills in
          <span className="text-indigo-600 font-medium">
            {" "}React, Node.js, MongoDB
          </span>{" "}
          and more. Beyond coding, I value creativity, problem-solving, and
          continuous learning to stay updated with modern trends.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            to="projects"
            smooth={true}
            duration={600}
            offset={-50}
            className="bg-[#f0593e] !text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 transition font-medium"
          >
            View Projects
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={600}
            offset={-50}
            className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-600 hover:!text-white transition font-medium"
          >
            My Skills
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
