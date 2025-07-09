import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Portfolio',
    date: 'March 2024',
    description:
      'Developed a modern, responsive resume submission webpage using Next.js, Tailwind CSS, Nodemailer, and Vercel for deployment.',
    tags: ['Next JS', 'Tailwind css', 'Nodemailer', 'Vercel'],
    image: '/assets/resume.gif',
    link: 'https://abhishek-jaswal.vercel.app/',
  },
  {
    title: 'AI Interview Portal',
    date: 'March 2025',
    description:
      'An AI-powered platform that helps users prepare for technical interviews through resume-based question generation, real-time scoring, and GPT-driven mock interviews.',
    tags: ['Next.js', 'Node.js', 'Hasura', 'PostgreSQL'],
    image: '/assets/ai-interview.gif',
    link: 'https://ai-interview-platform-pied.vercel.app/',
  },
  {
    title: 'CII-MCM',
    date: 'August 2024',
    description:
      'Developed a student registration form during the CII MCM course launch using modern web technologies (Next.js, Tailwind CSS, Nodemailer) to collect user data and send notifications via email.',
    tags: ['JavaScript', 'Tailwind CSS', 'ReactJS', 'Netlify'],
    image: '/assets/cii.gif',
    link: 'https://ciimcmtrust.netlify.app/',
  },
  {
    title: 'Fashion Hub',
    date: 'April 2024',
    description:
      'Built an online shopping platform "Fashion Hub" using Bootstrap, enabling users to view and buy fashion products.',
    tags: ['JavaScript', 'Bootstrap', 'Tailwind CSS', 'Netlify'],
    image: '/assets/foss.gif',
    link: 'https://famms-bootstrap.netlify.app/',
  },
  {
    title: 'Chat Box',
    date: 'May 2025',
    description:
      'A fast and simple chat app with real-time messaging, group and private chat options, and a clean design. Built with Next.js and Socket.IO.',
    tags: ['Next.js', 'Socket.IO'],
    image: '/assets/chatt.gif',
    link: 'https://abhishek-chat.vercel.app/',
  },
  {
    title: 'Foss United',
    date: 'Jan 2024 – March 2024',
    description:
      'Recreated the FOSS United website UI using Bootstrap, ensuring mobile-first and responsive design.',
    tags: ['JavaScript', 'Bootstrap', 'Netlify'],
    image: '/assets/foss united.gif',
    link: 'https://foss-united.netlify.app/',
  },
];

export default function ProjectsSection() {
  return (
    <section className="mt-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4" id="projects">
        <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
        <p className="text-center text-gray-400 mb-12">
          I have worked on a wide range of projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-gray-800 rounded-2xl shadow-md p-4 border border-purple-500 hover:scale-105 transition-transform duration-300 flex flex-col h-full">
                {/* Image Section */}
                <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-purple-300 text-xs rounded-full px-2 py-1 border border-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title, Date, Description */}
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{project.date}</p>
                <p className="text-sm text-gray-300 flex-grow">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
