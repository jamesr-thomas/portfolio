"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with React and Next.js, featuring real-time data synchronization and a beautiful UI.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Project Two",
    description: "An e-commerce platform with seamless payment integration and inventory management system.",
    tags: ["Node.js", "Express", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Project Three",
    description: "A mobile-first social application with real-time messaging and notifications.",
    tags: ["React Native", "Firebase", "Redux"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Project Four",
    description: "A dashboard for data visualization with interactive charts and analytics.",
    tags: ["Vue.js", "D3.js", "Python", "FastAPI"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-950">
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
              Projects
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="h-48 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500 flex items-center justify-center">
                <span className="text-6xl font-bold text-white/30">
                  {index + 1}
                </span>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
