import React from 'react';
import Image from 'next/image';


export default function Main() {
  return (
    <div className="flex items-center justify-center px-6 mt-20 w-sm">
    <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center" id='about'>
      <div>
        <h1 className="text-5xl font-extrabold">Hi, I am</h1>
        <h2 className="text-5xl font-extrabold text-purple-500 mt-4">Abhishek Jaswal</h2>
        <p className="text-lg mt-4 text-gray-300">
          I am a passionate Full-Stack Developer specializing in modern web technologies like
          JavaScript, ReactJS, Express.js, Django, and Rust. Passionate about building robust backend systems, real-time applications, and seamless user experiences. Seeking opportunities to drive innovation and efficiency in a high-impact development role.
        </p>
            <a href="https://drive.google.com/file/d/1QyOWAWTXwQFsc_2K3bJMQyjBQ0C1HUpE/view?usp=sharing">
        <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition">
          Check Resume
        </button></a>
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
  )
}
