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
    dateSchema: "2023",
    gpa: "8.8",
    focus: "Web Development, Java Programming",
    logo: "/niit.png",
    rank: 1,
  },
  {
    title: "Diploma in Software Engineering",
    institution: "NIIT Foundation",
    period: "2018 – 2021",
    dateSchema: "2021",
    gpa: "7.2",
    focus: "DSA, C++, Java, HTML, CSS, JavaScript, MySQL, C#",
    logo: "/NIIT-1.png",
    rank: 2,
  },
  {
    title: "B.Sc in Chemistry (Hons)",
    institution: "P.G College Dharamshala",
    period: "2015 – 2018",
    dateSchema: "2018",
    gpa: "5.8",
    focus: "Chemistry (Honours)",
    logo: "/dharamshala.png",
    rank: 3,
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-28 px-6"
      aria-labelledby="education-heading"
    >
      {/* Ambient */}
      <div
        className="absolute bottom-0 right-1/3 w-[400px] h-[250px] bg-green-500/[0.04] blur-[80px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="pill mb-5 inline-flex">🎓 Education</span>
          <h2
            id="education-heading"
            className="font-syne text-3xl sm:text-4xl font-bold text-white mt-3"
          >
            Academic <span className="text-green-400">Background</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
            A strong academic foundation combining technical expertise and applied sciences
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {education.map((edu) => (
            <motion.article
              key={edu.title}
              variants={item}
              itemScope
              itemType="https://schema.org/EducationalOccupationalCredential"
            >
              <meta itemProp="name" content={edu.title} />
              <meta itemProp="credentialCategory" content={edu.title} />

              <div className="group relative h-full bg-[#0a0d18]/80 backdrop-blur rounded-2xl p-6 border border-white/[0.06] hover:border-green-500/20 transition-all duration-400 hover:shadow-xl hover:shadow-green-500/[0.06] text-center">
                {/* Rank indicator */}
                <div
                  className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-[11px] text-gray-600 font-mono"
                  aria-hidden="true"
                >
                  0{edu.rank}
                </div>

                {/* Logo */}
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center overflow-hidden group-hover:border-green-500/20 transition-colors">
                  <Image
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    width={30}
                    height={30}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="font-syne text-base font-bold text-white mb-1 leading-snug">
                  {edu.title}
                </h3>
                <p
                  className="text-green-400 text-sm font-medium mb-2"
                  itemScope
                  itemType="https://schema.org/EducationalOrganization"
                >
                  <span itemProp="name">{edu.institution}</span>
                </p>

                <div className="flex items-center justify-center gap-1.5 text-xs text-gray-600 mb-3">
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  <time dateTime={edu.dateSchema}>{edu.period}</time>
                </div>

                <p className="text-gray-500 text-xs leading-relaxed mb-4">{edu.focus}</p>

                {/* GPA */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/8 text-green-400 text-xs font-semibold border border-green-500/15">
                  <Award className="w-3.5 h-3.5" aria-hidden="true" />
                  GPA: {edu.gpa}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
