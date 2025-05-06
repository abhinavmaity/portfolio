import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  keywords: string[];
  github: string;
  detailsLink: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  keywords,
  github,
  detailsLink,
  image,
}) => {
  return (
    <div className="glass-card group">
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-sm bg-primary/20 text-primary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {keywords.map((keyword, index) => (
            <span
              key={index}
              className="px-2 py-1 text-sm bg-primary/20 text-primary rounded-full"
            >
              {keyword}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
          </div>

          <Link
            to={detailsLink}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            View Details
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
