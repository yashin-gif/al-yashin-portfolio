import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "../Reveal";

const directions = ["left", "up", "right"];

const ProjectGrid = () => {
    return (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
                <Reveal
                    key={project.id}
                    direction={directions[index % 3]}
                    delay={index * 120}
                    once={false}
                    className="h-full"
                >
                    <ProjectCard project={project} />
                </Reveal>
            ))}
        </div>
    );
};

export default ProjectGrid;