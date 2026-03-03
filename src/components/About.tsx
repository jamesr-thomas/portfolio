"use client";

import { motion } from "framer-motion";
import { Code, Palette, Lightbulb } from "lucide-react";

const skills = [
  { icon: Code, name: "Development", desc: "Building robust applications" },
  { icon: Palette, name: "Design", desc: "Creating beautiful interfaces" },
  { icon: Lightbulb, name: "Innovation", desc: "Solving complex problems" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I&apos;m a passionate developer who loves creating elegant solutions to complex problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-6">
                <skill.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {skill.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{skill.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            With years of experience in web development, I specialize in building responsive,
            user-friendly applications that make a difference. I believe in continuous learning
            and staying up-to-date with the latest technologies to deliver the best results.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
