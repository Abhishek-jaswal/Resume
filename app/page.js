"use client";

import ContactForm from './components/ContactForm';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { motion } from "framer-motion";
import SplineScene from './components/SplineScene'; // ✅ New 3D component

export default function Home() {
  const experiences = [
    {
      title: "IT Trainer",
      company: "CII-MCM Trust Multi Skill Training Institute",
      duration: "(June 2022 – 2024)",
      description:
        "Delivered hands-on training in modern web development, programming, and database management. Designed and implemented interactive learning modules improving engagement and comprehension. Mentored students and junior developers, fostering a strong learning environment.",
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
      logo: "logo-mcm.png",
    },
    {
      title: "Maple Innovative Solutions",
      company: "Maple Innovative Solutions",
      duration: "(April 2021 - May 2022)",
      description:
        "Optimized data processing using Excel and automated workflows. Managed documentation and data entry for over 1,000 health cards.",
      skills: ["Advanced Excel"],
      logo: "MIS.png",
    },
  ];

  return (
    <div className=" text-white min-h-screen">
        {/* ✨ 3D Spline Scene */}
      <SplineScene />
      <Header />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Main />
      </motion.div>

    

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Skills />
      </motion.div>

      {/* Projects */}
      <Projects />

      {/* Experience */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Experience experiences={experiences} />
      </motion.div>

      {/* Education */}
      <Education />

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ContactForm />
      </motion.div>

      <Footer />
    </div>
  );
}
