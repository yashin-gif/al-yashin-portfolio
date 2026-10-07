const TechTags = ({ items, limit }) => {
    const shown = limit ? items.slice(0, limit) : items;
    const extra = items.length - shown.length;

    return (
        <div className="flex flex-wrap gap-2">
            {shown.map((tech) => (
                <span
                    key={tech}
                    className="rounded-md border border-slate-700 bg-slate-900/60 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                >
                    {tech}
                </span>
            ))}

            {extra > 0 && (
                <span className="rounded-md border border-teal-400/20 bg-teal-400/10 px-2.5 py-1 text-[11px] font-semibold text-teal-300">
                    +{extra}
                </span>
            )}
        </div>
    );
};

export default TechTags;