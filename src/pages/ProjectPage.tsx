import React from "react";
import ProjectDetails from "../components/ProjectDetails";

const ProjectPage = () => {
  // Sample project data - replace with your actual project data
  const projectData = {
    title: "ParkIt",
    description:
      "A web mobile app that provides university students, faculty, and staff with the ability to book parking spots in advance, ensuring guaranteed parking and reducing campus congestion.",
    technologies: [
      "React.js",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    features: [
      "Real-time parking spot availability tracking",
      "Advanced booking system with time slots",
      "User authentication and role-based access control",
      "Interactive campus map with parking zones",
      "Automated notifications and reminders",
      "Admin dashboard for parking management",
    ],
    challenges: [
      "Implementing real-time updates for parking spot availability",
      "Designing an intuitive booking system that prevents double bookings",
      "Creating a responsive and accessible user interface",
      "Managing concurrent users and database operations",
      "Implementing secure authentication and authorization",
    ],
    solutions: [
      "Utilized Supabase's real-time subscriptions for live updates",
      "Implemented optimistic locking and transaction management",
      "Created a mobile-first design with accessibility features",
      "Used database transactions and proper indexing",
      "Implemented JWT authentication with role-based access control",
    ],
    github: "https://github.com/abhinavmaity/park-it-quickly",
    liveDemo: "https://park-it-umber.vercel.app/",
    image: "/ParkIt/HomePage.png",
  };

  return <ProjectDetails {...projectData} />;
};

export default ProjectPage;
