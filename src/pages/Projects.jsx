import { ExternalLink, ArrowRight } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "BloodBridge",
            category: "Full Stack Web Application",
            description:
                "A Bangladesh-focused blood donation and emergency assistance platform designed to connect blood seekers with suitable donors and make emergency blood requests easier to manage.",
            technologies: [
                "React.js",
                "Tailwind CSS",
                "FastAPI",
                "PostgreSQL",
                "REST API",
            ],
            image: "/images/projects/bloodbridge.png",
            liveLink: "#",
            githubLink: "#",
        },

        {
            title: "Project Two",
            category: "Web Application",
            description:
                "A practical web application built to solve a specific problem with a clean interface and modern development technologies.",
            technologies: ["React.js", "Tailwind CSS", "REST API"],
            image: "/images/projects/project-2.png",
            liveLink: "#",
            githubLink: "#",
        },

        {
            title: "Project Three",
            category: "Web Application",
            description:
                "A responsive application focused on practical functionality, user experience and clean component-based development.",
            technologies: ["React.js", "Tailwind CSS", "JavaScript"],
            image: "/images/projects/project-3.png",
            liveLink: "#",
            githubLink: "#",
        },

        {
            title: "Project Four",
            category: "Web Application",
            description:
                "Another practical project focused on building useful features, clean interfaces and reliable functionality.",
            technologies: ["React.js", "JavaScript", "REST API"],
            image: "/images/projects/project-4.png",
            liveLink: "#",
            githubLink: "#",
        },
    ];

    return (
        <main className="min-h-screen bg-slate-900 pb-24 pt-32">
            <div className="mx-auto w-[92%] max-w-[1240px]">

        
                <div className="mb-14 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-teal-400">
                        My Projects
                    </p>

                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Things I've{" "}
                        <span className="text-teal-400">Built</span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
                        Explore my projects, development work and practical
                        solutions built with modern technologies.
                    </p>
                </div>

         
                <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="group overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-800/50 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30"
                        >
                            {/* Image */}
                            <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-700/70 bg-slate-800">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                                <span className="absolute bottom-4 left-4 rounded-full border border-teal-400/20 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-teal-300 backdrop-blur-sm">
                                    {project.category}
                                </span>
                            </div>

                   
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-white">
                                    {project.title}
                                </h2>

                                <p className="mt-3 text-sm leading-7 text-slate-400">
                                    {project.description}
                                </p>

                      
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full border border-slate-700 bg-slate-900/50 px-3 py-1.5 text-xs font-medium text-slate-300"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

              
                                <div className="mt-6 flex items-center justify-between border-t border-slate-700/70 pt-5">
                                    <a
                                        href={project.liveLink}
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-teal-300 transition-colors hover:text-teal-200"
                                    >
                                        Live Project
                                        <ExternalLink size={15} />
                                    </a>

                                    <a
                                        href={project.githubLink}
                                        className="text-sm font-semibold text-slate-300 transition-colors hover:text-white"
                                    >
                                        GitHub
                                    </a>
                                </div>

                             
                                <a
                                    href="#"
                                    className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/40 py-2.5 text-sm font-semibold text-slate-200 transition-all hover:border-teal-400/30 hover:bg-teal-400/5 hover:text-teal-300"
                                >
                                    View Details
                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Projects;