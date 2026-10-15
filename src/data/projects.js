
export const projects = [
    {
        id: "digital-village",
        name: "Digital Village",
        category: "Full Stack Community Platform",
        tagline: "A Smart Digital Platform for Village Development",

        summary:
            "A full-stack community platform for Bogarchar, Jamalpur, bringing village information, interactive maps, blood donation, local news, community posts, and welfare services together.",

        description:
            "Digital Village is a community-focused full-stack platform built to organize village information and improve access to local services. It brings together village maps, roads, institutions, mosques, family and resident information, blood donation, news, announcements, community posts, Zakat, welfare assistance, and emergency services. The platform is designed for future expansion to support a more connected and digitally accessible village community.",

        image: "/images/projects/digital-village.png",
        imageFit: "cover",

        techStack: [
            "React.js",
            "Vite",
            "JavaScript",
            "Tailwind CSS",
            "Python",
            "FastAPI",
            "PostgreSQL",
            "SQLAlchemy",
            "Alembic",
            "Pydantic",
            "Pydantic Settings",
            "REST API",
            "JWT Authentication",
            "OAuth2",
            "Passlib",
            "Bcrypt",
            "Uvicorn",
        ],

        features: [
            "Village Information: Organized information about residents, families, education, institutions, and local resources.",
            "Village Map: Village places, roads, mosques, institutions, and other important locations.",
            "Blood Donation: Blood donor information and community blood donation support.",
            "News & Announcements: Local news, public announcements, and important community updates.",
            "Community Posts: Community sharing, posts, and comments.",
            "Zakat & Welfare: Zakat information, help requests, and assistance for people in need.",
            "Emergency Services: Access to important emergency information and contacts.",
            "Mosques & Institutions: Information about local mosques, institutions, and community resources.",
            "Authentication & Roles: User authentication and role-based administrative access.",
            "Responsive Interface: Designed to support mobile and desktop users.",
            "Bilingual Experience: Bangla and English language support.",
        ],

        liveUrl:
            "https://digital-village-frontend-ruby.vercel.app/",

        githubUrl:
            "https://github.com/yashin-gif/digital-village-frontend",

        githubLabel: "Frontend Repository",

        backendUrl:
            "https://github.com/yashin-gif/digital-village-backend",

        backendLabel: "Backend Repository",

        challenges: [
            "Designing a unified platform for multiple village services and information categories.",
            "Structuring backend APIs, database models, validation, and authentication.",
            "Organizing community information in a responsive and accessible interface.",
            "Planning maintainable database schema changes and future feature expansion.",
        ],

        futurePlans: [
            "Complete and improve frontend-backend API integration.",
            "Enhance interactive village maps and location-based services.",
            "Expand blood donation and emergency assistance features.",
            "Improve community news, announcements, and post management.",
            "Enhance Zakat, welfare, and community support services.",
            "Improve security, performance, and data management.",
            "Introduce additional digital services based on community needs.",
        ],
    },

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

        liveUrl:
            "https://bloodbridge-frontend-1ryf.onrender.com/",

        githubUrl:
            "https://github.com/yashin-gif/bloodbridge-frontend",

        githubLabel: "Client Repository",

        challenges: [
            "API integration: Keeping the React frontend and FastAPI backend in sync so blood requests, donor details, and user data work correctly.",
            "Donor matching: Finding suitable donors based on blood group, location, and availability.",
            "Authentication and authorization: Implementing JWT-based login and role-based access to protect user and admin features.",
        ],

        futurePlans: [
            "Add real-time chat between donors and blood requesters.",
            "Build smarter donor matching and location-based search.",
            "Develop an Android app alongside the website, with a notification system.",
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
            "A backend-focused task manager that demonstrates API design, database integration, and authentication, built with FastAPI and PostgreSQL.",

        image: "/images/projects/fastapi-todo.png",

        techStack: [
            "Python",
            "FastAPI",
            "PostgreSQL",
            "REST API",
        ],

        features: [
            "RESTful endpoints for creating, reading, updating, and deleting tasks.",
            "PostgreSQL integration for persistent data storage.",
            "Authentication to protect API routes.",
        ],

        liveUrl: null,

        githubUrl:
            "https://github.com/yashin-gif/fastapi_todos",

        githubLabel: "GitHub Repository",

        challenges: [],

        futurePlans: [],
    },

    {
        id: "portfolio",
        name: "Personal Portfolio",
        category: "Frontend Web Application",
        tagline: "Developer Portfolio Website",

        summary:
            "Responsive portfolio website showcasing skills, projects, education, and experience.",

        description:
            "A responsive developer portfolio that presents my skills, education, experience, and projects in one place, built with reusable React components for both desktop and mobile.",

        image: "/images/projects/portfolio.png",

        techStack: [
            "React.js",
            "Vite",
            "JavaScript",
            "Tailwind CSS",
        ],

        features: [
            "Reusable React components with a responsive layout for desktop and mobile.",
            "Sections for about, skills, education, experience, and projects.",
            "Direct contact actions through email, phone, GitHub, and LinkedIn.",
        ],

        liveUrl:
            "https://al-yashin-portfolio.vercel.app/",

        githubUrl:
            "https://github.com/yashin-gif/al-yashin-portfolio",

        githubLabel: "GitHub Repository",

        challenges: [
            "Responsive design: Making every section work well on both desktop and mobile screens.",
            "Navigation across pages: Making section links work from project details pages so visitors land on the correct section.",
            "Information design: Presenting skills, education, experience, and projects clearly without overcrowding the page.",
        ],

        futurePlans: [
            "Add more real-world projects, each with a detailed case study.",
            "Add more interactive and dynamic features.",
            "Improve performance, accessibility, and SEO.",
        ],
    },
];
