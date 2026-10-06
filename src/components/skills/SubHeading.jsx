const SubHeading = ({ icon: Icon, title, subtitle }) => {
    return (
        <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
                <Icon size={19} />
            </div>

            <div>
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="text-xs text-slate-400">{subtitle}</p>
            </div>
        </div>
    );
};

export default SubHeading;