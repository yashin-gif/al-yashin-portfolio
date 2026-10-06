import ExperienceTimeline from "./experience/ExperienceTimeline";

const Experience = () => {
    return (
        <section
            id="experience"
            className="relative overflow-hidden bg-[#07111f] py-14 sm:py-16"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-0 top-10 h-72 w-72 rounded-full bg-teal-400/5 blur-3xl" />

            <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

            <div className="relative mx-auto w-[92%] max-w-[1240px]">
                {/* Heading */}
                <div className="mb-8 text-center">
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

                {/* Experience Timeline */}
                <ExperienceTimeline />

                {/* Work Philosophy */}
                <div className="mx-auto mt-6 max-w-3xl rounded-xl border border-teal-400/15 bg-teal-400/[0.04] px-5 py-4 text-center">
                    <p className="text-sm leading-6 text-slate-300">
                        I focus on understanding the problem first,
                        then building, testing and improving the
                        solution until it works reliably.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Experience;