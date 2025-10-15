
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const { personal } = portfolioData;
//   const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          {/* <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              {personal.name}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {personal.title} passionate about creating impactful digital experiences.
            </p>
          </div> */}
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <div className="flex gap-4">
              <a 
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 hover:bg-cyan-500/20 rounded-lg transition-all duration-300 hover:scale-110 border border-gray-800 hover:border-cyan-500"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 hover:bg-cyan-500/20 rounded-lg transition-all duration-300 hover:scale-110 border border-gray-800 hover:border-cyan-500"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${personal.email}`}
                className="p-3 bg-gray-900 hover:bg-cyan-500/20 rounded-lg transition-all duration-300 hover:scale-110 border border-gray-800 hover:border-cyan-500"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
      

      </div>
    </footer>
  );
};

export default Footer;