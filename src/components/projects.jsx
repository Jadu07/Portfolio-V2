import React from 'react';
import quickSnatch from '../assets/quick-snatch.png'
import codefoad from '../assets/codefoad.png'
import amazonclone from '../assets/amazonclone.png'
import portfolioV1 from '../assets/portfolio-v1.png'
import wordverse from '../assets/wordverse.png'
import nexload from '../assets/nexload.png'
import randomizer from '../assets/randomizer.png'

const projects = [
  {
    title: 'Nexload',
    description: 'A platform to upload and download resources like Web Templates, Icons, Fonts, and More',
    image: nexload,
    bgColor: 'bg-pink-50',
    github: 'https://github.com/Jadu07/nexload',
    liveDemo: 'https://nexload.vercel.app/',
  },
  {
    title: 'The Randomizer',
    description: 'LMS website created in Wordpress for offering free Courses. DEMO User ID: NST and Password: Newton',
    image: randomizer,
    bgColor: 'bg-blue-50',
    github: 'https://www.notion.so/WordPress-Websites-Do-Not-Have-GitHub-Repositories-1e3faad478c1804d972ecb0016075481?pvs=4',
    liveDemo: 'https://therandomizers.epizy.com/',
  },
  {
    title: 'Word Verse',
    description: 'A simple and fast dictionary app to look up word meanings and more.',
    image: wordverse,
    bgColor: 'bg-purple-50',
    github: 'https://github.com/Jadu07/Word-Verse',
    liveDemo: 'https://word-verse.vercel.app',
  },
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
    bgColor: 'bg-blue-50',
    github: 'https://github.com/Jadu07/CodeFoad',
    liveDemo: 'https://codefoad.vercel.app/',
  },
  {
    title: 'Amazon Clone',
    description: 'A simple front-end clone of the Amazon homepage built with only HTML and CSS.',
    image: amazonclone,
    bgColor: 'bg-fuchsia-50',
    github: 'https://github.com/Jadu07/Amazon-Clone',
    liveDemo: 'https://amazon-neon-one.vercel.app/',
  },
  {
    title: 'Portfolio V1',
    description: 'A no-code portal to customize and duplicate educational templates.',
    image: portfolioV1,
    bgColor: 'bg-zinc-50',
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
