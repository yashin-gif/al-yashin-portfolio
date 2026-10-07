import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProjectImage from "./ProjectImage";
import TechTags from "./TechTags";

const ProjectCard = ({ project }) => {
    const { id, name, category, summary, image, imageFit, techStack } = project;
    const detailsPath = `/projects/${id}`;

    return (
        <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-800/50 transition-all duration-200 hover:-translate-y-1 hover:border-teal-400/30">
            <Link
                to={detailsPath}
                aria-label={`View ${name} details`}
                className="block overflow-hidden"
            >
                <ProjectImage
                    src={image}
                    name={name}
                    fit={imageFit}
                    className="aspect-[16/10] w-full transition-transform duration-300 group-hover:scale-105"
                />
            </Link>

            <div className="flex flex-1 flex-col p-5">
                <p className="text-[11px] font-bold uppercase tracking-[2px] text-teal-400">
                    {category}
                </p>

                <h3 className="mt-1.5 text-lg font-bold text-white">{name}</h3>

                <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-400">
                    {summary}
                </p>

                <div className="mt-4">
                    <TechTags items={techStack} limit={4} />
                </div>

                <div className="mt-auto pt-5">
                    <Link
                        to={detailsPath}
                        className="inline-flex items-center gap-2 rounded-lg border border-teal-400/30 bg-teal-400/[0.08] px-4 py-2 text-sm font-semibold text-teal-300 transition-all duration-200 hover:bg-teal-400 hover:text-teal-950"
                    >
                        View Details
                        <ArrowRight size={15} />
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;