"use client";

import React, { memo } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, ExternalLink } from "lucide-react";
import LocalTime from "./LocalTime";

function Main() {
  return (
    <section
      id="about"
      role="region"
      aria-labelledby="hero-heading"
      itemScope
      itemType="https://schema.org/Person"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-12 overflow-hidden"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" aria-hidden="true" />

      {/* Ambient glows */}
      <div aria-hidden="true" className="absolute top-20 left-0 w-[500px] h-[500px] bg-green-500/[0.06] rounded-full blur-[100px] pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-cyan-500/[0.05] rounded-full blur-[80px] pointer-events-none" />

      <LocalTime />

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-14 items-center py-10">

        {/* ── LEFT — Text ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-8 flex flex-wrap gap-2"
          >
            <span className="pill">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </span>
            <span className="pill border-blue-500/30 bg-blue-500/[0.07] text-blue-300">
              🌐 Seeking Full-time Remote — Frontend or Fullstack
            </span>
          </motion.div>

          {/* H1 */}
          <h1
            id="hero-heading"
            itemProp="name"
            className="font-syne text-4xl sm:text-5xl xl:text-[3.5rem] font-extrabold leading-[1.05] tracking-tight mb-4"
          >
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 glow-text">
              Abhishek
            </span>
            <br />
            <span className="text-white">Jaswal</span>
          </h1>

          {/* Typewriter — role headline */}
          <div
            className="font-syne text-xl sm:text-2xl font-bold text-green-400/90 mb-6 h-9"
            aria-live="polite"
            aria-label="Rotating job titles"
            itemProp="jobTitle"
          >
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Frontend Developer",
                  "Next.js Specialist",
                  "Open to Remote Roles",
                  "Open Source Contributor",
                ],
                autoStart: true,
                loop: true,
                delay: 70,
              }}
            />
          </div>

          {/* Bio */}
          <meta itemProp="description" content="Full Stack Developer with 3+ years of experience in Next.js, React, Node.js, Tailwind CSS and Supabase/PostgreSQL." />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 leading-relaxed mb-3 max-w-lg"
          >
            A results-driven{" "}
            <strong className="text-white font-medium">Full-Stack Developer</strong>{" "}
            with 3+ years of experience building production-grade web applications using
            JavaScript, React, Next.js, and Node.js.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-500 leading-relaxed mb-8 max-w-lg"
          >
            I specialize in scalable backend systems, real-time applications, and
            seamless user interfaces — currently interning at{" "}
            <a
              href="https://mountainkid.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline underline-offset-2"
              itemProp="worksFor"
            >
              Mountainkid.ai
            </a>
            .
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex gap-3 flex-wrap mb-8"
          >
            <a
              href="https://drive.google.com/file/d/1eIlJgH3cYm5U68whTqA8k6KWqnGfJ6xs/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Abhishek Jaswal's resume"
              className="group flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-green-500/25 hover:shadow-green-400/40 hover:-translate-y-px text-sm"
            >
              View Resume
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a
              href="#projects"
              aria-label="View Abhishek's projects"
              className="flex items-center gap-2 px-6 py-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.14] text-gray-300 hover:text-white font-medium rounded-xl transition-all duration-200 text-sm"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              See Projects
            </a>
            <a
              href="#contact"
              aria-label="Get in touch with Abhishek"
              className="flex items-center gap-2 px-6 py-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.14] text-gray-300 hover:text-white font-medium rounded-xl transition-all duration-200 text-sm"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Location + stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center gap-4 text-sm"
          >
            <div
              className="flex items-center gap-1.5 text-gray-500"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <MapPin className="w-3.5 h-3.5 text-green-400" aria-hidden="true" />
              <span itemProp="addressLocality">Dharamshala</span>
              <span>,&nbsp;</span>
              <span itemProp="addressRegion">India</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <span className="text-gray-500">3+ Years Experience</span>
            <div className="h-4 w-px bg-white/10" />
            <span className="text-gray-500">5+ Projects Shipped</span>
          </motion.div>
        </motion.div>

        {/* ── RIGHT — Professional Image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          {/* Background ambient glow */}
          <div
            aria-hidden="true"
            className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-green-500/25 to-cyan-500/10 blur-3xl"
          />

          {/* Outer decorative rings */}
          <div
            aria-hidden="true"
            className="absolute w-[320px] h-[320px] md:w-[440px] md:h-[440px] rounded-full border border-green-500/10 animate-spin"
            style={{ animationDuration: "30s" }}
          />
          <div
            aria-hidden="true"
            className="absolute w-[270px] h-[270px] md:w-[370px] md:h-[370px] rounded-full border border-green-500/[0.06] animate-spin"
            style={{ animationDuration: "20s", animationDirection: "reverse" }}
          />

          {/* Professional image card */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Glowing border frame */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-green-400/40 via-emerald-500/20 to-cyan-500/30 blur-sm" aria-hidden="true" />
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-green-400/60 to-emerald-600/40" aria-hidden="true" />

            {/* Image container */}
            <div className="relative w-56 h-56 md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-black/60">
              {/* Professional overlay: subtle vignette + color grade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070a12]/30 via-transparent to-transparent z-10 pointer-events-none" aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent z-10 pointer-events-none mix-blend-overlay" aria-hidden="true" />

              <Image
                src="/abhishekk.jpeg"
                alt="Abhishek Jaswal — Full Stack Developer from Dharamshala, India"
                fill
                priority
                sizes="(max-width: 768px) 224px, 300px"
                className="object-cover object-top scale-105 hover:scale-110 transition-transform duration-700"
                itemProp="image"
              />
            </div>

            {/* Professional status badge (bottom of image) */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d1020]/95 backdrop-blur-md border border-green-500/20 shadow-lg whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[11px] font-semibold text-green-400 tracking-wide">Available to hire</span>
            </div>
          </motion.div>

          {/* Floating chips */}
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-4 -right-2 sm:right-2 px-4 py-2.5 rounded-2xl bg-[#0d1020]/90 backdrop-blur-md border border-white/[0.08] text-sm font-medium text-gray-200 shadow-xl hidden sm:flex items-center gap-2"
            aria-hidden="true"
          >
            💻 Full-Stack Dev
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 5.5, repeat: Infinity }}
            className="absolute -bottom-8 -left-2 sm:left-2 px-4 py-2.5 rounded-2xl bg-[#0d1020]/90 backdrop-blur-md border border-white/[0.08] text-sm font-medium text-gray-200 shadow-xl hidden sm:flex items-center gap-2"
            aria-hidden="true"
          >
            ⚡ 3+ Years Exp
          </motion.div>

          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            className="absolute top-1/2 -right-8 px-3 py-2 rounded-xl bg-green-500/10 border border-green-500/20 text-xs text-green-400 font-medium hidden lg:flex items-center gap-1.5"
            aria-hidden="true"
          >
            🌿 Open Source
          </motion.div>

          <motion.div
            animate={{ x: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
            className="absolute top-1/4 -left-10 px-3 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-medium hidden lg:flex items-center gap-1.5"
            aria-hidden="true"
          >
            🚀 Next.js
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs text-gray-600 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-green-500/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}

export default memo(Main);
