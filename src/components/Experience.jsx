import {
    Code2,
    Database,
    GitBranch,
    Layers3,
    Puzzle,
    Server,
} from "lucide-react";

const Experience = () => {
    const experiences = [
        {
            icon: Code2,
            title: "Full Stack Web Development",
            description:
                "Building responsive and practical web applications with modern frontend and backend technologies.",
        },
        {
            icon: Server,
            title: "Backend & REST API Development",
            description:
                "Developing backend functionality and REST APIs with FastAPI for real-world application requirements.",
        },
        {
            icon: Database,
            title: "Database Integration",
            description:
                "Working with PostgreSQL to design, connect and manage application data for database-driven projects.",
        },
        {
            icon: Layers3,
            title: "Frontend Development",
            description:
                "Creating clean, responsive and component-based user interfaces using React.js and Tailwind CSS.",
        },
        {
            icon: GitBranch,
            title: "Version Control",
            description:
                "Using Git and GitHub to manage source code, track changes and maintain project development workflows.",
        },
        {
            icon: Puzzle,
            title: "Problem Solving & Debugging",
            description:
                "Understanding development problems, identifying issues and implementing practical solutions through testing and debugging.",
        },
    ];

    return (
        <section
            id="experience"
            className="relative overflow-hidden bg-[#07111f] py-16 sm:py-20"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-0 top-10 h-72 w-72 rounded-full bg-teal-400/5 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

            <div className="relative mx-auto w-[92%] max-w-[1240px]">

                {/* Heading */}
                <div className="mb-10 text-center">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[3px] text-teal-400">
                        Experience
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        How I{" "}
                        <span className="text-teal-400">
                            Build & Work
                        </span>
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                        Hands-on development experience gained through
                        building practical projects, working with modern
                        technologies and solving real-world problems.
                    </p>
                </div>

                {/* Experience Cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {experiences.map((experience) => {
                        const Icon = experience.icon;

                        return (
                            <div
                                key={experience.title}
                                className="group rounded-2xl border border-slate-700/70 bg-slate-800/50 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-teal-400/30"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-300 transition-colors group-hover:bg-teal-400/15">
                                    <Icon size={19} />
                                </div>

                                <h3 className="mt-4 text-base font-bold leading-snug text-white">
                                    {experience.title}
                                </h3>

                                <p className="mt-2.5 text-xs leading-6 text-slate-400">
                                    {experience.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Work Philosophy */}
                <div className="mx-auto mt-6 max-w-3xl rounded-xl border border-teal-400/15 bg-teal-400/[0.04] px-5 py-4 text-center">
                    <p className="text-sm leading-6 text-slate-300">
                        I focus on understanding the problem first, then
                        building, testing and improving the solution until it
                        works reliably.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Experience;