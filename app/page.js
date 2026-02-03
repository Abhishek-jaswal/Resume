"use client";

import ContactForm from './components/ContactForm';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { motion } from "framer-motion";

export default function Home() {
 

  return (
    <div className="text-white min-h-screen">
     
      <Header />

   
        <Main />
    

    

    
        <Skills />
    

      {/* Projects */}
      <Projects />

      {/* Experience */}
    
        <Experience />
     

      {/* Education */}
      <Education />

      {/* Contact Form */}
  
        <ContactForm />
   

      <Footer />
    </div>
  );
}
