import {
    Lightbulb,
    MonitorSmartphone,
    Code,
    Layers,
    LayoutGrid,
    Plug,
    ShieldCheck,
    Database,
    ListChecks,
    Bug,
} from "lucide-react";
import SubHeading from "./SubHeading";

const skills = [
    { icon: Lightbulb, label: "Problem Solving" },
    { icon: MonitorSmartphone, label: "Responsive Web Development" },
    { icon: Code, label: "Frontend Development" },
    { icon: Layers, label: "Full Stack Development" },
    { icon: LayoutGrid, label: "UI Development" },
    { icon: Plug, label: "API Integration" },
    { icon: ShieldCheck, label: "Authentication" },
    { icon: Database, label: "Database Integration" },
    { icon: ListChecks, label: "CRUD Operations" },
    { icon: Bug, label: "Debugging" },
];

const CanDoGrid = () => {
    return (
        <div>
            <SubHeading
                icon={Lightbulb}
                title="What I Can Do"
                subtitle="Practical development skills"
            />

            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {skills.map(({ icon: Icon, label }) => (
                    <li
                        key={label}
                        className="flex items-center gap-2.5 rounded-xl border border-slate-700/70 bg-slate-800/50 px-3.5 py-3 text-[13px] font-medium text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-400/30"
                    >
                        <Icon size={16} className="shrink-0 text-teal-300" />
                        {label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CanDoGrid;