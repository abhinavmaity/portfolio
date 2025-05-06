import React from "react";
import { Briefcase } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      title: "Volunteer - Health & Disability and Education Programme",
      company: "Apnalaya",
      location: "Chembur, Mumbai",
      period: "Jun 2024 - Jul 2024",
      description: [
        "Empowered underprivileged communities by facilitating access to education and government schemes",
        "Developed strong communication and organizational skills by conducting community workshops",
        "Collaborated with local leaders to address community needs and implement sustainable solutions",
      ],
    },
    {
      title: "Organizing Committee - CAD 2.0 Hackathon",
      company: "Coding Ninjas Club",
      location: "SRM Institute of Science and Technology",
      period: "Mar 2024 - Present",
      description: [
        "Organized a 36-hour national-level hackathon (CAD 2.0) hosted by Coding Ninjas SRM",
        "Engaged with over 500+ participants and managed various aspects of the event",
        "Coordinated with sponsors, judges, and mentors to ensure a successful hackathon experience",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-portfolio-charcoal/30">
      <div className="section-container">
        <h2 className="section-title text-center mb-16">
          Volunteering Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-portfolio-purple/30 transform -translate-x-1/2"></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-12 flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } opacity-0 translate-y-10`}
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.2}s forwards`,
              }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-portfolio-charcoal border-2 border-portfolio-purple rounded-full transform -translate-x-1/2 flex items-center justify-center z-10">
                <Briefcase size={16} className="text-portfolio-purple" />
              </div>

              {/* Content */}
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="glass-card p-6 card-hover">
                  <div className="flex flex-col gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-portfolio-purple">{exp.company}</p>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm">
                        {exp.period}
                      </span>
                      <p className="text-gray-400 text-sm">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="text-gray-300 text-sm space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-portfolio-purple mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
