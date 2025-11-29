import React from 'react';

export default function Education() {
  const education = [
    {
      title: "Certified Trainer",
      company: "NIIT Foundation",
      duration: "( 2023 )",
      description: "Web Development, Java Programming",
      logo: "niit.png",
    },
    {
      title: "Software Diploma",
      company: "NIIT Foundation",
      duration: "( 2018 – 2021 )",
      description: "DSA, C++, Java, HTML, CSS, JavaScript, MySQL and C#",
      logo: "NIIT-1.png",
    },
    {
      title: "B.Sc in Chemistry",
      company: "P.G College Dharamshala",
      duration: "( 2015 – 2018 )",
      description: "",
      logo: "dharamshala.png",
    },
  ];

  return (
    <section
      className="text-white flex flex-col items-center  px-4"
      id="education"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-2">
        Academic <span className="text-green-400">Background</span>
      </h2>

      <p className="text-gray-400 text-center max-w-2xl mb-14">
        Building a strong educational foundation for technical excellence
      </p>

      {/* Cards */}
      <div className="space-y-10 w-full max-w-4xl">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-[#111321] border border-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-green-900/20 transition"
          >
            {/* Top Row */}
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                {/* Yellow Icon Box */}
                <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center">
                  <img
                    src={edu.logo}
                    alt="logo"
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Title + Institute */}
                <div>
                  <h3 className="text-xl font-semibold">{edu.title}</h3>
                  <p className="text-green-400 font-medium">{edu.company}</p>
                  <p className="text-gray-400 text-sm">{edu.duration}</p>
                </div>
              </div>

              {/* GPA Box (Optional—matching screenshot design) */}
              <div className="bg-[#0f2b23] text-green-300 px-4 py-1 rounded-xl text-sm border border-green-700">
                GPA  
                <span className="ml-2 font-semibold">
                  {index === 0 ? "3.9/4.0" : "3.8/4.0"}
                </span>
              </div>
            </div>

            {/* Description */}
            {edu.description && (
              <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                {edu.description}
              </p>
            )}

            {/* Key Achievements Placeholder (You can fill this anytime) */}
            <div className="mt-4 space-y-2">
              {/* Heading */}
              {/* Example tags — remove or update based on your actual achievements */}
              {/* <p className="text-yellow-400 font-semibold text-sm">🎓 Key Achievements</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs bg-[#1a1c28] border border-gray-700 rounded-full text-gray-300">
                  First Class with Distinction
                </span>
                <span className="px-3 py-1 text-xs bg-[#1a1c28] border border-gray-700 rounded-full text-gray-300">
                  Best Project Award
                </span>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
