"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const bubbles = [
  "Contact",
  "Email",
  "Experience",
  "Projects",
  "Education",
  "Skills",
  "GitHub",
  "Download CV",
];

const SplineScene = () => {
  const [radius, setRadius] = useState(250);

  // Responsive radius
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) setRadius(140);
      else if (window.innerWidth < 1024) setRadius(200);
      else setRadius(260);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);

    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div className="relative flex justify-center items-center py-10 px-4">
      {/* ---- Center iframe ---- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="
          w-full 
          max-w-4xl
          aspect-video 
          rounded-3xl 
          overflow-hidden 
         
          relative
        "
      >
        <iframe
          src="https://my.spline.design/untitled-iqtSP62iEGwBHo2KDGE8lTFl/"
          frameBorder="0"
          className="w-full h-full rounded-3xl border-none"
        ></iframe>
      </motion.div>

      {/* ---- Perfect Circle Bubble Layout ---- */}
      {bubbles.map((label, index) => {
        const angle = (index / bubbles.length) * 2 * Math.PI;

        let x = Math.cos(angle) * radius;
        let y = Math.sin(angle) * radius;

        // Small vertical tweaks (avoid bat wings touching text)
        if (label === "Download CV") y -= 20;
        if (label === "Email") y -= 20;
        if (label === "Education") y += 30;
        if (label === "Skills") y += 20;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1, x, y }}
            transition={{ duration: 1, delay: index * 0.08, type: "spring" }}
            className="
              absolute 
              text-white 
              bg-white/10 
              backdrop-blur-md 
              border border-white/20 
              rounded-full 
              px-4 py-1.5 
              shadow-lg 
              cursor-pointer 
              hover:scale-110 
              transition
              text-sm
            "
          >
            {label}
          </motion.div>
        );
      })}
    </div>
  );
};

export default SplineScene;
