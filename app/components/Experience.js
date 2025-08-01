import React from 'react'

export default function Experience({experiences}) {
  return (
      <section className=" text-white py-10 flex flex-col items-center mt-10 z-0 px-4" id='experience'>
            <h2 className="text-4xl font-bold text-center mb-6">Experience</h2>
            <p className="text-center mb-10 text-gray-300 max-w-lg">
              My work experience as a software engineer and working on different clubs and projects.
            </p>
            <div className="space-y-8 w-full max-w-2xl">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="border  border-purple-500 p-6 rounded-lg shadow-md  bg-gray-800 transition relative overflow-hidden 
                hover:shadow-lg hover:shadow-purple-800 hover:border-purple-800  hover:scale-105 duration-300 "
                >
                  <div className="absolute inset-0 bg-blue-500 opacity-0  transition duration-300"></div>
                  <div className="flex items-center gap-4 mb-4 relative z-0 ">
                    <img src={exp.logo} alt="logo" className="w-12 h-12 rounded object-contain" />
                    <div className='z-0'>
                      <h3 className="text-lg font-semibold">{exp.title}</h3>
                      <p className="text-sm text-gray-400">{exp.company}</p>
                      <p className="text-xs text-gray-500">{exp.duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-3 text-sm relative z-0">{exp.description}</p>
                  <p className="text-gray-400 font-semibold text-sm relative z-0">Skills: {exp.skills.join(" • ")}</p>
                </div>
              ))}
            </div>
          </section>
  )
}
