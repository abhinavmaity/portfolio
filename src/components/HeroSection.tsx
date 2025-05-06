
import React, { useEffect, useState } from 'react';
import { ArrowDown, Send } from 'lucide-react';

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);
  
  return (
    <section id="hero" className="h-screen flex items-center relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 animated-gradient opacity-20"></div>
      
      {/* Animated particles/stars background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animation: `pulse-slow ${Math.random() * 3 + 2}s infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div 
          className={`max-w-3xl transition-all duration-1000 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-portfolio-purple text-xl md:text-2xl font-medium mb-4">
            Hello, I'm
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Abhinav Maity</span>
          </h1>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-gray-300">
            Full Stack Developer & ML Enthusiast
          </h3>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10">
            I build modern, responsive web applications with a focus on user experience
            and elegant code. Passionate about web development, cloud computing, and AI/ML.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary flex items-center gap-2">
              <Send size={18} />
              Contact Me
            </a>
            <a href="#about" className="btn-outline flex items-center gap-2">
              <ArrowDown size={18} />
              View My Work
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" className="text-gray-400 hover:text-portfolio-purple transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
