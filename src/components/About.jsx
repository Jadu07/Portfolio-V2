import React from 'react';

const timeline = [
  {
    year: "2023 - Present",
    title: "B.Tech in Computer Science",
    organization: "Newton School of Technology, Pune",
    description: "Currently pursuing Computer Science Engineering with focus on full-stack development and data structures."
  },
  {
    year: "2023",
    title: "WordPress Developer Intern",
    organization: "Himanshi IT Solutions",
    description: "Created and maintained client websites, implemented custom themes and plugins."
  },
  {
    year: "2021 - 2023",
    title: "Higher Secondary Education",
    organization: "Silver Bells Convent School, Bhopal",
    description: "PCM with distinction in mathematics and computer science."
  },
  {
    year: "2019 - 2021",
    title: "Secondary Education",
    organization: "Sagar Public School, Bhopal",
    description: "Outstanding performance in mathematics and science subjects."
  }
];

const codingProfiles = [
  {
    platform: "LeetCode",
    username: "jadu07",
    stats: "300+ problems solved",
    link: "https://leetcode.com/jadu07",
    icon: "https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png",
    bgColor: "hover:bg-orange-50"
  },
  {
    platform: "CodeChef",
    username: "jadu07",
    stats: "2⭐ coder (1622)",
    link: "https://www.codechef.com/users/jadu07",
    icon: "https://cdn.codechef.com/images/cc-logo.svg",
    bgColor: "hover:bg-red-50"
  },
  {
    platform: "GitHub",
    username: "jadu07",
    stats: "50+ repositories",
    link: "https://github.com/jadu07",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    bgColor: "hover:bg-gray-50"
  }
];

const About = () => {
  return (
    <section id="about" className="w-full min-h-screen flex items-center bg-white">
      <div className="w-[90%] max-w-5xl mx-auto py-20">
        {/* Header */}
        <div className="space-y-4 text-center md:text-left mb-16">
          <h2 className="text-2xl font-medium text-gray-500 mb-2">Who I Am</h2>
          <h1 className="text-5xl font-bold text-gray-900">About Me</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Bio and Coding Profiles */}
          <div className="space-y-8">
            {/* Profile Image with Gradient */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative">
                <img
                  src="https://picsum.photos/seed/profile/600/800"
                  alt="Profile"
                  className="w-full h-[400px] object-cover rounded-3xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Yashraj Chouhan</h3>
                  <p className="text-sm opacity-90">Aspiring Software Engineer</p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                I'm a Computer Science student at Newton School of Technology, passionate about creating innovative solutions 
                through code. With a strong foundation in full-stack development and problem-solving, I strive to build 
                applications that make a difference.
              </p>
            </div>

            {/* Coding Profiles Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Coding Profiles</h3>
              <div className="grid grid-cols-3 gap-4">
                {codingProfiles.map((profile, index) => (
                  <a
                    key={index}
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center p-4 rounded-xl border border-gray-100 
                      backdrop-blur-sm transition-all duration-300 
                      hover:shadow-sm ${profile.bgColor} group`}
                  >
                    <div className="w-12 h-12 mb-3 rounded-full flex items-center justify-center bg-white/80 p-2">
                      <img
                        src={profile.icon}
                        alt={profile.platform}
                        className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">{profile.platform}</h4>
                    <p className="text-xs text-gray-500 text-center">{profile.stats}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-gray-900">Education & Experience</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className="group relative border-l-2 border-gray-200 pl-6 pb-6 hover:border-gray-400 transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-white border-2 border-gray-200 group-hover:border-gray-400 transition-colors"></div>
                  
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-gray-500">{item.year}</span>
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 font-medium">{item.organization}</p>
                    <p className="text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
