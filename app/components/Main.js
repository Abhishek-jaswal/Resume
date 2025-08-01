"use client"; // ✅ This line is required for using browser-only libraries

import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import LocalTime from './LocalTime';
export default function Main() {
  return (
    <div className="flex items-center justify-center px-6 mt-20 w-sm">
     <LocalTime />
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center" id='about'>
    
        <div>
          
          <h1 className="text-5xl font-extrabold">Hi, I am</h1>
          <div className="text-4xl font-extrabold text-purple-500 mt-4">
            <Typewriter
              options={{
                strings: ['Abhishek Jaswal','Welcome to my portfolio!', 'Full Stack Developer', 'Open Source Contributor'],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </div>

          <p className="text-lg mt-4 text-gray-300">
          I’m a results-driven Full-Stack Developer with expertise in modern technologies including JavaScript, ReactJS, Express.js, Django, and Rust. I specialize in building scalable backend systems, real-time web applications, and seamless user interfaces that deliver exceptional digital experiences.
          </p>

          <a href="https://drive.google.com/file/d/1xWKihiyRgk85m0ngt6Kawke9USFLKjxn/view?usp=sharing">
            <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition">
              Check Resume
            </button>
          </a>
        </div>

        <div className="relative flex justify-center">
          <div className="relative w-60 h-60 md:w-80 md:h-80 border-2 border-purple-500 rounded-full overflow-hidden">
            <Image
              src="/abhishekk.jpeg"
              alt="Profile Picture"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
