import { motion } from "framer-motion";
import image from '../pic/image.png'
import tailoring from '../pic/tailor2.png'
import quiz from '../pic/quiz.png'
import tictactoe from '../pic/tictactoe.png'
const projects = [
  {
    title: "PharmaCart (MERN)",
    desc: "An online medical store built with React, Node.js, Express, and MongoDB.",
    image: image,
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "#",
  },
  {
    title: "Dream Tailors & Fabrics",
    desc: "A responsive e-commerce platform for custom clothing and fabrics.",
    image: tailoring,
    tech: ["React", "Tailwind", "Node.js"],
    link: "#",
  },
  {
    title: "Online Quiz Application",
    desc: "A responsive web application for creating and attempting quizzes.",
    image: quiz,
    tech: ["React", "HTML", "CSS" , "JavaScript"],
    link: "#",
  },
   {
    title: "Tic Tac Toe Game",
    desc: "A simple JavaScript-based Tic Tac Toe game with winner detection.",
    image: tictactoe, 
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#", 
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">
            My <span className="text-indigo-600">Projects</span>
          </h2>
          <p className="text-slate-600 mt-3">
            A showcase of my recent work and the technologies I'm passionate
            about.
          </p>
        </motion.div>

        {/* Project Cards */}
       <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-tr from-white to-indigo-50 border border-slate-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 group"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-indigo-700 transition">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">{project.desc}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-indigo-600 hover:text-indigo-800 font-medium transition"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
