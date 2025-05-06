import React from "react";
import { GraduationCap } from "lucide-react";

interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  description: string;
  score?: string;
  secondaryScore?: string;
}

const EducationSection = () => {
  const educationList: Education[] = [
    {
      degree:
        "B.Tech in Computer Science with Specialization in Information Technology",
      school: "SRM Institute of Science and Technology",
      location: "Chennai",
      period: "Jun 2022 - Present",
      description:
        "Currently pursuing Bachelor's degree in Computer Science with a specialization in Information Technology.",
      score: "8.96 CGPA",
    },
    {
      degree: "Secondary & Senior Secondary Education",
      school: "Aditya Birla Public School",
      location: "Nagda, Madhya Pradesh",
      period: "Apr 2017 - Mar 2022",
      description:
        "Completed secondary and senior secondary education with excellence in core subjects and a focus on science and mathematics.",
      score: "92.8% (10th Grade)",
      secondaryScore: "89.6% (12th Grade)",
    },
  ];

  return (
    <section id="education" className="py-20 bg-portfolio-charcoal/30">
      <div className="section-container">
        <h2 className="section-title text-center mb-16">Education</h2>

        <div className="space-y-10">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="glass-card p-6 max-w-3xl mx-auto card-hover opacity-0 translate-y-10"
              style={{
                animation: `fade-in 0.5s ease-out ${index * 0.2}s forwards`,
              }}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-portfolio-purple/20 flex items-center justify-center">
                    <GraduationCap
                      size={28}
                      className="text-portfolio-purple"
                    />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <span className="text-portfolio-purple text-sm font-medium">
                      {edu.period}
                    </span>
                  </div>

                  <div className="flex items-center mb-4">
                    <span className="text-gray-300">{edu.school}</span>
                    <span className="mx-2 text-gray-500">•</span>
                    <span className="text-gray-400 text-sm">
                      {edu.location}
                    </span>
                    {edu.score && (
                      <>
                        <span className="mx-2 text-gray-500">•</span>
                        <span className="text-portfolio-purple text-sm">
                          {edu.score}
                        </span>
                      </>
                    )}
                    {edu.secondaryScore && (
                      <>
                        <span className="mx-2 text-gray-500">•</span>
                        <span className="text-portfolio-purple text-sm">
                          {edu.secondaryScore}
                        </span>
                      </>
                    )}
                  </div>

                  <p className="text-gray-400 text-sm">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Areas of Interest */}
        <div
          className="mt-16 max-w-3xl mx-auto opacity-0 translate-y-10"
          style={{ animation: "fade-in 0.5s ease-out 0.6s forwards" }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center text-portfolio-blue">
            Areas of Interest
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Full Stack Web Development",
              "Cloud Computing",
              "Artificial Intelligence and Machine Learning",
              "Data Science and Analytics",
            ].map((area, index) => (
              <div key={index} className="glass-card p-4 text-center">
                <p className="font-medium text-gray-300">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
