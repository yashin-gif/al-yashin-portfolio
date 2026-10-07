import { Link } from "react-router-dom";
import { ArrowUpRight, Layers } from "lucide-react";
import { projects } from "../../data/projects";
import DetailsPanel from "./DetailsPanel";

const OtherProjects = ({ currentId }) => {
    const others = projects.filter((project) => project.id !== currentId);

    return (
        <DetailsPanel icon={Layers} title="More Projects">
            <ul className="space-y-2">
                {others.map((project) => (
                    <li key={project.id}>
                        <Link
                            to={`/projects/${project.id}`}
                            className="group flex items-center justify-between gap-3 rounded-xl border border-slate-700/60 bg-slate-900/50 px-4 py-3 transition-all duration-200 hover:border-teal-400/30"
                        >
                            <div>
                                <p className="text-sm font-semibold text-white">
                                    {project.name}
                                </p>
                                <p className="text-xs text-slate-400">
                                    {project.category}
                                </p>
                            </div>

                            <ArrowUpRight
                                size={16}
                                className="shrink-0 text-slate-500 transition-colors duration-200 group-hover:text-teal-300"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </DetailsPanel>
    );
};

export default OtherProjects;