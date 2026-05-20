"use client";

import React, { useState, useEffect, useCallback, useRef, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Download, Linkedin, Search } from "lucide-react";

const navItems = [
  { name: "About",      href: "#about",      keywords: ["about", "bio", "profile", "who"] },
  { name: "Skills",     href: "#skills",      keywords: ["skills", "tech", "stack", "react", "next", "node", "tailwind", "javascript", "typescript", "python"] },
  { name: "Projects",   href: "#projects",    keywords: ["projects", "work", "portfolio", "fund", "chat", "interview", "himalaya"] },
  { name: "Experience", href: "#experience",  keywords: ["experience", "job", "career", "work", "intern", "trainer", "mountainkid"] },
  { name: "Education",  href: "#education",   keywords: ["education", "degree", "study", "niit", "college", "university"] },
  { name: "Contact",    href: "#contact",     keywords: ["contact", "email", "hire", "reach", "message", "phone", "remote", "job", "opportunity", "freelance", "fullstack", "frontend"] },
];

function Header() {
  const [isScrolled, setIsScrolled]     = useState(false);
  const [isOpen, setIsOpen]             = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [searchOpen, setSearchOpen]     = useState(false);
  const [searchQuery, setSearchQuery]   = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

  /* ── scroll + active-section tracking ── */
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);

          const sections = navItems.map((n) => n.href.replace("#", ""));
          let current = "about";
          sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el && window.scrollY >= el.offsetTop - 120) current = id;
          });
          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── close search on outside click ── */
  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
        setSearchQuery("");
        setSearchResults([]);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ── search logic ── */
  const handleSearch = useCallback((q) => {
    setSearchQuery(q);
    if (!q.trim()) { setSearchResults([]); return; }
    const lower = q.toLowerCase();
    const hits = navItems.filter(
      (item) =>
        item.name.toLowerCase().includes(lower) ||
        item.keywords.some((kw) => kw.includes(lower))
    );
    setSearchResults(hits);
  }, []);

  const goToResult = useCallback((href) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
    setIsOpen(false);
  }, []);

  /* ── keyboard shortcut Ctrl/Cmd + K ── */
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
        setSearchQuery("");
        setSearchResults([]);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const toggleMenu  = useCallback(() => setIsOpen((p) => !p), []);
  const closeMenu   = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <motion.header
        role="banner"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-[#070a12]/85 backdrop-blur-xl border-b border-white/[0.05] shadow-2xl shadow-black/20"
            : "py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-4">

          {/* Logo */}
          <motion.a
            href="#"
            aria-label="Abhishek Jaswal — Homepage"
            whileHover={{ scale: 1.04 }}
            className="relative flex items-center gap-2.5 group flex-shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-black font-syne font-bold text-sm shadow-lg shadow-green-500/20">
              AJ
            </div>
            <span className="font-syne font-bold text-white tracking-tight hidden sm:block">
              Abhishek<span className="text-green-400">.</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Primary navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 rounded-lg group ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-px bg-green-400 rounded-full transition-all duration-300 ${
                      isActive ? "w-1/2" : "w-0 group-hover:w-1/2"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-1.5">
            {/* Search */}
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setSearchOpen((v) => !v)}
                aria-label="Search sections (Ctrl+K)"
                title="Search sections (Ctrl+K)"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 text-sm"
              >
                <Search className="w-4 h-4" />
                <span className="hidden lg:inline text-xs text-gray-600 border border-white/10 rounded px-1.5 py-0.5 font-mono">⌘K</span>
              </button>

              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-64 bg-[#0a0d18]/98 backdrop-blur-2xl border border-white/[0.09] rounded-2xl overflow-hidden shadow-2xl shadow-black/60 z-50"
                  >
                    <div className="p-3 border-b border-white/[0.06]">
                      <div className="flex items-center gap-2.5 px-3 py-2 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                        <Search className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
                        <input
                          autoFocus
                          value={searchQuery}
                          onChange={(e) => handleSearch(e.target.value)}
                          placeholder="Search sections…"
                          className="bg-transparent text-white text-sm w-full outline-none placeholder-gray-600"
                          aria-label="Search portfolio sections"
                        />
                      </div>
                    </div>
                    <div className="p-2">
                      {searchQuery === "" ? (
                        navItems.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => goToResult(item.href)}
                            className="w-full text-left px-3 py-2.5 rounded-xl text-sm text-gray-400 hover:text-white hover:bg-white/[0.06] transition-colors flex items-center gap-2.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
                            {item.name}
                          </button>
                        ))
                      ) : searchResults.length > 0 ? (
                        searchResults.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => goToResult(item.href)}
                            className="w-full text-left px-3 py-2.5 rounded-xl text-sm text-white hover:bg-white/[0.06] transition-colors flex items-center gap-2.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            {item.name}
                          </button>
                        ))
                      ) : (
                        <p className="px-3 py-4 text-sm text-gray-600 text-center">No results found</p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Social */}
            <a
              href="https://linkedin.com/in/abhishekjaswall"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abhishek Jaswal LinkedIn profile"
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Abhishek-jaswal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abhishek Jaswal GitHub profile"
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://drive.google.com/file/d/1eIlJgH3cYm5U68whTqA8k6KWqnGfJ6xs/view?usp=sharing"
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
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[72px] left-4 right-4 z-40 bg-[#0a0d18]/97 backdrop-blur-2xl border border-white/[0.07] rounded-2xl p-4 md:hidden shadow-2xl shadow-black/50"
          >
            {/* Mobile search */}
            <div className="mb-3 flex items-center gap-2 px-3 py-2.5 bg-white/[0.03] rounded-xl border border-white/[0.06]">
              <Search className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
              <input
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search sections…"
                className="bg-transparent text-white text-sm w-full outline-none placeholder-gray-600"
              />
            </div>

            <nav className="flex flex-col gap-0.5">
              {(searchQuery && searchResults.length > 0 ? searchResults : navItems).map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-2.5 ${
                      isActive
                        ? "text-white bg-white/[0.06]"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-green-400" : "bg-white/20"}`} />
                    {item.name}
                  </a>
                );
              })}
              <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center gap-2.5">
                <a
                  href="https://github.com/Abhishek-jaswal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="p-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/abhishekjaswall"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="p-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://drive.google.com/file/d/1eIlJgH3cYm5U68whTqA8k6KWqnGfJ6xs/view?usp=sharing"
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
