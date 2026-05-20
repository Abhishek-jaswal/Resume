"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const footerLinks = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education",  href: "#education" },
  { label: "Contact",    href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative w-full px-6 pt-12 pb-8 border-t border-white/[0.05] overflow-hidden"
      role="contentinfo"
      aria-label="Site footer"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" aria-hidden="true" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

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
              Full Stack Developer from Dharamshala, India.
              Building fast, scalable, and beautiful web experiences.
            </p>

            {/* Availability badge */}
            <div className="flex items-center gap-2 mt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
              <span className="text-green-400 text-xs font-medium">Open to opportunities</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-4">
              Navigation
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5" role="list">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-green-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-4">
              Connect
            </h3>
            <ul className="space-y-2.5" role="list">
              <li>
                <a
                  href="mailto:abhignitejaswal@gmail.com"
                  className="text-sm text-gray-500 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <FaEnvelope className="text-green-400 flex-shrink-0" aria-hidden="true" />
                  abhignitejaswal@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Abhishek-jaswal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  aria-label="Abhishek Jaswal GitHub"
                >
                  <FaGithub className="text-green-400 flex-shrink-0" aria-hidden="true" />
                  github.com/Abhishek-jaswal
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/abhishekjaswall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  aria-label="Abhishek Jaswal LinkedIn"
                >
                  <FaLinkedin className="text-green-400 flex-shrink-0" aria-hidden="true" />
                  linkedin.com/in/abhishekjaswall
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 border-t border-white/[0.04]">
          <p className="text-gray-700 text-xs">
            © {year}{" "}
            <span itemProp="author" className="text-gray-600">
              Abhishek Jaswal
            </span>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {/* Social icons row */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Abhishek-jaswal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
              >
                <FaGithub className="text-sm" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishekjaswall"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
              >
                <FaLinkedin className="text-sm" aria-hidden="true" />
              </a>
              <a
                href="mailto:abhignitejaswal@gmail.com"
                aria-label="Email Abhishek"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
              >
                <FaEnvelope className="text-sm" aria-hidden="true" />
              </a>
            </div>

            <a
              href="#"
              className="flex items-center gap-1.5 text-xs text-gray-700 hover:text-green-400 transition-colors duration-200 group"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <span className="group-hover:-translate-y-px transition-transform inline-block">↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
