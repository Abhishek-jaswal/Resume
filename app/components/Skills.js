"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Terminal,
  Box,
  Briefcase,
} from "lucide-react";

const skillsData = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: [
      "Node.js",
      "RESTful APIs",
      "Authentication",
      "Authorization",
    ],
  },
  {
    icon: Database,
    title: "Database Management",
    skills: ["PostgreSQL", "MySQL", "Supabase"],
  },
  {
    icon: Box,
    title: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "AWS (Basics)",
      "Vercel",
      "Railway",
    ],
  },
  {
    icon: Briefcase,
    title: "CRM & Business Tools",
    skills: [
      "CRM Data Handling",
      "Dashboard Management",
      "Workflow Automation",
    ],
  },
  {
    icon: Terminal,
    title: "Programming Languages",
    skills: ["JavaScript", "Python", "Java", "C++", "Rust (Learning)"],
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative mt-24 px-4"
      aria-labelledby="skills-heading"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b via-green-500/5 to-transparent"
      />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h2
          id="skills-heading"
          className="text-3xl font-bold text-white"
        >
          Skills <span className="text-green-400">& Expertise</span>
        </h2>
        <p className="text-gray-200 mt-3 max-w-2xl mx-auto">
          A comprehensive toolkit of modern technologies and frameworks for
          building exceptional digital experiences
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        animate={shouldReduceMotion ? "visible" : undefined}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skillsData.map((category) => (
          <motion.div
            key={category.title}
            variants={item}
            className="group bg-[#0e0f14]/80 backdrop-blur rounded-2xl p-7
                       border border-[#1c1d23]
                       hover:border-green-500/40 transition-all duration-300
                       shadow-[0_0_20px_rgba(0,255,150,0.05)]
                       hover:shadow-[0_0_30px_rgba(0,255,150,0.15)]"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-5">
              <div
                className="p-3 rounded-xl bg-green-500/10 text-green-400
                           group-hover:bg-green-500 group-hover:text-black
                           transition-colors"
              >
                <category.icon
                  className="w-6 h-6"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">
                {category.title}
              </h3>
            </div>

            {/* Skills list */}
            <ul className="flex flex-wrap gap-3" role="list">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="px-2 py-1.5 text-sm rounded-lg
                             bg-[#161821] text-gray-200
                             border border-[#1f2130]
                             hover:bg-green-500/10 hover:text-green-400
                             transition-colors cursor-default"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
