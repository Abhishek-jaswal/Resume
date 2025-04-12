import Image from 'next/image';

const projects = [
  {
    title: 'Portfolio',
    date: 'March 2024',
    description:
      'Developed a MERN Stack application that allows users to search, write reviews of their favorite movies.',
    tags: ['Next JS', 'Tailwind css', 'Nodemailer', 'Vercel'],
    image: '/assets/resume.gif',
  },
  {
    title: 'CII-MCM',
    date: 'August 2024',
    description:
      'A PHP webapp application for managing all types of blood reports, both user- and admin-side.',
    tags: ["JavaScript",'Tailwind CSS', 'ReactJS','Netlify'],
    image: '/assets/cii.gif',
  },
  {
    title: 'Fashion Hub',
    date: 'April 2024',
    description:
      'A Movie app made with ReactJS and RestAPI. Users can search and view movies globally.',
    tags: [ "JavaScript", "Bootstrap",'Tailwind CSS','Netlify' , ],
    image: '/assets/foss.gif',
  },
   {
    title: 'Admin Panel',
    date: 'Jan 2024 – March 2024',
    description:
      'Developed a MERN Stack application that allows users to search, write reviews of their favorite movies.',
    tags: [ "JavaScript",'Next.js','Vercel'],
    image: '/assets/admin.gif',
  },
  {
    title: 'Entrance Exam',
    date: 'March 2024',
    description:
      'A PHP webapp application for managing all types of blood reports, both user- and admin-side.',
    tags: ["JavaScript",'Tailwind CSS', 'Node.js','Netlify'],
    image: '/assets/entrance exam.gif',
  },
  {
    title: 'Foss United',
    date: 'Jan 2024 – March 2024',
    description:
      'A Movie app made with ReactJS and RestAPI. Users can search and view movies globally.',
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
                    className="text-purple-600 text-xs   rounded-full p-1 border border-purple-500"
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
