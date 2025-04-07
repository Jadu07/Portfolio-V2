import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="relative bg-white">
      <Navbar />
      
      <div className="snap-y snap-mandatory h-screen overflow-y-auto">
        <div>
          <section id="home" className="min-h-screen snap-start">
            <Hero />
          </section>
          
          <section id="skills" className="min-h-screen snap-start">
            <Skills />
          </section>
          
          <section id="works" className="min-h-screen snap-start">
            <Projects />
          </section>
          
          <section id="about" className="min-h-screen snap-start">
            <About />
          </section>
          
          <section id="contact" className="h-screen snap-start">
            <Contact />
          </section>
        </div>

        <div className="snap-end">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;