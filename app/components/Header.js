"use client";

import React, { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Download, Linkedin } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <motion.header
        role="banner"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? "py-3 bg-[#070a12]/80 backdrop-blur-xl border-b border-white/[0.05]"
            : "py-5"
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            aria-label="Homepage"
            whileHover={{ scale: 1.05 }}
            className="relative flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-black font-syne font-bold text-sm shadow-lg shadow-green-500/20">
              AJ
            </div>
            <span className="font-syne font-bold text-white tracking-tight hidden sm:block">
              Abhishek<span className="text-green-400">.</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 group"
              >
                {item.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-px w-0 bg-green-400 transition-all duration-300 group-hover:w-1/2 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://linkedin.com/in/abhishekjaswall"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Abhishek-jaswal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://lustrous-trifle-fd2ec1.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-400 text-black rounded-xl text-sm font-semibold shadow-lg shadow-green-500/25 transition-all duration-200 hover:shadow-green-400/40 hover:-translate-y-px"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-white/5 transition text-gray-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[72px] left-4 right-4 z-40 bg-[#0a0d18]/95 backdrop-blur-2xl border border-white/[0.07] rounded-2xl p-5 md:hidden shadow-2xl shadow-black/50"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center gap-3">
                <a
                  href="https://github.com/Abhishek-jaswal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://lustrous-trifle-fd2ec1.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-400 text-black rounded-xl text-sm font-semibold transition"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default memo(Header);