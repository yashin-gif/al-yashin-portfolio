const ProfilePhoto = ({ src, alt = "Al Yashin" }) => {
    return (
        <div className="relative aspect-square w-[320px] sm:w-[360px] xl:w-[440px]">

            <div className="absolute left-[12.5%] top-[12.5%] h-[75%] w-[75%] rounded-full bg-teal-400/15 blur-3xl" />

            <div className="absolute left-[12.5%] top-[12.5%] h-[75%] w-[75%] overflow-hidden rounded-full border border-slate-700">
                <img
                    src={src}
                    alt={alt}
                    className="h-full w-full object-cover object-[center_35%]"
                />
            </div>

     
            <svg
                viewBox="0 0 440 440"
                className="pointer-events-none absolute inset-0 h-full w-full"
            >
                <defs>
              
                    <path id="bottomArc" d="M 22 220 A 198 198 0 0 0 418 220" />
                </defs>

               
                <circle
                    cx="220"
                    cy="220"
                    r="175"
                    fill="none"
                    strokeWidth="2"
                    className="stroke-teal-400/40"
                />


                <circle
                    cx="220"
                    cy="220"
                    r="212"
                    fill="none"
                    strokeWidth="1"
                    className="stroke-slate-600/40"
                />

               
                <text letterSpacing="1.5" className="fill-slate-300 text-[13px] font-semibold">
                    <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
                        <tspan className="fill-teal-400 text-[18px] font-extrabold">
                            130+
                        </tspan>{" "}
                        PROBLEMS SOLVED • LEETCODE • CODEFORCES
                    </textPath>
                </text>
            </svg>
        </div>
    );
};

export default ProfilePhoto;