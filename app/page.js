"use client";

import ContactForm from './components/ContactForm';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function Home() {
  return (
    <div className="text-white min-h-screen bg-[#070a12] relative overflow-hidden">
      <Header />

      <main>
        <Main />

        {/* Divider */}
        <div className="section-divider" />

        <Skills />

        <div className="section-divider" />

        <Projects />

        <div className="section-divider" />

        <Experience />

        <div className="section-divider" />

        <Education />

        <div className="section-divider" />

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}