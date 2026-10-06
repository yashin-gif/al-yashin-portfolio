const TechCategoryCard = ({ title, items }) => {
    return (
        <div className="rounded-2xl border border-slate-700/70 bg-slate-800/50 p-5 transition-colors duration-200 hover:border-teal-400/30">
            <h4 className="text-xs font-bold uppercase tracking-[2px] text-teal-300">
                {title}
            </h4>

            <div className="mt-4 grid grid-cols-2 gap-3">
                {items.map(({ icon: Icon, name, color }) => (
                    <div
                        key={name}
                        className="group flex flex-col items-center gap-2 rounded-xl border border-slate-700/60 bg-slate-900/50 px-2 py-4 text-center transition-all duration-200 hover:-translate-y-1 hover:border-teal-400/30"
                    >
                        <Icon
                            size={28}
                            style={{ color }}
                            className="transition-transform duration-200 group-hover:scale-110"
                        />
                        <span className="text-xs font-semibold text-slate-200">
                            {name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechCategoryCard;