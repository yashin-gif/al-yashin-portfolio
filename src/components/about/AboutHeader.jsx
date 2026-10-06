const AboutHeader = () => {
    return (
        <div className="mb-8 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[3px] text-teal-400">
                About Me
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Turning Problems Into{" "}
                <span className="text-teal-400">Solutions</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                I focus on understanding real problems and building practical,
                reliable and user-friendly solutions.
            </p>
        </div>
    );
};

export default AboutHeader;