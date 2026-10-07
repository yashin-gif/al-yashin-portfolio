import { useState } from "react";
import { Code } from "lucide-react";

const ProjectImage = ({ src, name, fit = "cover", className = "" }) => {
    const [failed, setFailed] = useState(false);

    if (!src || failed) {
        return (
            <div
                className={`flex items-center justify-center ${className}`}
                style={{
                    background:
                        "linear-gradient(135deg, #1e293b, #0f172a 55%, #0b2a33)",
                }}
            >
                <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
                        <Code size={26} />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-slate-300">
                        {name}
                    </p>
                </div>
            </div>
        );
    }

    const fitClass =
        fit === "contain"
            ? "bg-[#0a0a0f] object-contain object-center"
            : "object-cover object-top";

    return (
        <img
            src={src}
            alt={`${name} screenshot`}
            onError={() => setFailed(true)}
            loading="lazy"
            className={`${fitClass} ${className}`}
        />
    );
};

export default ProjectImage;