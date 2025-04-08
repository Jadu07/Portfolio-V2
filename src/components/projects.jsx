import React from 'react';
import quickSnatch from '../assets/quick-snatch.png'
import codefoad from '../assets/codefoad.png'
import amazonclone from '../assets/amazonclone.png'
import portfolioV1 from '../assets/portfolio-v1.png'

const projects = [
  {
    title: 'Quick Snatch',
    description: 'A React-based web game for quick reflexes and sharp decision-making.',
    image: quickSnatch,
    bgColor: 'bg-indigo-50',
    github: 'https://github.com/Jadu07/Quick-Snatch',
    liveDemo: 'https://quick-snatch-chi.vercel.app',
  },
  {
    title: 'Codefoad',
    description: 'A responsive website using Html and Css to learn fundamentals of coding.',
    image:  codefoad,
    bgColor: 'bg-teal-50',
    github: 'https://github.com/Jadu07/CodeFoad',
    liveDemo: 'https://codefoad.vercel.app/',
  },
  {
    title: 'Amazon Clone',
    description: 'A simple front-end clone of the Amazon homepage built with only HTML and CSS.',
    image: amazonclone,
    bgColor: 'bg-rose-50',
    github: 'https://github.com/Jadu07/Amazon-Clone',
    liveDemo: 'https://amazon-neon-one.vercel.app/',
  },
  {
    title: 'Portfolio V1',
    description: 'A no-code portal to customize and duplicate educational templates.',
    image: portfolioV1,
    bgColor: 'bg-sky-50',
    github: 'https://github.com/Jadu07/Portfolio',
    liveDemo: 'https://jadu-one.vercel.app/',
  },
];

const ProjectsSection = () => {
  return (
    <section className="w-full min-h-screen flex items-center bg-white">
      <div className="w-[90%] max-w-5xl mx-auto py-20">
        <div className="space-y-4 text-center md:text-left mb-12">
          <h2 className="text-2xl font-medium text-gray-500 mb-2">What I've Built</h2>
          <h1 className="text-5xl font-bold text-gray-900">My Work</h1>
          <div className="h-1 w-100 bg-black rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-3xl overflow-hidden shadow-lg ${project.bgColor} transition hover:shadow-xl p-6 flex flex-col`}
            >
              <div className="w-full h-60 rounded-2xl overflow-hidden mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-black text-black font-medium px-8 py-3 rounded-full hover:bg-black hover:text-white transition"
                >
                  Github
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white font-medium px-8 py-3 rounded-full hover:bg-gray-800 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
