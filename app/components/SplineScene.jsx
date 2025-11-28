"use client";
import React from "react";
import { motion } from "framer-motion";

const bubbles = [
  { label: "Experience", x: "-30%", y: "-40%" },
  { label: "Projects", x: "-45%", y: "10%" },
  { label: "Education", x: "-20%", y: "40%" },
  { label: "Skills", x: "25%", y: "45%" },
  { label: "GitHub", x: "40%", y: "5%" },
  { label: "Download CV", x: "25%", y: "-45%" },
  { label: "Contact", x: "0%", y: "-55%" },
  { label: "Email", x: "-5%", y: "60%" },
];

const SplineScene = () => {
  return (
    <div className="relative flex justify-center items-center py-16">
      {/* ---- Center iframe ---- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,140,0,0.3)] border border-gray-800 relative"
      >
        <iframe
          src="https://my.spline.design/untitled-iqtSP62iEGwBHo2KDGE8lTFl/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
        ></iframe>
      </motion.div>

      {/* ---- Floating Buttons ---- */}
      {bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: bubble.x,
            y: bubble.y,
          }}
          transition={{ duration: 1, delay: index * 0.1, type: "spring" }}
          className="absolute px-4 py-2 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full shadow-lg cursor-pointer hover:scale-110 transition"
        >
          {bubble.label}
        </motion.div>
      ))}
    </div>
  );
};

export default SplineScene;
