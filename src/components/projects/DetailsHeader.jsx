import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const DetailsHeader = ({ project }) => {
    const {
        name,
        category,
        tagline,
        liveUrl,
        githubUrl,
        githubLabel = "GitHub Repository",
    } = project;

    return (
        <div>
            <p className="text-xs font-semibold uppercase tracking-[3px] text-teal-400">
                {category}
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {name}
            </h1>

            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400">
                {tagline}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
                {liveUrl && (
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-teal-400 px-5 py-2.5 text-sm font-bold text-teal-950 transition-all duration-200 hover:-translate-y-1 hover:bg-teal-300"
                    >
                        Live Demo
                        <ExternalLink size={16} />
                    </a>
                )}

                {githubUrl && (
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:-translate-y-1 hover:border-teal-400/30 hover:text-teal-300"
                    >
                        <FaGithub size={16} />
                        {githubLabel}
                    </a>
                )}
            </div>
        </div>
    );
};

export default DetailsHeader;