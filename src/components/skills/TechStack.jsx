import {
    FaPython,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
} from "react-icons/fa";
import {
    SiC,
    SiCplusplus,
    SiTailwindcss,
    SiFastapi,
    SiPostgresql,
} from "react-icons/si";
import { Code, Globe, Network, Boxes } from "lucide-react";
import SubHeading from "./SubHeading";
import TechCategoryCard from "./TechCategoryCard";

const categories = [
    {
        title: "Languages",
        items: [
            { name: "Python", icon: FaPython, color: "#4B8BBE" },
            { name: "C", icon: SiC, color: "#A8B9CC" },
            { name: "C++", icon: SiCplusplus, color: "#5C9BE3" },
            { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        ],
    },
    {
        title: "Frontend",
        items: [
            { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
            { name: "CSS3", icon: FaCss3Alt, color: "#3C99DC" },
            { name: "React.js", icon: FaReact, color: "#61DAFB" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
        ],
    },
    {
        title: "Backend & Database",
        items: [
            { name: "FastAPI", icon: SiFastapi, color: "#10B9A8" },
            { name: "Node.js", icon: FaNodeJs, color: "#6CC24A" },
            { name: "REST API", icon: Globe, color: "#5EEAD4" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#5B8DEF" },
        ],
    },
    {
        title: "Tools & Core CS",
        items: [
            { name: "Git", icon: FaGitAlt, color: "#F05032" },
            { name: "GitHub", icon: FaGithub, color: "#E2E8F0" },
            { name: "DSA", icon: Network, color: "#5EEAD4" },
            { name: "OOP", icon: Boxes, color: "#5EEAD4" },
        ],
    },
];

const TechStack = () => {
    return (
        <div>
            <SubHeading
                icon={Code}
                title="What I Use"
                subtitle="Technologies & tools"
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {categories.map((category) => (
                    <TechCategoryCard key={category.title} {...category} />
                ))}
            </div>
        </div>
    );
};

export default TechStack;