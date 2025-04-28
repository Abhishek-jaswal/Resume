import Image from 'next/image';

const projects = [
  {
    title: 'Portfolio',
    date: 'March 2024',
    description:
      'Developed a modern, responsive resume submission webpage using Next.js, Tailwind CSS, Nodemailer, and Vercel for deployment.',
    tags: ['Next JS', 'Tailwind css', 'Nodemailer', 'Vercel'],
    image: '/assets/resume.gif',
  }, {
    title: 'AI Interview Portal',
    date: 'March 2025',
    description:
      ' An AI-powered platform that helps users prepare for technical interviews through resume-based question generation, real-time scoring, and GPT-driven mock interviews.',
    tags: [" Next.js",  'Node.js', 'Hasura', 'PostgreSQL'],
    image: '/assets/ai-interview.gif',
  },
  {
    title: 'CII-MCM',
    date: 'August 2024',
    description:
      'Developed a student registration form during the CII MCM course launch using modern web technologies (Next.js, Tailwind CSS, Nodemailer) to collect user data and send notifications via email.',
    tags: ["JavaScript",'Tailwind CSS', 'ReactJS','Netlify'],
    image: '/assets/cii.gif',
  },
  {
    title: 'Fashion Hub',
    date: 'April 2024',
    description:
      'Built an online shopping platform "Fashion Hub" using Bootstrap, enabling users to view and buy fashion products.',
    tags: [ "JavaScript", "Bootstrap",'Tailwind CSS','Netlify' , ],
    image: '/assets/foss.gif',
  }, 
   
  {
    title: 'Entrance Exam',
    date: 'March 2024',
    description:
      'Created a full-featured online entrance exam platform enabling student registration, secure login, and exam start flow.',
    tags: ["JavaScript",'Tailwind CSS', 'Node.js','Netlify'],
    image: '/assets/entrance exam.gif',
  },
  {
    title: 'Foss United',
    date: 'Jan 2024 – March 2024',
    description:
      'Recreated the FOSS United website UI using Bootstrap, ensuring mobile-first and responsive design.',
    tags: ["JavaScript", "Bootstrap",'Netlify'],
    image: '/assets/foss united.gif',
  },

];

export default function ProjectsSection() {
  return (
    <section className="mt-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4" id='projects'>
        <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
        <p className="text-center text-gray-400 mb-12">
          I have worked on a wide range of projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform duration-300 shadow-lg border border-purple-500"
            >
              <div className="w-auto h-40 relative rounded-xl overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
                
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-purple-300 text-xs   rounded-full p-1 border border-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-1 ">{project.date}</p>
              <p className="text-sm text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
