"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const bubbles = [
  "Contact",
  "LinkedIn",
  "Experience",
  "Projects",
  "Education",
  "Skills",
  "GitHub",
  "Download CV",
];
const links = {
  Contact: "#contact",
  LinkedIn: "https://www.linkedin.com/in/abhishek-jaswall/",
  Experience: "#experience",
  Projects: "#projects",
  Education: "#education",
  Skills: "#skills",
  GitHub: "https://github.com/yourusername",
  "Download CV": "https://drive.google.com/file/d/12BBJn3oAWxm5aoLntv5D1XE82xHD8uKz/view?usp=sharing",
};


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
    <div className="relative flex justify-center items-center sm:py-4 py-24 px-4">
      {/* ---- Center iframe ---- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="
          w-full 
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

  if (label === "Download CV") y -= 10;
  if (label === "LinkedIn") y -= 20;
  if (label === "Education") y += 30;
  if (label === "Skills") y += 20;

  return (
    <a
      key={index}
      href={links[label]}
      target={links[label].startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="absolute"
      style={{ transform: `translate(${x}px, ${y}px)` }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: index * 0.08, type: "spring" }}
        className="
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
          whitespace-nowrap
        "
      >
        {label}
      </motion.div>
    </a>
  );
})}

   
    </div>
  );
};

export default SplineScene;
