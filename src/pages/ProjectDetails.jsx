import { Link, useParams } from "react-router-dom";
import { ArrowLeft, FileText, Sparkles, Wrench, Rocket, Code } from "lucide-react";
import { projects } from "../data/projects";
import ProjectImage from "../components/projects/ProjectImage";
import DetailsHeader from "../components/projects/DetailsHeader";
import DetailsPanel from "../components/projects/DetailsPanel";
import CheckList from "../components/projects/CheckList";
import TechTags from "../components/projects/TechTags";
import OtherProjects from "../components/projects/OtherProjects";
import Footer from "../components/Footer";

const ProjectDetails = () => {
    const { projectId } = useParams();
    const project = projects.find((item) => item.id === projectId);

    if (!project) {
        return (
            <>
                <main className="flex min-h-[70vh] items-center justify-center bg-slate-900 px-4 pt-[100px]">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-white">
                            Project not found
                        </h1>
                        <p className="mt-3 text-slate-400">
                            The project you are looking for does not exist.
                        </p>
                        <Link
                            to="/#projects"
                            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-teal-400 px-5 py-2.5 text-sm font-bold text-teal-950"
                        >
                            Back to Projects
                        </Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    const { id, name, description, image, techStack, features, challenges, futurePlans } =
        project;

    return (
        <>
            <main className="relative overflow-hidden bg-slate-900 pb-16 pt-[100px] sm:pb-20 sm:pt-[110px]">
                {/* Background Glow */}
                <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-teal-400/5 blur-3xl" />
                <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

                <div className="relative mx-auto w-[92%] max-w-[1100px]">
                    <Link
                        to="/#projects"
                        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-teal-300"
                    >
                        <ArrowLeft size={16} />
                        Back to Projects
                    </Link>

                    <DetailsHeader project={project} />

                    <div className="mt-8 overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-800/50">
                        <ProjectImage
                            src={image}
                            name={name}
                            fit={project.imageFit}
                            className="aspect-video w-full"
                        />
                    </div>

                    <div className="mt-6 grid gap-5 lg:grid-cols-[1.7fr_1fr]">
                        {/* Main column */}
                        <div className="space-y-5">
                            <DetailsPanel icon={FileText} title="Overview">
                                <p className="text-sm leading-7 text-slate-300">
                                    {description}
                                </p>
                            </DetailsPanel>

                            {features.length > 0 && (
                                <DetailsPanel icon={Sparkles} title="Key Features">
                                    <CheckList items={features} />
                                </DetailsPanel>
                            )}

                            {challenges.length > 0 && (
                                <DetailsPanel icon={Wrench} title="Challenges & Solutions">
                                    <CheckList items={challenges} />
                                </DetailsPanel>
                            )}

                            {futurePlans.length > 0 && (
                                <DetailsPanel icon={Rocket} title="Future Plans">
                                    <CheckList items={futurePlans} />
                                </DetailsPanel>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-5 lg:self-start">
                            <DetailsPanel icon={Code} title="Tech Stack">
                                <TechTags items={techStack} />
                            </DetailsPanel>

                            <OtherProjects currentId={id} />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default ProjectDetails;