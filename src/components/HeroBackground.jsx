const HeroBackground = () => {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden">
          
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(148,163,184,0.28) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                    maskImage:
                        "radial-gradient(ellipse at center, black 25%, transparent 75%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse at center, black 25%, transparent 75%)",
                }} />

   
            <div className="absolute right-[2%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-teal-400/25 blur-[120px]" />

       
            <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

          
            <div
                className="absolute inset-x-0 bottom-0 h-px"
                style={{
                    background:
                        "linear-gradient(to right, transparent, rgba(45,212,191,0.35), transparent)",
                }}
            />
        </div>
    );
};

export default HeroBackground;