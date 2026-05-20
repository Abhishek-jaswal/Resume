import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "UrbanSeru — Local Service Booking Platform",
    date: "2024",
    description:
      "A full-featured local service booking platform connecting customers with verified service providers across categories like home cleaning, plumbing, electricians, and more. Built with real-time availability, booking management, provider dashboards, and a seamless mobile-first checkout flow.",
    tags: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Booking System", "SEO"],
    image: "/assets/urbanseru.png",
    link: "https://urbanseru.com/",
    github: null,
    isVideo: false,
  },
  {
    title: "Fund Tracking Admin & User System",
    date: "Jan 2025",
    description:
      "A full-stack real-time fund management system with Admin and User dashboards. Features include secure authentication, role-based access, transaction management, analytics, WebSocket-like real-time updates using Supabase channels, and a full Issue Management System.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "Realtime", "Tailwind", "TypeScript"],
    image: "/assets/fund.gif",
    link: "https://www.alpkid.com/pro",
    github: "https://github.com/Abhishek-jaswal",
    isVideo: false,
  },
  {
    title: "The North Himalayas",
    date: "Nov 2024",
    description:
      "Built a high-performance landing page for The North Himalayas tourism brand with lead generation, custom forms, SEO optimizations, and a responsive modern UI using Next.js and Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS", "SEO", "Lead Generation"],
    image: "/assets/tnh.mp4",
    link: "https://thenorthhimalayas.com/",
    github: null,
    isVideo: true,
  },
  {
    title: "AI Interview Portal",
    date: "March 2025",
    description:
      "An AI-powered platform that helps users prepare for technical interviews through resume-based question generation, real-time scoring, and GPT-driven mock interviews with instant feedback.",
    tags: ["Next.js", "Node.js", "Hasura", "PostgreSQL", "GPT"],
    image: "/assets/ai-interview.gif",
    link: "https://ai-interview-platform-pied.vercel.app/",
    github: "https://github.com/Abhishek-jaswal",
    isVideo: false,
  },
  {
    title: "Chat Box — Real-time Messaging",
    date: "May 2025",
    description:
      "A fast real-time chat application with group and private chat options, Socket.IO-powered messaging, and a clean minimal design. Built with Next.js and deployed on Vercel.",
    tags: ["Next.js", "Socket.IO", "Tailwind CSS", "Vercel"],
    image: "/assets/chatt.gif",
    link: "https://abhishek-chat.vercel.app/",
    github: "https://github.com/Abhishek-jaswal",
    isVideo: false,
  },
  {
    title: "Portfolio Website",
    date: "March 2024",
    description:
      "A modern, responsive developer portfolio with resume submission, Nodemailer email automation, smooth Framer Motion animations, and full SEO optimization — built in Next.js.",
    tags: ["Next.js", "Tailwind CSS", "Nodemailer", "Framer Motion", "SEO", "Vercel"],
    image: "/assets/resume.gif",
    link: "https://abhishek-jaswal.vercel.app/",
    github: "https://github.com/Abhishek-jaswal",
    isVideo: false,
  },
];

export default function ProjectsSection() {
  return (
    <section
      className="relative py-28 px-6 text-white"
      id="projects"
      aria-labelledby="projects-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content="Abhishek Jaswal — Featured Projects" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[300px] bg-cyan-500/[0.04] blur-[80px] rounded-full pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[250px] bg-green-500/[0.04] blur-[80px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="pill mb-5 inline-flex">🚀 Portfolio</span>
          <h2
            id="projects-heading"
            className="font-syne text-3xl sm:text-4xl font-bold text-white mt-3"
          >
            Featured <span className="text-green-400">Projects</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
            Innovative solutions and creative implementations — from real-time systems
            to AI-powered platforms
          </p>
        </div>

        {/* Projects list */}
        <div className="space-y-8" role="list">
          {projects.map((project, index) => (
            <article
              key={index}
              role="listitem"
              className="group bg-[#0a0d18]/80 backdrop-blur border border-white/[0.06] hover:border-green-500/20 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/[0.05]"
              itemScope
              itemType="https://schema.org/SoftwareApplication"
              itemProp="itemListElement"
            >
              <meta itemProp="position" content={String(index + 1)} />
              <meta itemProp="name" content={project.title} />
              <meta itemProp="description" content={project.description} />
              {project.link && <meta itemProp="url" content={project.link} />}

              <div className={`grid grid-cols-1 md:grid-cols-2 ${index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                {/* Media */}
                <div className="relative h-56 md:h-full min-h-[240px] overflow-hidden">
                  {project.isVideo ? (
                    <video
                      src={project.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-label={`${project.title} demo video`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={`${project.title} — screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    />
                  )}
                  {/* Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-[#0a0d18]/60 to-transparent md:from-transparent md:to-[#0a0d18]/60 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <div className="p-7 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="pill text-[11px]">Featured Project</span>
                      <time className="text-xs text-gray-600 font-mono" dateTime={project.date}>
                        {project.date}
                      </time>
                    </div>

                    <h3 className="font-syne text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <ul className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies used">
                      {project.tags.map((tag, i) => (
                        <li
                          key={i}
                          className="px-2.5 py-1 text-xs bg-white/[0.04] text-gray-400 rounded-lg border border-white/[0.05]"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                      className="flex items-center gap-2 px-4 py-2.5 bg-green-500 hover:bg-green-400 text-black text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-px shadow-lg shadow-green-500/20"
                    >
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      Live Demo
                    </Link>
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.07] text-gray-300 text-sm font-medium rounded-xl transition-all duration-200"
                      >
                        <Github className="w-3.5 h-3.5" aria-hidden="true" />
                        GitHub
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
