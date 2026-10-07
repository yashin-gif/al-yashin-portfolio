const ExperienceCard = ({
    icon: Icon,
    title,
    description,
    active = false,
}) => {
    return (
        <div
            className={`
                rounded-2xl
                border
                bg-slate-800/50
                p-4
                transition-all
                duration-300

                ${
                    active
                        ? `
                            -translate-y-1
                            border-teal-400/40
                            shadow-[0_0_25px_rgba(45,212,191,0.07)]
                        `
                        : `
                            border-slate-700/70
                            hover:-translate-y-1
                            hover:border-teal-400/30
                        `
                }
            `}
        >
   
            <div
                className={`
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    border
                    transition-all
                    duration-300

                    ${
                        active
                            ? `
                                border-teal-400/40
                                bg-teal-400/15
                                text-teal-200
                                shadow-[0_0_15px_rgba(45,212,191,0.12)]
                            `
                            : `
                                border-teal-400/20
                                bg-teal-400/10
                                text-teal-300
                            `
                    }
                `}
            >
                <Icon size={18} />
            </div>

         
            <h3 className="mt-3 text-base font-bold leading-snug text-white">
                {title}
            </h3>

      
            <p className="mt-2 text-xs leading-5 text-slate-400">
                {description}
            </p>
        </div>
    );
};

export default ExperienceCard;