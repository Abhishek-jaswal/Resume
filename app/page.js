import Image from 'next/image';


export default function Home() {
  const experiences = [
    {
      title: "IT Trainer",
      company: "CII-MCM Trust Multi Skill Training Institute",
      duration: "(June 2022 – 2024)",
      description: "Delivered hands-on training in modern web development, programming, and database management. Designed and implemented interactive learning modules improving engagement and comprehension. Mentored students and junior developers, fostering a strong learning environment.",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap",'Tailwind CSS', 'ReactJS', 'Next.js', 'Figma'],
      logo: "/images/datascience-logo.png", // Replace with actual path
    },
    {
      title: "Maple Innovative Solutions",
      company: "Maple Innovative Solutions",
      duration: "(April 2021 - May 2022)",
      description: "Optimized data processing using Excel and automated workflows. Managed documentation and data entry for over 1,000 health cards.",
      skills: ["Advance Excel"],
      logo: "/images/vinculum-logo.png", // Replace with actual path
    },
  ];
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header Section */}
      <header className="flex justify-between items-center p-4 max-w-5xl mx-auto sticky top-0 bg-gray-900 z-10">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <nav className="space-x-6 space-x-6 hidden md:flex">
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#skills" className="hover:text-purple-400">Skills</a>
          <a href="#experience" className="hover:text-purple-400">Experience</a>
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#education" className="hover:text-purple-400">Education</a>
        </nav>
        <a href="https://github.com/Abhishek-jaswal" className="px-2 py-2 border border-purple-500 rounded-lg hover:bg-purple-500 transition z-0">
          Github Profile
        </a>
      </header>

      {/* Main Section */}
      <div className="flex items-center justify-center px-6 mt-20 w-sm">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center" id='about'>
          <div>
            <h1 className="text-5xl font-extrabold">Hi, I am</h1>
            <h2 className="text-5xl font-extrabold text-purple-500 mt-4">Abhishek Jaswal</h2>
            <p className="text-lg mt-4 text-gray-300">
              I am a passionate Full-Stack Developer specializing in modern web technologies like
              JavaScript, ReactJS, Express.js, Django, and Rust. Passionate about building robust backend systems, real-time applications, and seamless user experiences. Seeking opportunities to drive innovation and efficiency in a high-impact development role.
            </p>
            <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition">
              Check Resume
            </button>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-60 h-60 md:w-80 md:h-80 border-2 border-purple-500 rounded-full overflow-hidden">
              <Image
                src="/abhishekk.jpeg" // Replace with your image path
                alt="Profile Picture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-20" id='skills'>
  <h2 className="text-4xl font-bold">Skills</h2>
  <p className="text-gray-400 mt-2">
    Here are some of my skills on which I have been working for the past 1 year.
  </p>
</div>

<div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Frontend Skills */}
  <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-purple-500">
    <h3 className="text-2xl font-semibold text-center">Frontend</h3>
    <div className="flex flex-wrap justify-center gap-3 mt-4">
      {[
        { name: "Vite", img: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" },
        { name: "Next Js", img: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
        { name: "HTML", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
        { name: "CSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
        { name: "JavaScript", img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
        { name: "Bootstrap", img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
        { name: "Tailwind", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" }
      ].map((skill) => (
        <div
          key={skill.name}
          className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg text-sm font-semibold"
        >
          <img src={skill.img} alt={skill.name} className="w-6 h-6" />
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Backend Skills */}
  <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-purple-500">
    <h3 className="text-2xl font-semibold text-center">Backend</h3>
    <div className="flex flex-wrap justify-center gap-3 mt-4">
      {[
        { name: "Node Js", img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
        { name: "Express Js", img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
        { name: "GraphQL", img: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" },
        { name: "Python", img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
        { name: "MySQL", img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg" },
        { name: "MongoDB", img: "https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg" },
        { name: "Rust", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg" },
        { name: "C++", img: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" }
      ].map((skill) => (
        <div
          key={skill.name}
          className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg text-sm font-semibold"
        >
          <img src={skill.img} alt={skill.name} className="w-6 h-6" />
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Tools Section (Centered on Row 2) */}
  <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-purple-500 col-span-1 md:col-span-2 mx-auto justify-self-center">
    <h3 className="text-2xl font-semibold text-center">Tools & Devops</h3>
    <div className="flex flex-wrap justify-center gap-3 mt-4">
      {[
        { name: "Postman", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
        { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Hasura", src: "https://hasura.io/brand-assets/hasura-icon-dark.svg" },
        { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
      ].map((tool) => (
        <span
          key={tool.name}
          className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg text-sm font-semibold"
        >
          <img src={tool.src} alt={tool.name} className="w-5 h-5" />
          {tool.name}
        </span>
      ))}
    </div>
  </div>
</div>

      <section className=" text-white py-10 flex flex-col items-center mt-10 z-0" id='experience'>
        <h2 className="text-4xl font-bold text-center mb-6">Experience</h2>
        <p className="text-center mb-10 text-gray-300 max-w-lg">
          My work experience as a software engineer and working on different clubs and projects.
        </p>
        <div className="space-y-8 w-full max-w-2xl">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border  border-purple-500 p-6 rounded-lg shadow-md  bg-gray-900 transition relative overflow-hidden 
            hover:shadow-lg hover:shadow-purple-800 hover:border-purple-800  hover:scale-105 duration-300 "
            >
              <div className="absolute inset-0 bg-blue-500 opacity-0  transition duration-300"></div>
              <div className="flex items-center gap-4 mb-4 relative z-0">
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
      <footer className="bg-gray-900 text-white py-6 text-center">
      <h2 className="text-lg font-bold text-purple-400">Abhishek Jaswal</h2>

      {/* Navigation Links */}
      <div className="flex justify-center gap-6 mt-3 text-sm">
        {["About", "Skills", "Experience", "Projects", "Education"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition">
            {item}
          </a>
        ))}
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="text-xl hover:text-purple-400 transition">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-xl hover:text-purple-400 transition">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="text-xl hover:text-purple-400 transition">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-400 mt-4">
        © 2024 Abhishek Jaswal. All rights reserved.
      </p>
    </footer>
    </div>
  );
}
