import React from 'react'

export default function Footer() {
  return (
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
        © 2025 Abhishek Jaswal. All rights reserved.
      </p>
    </footer>
  )
}
