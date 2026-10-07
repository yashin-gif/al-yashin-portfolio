import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ProjectsHeader from "../components/projects/ProjectsHeader";
import ProjectGrid from "../components/projects/ProjectGrid";
import Footer from "../components/Footer";

const ProjectsPage = () => {
    return (
        <>
            <main className="relative overflow-hidden bg-slate-900 pb-16 pt-[100px] sm:pb-20 sm:pt-[110px]">
                <div className="relative mx-auto w-[92%] max-w-[1240px]">
                    <Link
                        to="/#projects"
                        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-teal-300">
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>

                    <ProjectsHeader />
                    <ProjectGrid />
                </div>
            </main>

            <Footer />
        </>
    );
};

export default ProjectsPage;