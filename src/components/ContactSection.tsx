
import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [copyEmailText, setCopyEmailText] = useState('Copy Email');
  const email = 'abhinav.maity2003@gmail.com';
  const phone = '9904202273';
  const location = 'India';
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/abhinavmaity',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/abhinav-maity-a23bb3227',
      icon: Linkedin,
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopyEmailText('Copied!');
    toast.success('Email copied to clipboard!');
    
    setTimeout(() => {
      setCopyEmailText('Copy Email');
    }, 2000);
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <h2 className="section-title text-center mb-16">Get In Touch</h2>
        
        <div className="max-w-3xl mx-auto glass-card p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-portfolio-purple/20 flex items-center justify-center">
              <Mail size={32} className="text-portfolio-purple" />
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold mb-2">Let's Connect</h3>
          <p className="text-gray-400 mb-8">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out if you have any questions or just want to say hello!
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 mb-10">
            <div className="flex items-center gap-3">
              <span className="text-xl text-portfolio-purple font-medium">{email}</span>
              <button 
                onClick={() => copyToClipboard(email)}
                className="text-gray-400 hover:text-portfolio-purple transition-colors flex items-center gap-1 text-sm"
              >
                <Copy size={14} /> 
                {copyEmailText}
              </button>
            </div>
            <span className="hidden md:inline text-gray-400 mx-2">|</span>
            <span className="text-gray-400">{phone}</span>
            <span className="hidden md:inline text-gray-400 mx-2">|</span>
            <span className="text-gray-400">{location}</span>
          </div>
          
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-portfolio-purple/20 flex items-center justify-center text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-colors"
                aria-label={link.name}
              >
                <link.icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
