import React from "react";

const skills = [
  { name: "HTML", level: "Advanced", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "hover:text-orange-500" },
  { name: "CSS", level: "Advanced", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "hover:text-blue-500" },
  { name: "JavaScript", level: "Intermediate", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "hover:text-yellow-400" },
  { name: "React", level: "Intermediate", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "hover:text-cyan-400" },
  { name: "Bash", level: "Intermediate", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", color: "hover:text-gray-700" },
  { name: "Tailwind CSS", level: "Intermediate", logo: "https://www.svgrepo.com/show/374118/tailwind.svg", color: "hover:text-teal-500" },
  { name: "GitHub", level: "Advanced", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "hover:text-purple-600" },
  { name: "Python", level: "Advanced", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "hover:text-blue-600" },
  { name: "MySQL", level: "Basic", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "hover:text-orange-600" },
  { name: "WordPress", level: "Advanced", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg", color: "hover:text-blue-700" },
  { name: "Photoshop", level: "Advanced", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg", color: "hover:text-blue-800" },
  { name: "Supabase", level: "Basic", logo: "https://avatars.githubusercontent.com/u/54469796?s=200&v=4", color: "hover:text-green-600" },
];

const SkillsSection = () => {
  return (
    <section className="w-full min-h-screen flex items-center bg-white">
      <div className="w-[90%] max-w-5xl mx-auto py-20">
        <div className="space-y-4 text-center md:text-left mb-12">
          <h2 className="text-2xl font-medium text-gray-500 mb-2">What I Know</h2>
          <h1 className="text-5xl font-bold text-gray-900">My Skillset</h1>
          <div className="h-1 w-100 bg-black rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md border border-zinc-200 rounded-xl p-6 
                       shadow-sm hover:shadow-md transition-all duration-300 
                       transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{skill.name}</h3>
                  <p className="text-sm text-gray-500 font-medium">{skill.level}</p>
                </div>
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
