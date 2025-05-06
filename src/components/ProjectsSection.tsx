import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "ParkIt",
      description:
        "A mobile web app that provides university students, faculty, and staff with the ability to book parking spots in advance, ensuring guaranteed parking and reducing campus congestion.",
      technologies: [
        "React.js",
        "TypeScript",
        "Supabase",
        "Tailwind CSS",
        "PostgreSQL",
      ],
      keywords: ["Parking Management", "Mobile App", "University"],
      github: "https://github.com/abhinavmaity/park-it-quickly",
      detailsLink: "/projects/parkit",
      image: "/ParkIt/HomePage.png",
    },
    {
      title: "ReStore",
      description:
        "An e-commerce platform focused on sustainability that offers verified Open Box products with 10-30% discounts and a Peer-to-Peer marketplace, reducing environmental impact.",
      technologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Supabase",
      ],
      keywords: ["E-commerce", "Sustainability", "Marketplace"],
      github: "https://github.com/sanskarkesari/ReStore",
      detailsLink: "/projects/restore",
      image: "ReStore/HomePage.png",
    },
    {
      title: "AgriConnect",
      description:
        "AI-powered system predicting sugarcane yield, detecting diseases, offering farming guidelines, voice-enabled chatbot, and real-time weather-based insights.",
      technologies: ["React", "Machine Learning", "Tailwind CSS"],
      keywords: [
        "AI in Farming",
        "Sugarcane Yield Prediction",
        "Crop Disease Detection",
      ],
      github: "https://github.com/sanskarkesari/Farmer-Portal",
      detailsLink: "/projects/taskmanager",
      image: "/AgriConnect/HomePage.png",
    },
    {
      title: "Web3 Crowdfunding",
      description:
        "This is a decentralized/web-based crowdfunding platform that enables users to create, support, and track fundraising campaigns securely and transparently. It is built using Web3, blockchain (if applicable), or standard web technologies to ensure trust in fund management..",
      technologies: ["JavaScript", "HTML", "CSS", "Solidity"],
      keywords: ["Crowdfunding", "Blockchain", "Decentralised"],
      github: "https://github.com/abhinavmaity/crowdfunding",
      detailsLink: "/projects/social-dashboard",
      image: "/crowdfunding.png",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-title text-center mb-16">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="opacity-0 translate-y-10"
              style={{
                animation: `fade-in 0.5s ease-out ${index * 0.1}s forwards`,
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
