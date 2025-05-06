import React from "react";
import { ArrowDown } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-portfolio-charcoal/30">
      <div className="section-container">
        <h2 className="section-title text-center mb-16">About Me</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Profile Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-portfolio-purple/30">
                {/* Use the uploaded profile image */}
                <img
                  src="/lovable-uploads/628cc554-48ea-429e-821b-8a5b13fff358.png"
                  alt="Abhinav Maity"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-lg bg-portfolio-blue/20 backdrop-blur-sm border border-white/10 animate-float"></div>
              <div
                className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-portfolio-purple/20 backdrop-blur-sm border border-white/10 animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>

          {/* Bio */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-semibold mb-4 text-portfolio-purple">
              Who I Am
            </h3>

            <p className="text-gray-300 mb-8">
              I'm a passionate full-stack developer and machine learning
              enthusiast currently pursuing my B.Tech in Computer Science at SRM
              Institute of Science and Technology. Specializing in React.js,
              Next.js, and modern web development frameworks, I combine
              technical expertise with a keen interest in cloud computing and
              AI/ML. Beyond technology, I maintain a strong interest in global
              trends and financial concepts, offering a well-rounded perspective
              for impactful contributions. I'm constantly learning and growing,
              seeking opportunities to leverage technology for meaningful
              innovations that make a difference in real-world problems.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="glass-card p-4">
                <h4 className="font-semibold mb-2 text-portfolio-blue">
                  Values
                </h4>
                <p className="text-sm text-gray-400">
                  Clean code, continuous learning, innovative solutions
                </p>
              </div>

              <div className="glass-card p-4">
                <h4 className="font-semibold mb-2 text-portfolio-blue">
                  Interests
                </h4>
                <p className="text-sm text-gray-400">
                  Web Development, Cloud Computing, AI/ML, Data Science
                </p>
              </div>
            </div>

            <a
              href="https://drive.google.com/file/d/1-FQB0NaVlZAl-ydr-AJ6ccC_6NolFFLO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 w-fit"
            >
              <ArrowDown size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
