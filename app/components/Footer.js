import React from 'react'
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-6 text-center">
      <Image
        src="/Abhignite.png"
        alt="Logo"
        width={100}
        height={40} className='mx-auto'/>

      {/* Navigation Links */}
      <div className="flex justify-center gap-6  text-sm">
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
        © 2025 Abhishek Jaswal. All rights reserved.
      </p>
    </footer>
  )
}
