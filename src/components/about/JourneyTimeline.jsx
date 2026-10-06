import {
    Route,
    Lightbulb,
    GraduationCap,
    Cpu,
    Globe,
    Server,
    Rocket,
} from "lucide-react";
import InfoCard from "./InfoCard";

const steps = [
    {
        icon: Lightbulb,
        title: "College",
        text: "The dream begins. Python was familiar, but I wasn't coding yet.",
    },
    {
        icon: GraduationCap,
        title: "University",
        text: "My coding life truly began with C, then C++.",
    },
    {
        icon: Cpu,
        title: "Core CS",
        text: "Data Structures & Algorithms, Databases, Python and OOP.",
    },
    {
        icon: Globe,
        title: "Web Development",
        text: "JavaScript, CSS, Tailwind CSS, Node.js and React.",
    },
    {
        icon: Server,
        title: "Backend",
        text: "FastAPI with Python to build APIs.",
    },
    {
        icon: Rocket,
        title: "Today",
        text: "Building BloodBridge, my favorite project, and growing toward my goal of becoming an AI engineer.",
    },
];

const JourneyTimeline = () => {
    return (
        <InfoCard icon={Route} title="My Programming Journey">
            <p className="max-w-3xl">
                Becoming a software engineer was a quiet dream of mine back in
                college. I see creating something new as an art, and I wanted
                to use CSE to build things that genuinely help people.
            </p>

            <ol className="grid gap-6 pt-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
                {steps.map(({ icon: Icon, title, text }, index) => (
                    <li key={title} className="relative">
                        {/* পরের ধাপের সাথে জোড়ার রেখা (শুধু laptop-এ) */}
                        {index < steps.length - 1 && (
                            <span className="absolute -right-3 left-12 top-5 hidden h-px bg-slate-700 lg:block" />
                        )}

                        <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-teal-400/30 bg-slate-900 text-teal-300">
                            <Icon size={17} />
                        </span>

                        <h4 className="mt-3 text-sm font-bold text-white">
                            {title}
                        </h4>
                        <p className="mt-1 text-xs leading-5 text-slate-400">
                            {text}
                        </p>
                    </li>
                ))}
            </ol>
        </InfoCard>
    );
};

export default JourneyTimeline;