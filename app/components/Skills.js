"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Code2, Server, Database, Terminal, Box, Briefcase } from "lucide-react";

const skillsData = [
  {
    icon: Code2,
    title: "Frontend",
    color: "from-green-500/20 to-green-500/5",
    iconBg: "bg-green-500/10 text-green-400",
    iconHover: "group-hover:bg-green-500 group-hover:text-black",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    color: "from-blue-500/20 to-blue-500/5",
    iconBg: "bg-blue-500/10 text-blue-400",
    iconHover: "group-hover:bg-blue-500 group-hover:text-black",
    skills: ["Node.js", "RESTful APIs", "Authentication", "Authorization"],
  },
  {
    icon: Database,
    title: "Databases",
    color: "from-cyan-500/20 to-cyan-500/5",
    iconBg: "bg-cyan-500/10 text-cyan-400",
    iconHover: "group-hover:bg-cyan-500 group-hover:text-black",
    skills: ["PostgreSQL", "MySQL", "Supabase"],
  },
  {
    icon: Box,
    title: "DevOps & Tools",
    color: "from-orange-500/20 to-orange-500/5",
    iconBg: "bg-orange-500/10 text-orange-400",
    iconHover: "group-hover:bg-orange-500 group-hover:text-black",
    skills: ["Git", "GitHub", "Docker", "Postman", "AWS (Basics)", "Vercel", "Railway"],
  },
  {
    icon: Briefcase,
    title: "CRM & Business",
    color: "from-purple-500/20 to-purple-500/5",
    iconBg: "bg-purple-500/10 text-purple-400",
    iconHover: "group-hover:bg-purple-500 group-hover:text-black",
    skills: ["CRM Data Handling", "Dashboard Management", "Workflow Automation"],
  },
  {
    icon: Terminal,
    title: "Languages",
    color: "from-rose-500/20 to-rose-500/5",
    iconBg: "bg-rose-500/10 text-rose-400",
    iconHover: "group-hover:bg-rose-500 group-hover:text-black",
    skills: ["JavaScript", "Python", "Java", "C++", "Rust (Learning)"],
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="relative py-28 px-6" aria-labelledby="skills-heading">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/[0.04] blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section label + heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="pill mb-5 inline-flex">⚡ Expertise</span>
          <h2 id="skills-heading" className="font-syne text-3xl sm:text-4xl font-bold text-white mt-3">
            Skills <span className="text-green-400">&amp; Expertise</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies for building exceptional digital experiences
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          animate={shouldReduceMotion ? "visible" : undefined}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillsData.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              className="group relative bg-[#0a0d18]/80 backdrop-blur rounded-2xl p-6 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Card gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10">
                {/* Icon + title */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl ${category.iconBg} ${category.iconHover} transition-colors duration-200`}>
                    <category.icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-syne text-base font-semibold text-white">{category.title}</h3>
                </div>

                {/* Skills */}
                <ul className="flex flex-wrap gap-2" role="list">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="px-3 py-1.5 text-xs rounded-lg bg-white/[0.04] text-gray-400 border border-white/[0.05] hover:bg-white/[0.08] hover:text-gray-200 transition-all duration-150 cursor-default"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}