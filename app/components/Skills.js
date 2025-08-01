import React from 'react'

export default function Skills() {
  return (
    <>
    <div className="text-center mt-14 px-4" id='skills'>
    <h2 className="text-4xl font-bold">Skills</h2>
    <p className="text-gray-400 mt-2">
      Here are some of my skills on which I have been working for the past 1 year.
    </p>
  </div>
  
  <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
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
  </>
  )
}
