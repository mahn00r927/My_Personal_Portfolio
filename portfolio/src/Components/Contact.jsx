import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  // Animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <div
      className="min-h-screen bg-white text-gray-900 p-8 flex items-center justify-center"
      id="contact"
    >
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* Left Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-4xl font-bold"
          >
            Get in <span className="text-indigo-600">Touch</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-gray-600"
          >
            Let’s collaborate on something great! Whether you have a project, an
            idea, or just want to connect, feel free to drop me a message.
          </motion.p>

          <motion.div
            className="space-y-4"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <Mail className="text-indigo-600 w-6 h-6" />
              <span>mahnoor.rajput11927@gmail.com</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <Phone className="text-indigo-600 w-6 h-6" />
              <span>0317 3322610</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <MapPin className="text-indigo-600 w-6 h-6" />
              <span>Sukkur, Pakistan</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-50 rounded-2xl shadow-lg p-6 border border-gray-200"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.input
                type="text"
                placeholder="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
                whileFocus={{ scale: 1.01 }}
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
                whileFocus={{ scale: 1.01 }}
              />
              <motion.textarea
                placeholder="Your Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
                whileFocus={{ scale: 1.01 }}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 rounded-lg !bg-[#f0593e] text-white font-semibold hover:!bg-red-700 transition"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
