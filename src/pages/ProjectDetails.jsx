import { Link, useParams } from "react-router-dom";
import {
    ArrowLeft,
    ExternalLink,
    CheckCircle2,
} from "lucide-react";
import { projects } from "../data/projects";

const ProjectDetails = () => {
    const { projectId } = useParams();

    const project = projects.find(
        (item) => item.id === projectId
    );

    if (!project) {
        return (
            <main className="min-h-screen bg-slate-900 px-6 pb-24 pt-32">
                <div className="mx-auto max-w-3xl text-center">

                    <p className="text-sm font-semibold uppercase tracking-[3px] text-teal-400">
                        Project Not Found
                    </p>

                    <h1 className="mt-4 text-4xl font-bold text-white">
                        Project Doesn't Exist
                    </h1>

                    <p className="mt-4 text-slate-400">
                        The project you're looking for could not be found.
                    </p>

                    <Link
                        to="/projects"
                        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-teal-400 px-5 py-3 text-sm font-bold text-teal-950 transition-all hover:-translate-y-1 hover:bg-teal-300"
                    >
                        <ArrowLeft size={16} />
                        Back to Projects
                    </Link>

                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-900 pb-24 pt-32">

            <div className="mx-auto w-[92%] max-w-[1100px]">

             
                <Link
                    to="/projects"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-teal-300"
                >
                    <ArrowLeft size={17} />
                    Back to Projects
                </Link>

     
                <div className="mb-10">

                    <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-teal-400">
                        {project.category}
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        {project.title}
                    </h1>

                    <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
                        {project.description}
                    </p>

                </div>

               
                <div className="overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-800/50">

                    <div className="aspect-[16/9] overflow-hidden bg-slate-800">

                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover"
                        />

                    </div>

                </div>

          
                <div className="mt-6 flex flex-wrap gap-3">

                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-teal-400 px-5 py-3 text-sm font-bold text-teal-950 transition-all hover:-translate-y-1 hover:bg-teal-300"
                    >
                        Live Project
                        <ExternalLink size={16} />
                    </a>

                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-5 py-3 text-sm font-semibold text-slate-200 transition-all hover:-translate-y-1 hover:border-teal-400/30 hover:text-teal-300"
                    >
                        GitHub
                    </a>

                </div>

    
                <section className="mt-14">

                    <h2 className="text-2xl font-bold text-white">
                        Project{" "}
                        <span className="text-teal-400">
                            Overview
                        </span>
                    </h2>

                    <p className="mt-5 text-sm leading-8 text-slate-400">
                        {project.description}
                    </p>

                </section>

     
                <section className="mt-14">

                    <h2 className="text-2xl font-bold text-white">
                        Key{" "}
                        <span className="text-teal-400">
                            Features
                        </span>
                    </h2>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">

                        {project.features.map((feature) => (
                            <div
                                key={feature}
                                className="flex items-start gap-3 rounded-xl border border-slate-700/70 bg-slate-800/40 p-4"
                            >
                                <CheckCircle2
                                    size={18}
                                    className="mt-0.5 shrink-0 text-teal-400"
                                />

                                <span className="text-sm leading-6 text-slate-300">
                                    {feature}
                                </span>
                            </div>
                        ))}

                    </div>

                </section>

            
                <section className="mt-14">

                    <h2 className="text-2xl font-bold text-white">
                        Technologies{" "}
                        <span className="text-teal-400">
                            Used
                        </span>
                    </h2>

                    <div className="mt-6 flex flex-wrap gap-3">

                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm font-medium text-slate-300"
                            >
                                {technology}
                            </span>
                        ))}

                    </div>

                </section>

         
                <section className="mt-14">

                    <h2 className="text-2xl font-bold text-white">
                        Challenges{" "}
                        <span className="text-teal-400">
                            I Solved
                        </span>
                    </h2>

                    <p className="mt-5 text-sm leading-8 text-slate-400">
                        {project.challenges}
                    </p>

                </section>

       
                <section className="mt-14">

                    <h2 className="text-2xl font-bold text-white">
                        Future{" "}
                        <span className="text-teal-400">
                            Improvements
                        </span>
                    </h2>

                    <p className="mt-5 text-sm leading-8 text-slate-400">
                        {project.futureImprovements}
                    </p>

                </section>

     
                <div className="mt-16 flex flex-col gap-4 border-t border-slate-700/70 pt-8 sm:flex-row sm:items-center sm:justify-between">

                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-teal-300"
                    >
                        <ArrowLeft size={16} />
                        Back to All Projects
                    </Link>

                    <Link
                        to="/"
                        className="text-sm font-semibold text-teal-300 transition-colors hover:text-teal-200"
                    >
                        Back to Home
                    </Link>

                </div>

            </div>

        </main>
    );
};

export default ProjectDetails;