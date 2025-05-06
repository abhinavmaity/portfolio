import React from "react";
import ProjectDetails from "../components/ProjectDetails";

// ParkIt Project
export const ParkItPage = () => {
  const projectData = {
    title: "ParkIt",
    description:
      "A mobile app that provides university students, faculty, and staff with the ability to book parking spots in advance, ensuring guaranteed parking and reducing campus congestion.",
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
    ],
    solutions: [
      "Utilized Supabase's real-time subscriptions for live updates",
      "Implemented optimistic locking and transaction management",
      "Created a mobile-first design with accessibility features",
      "Used database transactions and proper indexing",
    ],
    challengeImages: [
      "/ParkIt/Screenshot 2025-05-06 223931.png",
      "/ParkIt/Screenshot 2025-05-06 223952.png",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&h=400&q=80",
      "/ParkIt/Screenshot 2025-05-06 224050.png",
    ],
    github: "https://github.com/abhinavmaity/park-it-quickly",
    liveDemo: "https://park-it-umber.vercel.app/",
    image: "/ParkIt/HomePage.png",
  };

  return <ProjectDetails {...projectData} />;
};

// ReStore Project
export const ReStorePage = () => {
  const projectData = {
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
    features: [
      "Open Box product verification system",
      "Peer-to-Peer marketplace integration",
      "Sustainable product categorization",
      "Advanced search and filtering",
      "User reviews and ratings",
      "Secure payment processing",
    ],
    challenges: [
      "Building a reliable product verification system",
      "Implementing secure P2P transactions",
      "Creating an intuitive marketplace interface",
      "Managing product inventory and availability",
    ],
    solutions: [
      "Developed a comprehensive verification workflow",
      "Implemented escrow system for P2P transactions",
      "Created a user-friendly marketplace interface",
      "Used real-time database for inventory management",
    ],
    challengeImages: [
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&h=400&q=80",
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=800&h=400&q=80",
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=800&h=400&q=80",
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=800&h=400&q=80",
    ],
    github: "https://github.com/sanskarkesari/ReStore",
    liveDemo: "https://re-store-sand.vercel.app/",
    image: "/ReStore/HomePage.png",
  };

  return <ProjectDetails {...projectData} />;
};

// Task Management App
export const TaskManagerPage = () => {
  const projectData = {
    title: "Task Management App",
    description:
      "A Kanban-style project management tool with drag-and-drop UI and real-time updates for efficient task tracking and team collaboration.",
    technologies: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
    features: [
      "Drag-and-drop task management",
      "Real-time collaboration",
      "Task prioritization and deadlines",
      "Team member assignments",
      "Progress tracking and analytics",
      "Customizable workflows",
    ],
    challenges: [
      "Implementing smooth drag-and-drop functionality across different devices",
      "Managing real-time updates and conflict resolution between users",
      "Creating an intuitive and responsive user interface for complex workflows",
      "Optimizing performance with large task lists and frequent updates",
    ],
    solutions: [
      "Implemented DnD Kit with custom touch support and fallback mechanisms for different devices",
      "Used Firebase's real-time database with optimistic updates and conflict resolution strategies",
      "Designed a modular UI system with responsive layouts and intuitive drag handles",
      "Implemented virtual scrolling and efficient state management with React Query",
    ],
    challengeImages: [
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800&h=400&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=400&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&h=400&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=400&q=80",
    ],
    github: "https://github.com/sanskarkesari/Farmer-Portal",
    liveDemo: "https://taskmanager-demo.vercel.app",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=675&q=80",
  };

  return <ProjectDetails {...projectData} />;
};

// Social Media Dashboard
export const SocialDashboardPage = () => {
const projectData = {
  title: "Web3 Crowdfunding Platform",
  description:
    "A decentralized crowdfunding platform built on Ethereum, allowing users to create campaigns, contribute using cryptocurrency, and track transactions transparently via blockchain.",
  technologies: ["Solidity", "React.js", "Web3.js", "Ethereum", "MetaMask"],
  features: [
    "Campaign creation with funding goal, deadline, and description",
    "Contributions using cryptocurrency (ETH)",
    "Real-time transaction tracking on the blockchain",
    "Refund mechanism for failed campaigns",
    "MetaMask wallet integration for secure authentication",
    "Campaign browsing with filters for categories, progress, and deadlines",
    "Smart contract-driven fund management",
    "Automatic refunds if the funding goal is not met",
  ],
  challenges: [
    "Ensuring smooth MetaMask integration for authentication and transactions",
    "Handling blockchain transaction delays and syncing with frontend",
    "Creating a responsive UI for users across different devices",
    "Implementing secure and scalable smart contracts to handle contributions and refunds",
  ],
  solutions: [
    "Integrated Web3.js with React.js for seamless MetaMask interaction",
    "Optimized smart contract calls to minimize transaction delays and ensure real-time updates",
    "Designed a fully responsive frontend using React and Tailwind CSS",
    "Developed robust smart contracts using Solidity, ensuring secure fund management and automated refunds",
  ],
  challengeImages: [
    "https://cdn3.vectorstock.com/i/1000x1000/95/77/web-3-world-technology-digital-background-web3-vector-45479577.jpg",
    "https://blog.ipleaders.in/wp-content/uploads/2021/06/smart-contract-featured-image-1.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgwm4LZvrOBl6Jme_bILUO5QMJGlie1vxalA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS07YVtpNNgjEYmx2eNz612eWhwprAp6e2xw&s",
  ],
  github: "https://github.com/abhinavmaity/crowdfunding",
  liveDemo: "https://social-dashboard-demo.vercel.app",
  image: "/crowdfunding.png",
};

  return <ProjectDetails {...projectData} />;
};
