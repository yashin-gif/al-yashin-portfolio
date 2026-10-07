import ProjectsHeader from "./projects/ProjectsHeader";
import ProjectGrid from "./projects/ProjectGrid";
import ViewAllButton from "./projects/ViewAllButton";

const Projects = () => {
    return (
        <section
            id="projects"
            className="relative scroll-mt-20 overflow-hidden bg-slate-900 py-14 sm:py-16"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-teal-400/5 blur-3xl" />
            <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

            <div className="relative mx-auto w-[92%] max-w-[1240px]">
                <ProjectsHeader />
                <ProjectGrid limit={6} />
                <ViewAllButton />
            </div>
        </section>
    );
};

export default Projects;