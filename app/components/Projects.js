import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section className="relative py-28 px-6 text-white" id="projects">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[300px] bg-cyan-500/[0.04] blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[250px] bg-green-500/[0.04] blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="pill mb-5 inline-flex">🚀 Portfolio</span>
          <h2 className="font-syne text-3xl sm:text-4xl font-bold text-white mt-3">
            Featured <span className="text-green-400">Projects</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
            Showcasing innovative solutions and creative implementations across various domains
          </p>
        </div>

        {/* Projects list */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#0a0d18]/80 backdrop-blur border border-white/[0.06] hover:border-green-500/20 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/[0.05]"
            >
              <div className={`grid grid-cols-1 md:grid-cols-2 ${index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                {/* MEDIA */}
                <div className="relative h-56 md:h-full min-h-[240px] overflow-hidden">
                  {project.isVideo ? (
                    <video
                      src={project.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    />
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d18]/60 to-transparent md:from-transparent md:to-[#0a0d18]/60 pointer-events-none" />
                </div>

                {/* CONTENT */}
                <div className="p-7 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="pill text-[11px]">Featured Project</span>
                      <span className="text-xs text-gray-600 font-mono">{project.date}</span>
                    </div>

                    <h3 className="font-syne text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs bg-white/[0.04] text-gray-400 rounded-lg border border-white/[0.05]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-green-500 hover:bg-green-400 text-black text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-px shadow-lg shadow-green-500/20"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </Link>
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.07] text-gray-300 text-sm font-medium rounded-xl transition-all duration-200">
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "Fund Tracking Admin & User System",
    date: "Jan 2025",
    description:
      "A full-stack real-time fund management system with Admin and User dashboards. Features include secure authentication, role-based access, transaction management, add/edit modals, filters, analytics, WebSocket-like real-time updates using Supabase channels, and a full Issue Management System.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "Realtime", "Tailwind", "TypeScript"],
    image: "/assets/fund.gif",
    link: "https://www.alpkid.com/pro",
    isVideo: false,
  },
  {
    title: "The North Himalayas",
    date: "Nov 2025",
    description:
      "Built a high-performance landing page for The North Himalayas tourism brand with lead generation, custom forms, SEO optimizations, and responsive modern UI using Next.js and Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS", "SEO", "Lead Generation"],
    image: "/assets/tnh.mp4",
    link: "https://thenorthhimalayas.com/",
    isVideo: true,
  },
  {
    title: "AI Interview Portal",
    date: "March 2025",
    description:
      "An AI-powered platform that helps users prepare for technical interviews through resume-based question generation, real-time scoring, and GPT-driven mock interviews.",
    tags: ["Next.js", "Node.js", "Hasura", "PostgreSQL"],
    image: "/assets/ai-interview.gif",
    link: "https://ai-interview-platform-pied.vercel.app/",
    isVideo: false,
  },
  {
    title: "Chat Box",
    date: "May 2025",
    description:
      "A fast and simple chat app with real-time messaging, group and private chat options, and a clean design. Built with Next.js and Socket.IO.",
    tags: ["Next.js", "Socket.IO"],
    image: "/assets/chatt.gif",
    link: "https://abhishek-chat.vercel.app/",
    isVideo: false,
  },
  {
    title: "Portfolio Website",
    date: "March 2024",
    description:
      "Developed a modern, responsive portfolio with resume submission, email automation using Nodemailer, and smooth UI components built in Next.js.",
    tags: ["Next.js", "Tailwind CSS", "Nodemailer", "Vercel"],
    image: "/assets/resume.gif",
    link: "https://abhishek-jaswal.vercel.app/",
    isVideo: false,
  },
];