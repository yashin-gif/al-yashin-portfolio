const DetailsPanel = ({ icon: Icon, title, children }) => {
    return (
        <section className="rounded-2xl border border-slate-700/70 bg-slate-800/50 p-5 sm:p-6">
            <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
                    <Icon size={19} />
                </div>

                <h2 className="text-lg font-bold text-white">{title}</h2>
            </div>

            {children}
        </section>
    );
};

export default DetailsPanel;