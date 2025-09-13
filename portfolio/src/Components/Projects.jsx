import { motion } from "framer-motion";
import { ShoppingCart, Code, Scissors } from "lucide-react"; // Replace Fabric with Scissors

export default function Projects() {
  const projects = [
    {
      title: "PharmaCart (MERN)",
      desc: "An online medical store built with React, Node.js, Express, and MongoDB.",
      icon: <ShoppingCart className="w-8 h-8 text-indigo-600" />,
      link: "#",
    },
    {
      title: "Portfolio Website",
      desc: "A personal portfolio built using React, Tailwind CSS, and Framer Motion.",
      icon: <Code className="w-8 h-8 text-indigo-600" />,
      link: "#",
    },
    {
      title: "Dream Tailors & Fabrics",
      desc: "A responsive e-commerce platform for custom clothing and fabrics.",
      icon: <Scissors className="w-8 h-8 text-indigo-600" />,
      link: "#",
    },
  ];

  return (
    <div id="projects" className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-slate-900"
        >
          My <span className="text-indigo-600">Projects</span>
        </motion.h2>
        <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
          Here are some of my recent works showcasing my skills in full-stack development and creative solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-tr from-white to-indigo-50 border border-slate-200 rounded-3xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300 group cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                {project.icon}
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-indigo-700 transition">
                  {project.title}
                </h3>
              </div>
              <p className="text-slate-600 mt-3">{project.desc}</p>
              <a
                href={project.link}
                className="inline-block mt-5 text-indigo-600 font-medium hover:text-indigo-800 hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
