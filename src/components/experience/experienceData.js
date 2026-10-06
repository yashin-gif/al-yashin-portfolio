import {
    Code2,
    Database,
    GitBranch,
    Layers3,
    Puzzle,
    Server,
} from "lucide-react";

const experiences = [
    {
        icon: Code2,
        title: "Full Stack Web Development",
        description:
            "Building responsive and practical web applications by connecting modern frontend interfaces with reliable backend functionality.",
        side: "left",
    },
    {
        icon: Server,
        title: "Backend & REST API Development",
        description:
            "Developing backend functionality and REST APIs with FastAPI to handle real-world application requirements.",
        side: "right",
    },
    {
        icon: Database,
        title: "Database Integration",
        description:
            "Working with PostgreSQL to design, connect and manage application data for database-driven projects.",
        side: "left",
    },
    {
        icon: Layers3,
        title: "Frontend Development",
        description:
            "Creating clean, responsive and component-based user interfaces using React.js and Tailwind CSS.",
        side: "right",
    },
    {
        icon: GitBranch,
        title: "Version Control",
        description:
            "Using Git and GitHub to manage source code, track changes and maintain practical development workflows.",
        side: "left",
    },
    {
        icon: Puzzle,
        title: "Problem Solving & Debugging",
        description:
            "Understanding development problems, identifying issues and implementing practical solutions through testing and debugging.",
        side: "right",
    },
];

export default experiences;