const SkillsHeader = () => {
    return (
        <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[3px] text-teal-400">
                Skills & Technologies
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                What I Can Do &{" "}
                <span className="text-teal-400">What I Use</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                A combination of practical development skills and modern
                technologies I use to build web applications.
            </p>
        </div>
    );
};

export default SkillsHeader;