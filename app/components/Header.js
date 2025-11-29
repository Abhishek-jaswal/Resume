import React from 'react'
export default function Header() {
  return (
    <div className='sticky top-0 bg-[#0d0f16] z-10'>
    <header className="flex justify-between items-center p-4 max-w-5xl mx-auto 0 ">
    <h1 className="text-2xl font-bold">Portfolio</h1>
     
    <nav className="space-x-6 space-x-6 hidden md:flex">
      <a href="#about" className="hover:text-purple-400">About</a>
      <a href="#skills" className="hover:text-purple-400">Skills</a>
      <a href="#projects" className="hover:text-purple-400">Projects</a>
      <a href="#experience" className="hover:text-purple-400">Experience</a>
      <a href="#education" className="hover:text-purple-400">Education</a>
      <a href="#contact" className="hover:text-purple-400">Contact</a>
    </nav>
    
    <a href="https://github.com/Abhishek-jaswal" className="px-2 py-2 border border-purple-500 rounded-lg hover:bg-purple-500 transition z-0">
      Github Profile
    </a>
  </header>
 
  </div>
  )
}
