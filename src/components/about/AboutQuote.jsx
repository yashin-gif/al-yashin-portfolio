const AboutQuote = ({ className = "" }) => {
    return (
        <div
            className={`rounded-xl border border-teal-400/15 bg-teal-400/[0.04] px-5 py-4 text-center ${className}`}
        >
            <p className="text-sm leading-6 text-slate-300">
                My goal is not just to write code, but to understand the
                problem and build a solution that actually works.
            </p>

            <p className="mt-1 text-sm font-semibold text-teal-300">
                Creating something new is an art to me.
            </p>
        </div>
    );
};

export default AboutQuote;