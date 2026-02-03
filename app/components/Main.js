"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import LocalTime from "./LocalTime";

export default function Main() {
  return (
    <section className="relative flex items-center justify-center px-6 mt-20 overflow-hidden ">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <LocalTime />

      <div
        className="relative z-10 max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        id="about"
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur border border-white/10 text-sm mt-8 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for opportunities
          </motion.div>

          <h1 className="text-3xl font-extrabold">Hi, I`&apos`m <span className="text-green-500">Abhishek Jaswal</span></h1>

          <div className="text-2xl font-extrabold text-green-500 mt-4">
            <Typewriter
              options={{
                strings: [
                
                  "Full Stack Developer",
                  "Open Source Contributor",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className=" mt-4 text-gray-300"
          >
              A results-driven <span className="text-foreground font-medium">Full-Stack Developer</span> with expertise in modern technologies including JavaScript, ReactJS, Express.js, Django, and Rust.          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="text-gray-400 mt-3"
          >
I specialize in building scalable backend systems, real-time web applications, and seamless user interfaces that deliver exceptional digital experiences.          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 mt-6"
          >
            <a
              href="https://drive.google.com/file/d/1eIlJgH3cYm5U68whTqA8k6KWqnGfJ6xs/view?usp=sharing"
                target="_blank"
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition shadow-lg shadow-green-500/30"
            >
              Check Resume
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-2 text-sm text-gray-400 mt-6"
          >
            <MapPin className="w-4 h-4 text-green-400" />
            Dharamshala, India
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative flex justify-center"
        >
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-cyan-400 blur-2xl opacity-30 animate-pulse" />

          {/* Floating image */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border  border-green-500/40 backdrop-blur shadow-xl"
          >
            <Image
              src="/abhishekk.jpeg"
              alt="Profile Picture"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-4 -right-4 px-4 py-2 rounded-lg bg-white/10 backdrop-blur text-sm"
          >
            💻 Full-Stack
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-2 -left-4 px-4 py-2 rounded-lg bg-white/10 backdrop-blur text-sm"
          >
            ⚡ 3+ Years
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
