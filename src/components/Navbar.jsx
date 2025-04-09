import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'works', 'about', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="border-gray-300 border-1 fixed top-5 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-xl px-6 py-0 z-50 w-[90%] max-w-5xl ">
      <div className="flex justify-between items-center">
        <div 
          onClick={() => scrollToSection('home')}
          className="text-xl bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text cursor-pointer "
        >
          <span className="text-2xl">J</span>ADU07 ™
        </div>

        <div className="flex space-x-8 text-lg font-medium m-4">
          <button
            onClick={() => scrollToSection('works')}
            className={`transition ${
              activeSection === 'works'
                ? 'text-blue-600'
                : 'text-black hover:text-gray-500'
            }`}
          >
            Works
          </button>
          
          <button
            onClick={() => scrollToSection('about')}
            className={`transition ${
              activeSection === 'about'
                ? 'text-blue-600'
                : 'text-black hover:text-gray-500'
            }`}
          >
            About
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className={`transition ${
              activeSection === 'contact'
                ? 'text-blue-600'
                : 'text-black hover:text-gray-500'
            }`}
          >
            Contact
          </button>

          <a
            href="https://drive.google.com/file/d/1M6biyRrmuJxEXkXIs2zfJpx4aq04m-C7/view?usp=sharing"
            target="_blank"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
