import React from 'react';

export default function Experience({ experiences }) {
  return (
    <section
      id="experience"
      className="text-white py-20 flex flex-col items-center px-4"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-4">
        Professional <span className="text-green-400">Experience</span>
      </h2>

      <p className="text-center mb-14 text-gray-400 max-w-2xl">
        A track record of delivering excellence and driving innovation
      </p>

      {/* Cards */}
      <div className="space-y-10 w-full max-w-4xl">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#111321] border border-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-green-900/20 transition"
          >
            {/* Top Row */}
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                {/* Icon Box */}
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-yellow-300 rounded-xl flex items-center justify-center">
                  <img
                    src={exp.logo}
                    alt="logo"
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Name & Company */}
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-green-400 font-medium">{exp.company}</p>
                </div>
              </div>

              {/* Duration */}
              <p className="text-gray-400 text-sm flex items-center gap-2">
                🗓 <span>{exp.duration}</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-300 mt-4 leading-relaxed text-sm">
              {exp.description}
            </p>

            {/* Skills tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-[#1a1c28] border border-gray-700 rounded-full text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
