import React from "react";

export default function Skills() {
  return (
    <>
      {/* Title */}
      <div className="text-center mt-20 px-4" id="skills">
        <h2 className="text-4xl font-bold text-white">
          Skills <span className="text-green-400">& Expertise</span>
        </h2>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          A comprehensive toolkit of modern technologies and frameworks for building exceptional digital experiences
        </p>
      </div>

      {/* GRID */}
      <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">

        {/* ---------- FRONTEND ---------- */}
        <div className="bg-[#0e0f14] rounded-2xl p-7 border border-[#1c1d23] shadow-[0_0_20px_rgba(0,255,150,0.05)] hover:shadow-[0_0_30px_rgba(0,255,150,0.15)] transition">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 bg-[#1c1f2c] rounded-xl flex items-center justify-center">
              <span className="text-white text-xl">🧩</span>
            </div>
            <h3 className="text-xl font-semibold text-white">Frontend Development</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-[#161821] text-gray-300 rounded-lg text-sm border border-[#1f2130]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ---------- BACKEND ---------- */}
        <div className="bg-[#0e0f14] rounded-2xl p-7 border border-[#1c1d23] shadow-[0_0_20px_rgba(155,0,255,0.05)] hover:shadow-[0_0_30px_rgba(155,0,255,0.15)] transition">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 bg-[#29182c] rounded-xl flex items-center justify-center">
              <span className="text-pink-400 text-xl">🛠</span>
            </div>
            <h3 className="text-xl font-semibold text-white">Backend Development</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "Node.js", "Express", "REST APIs", "GraphQL"
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-[#161821] text-gray-300 rounded-lg text-sm border border-[#1f2130]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ---------- DATABASE ---------- */}
        <div className="bg-[#0e0f14] rounded-2xl p-7 border border-[#1c1d23] shadow-[0_0_20px_rgba(0,140,255,0.05)] hover:shadow-[0_0_30px_rgba(0,140,255,0.15)] transition">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 bg-[#18222e] rounded-xl flex items-center justify-center">
              <span className="text-purple-400 text-xl">💾</span>
            </div>
            <h3 className="text-xl font-semibold text-white">Database Management</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "MongoDB", "PostgreSQL", "MySQL", "Supabase"
            ].map((db) => (
              <span
                key={db}
                className="px-3 py-1 bg-[#161821] text-gray-300 rounded-lg text-sm border border-[#1f2130]"
              >
                {db}
              </span>
            ))}
          </div>
        </div>

        {/* ---------- PROGRAMMING LANG ---------- */}
        <div className="bg-[#0e0f14] rounded-2xl p-7 border border-[#1c1d23] shadow-[0_0_20px_rgba(255,140,0,0.05)] hover:shadow-[0_0_30px_rgba(255,140,0,0.15)] transition">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 bg-[#2b1e14] rounded-xl flex items-center justify-center">
              <span className="text-yellow-400 text-xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-white">Programming Languages</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "JavaScript", "TypeScript", "Python", "HTML/CSS"
            ].map((lang) => (
              <span
                key={lang}
                className="px-3 py-1 bg-[#161821] text-gray-300 rounded-lg text-sm border border-[#1f2130]"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* ---------- UI/UX ---------- */}
        <div className="bg-[#0e0f14] rounded-2xl p-7 border border-[#1c1d23] shadow-[0_0_20px_rgba(255,0,120,0.05)] hover:shadow-[0_0_30px_rgba(255,0,120,0.15)] transition">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 bg-[#2b1420] rounded-xl flex items-center justify-center">
              <span className="text-pink-400 text-xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold text-white">Design & UI/UX</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Figma", "UI/UX Design", "Responsive Design", "Three.js"].map((item) => (
              <span
                key={item}
                className="px-3 py-1 bg-[#161821] text-gray-300 rounded-lg text-sm border border-[#1f2130]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ---------- TOOLS ---------- */}
        <div className="bg-[#0e0f14] rounded-2xl p-7 border border-[#1c1d23] shadow-[0_0_20px_rgba(0,200,255,0.05)] hover:shadow-[0_0_30px_rgba(0,200,255,0.15)] transition">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 bg-[#13252e] rounded-xl flex items-center justify-center">
              <span className="text-cyan-400 text-xl">📦</span>
            </div>
            <h3 className="text-xl font-semibold text-white">Tools & Platforms</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "Git", "VS Code", "Postman", "Docker"
            ].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 bg-[#161821] text-gray-300 rounded-lg text-sm border border-[#1f2130]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
