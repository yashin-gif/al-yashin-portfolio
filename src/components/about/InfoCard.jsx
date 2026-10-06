const InfoCard = ({ icon: Icon, title, children, className = "" }) => {
    return (
        <div
            className={`rounded-2xl border border-slate-700/70 bg-slate-800/50 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-teal-400/30 ${className}`}
        >
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
                    <Icon size={19} />
                </div>

                <h3 className="text-base font-bold text-white sm:text-lg">
                    {title}
                </h3>
            </div>

            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                {children}
            </div>
        </div>
    );
};

export default InfoCard;