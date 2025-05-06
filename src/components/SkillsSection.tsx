
import React from 'react';

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 1-5
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      skills: [
        { name: "C++", level: 4 },
        { name: "Python", level: 4 },
        { name: "JavaScript", level: 4 },
        { name: "TypeScript", level: 3 },
        { name: "HTML/CSS", level: 5 },
      ]
    },
    {
      name: "Web Development",
      skills: [
        { name: "React.js", level: 4 },
        { name: "Next.js", level: 3 },
        { name: "Node.js", level: 3 },
        { name: "Express.js", level: 3 },
        { name: "Tailwind CSS", level: 4 },
        { name: "REST API", level: 4 }
      ]
    },
    {
      name: "Database & Cloud",
      skills: [
        { name: "SQL", level: 3 },
        { name: "MongoDB", level: 3 },
        { name: "AWS", level: 3 },
        { name: "GCP", level: 3 },
        { name: "Azure", level: 2 },
        { name: "Docker", level: 3 },
        { name: "Kubernetes", level: 2 }
      ]
    }
  ];
  
  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex gap-1.5">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-full ${
              i < level ? 'bg-portfolio-purple' : 'bg-gray-700'
            }`}
          ></div>
        ))}
      </div>
    );
  };
  
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="section-title text-center mb-16">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="glass-card p-6 opacity-0 translate-y-10"
              style={{ animation: `fade-in 0.5s ease-out ${categoryIndex * 0.2}s forwards` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-portfolio-blue border-b border-gray-700 pb-2">
                {category.name}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex justify-between items-center">
                    <span className="text-gray-300">{skill.name}</span>
                    {renderSkillLevel(skill.level)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Data Science & ML Skills */}
        <div 
          className="mt-12 glass-card p-6 opacity-0 translate-y-10"
          style={{ animation: 'fade-in 0.5s ease-out 0.6s forwards' }}
        >
          <h3 className="text-xl font-semibold mb-6 text-portfolio-blue border-b border-gray-700 pb-2">
            Data Science & ML
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {[
              "NumPy", "Pandas", "Matplotlib", "scikit-learn", "TensorFlow", "PyTorch", 
              "Data Visualization", "Statistical Analysis", "Machine Learning Models", 
              "NLP", "Computer Vision"
            ].map((skill, index) => (
              <span 
                key={index}
                className="bg-portfolio-purple/20 text-portfolio-purple px-3 py-1.5 rounded-md text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        {/* DevOps & Tools */}
        <div 
          className="mt-8 glass-card p-6 opacity-0 translate-y-10"
          style={{ animation: 'fade-in 0.5s ease-out 0.8s forwards' }}
        >
          <h3 className="text-xl font-semibold mb-6 text-portfolio-blue border-b border-gray-700 pb-2">
            DevOps & Tools
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {[
              "Git", "GitHub", "Docker", "Kubernetes", "CI/CD", "Agile/Scrum", 
              "VS Code", "Postman", "Figma", "Responsive Design"
            ].map((skill, index) => (
              <span 
                key={index}
                className="bg-portfolio-purple/20 text-portfolio-purple px-3 py-1.5 rounded-md text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
