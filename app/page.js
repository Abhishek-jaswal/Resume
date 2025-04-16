import ContactForm from './components/ContactForm';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import  Projects  from './components/Projects';
import Skills from './components/Skills';
import LocalTime.js from './components/LocalTime.js';



export default function Home() {
  const experiences = [
    {
      title: "IT Trainer",
      company: "CII-MCM Trust Multi Skill Training Institute",
      duration: "(June 2022 – 2024)",
      description: "Delivered hands-on training in modern web development, programming, and database management. Designed and implemented interactive learning modules improving engagement and comprehension. Mentored students and junior developers, fostering a strong learning environment.",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap",'Tailwind CSS', 'ReactJS', 'Next.js', 'Figma'],
      logo: "logo-mcm.png", // Replace with actual path
    },
    {
      title: "Maple Innovative Solutions",
      company: "Maple Innovative Solutions",
      duration: "(April 2021 - May 2022)",
      description: "Optimized data processing using Excel and automated workflows. Managed documentation and data entry for over 1,000 health cards.",
      skills: ["Advance Excel"],
      logo: "MIS.png", // Replace with actual path
    },
  ];
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header Section */}
      <Header />
      <LocalTime/>
      {/* Main Section */}
      <Main />
      <Skills />
      <Projects />

      <Experience experiences={experiences} />
      <Education />
      <ContactForm />
      <Footer />
    </div>
  );
}
