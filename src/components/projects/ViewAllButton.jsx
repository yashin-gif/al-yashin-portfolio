import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ViewAllButton = () => {
    return (
        <div className="mt-10 flex justify-center">
            <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-400 px-6 py-3 text-sm font-bold text-teal-950 transition-all duration-200 hover:-translate-y-1 hover:bg-teal-300"
            >
                View All Projects
                <ArrowRight size={16} />
            </Link>
        </div>
    );
};

export default ViewAllButton;