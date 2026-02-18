"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    title: "Software Intern",
    company: "Mountainkid.ai",
    period: "March 2025 – Aug 2025",
    description:
      "Contributing to the development of MountainKid AI software and MountainKid Valley open-source projects. Improved UI/UX and implemented responsive interfaces using Next.js and Tailwind CSS.",
    skills: ["Next.js", "Tailwind CSS", "UI/UX", "Open Source"],
    logo: "/mountainkidai.png",
    current: true,
  },
  {
    title: "IT Trainer | Fullstack Development",
    company: "CII-MCM Trust Multi Skill Training Institute",
    period: "June 2022 – 2024",
    description:
      "Delivered hands-on training in modern web development, programming, and database management. Designed interactive learning modules and mentored students and junior developers.",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS", "ReactJS", "Next.js", "Figma"],
    logo: "/logo-mcm.png",
  },
  {
    title: "Data Entry Specialist",
    company: "Maple Innovative Solutions",
    period: "April 2021 – May 2022",
    description:
      "Optimized data processing using Excel and automated workflows. Managed documentation and data entry for over 1,000 health cards.",
    skills: ["Advanced Excel", "Data Processing"],
    logo: "/MIS.png",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
};

const item = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-cyan-500/[0.04] blur-[80px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="pill mb-5 inline-flex">💼 Career</span>
          <h2 className="font-syne text-3xl sm:text-4xl font-bold text-white mt-3">
            Professional <span className="text-green-400">Experience</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
            A track record of delivering excellence and driving innovation
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-green-500/40 via-green-500/20 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={item} className="relative group">
                {/* Timeline dot */}
                <div className="absolute left-[15px] top-8 w-[11px] h-[11px] rounded-full border-2 border-green-400 bg-[#070a12] z-10 hidden sm:block group-hover:bg-green-400 transition-colors duration-300" />

                {/* Card */}
                <div className="sm:ml-14 bg-[#0a0d18]/80 backdrop-blur rounded-2xl p-6 border border-white/[0.06] hover:border-green-500/20 transition-all duration-400 hover:shadow-xl hover:shadow-green-500/[0.05]">
                  <div className="flex flex-col sm:flex-row gap-5">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center overflow-hidden">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          width={28}
                          height={28}
                          className="w-7 h-7 object-contain"
                          onError={(e) => { e.currentTarget.style.display = "none"; }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-syne text-base font-bold text-white">{exp.title}</h3>
                            {exp.current && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-green-400 text-sm font-medium mt-0.5">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-600 whitespace-nowrap">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </div>
                      </div>

                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{exp.description}</p>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.04] text-gray-400 border border-white/[0.05]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}