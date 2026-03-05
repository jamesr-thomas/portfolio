"use client";

import { motion } from "framer-motion";
import { ExternalLink, Mail, Phone } from "lucide-react";

const experience = [
  {
    title: "Student Support",
    company: "Moorpark College",
    period: "July 2024 - November 2024",
    description: "Provided technical support to patrons of the campus library, troubleshooting common software and connectivity issues including Canvas, Microsoft Office Suite, CAD Software, and Wireless/Bluetooth Connections. Documented interactions and solutions provided to patrons, and escalated issues to necessary resources.",
  }
];

const education = [
  {
    school: "Moorpark College",
    description1: "Studied Computer Science, Mathematics, and Information Technology.",
    description2: "Relevant coursework includes Data Structures and Algorithms, Computer Architecture and Organization, Linear Algebra, and Discrete Mathematics",
  },
  {
    school: "Simi Valley High School",
    description1: "Awarded Musician and WBA State-Finalist Marching Band Saxophonist, Community Volunteer, and Writer, with a strong interest in technology" 
  }
];

const skills = [
  { category: "IDS / SIEM", tools: ["Wazuh", "BlackPoint", "Elastic", "Defender"] },
  { category: "EDR", tools: ["SentinelOne", "Defender for Endpoint"] },
  { category: "DNS", tools: ["Atakama", "OpenDNS", "Pi-hole"] },
  { category: "Security Awareness", tools: ["BreachSecureNow", "KnowBe4", "Adaptive Security"] },
  { category: "Email Hygiene", tools: ["Barracuda", "Mimecast", "Defender"] },
  { category: "Vulnerability Management", tools: ["Tenable.io", "Fortra", "Qualys"] },
  { category: "Network Infrastructure", tools: ["Palo Alto", "Cisco", "HP", "Aruba"] },
  { category: "RMM", tools: ["Intune", "Atera", "Logmein", "ConnectWise Automate"] },
  { category: "Compliance Automation", tools: ["Vanta"] },
];

export default function ResumeContent() {
  return (
    <main className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Resume
            </span>
          </h1>
          <p className="text-gray-600 mb-8">
            IT Professional & Software Developer
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              james.russ.thomas@proton.me
            </span>           
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +1 (805) 573-3085
            </span>
          </div>

          <a
            href="https://docs.google.com/document/d/116gRXimQpzQ9G6xR0asMXlKgfnkKE91Qnl-9b6McNBM/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            Open
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8"
        >
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Experience</h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-violet-500"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-violet-500" />
                  <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-violet-600 font-medium">{job.company}</p>
                  <p className="text-sm text-gray-500 mb-2">{job.period}</p>
                  <p className="text-gray-600">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8"
        >
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-indigo-500"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-indigo-500" />
                  <h3 className="text-lg font-semibold text-gray-900">{edu.school}</h3>
                  <p className="text-gray-600 mt-1">{edu.description1}</p>
                  {edu.description2 && (
                    <p className="text-gray-600 mt-1">{edu.description2}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Skills & Tools</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                  className="p-4 rounded-xl bg-gray-50"
                >
                  <h3 className="font-semibold text-gray-900 mb-3">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 text-xs rounded-full bg-violet-100 text-violet-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
