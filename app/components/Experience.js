"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    title: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    companyUrl: "https://urbanserveu.com",
    period: "Dec 2025 – Present",
    periodSchema: "2025-03",
    description:
      "Architecting and deploying production-ready web applications and Minimum Viable Products (MVPs) for startups and local businesses.Designing scalable relational database schemas and configuring backend architectures using PocketBase and PostgreSQL.Provisioning and managing cloud infrastructure on AWS EC2 and Vercel to support live user traffic and continuous deployment pipelines.",
    skills: ["Next.js", "Tailwind CSS", "UI/UX", "PWA", "  Pocketbase", "TypeScript"],
    current: true,
  },
  {
    title: "Software Developer Intern",
    company: "Mountainkid.ai",
    companyUrl: "https://mountainkid.ai",
    period: "March 2025 – Nov 2025",
    periodSchema: "2025-03",
    description:
      "Contributing to MountainKid AI software and MountainKid Valley open-source projects. Improved UI/UX and implemented responsive interfaces using Next.js and Tailwind CSS. Collaborating with the core team on product features and performance improvements.",
    skills: ["Next.js", "Tailwind CSS", "UI/UX", "Open Source", "TypeScript"],
    logo: "/mountainkidai.png",
    current: true,
  },
  {
    title: "IT Trainer — Fullstack Development",
    company: "CII-MCM Trust Multi Skill Training Institute",
    companyUrl: null,
    period: "June 2022 – 2024",
    periodSchema: "2022-06",
    description:
      "Delivered hands-on training in modern web development, programming, and database management to 50+ students. Designed interactive learning modules covering React, Next.js, Figma, and JavaScript. Mentored students and junior developers on real-world projects.",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS", "ReactJS", "Next.js", "Figma"],
    logo: "/logo-mcm.png",
    current: false,
  },
  {
    title: "Data Entry Specialist",
    company: "Maple Innovative Solutions",
    companyUrl: null,
    period: "April 2021 – May 2022",
    periodSchema: "2021-04",
    description:
      "Optimized data processing pipelines using Advanced Excel and automated workflows, reducing manual effort by 40%. Managed documentation and data entry for 1,000+ health cards with high accuracy.",
    skills: ["Advanced Excel", "Data Processing", "Documentation", "Workflow Automation"],
    logo: "/MIS.png",
    current: false,
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
};

const itemVariant = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 px-6"
      aria-labelledby="experience-heading"
      itemScope
      itemType="https://schema.org/Person"
    >
      <meta itemProp="name" content="Abhishek Jaswal" />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-cyan-500/[0.04] blur-[80px] rounded-full pointer-events-none -translate-y-1/2"
        aria-hidden="true"
      />

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
          <h2
            id="experience-heading"
            className="font-syne text-3xl sm:text-4xl font-bold text-white mt-3"
          >
            Professional <span className="text-green-400">Experience</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
            3+ years of delivering excellence across web development, training, and data systems
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
          <div
            className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-green-500/40 via-green-500/20 to-transparent hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.article
                key={index}
                variants={itemVariant}
                className="relative group"
                itemScope
                itemType="https://schema.org/OrganizationRole"
              >
                <meta itemProp="roleName" content={exp.title} />
                <meta itemProp="startDate" content={exp.periodSchema} />
                {exp.current && <meta itemProp="endDate" content="present" />}

                {/* Timeline dot */}
                <div
                  className="absolute left-[15px] top-8 w-[11px] h-[11px] rounded-full border-2 border-green-400 bg-[#070a12] z-10 hidden sm:block group-hover:bg-green-400 transition-colors duration-300"
                  aria-hidden="true"
                />

                {/* Card */}
                <div className="sm:ml-14 bg-[#0a0d18]/80 backdrop-blur rounded-2xl p-6 border border-white/[0.06] hover:border-green-500/20 transition-all duration-400 hover:shadow-xl hover:shadow-green-500/[0.05]">
                  <div className="flex flex-col sm:flex-row gap-5">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center overflow-hidden">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
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
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-syne text-base font-bold text-white" itemProp="roleName">
                              {exp.title}
                            </h3>
                            {exp.current && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
                                Current
                              </span>
                            )}
                          </div>
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-green-400 text-sm font-medium mt-0.5 hover:underline underline-offset-2 inline-flex items-center gap-1"
                              itemProp="worksFor"
                            >
                              {exp.company}
                              <ExternalLink className="w-3 h-3" aria-hidden="true" />
                            </a>
                          ) : (
                            <p className="text-green-400 text-sm font-medium mt-0.5">{exp.company}</p>
                          )}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-600 whitespace-nowrap">
                          <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                          <time>{exp.period}</time>
                        </div>
                      </div>

                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{exp.description}</p>

                      <ul className="flex flex-wrap gap-1.5" role="list" aria-label="Technologies used">
                        {exp.skills.map((skill) => (
                          <li
                            key={skill}
                            className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.04] text-gray-400 border border-white/[0.05]"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
