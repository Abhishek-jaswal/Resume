"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";
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
   
  
  },
  {
    title: "IT Trainer | Fullstack Development",
    company: "CII-MCM Trust Multi Skill Training Institute",
    period: "June 2022 – 2024",
    description:
      "Delivered hands-on training in modern web development, programming, and database management. Designed interactive learning modules and mentored students and junior developers.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
      "ReactJS",
      "Next.js",
      "Figma",
    ],
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
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 gap-8">
          {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-72 h-72 sm:w-96 sm:h-96
          bg-cyan-500/5 sm:bg-cyan-500/10
        blur-2xl sm:blur-3xl animate-pulse" />

      <div className="absolute bottom-1/4 -right-1/7   w-72 h-72 sm:w-96 sm:h-96
        bg-green-500/5 sm:bg-green-500/10
        blur-2xl sm:blur-3xl animate-pulse delay-1000" />
      {/* heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-3xl font-bold text-white">
          Professional <span className="text-green-400">Experience</span>
        </h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          A track record of delivering excellence and driving innovation
        </p>
      </motion.div>

      {/* timeline */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto z-10"
      >
        {/* vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/40 to-transparent hidden lg:block" />

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={item} className="relative">
              {/* dot */}
              <div className="absolute left-[18px] top-8 w-4 h-4 rounded-full bg-green-500 border-4 border-[#0d0f16] hidden lg:block" />

              {/* card */}
              <div
                className="bg-[#0e0f14]/80 backdrop-blur rounded-2xl p-6 lg:ml-16
                           border border-[#1c1d23] transition-all duration-300
                           hover:border-green-500/40
                            hover:bg-[#0e0f14]/90"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* logo */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-[#161821] flex items-center justify-center overflow-hidden">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={30}
                        height={30}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                     
                    </div>
                  </div>

                  {/* content */}
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {exp.title}
                        </h3>
                        <p className="text-green-400 font-medium">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full
                                     bg-green-500/10 text-green-400
                                     border border-green-500/20"
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
    </section>
  );
}
