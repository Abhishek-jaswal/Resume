"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full px-6 pt-10 pb-8 border-t border-white/[0.05] overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-black font-syne font-bold text-sm shadow-lg shadow-green-500/20">
                AJ
              </div>
              <span className="font-syne text-lg font-bold text-white">
                Abhishek<span className="text-green-400">.</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Crafting digital experiences that make a difference.
              <br />
              Let&apos;s build something amazing together.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Abhishek-jaswal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.1] transition-all duration-200"
            >
              <FaGithub className="text-base" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishekjaswall"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.1] transition-all duration-200"
            >
              <FaLinkedin className="text-base" />
            </a>
            <a
              href="#contact"
              aria-label="Email"
              className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.1] transition-all duration-200"
            >
              <FaEnvelope className="text-base" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 border-t border-white/[0.04]">
          <p className="text-gray-700 text-xs">
            © 2026 Abhishek Jaswal. All rights reserved.
          </p>
          <a
            href="#"
            className="flex items-center gap-1.5 text-xs text-gray-700 hover:text-green-400 transition-colors duration-200 group"
          >
            <span>Back to top</span>
            <span className="group-hover:-translate-y-px transition-transform">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}