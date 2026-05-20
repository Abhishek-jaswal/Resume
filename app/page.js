import Header from "./components/Header";
import Main from "./components/Main";
import Skills from "./components/Skills";
import ProjectsSection from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Main />
        <Skills />
        <ProjectsSection />
        <Experience />
        <Education />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}