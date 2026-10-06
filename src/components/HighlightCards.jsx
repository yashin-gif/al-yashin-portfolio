import { MonitorSmartphone, Lightbulb, LayoutTemplate } from "lucide-react";

const highlights = [
    { title: "Responsive Web Development", icon: MonitorSmartphone },
    { title: "Real-world Problem Solving", icon: Lightbulb },
    { title: "Modern UI Development", icon: LayoutTemplate },
];

const HighlightCards = () => {
    return (
        <div className="mt-7 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
            {highlights.map(({ title, icon: Icon }) => (
                <div
                    key={title}
                    className="group rounded-xl border border-slate-700/60 bg-slate-800/40 p-4 transition-all duration-200 hover:-translate-y-1 hover:border-teal-400/40 hover:bg-slate-800/70"
                >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-teal-400/10 text-teal-400 transition-colors duration-200 group-hover:bg-teal-400/20">
                        <Icon size={18} />
                    </div>

                    <p className="text-xs font-medium leading-5 text-slate-300">
                        {title}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default HighlightCards;