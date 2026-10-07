import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const Projects = () => {
    const featuredProjects = projects.slice(0, 3);

    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-slate-900 py-16 sm:py-20">
           
            <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-teal-400/5 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

            <div className="relative mx-auto w-[92%] max-w-[1240px]">

            
                <div className="mb-10 text-center">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[3px] text-teal-400">
                        Projects
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Things I’ve{" "}
                        <span className="text-teal-400">Built</span>
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                        Practical projects built to solve problems, improve
                        user experience and apply modern development skills.
                    </p>
                </div>

            
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {featuredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-800/50 transition-all duration-200 hover:-translate-y-1 hover:border-teal-400/30"
                        >
                     
                            <div className="relative h-44 overflow-hidden bg-slate-800">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />

                                <span className="absolute bottom-3 left-3 rounded-full border border-teal-400/20 bg-slate-950/70 px-3 py-1 text-[10px] font-semibold text-teal-300 backdrop-blur-sm">
                                    {project.category}
                                </span>
                            </div>

                        
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-white">
                                    {project.title}
                                </h3>

                                <p className="mt-2.5 line-clamp-3 text-xs leading-6 text-slate-400">
                                    {project.description}
                                </p>

                           
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.technologies
                                        .slice(0, 4)
                                        .map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-md border border-slate-700 bg-slate-900/50 px-2 py-1 text-[10px] font-medium text-slate-400"
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                </div>

                             
                                <div className="mt-5 flex items-center justify-between border-t border-slate-700/60 pt-4">
                                    <Link
                                        to={`/projects/${project.id}`}
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 transition-colors hover:text-teal-300"
                                    >
                                        View Details
                                        <ArrowRight size={14} />
                                    </Link>

                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 transition-colors hover:text-white"
                                    >
                                        Live Project
                                        <ExternalLink size={13} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            
                <div className="mt-8 flex justify-center">
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-5 py-2.5 text-sm font-semibold text-slate-300 transition-all duration-200 hover:-translate-y-1 hover:border-teal-400/30 hover:text-teal-300"
                    >
                        View All Projects
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;