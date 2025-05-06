import React, { useEffect } from "react";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import ChallengeCard from "./ChallengeCard";

interface ProjectDetailsProps {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  challengeImages?: string[]; // Optional array of images for challenges
  github: string;
  liveDemo: string;
  image: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  title,
  description,
  technologies,
  features,
  challenges,
  solutions,
  challengeImages = [], // Default to empty array
  github,
  liveDemo,
  image,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>

        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
              {title}
            </h1>
            <p className="text-lg text-white/90 max-w-3xl animate-fade-in-delay">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Key Features */}
            <section className="animate-fade-in">
              <h2 className="text-2xl font-semibold mb-6 text-primary">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="glass-card p-4 hover:scale-[1.02] transition-transform"
                  >
                    <p className="text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenges & Solutions */}
            <section className="animate-fade-in-delay">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                Challenges & Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {challenges.map((challenge, index) => (
                  <ChallengeCard
                    key={index}
                    number={index + 1}
                    challenge={challenge}
                    solution={solutions[index]}
                    image={challengeImages[index]}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Technologies Used */}
            <section className="glass-card p-6 animate-fade-in">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-sm bg-primary/20 text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Project Links */}
            <section className="glass-card p-6 animate-fade-in-delay">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                Project Links
              </h2>
              <div className="space-y-4">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <Github size={20} />
                  <span>View on GitHub</span>
                </a>
                <a
                  href={liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
