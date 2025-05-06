
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <a href="#hero" className="text-white font-bold text-xl">
              <span className="text-portfolio-purple">Port</span>folio
            </a>
            <p className="text-gray-500 text-sm mt-2">
              &copy; {currentYear} Abhinav Maity. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#about" className="text-gray-400 hover:text-portfolio-purple transition-colors text-sm">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-portfolio-purple transition-colors text-sm">
              Projects
            </a>
            <a href="#experience" className="text-gray-400 hover:text-portfolio-purple transition-colors text-sm">
              Experience
            </a>
            <a href="#contact" className="text-gray-400 hover:text-portfolio-purple transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>Designed & Built with React and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
