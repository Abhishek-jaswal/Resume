import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section className="relative mt-20 text-white" id="projects">
         {/* Background glow */}
      <div className="absolute left-1/2 w-72 h-72 sm:w-96 sm:h-96
          bg-cyan-500/5 sm:bg-cyan-500/10
        blur-2xl sm:blur-3xl animate-pulse" />

      <div className="absolute bottom-1/4 -right-1/7   w-72 h-72 sm:w-96 sm:h-96
        bg-green-500/5 sm:bg-green-500/10
        blur-2xl sm:blur-3xl animate-pulse delay-1000" />
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-3">
          Featured <span className="text-green-400">Projects</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Showcasing innovative solutions and creative implementations across various domains
        </p>

        {/* Projects */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#0f1115] border border-[#1b1d24] rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(0,255,170,0.06)] hover:shadow-[0_0_35px_rgba(0,255,170,0.15)] transition-all duration-300"
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-1 md:grid-cols-2"
              >
                {/* MEDIA SECTION */}
                <div className="relative h-64 md:h-full w-full">
                  {project.isVideo ? (
                    <video
                      src={project.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300"
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition duration-300"
                    />
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-7 flex flex-col justify-between">

                  {/* Featured Badge */}
                  <span className="text-xs bg-[#1e2a22] text-green-400 border border-green-700 px-3 py-1 rounded-full w-fit mb-3">
                    Featured Project
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{project.date}</p>

                  {/* Description */}
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-[#1a1c23] text-gray-300 rounded-md border border-[#2a2d36]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex items-center gap-4">
                    <button className="px-4 py-2 rounded-lg border border-gray-600 text-gray-300 text-sm flex items-center gap-2 hover:bg-gray-800 transition">
                      GitHub
                    </button>

                    <button className="px-4 py-2 rounded-lg bg-green-500 text-black font-medium text-sm hover:bg-green-400 transition">
                      Live Demo
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  // ⭐ MOST IMPORTANT PROJECT
  {
    title: 'Fund Tracking Admin & User System',
    date: 'Jan 2025',
    description:
      'A full-stack real-time fund management system with Admin and User dashboards. Features include secure authentication, role-based access, transaction management, add/edit modals, filters, analytics, WebSocket-like real-time updates using Supabase channels, and a full Issue Management System.',
    tags: ['Next.js', 'Supabase', 'PostgreSQL', 'Realtime', 'Tailwind', 'TypeScript'],
    image: '/assets/fund.gif',
    link: 'https://www.alpkid.com/pro',
    important: true,
    isVideo: false,
  },

  {
    title: 'The North Himalayas',
    date: 'Nov 2025',
    description:
      'Built a high-performance landing page for The North Himalayas tourism brand with lead generation, custom forms, SEO optimizations, and responsive modern UI using Next.js and Tailwind CSS.',
    tags: ['Next.js', 'Tailwind CSS', 'SEO', 'Lead Generation'],
    image: '/assets/tnh.mp4',  // <-- YOUR VIDEO
    link: 'https://thenorthhimalayas.com/',
    important: true,
    isVideo: true,             // <-- IMPORTANT
  },

  {
    title: 'AI Interview Portal',
    date: 'March 2025',
    description:
      'An AI-powered platform that helps users prepare for technical interviews through resume-based question generation, real-time scoring, and GPT-driven mock interviews.',
    tags: ['Next.js', 'Node.js', 'Hasura', 'PostgreSQL'],
    image: '/assets/ai-interview.gif',
    link: 'https://ai-interview-platform-pied.vercel.app/',
    important: true,
    isVideo: false,
  },

  {
    title: 'Chat Box',
    date: 'May 2025',
    description:
      'A fast and simple chat app with real-time messaging, group and private chat options, and a clean design. Built with Next.js and Socket.IO.',
    tags: ['Next.js', 'Socket.IO'],
    image: '/assets/chatt.gif',
    link: 'https://abhishek-chat.vercel.app/',
    important: true,
    isVideo: false,
  },

  {
    title: 'Portfolio Website',
    date: 'March 2024',
    description:
      'Developed a modern, responsive portfolio with resume submission, email automation using Nodemailer, and smooth UI components built in Next.js.',
    tags: ['Next JS', 'Tailwind CSS', 'Nodemailer', 'Vercel'],
    image: '/assets/resume.gif',
    link: 'https://abhishek-jaswal.vercel.app/',
    important: true,
    isVideo: false,
  },
];
