// প্রজেক্টের সব তথ্য শুধু এই ফাইলে।
// challenges আর futurePlans-এ প্রতিটা লাইন এক-একটা বাক্য।
// ফাঁকা থাকলে Details পাতায় ওই অংশ দেখাবে না।
// liveUrl বা githubUrl না থাকলে null রাখো, ওই বাটন দেখাবে না।

export const projects = [
    {
        id: "bloodbridge",
        name: "BloodBridge",
        category: "Full Stack Web Application",
        tagline: "Blood Donation & Emergency Assistance Platform",
        summary:
            "Bangladesh-focused platform connecting blood donors with people in emergency need.",
        description:
            "BloodBridge is a full-stack platform with a React.js frontend and a FastAPI backend, connected through RESTful APIs. It brings blood donors and people in emergency need together across Bangladesh.",
        image: "/images/projects/bloodbridge.png",
        imageFit: "contain",
        techStack: [
            "React.js",
            "Tailwind CSS",
            "FastAPI",
            "PostgreSQL",
            "REST API",
            "JWT Authentication",
        ],
        features: [
            "JWT authentication, user profiles, blood requests, and donor search with availability management.",
            "Donor matching based on blood group, location, and donor availability.",
            "Request filtering with urgency and status management.",
            "Dashboards and role-based admin features.",
        ],
        liveUrl: "https://bloodbridge-frontend-1ryf.onrender.com/",
        githubUrl: "https://github.com/yashin-gif/bloodbridge-frontend",
        githubLabel: "Client Repository",
        challenges: [
            "API integration: Keeping the React frontend and the FastAPI backend in sync, so that blood requests, donor details and user data are created, updated and displayed correctly.",
            "Donor matching: Designing the logic that finds suitable donors based on blood group, location and availability.",
            "Authentication and authorization: Implementing JWT-based login and role-based access, so users can manage only their own data and requests while admin features stay protected.",
        ],
        futurePlans: [
            "Add real-time chat between donors and blood requesters.",
            "Build smarter donor matching and a location-based search.",
            "Develop an Android app alongside the website, with a notification system.",
        ],
    },
    {
        id: "portfolio",
        name: "Personal Portfolio",
        category: "Frontend Web Application",
        tagline: "Developer Portfolio Website",
        summary:
            "Responsive portfolio website showcasing skills, projects, education, and experience.",
        description:
            "A responsive developer portfolio that presents my skills, education, experience and projects in one place, built with reusable React components for both desktop and mobile.",
        image: "/images/projects/portfolio.png",
        techStack: ["React.js", "Vite", "JavaScript", "Tailwind CSS"],
        features: [
            "Reusable React components with a responsive layout for desktop and mobile.",
            "Sections for about, skills, education, experience, and projects.",
            "Direct contact actions through email, phone, GitHub, and LinkedIn.",
        ],
        liveUrl: "https://al-yashin-portfolio.vercel.app/",
        githubUrl: "https://github.com/yashin-gif/al-yashin-portfolio",
        githubLabel: "GitHub Repository",
        challenges: [
            "Responsive design: Making every section work well on both desktop and mobile screens.",
            "Navigation across pages: Making section links work from the project details pages, so the visitor lands on the right section of the home page.",
            "Information design: Presenting a lot of information (about, skills, education, experience and projects) clearly, without making the page feel crowded.",
        ],
        futurePlans: [
            "Add more real-world projects, each with a detailed case study.",
            "Add more interactive and dynamic features.",
            "Improve performance, accessibility and SEO.",
        ],
    },
    {
        id: "fastapi-todo",
        name: "FastAPI Todo App",
        category: "Backend API Application",
        tagline: "REST API Application",
        summary:
            "Backend-focused task manager demonstrating API design, database integration, and authentication.",
        description:
            "A backend-focused task manager that demonstrates API design, database integration and authentication, built with FastAPI and PostgreSQL.",
        image: "/images/projects/fastapi-todo.png",
        techStack: ["Python", "FastAPI", "PostgreSQL", "REST API"],
        features: [
            "RESTful endpoints for creating, reading, updating, and deleting tasks.",
            "PostgreSQL integration for persistent data storage.",
            "Authentication to protect API routes.",
        ],
        liveUrl: null,
        githubUrl: "https://github.com/yashin-gif/fastapi_todos",
        githubLabel: "GitHub Repository",
        challenges: [],
        futurePlans: [],
    },
];