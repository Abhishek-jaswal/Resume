"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full  px-6 text-white border-t border-white/10 bg-transparent pt-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

        {/* LEFT SECTION */}
        <div>
          {/* Logo + Title */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-black font-bold text-lg">
              P
            </div>
            <h2 className="text-xl font-semibold">Portfolio</h2>
          </div>

          {/* Text */}
          <p className="text-gray-400 text-sm leading-relaxed">
            Crafting digital experiences that make a difference. <br />
            Lets build something amazing together.
          </p>
        </div>

        {/* RIGHT SECTION — SOCIAL ICONS */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Abhishek-jaswal"
            className="w-10 h-10 rounded-lg bg-[#12131a] border border-white/10 flex items-center justify-center hover:bg-white/10 transition"
          >
            <FaGithub className="text-gray-300 text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishekjaswall"
            className="w-10 h-10 rounded-lg bg-[#12131a] border border-white/10 flex items-center justify-center hover:bg-white/10 transition"
          >
            <FaLinkedin className="text-gray-300 text-lg" />
          </a>
         
          <a
            href="#contact"
            className="w-10 h-10 rounded-lg bg-[#12131a] border border-white/10 flex items-center justify-center hover:bg-white/10 transition"
          >
            <FaEnvelope className="text-gray-300 text-lg" />
          </a>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="max-w-6xl mx-auto mt-4 mb-4 border-t border-white/10 pt-6 flex justify-between items-center text-xs text-gray-500">

        {/* COPYRIGHT */}
        <p>© 2026 Abhishek Jaswal. All rights reserved.</p>

        {/* BACK TO TOP */}
        <a
          href="#"
          className="flex items-center gap-2 hover:text-gray-300 transition"
        >
          ↑ <span>Back to Top</span>
        </a>
      </div>
    </footer>
  );
}
