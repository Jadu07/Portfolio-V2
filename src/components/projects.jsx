import React from 'react';

const projects = [
  {
    title: 'Reporter News',
    description: 'A mobile and web platform for a leading news broadcaster.',
    image: 'https://picsum.photos/seed/newsapp/600/400',
    bgColor: 'bg-rose-50',
    github: 'https://github.com/yourusername/reporter-news',
    liveDemo: 'https://reporternews.vercel.app/',
  },
  {
    title: 'Storedada Dashboard',
    description: 'An enterprise solution for in-house ecommerce management.',
    image: 'https://picsum.photos/seed/dashboardui/600/400',
    bgColor: 'bg-indigo-50',
    github: 'https://github.com/yourusername/storedada-dashboard',
    liveDemo: 'https://storedada.vercel.app/',
  },
  {
    title: 'TT Devassy',
    description: 'A B2C ecommerce mobile app for premium jewellery shopping.',
    image: 'https://picsum.photos/seed/jewelleryapp/600/400',
    bgColor: 'bg-sky-50',
    github: 'https://github.com/yourusername/tt-devassy',
    liveDemo: 'https://ttdevassy.vercel.app/',
  },
  {
    title: 'Vidya Portal Case Study',
    description: 'A no-code portal to customize and duplicate educational templates.',
    image: 'https://picsum.photos/seed/vidyaportal/600/400',
    bgColor: 'bg-yellow-50',
    github: 'https://github.com/yourusername/vidya-portal',
    liveDemo: 'https://vidyaportal.vercel.app/',
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
