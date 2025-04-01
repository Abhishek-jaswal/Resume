import React from 'react'

export default function Education() {
    const education = [
        {
            title: "Certified Trainer ",
            company: "NIIT Foundation",
            duration: "( 2023 )",
            description: "Web Development, Java Programming",
            logo: "niit.png", // Replace with actual path
          }, 
          {
            title: "Software Diploma",
            company: "NIIT Foundation",
            duration: "( 2018 – 2021 )",
            description: "DSA, C++, Java, HTML, CSS, JavaScript, MySQL and C#",
            logo: "NIIT-1.png", // Replace with actual path
          },
          {
          title: "B.Sc in Chemistry",
          company: "P.G College Dharamshala",
          duration: "( 2015 – 2018 )",
          description: "Delivered hands-on training in modern web development, programming, and database management. Designed and implemented interactive learning modules improving engagement and comprehension. Mentored students and junior developers, fostering a strong learning environment.",
          logo: "dharamshala.png", // Replace with actual path
        },
      ];
  return (
    <section className=" text-white flex flex-col items-center mt-10 z-0" id='experience'>
    <h2 className="text-4xl font-bold text-center mb-6">Education</h2>
    <p className="text-center mb-10 text-gray-300 max-w-lg">
    My education has been a journey of self-discovery and growth. My educational details are as follows.
    </p>
    <div className="space-y-8 w-full max-w-2xl">
      {education.map((edu, index) => (
        <div
          key={index}
          className="border  border-purple-500 p-6 rounded-lg shadow-md  bg-gray-800 transition relative overflow-hidden 
        hover:shadow-lg hover:shadow-purple-800 hover:border-purple-800  hover:scale-105 duration-300 "
        >
          <div className="absolute inset-0 bg-blue-500 opacity-0  transition duration-300"></div>
          <div className="flex items-center gap-4 mb-4 relative z-0 ">
            <img src={edu.logo} alt="logo" className="w-12 h-12 rounded object-contain" />
            <div className='z-0'>
              <h3 className="text-lg font-semibold">{edu.title}</h3>
              <p className="text-sm text-gray-400">{edu.company}</p>
              <p className="text-xs text-gray-500">{edu.duration}</p>
            </div>
          </div>
          <p className="text-gray-300 mb-3 text-sm relative z-0">{edu.description}</p>
          
        </div>
      ))}
    </div>
  </section>
  )
}
