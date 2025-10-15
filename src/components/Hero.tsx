import  { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { personal } = portfolioData;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-black text-white px-6 py-20">
      {/* Floating 3D Elements in Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* React Logo */}
        <div className="absolute top-20 right-20 w-24 h-24 opacity-20 animate-float">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="2" fill="#61dafb"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1" fill="none"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/>
          </svg>
        </div>
        
        {/* Geometric Circle */}
        <div className="absolute top-40 left-10 w-32 h-32 rounded-full border-4 border-cyan-500/20 animate-float-slow"></div>
        
        {/* Cube */}
        <div className="absolute bottom-40 right-32 w-20 h-20 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-lg rotate-12 animate-float"></div>
        
        {/* JS Logo Style Circle */}
        <div className="absolute bottom-32 left-20 w-28 h-28 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 rounded-lg flex items-center justify-center animate-float-slow">
          <span className="text-4xl font-bold text-yellow-500/40">JS</span>
        </div>
        
        {/* Small dots */}
        <div className="absolute top-60 left-1/4 w-3 h-3 bg-cyan-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-60 right-1/4 w-3 h-3 bg-orange-400/30 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-pink-400/30 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className={`max-w-5xl mx-auto text-center z-10 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Greeting */}
        <p className="text-cyan-400 text-lg md:text-xl mb-4 font-mono tracking-wider">Hello, I'm</p>
        
        {/* Name with Gradient */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-500 bg-clip-text text-transparent">
            {personal.name}
          </span>
        </h1>
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-200 mb-8">
          {personal.title}
        </h2>
        
        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          {personal.tagline}
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a 
            href={personal.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative p-4 bg-gray-800/80 backdrop-blur-sm hover:bg-cyan-500/20 rounded-full transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-cyan-500"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href={personal.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative p-4 bg-gray-800/80 backdrop-blur-sm hover:bg-cyan-500/20 rounded-full transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-cyan-500"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href={`mailto:${personal.email}`}
            className="group relative p-4 bg-gray-800/80 backdrop-blur-sm hover:bg-cyan-500/20 rounded-full transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-cyan-500"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            My Projects
          </a>
          <a 
            href="#skill" 
            className="px-8 py-4 bg-transparent hover:bg-gray-800/50 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 border border-gray-600 hover:border-cyan-500"
          >
            Programming Skills
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;