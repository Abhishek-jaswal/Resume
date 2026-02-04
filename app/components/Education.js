"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Award } from "lucide-react";
import Image from "next/image";

const education = [
  {
    title: "Certified Trainer",
    institution: "NIIT Foundation",
    period: "2023",
    gpa: "8.8",
    focus: "Web Development, Java Programming",
    logo: "/niit.png",
  },
  {
    title: "Software Diploma",
    institution: "NIIT Foundation",
    period: "2018 – 2021",
    gpa: "7.2",
    focus: "DSA, C++, Java, HTML, CSS, JavaScript, MySQL and C#",
    logo: "/NIIT-1.png",
  },
  {
    title: "B.Sc in Chemistry (Hons)",
    institution: "P.G College Dharamshala",
    period: "2015 – 2018",
    gpa: "5.8",
    focus: "Chemistry (Hons)",
    logo: "/dharamshala.png",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

export default function Education() {
  return (
    <section id="education" className="relative  px-4">
       {/* Background glow */}
      <div className="absolute left-1/2 w-72 h-72 sm:w-96 sm:h-96
        bg-green-500/5 sm:bg-green-500/10
        blur-2xl sm:blur-3xl animate-pulse" />

      <div className="absolute bottom-1/4 -right-1/7   w-72 h-72 sm:w-96 sm:h-96
             bg-cyan-500/5 sm:bg-cyan-500/10
        blur-2xl sm:blur-3xl animate-pulse delay-1000" />
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-3xl font-bold text-white">
          Academic <span className="text-green-400">Background</span>
        </h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Building a strong educational foundation for technical excellence
        </p>
      </motion.div>

      {/* Timeline Container */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Horizontal line (desktop only) */}
        <div
          className="hidden lg:block absolute -top-8 left-0 right-0 h-px
                     bg-gradient-to-r from-transparent via-green-500/40 to-transparent"
        />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu) => (
            <motion.div
              key={edu.title}
              variants={item}
              className="relative"
            >
              {/* Dot (desktop only) */}
              <div
                className="hidden lg:flex absolute -top-10 left-1/2 -translate-x-1/2
                           w-4 h-4 rounded-full bg-green-500
                           border-4 border-[#0d0f16]
                           z-20"
              />

              {/* Card */}
              <div
                className="bg-[#0e0f14]/80 backdrop-blur rounded-2xl p-6
                           border border-[#1c1d23]
                           transition-all duration-300
                           hover:border-green-500/40
                           shadow-[0_0_20px_rgba(0,255,150,0.05)]
                           hover:shadow-[0_0_30px_rgba(0,255,150,0.15)]
                           text-center"
              >
                {/* Logo */}
                <div
                  className="w-16 h-16 mx-auto mb-5 rounded-xl bg-[#161821]
                             flex items-center justify-center overflow-hidden"
                >
                  <Image
                    src={edu.logo}
                    alt={edu.institution}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-1">
                  {edu.title}
                </h3>

                <p className="text-green-400 font-medium text-sm mb-1">
                  {edu.institution}
                </p>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  {edu.period}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-2">
                  {edu.focus}
                </p>

                {/* GPA */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                             bg-green-500/10 text-green-400 text-sm font-semibold
                             border border-green-500/20"
                >
                  <Award className="w-4 h-4" />
                  GPA: {edu.gpa}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
