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

  /* ✅ THROTTLED SCROLL (PERFORMANCE BOOST) */
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

  /* ✅ MEMOIZED HANDLERS */
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        role="banner"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${
          isScrolled
            ? "backdrop-blur bg-[#0d0f16]/80 border-b border-white/10 py-3"
            : "py-5"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            aria-label="Homepage"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-green-400"
          >
            AJ
          </motion.a>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition group"
              >
                {item.name}
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 w-0 bg-green-500 transition-all group-hover:w-2/3" />
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://linkedin.com/in/abhishekjaswall"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 rounded-lg hover:bg-white/10 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/Abhishek-jaswal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-lg hover:bg-white/10 transition"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://drive.google.com/file/d/1eIlJgH3cYm5U68whTqA8k6KWqnGfJ6xs/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm font-medium shadow-lg shadow-green-600/30 transition"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-3 rounded-lg hover:bg-white/10 transition"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 backdrop-blur bg-[#0d0f16]/90 border border-white/10 rounded-xl p-6 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-lg text-gray-300 hover:text-white transition"
                >
                  {item.name}
                </a>
              ))}

              <div className="pt-4 border-t border-white/10 flex gap-4">
                <a
                  href="https://github.com/Abhishek-jaswal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="p-2 rounded-lg hover:bg-white/10 transition"
                >
                  <Github />
                </a>

                <a
                  href="https://drive.google.com/file/d/12BBJn3oAWxm5aoLntv5D1XE82xHD8uKz/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 rounded-lg text-sm font-medium"
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
