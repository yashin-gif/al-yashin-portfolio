import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ limit }) => {
    const list = limit ? projects.slice(0, limit) : projects;

    return (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {list.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};

export default ProjectGrid;