import { Calendar, MapPin } from "lucide-react";

const EducationCard = ({
    label,
    title,
    institution,
    location,
    detail,
    grade,
    period,
    description,
    current = false,
}) => {
    return (
        <div
            className={`rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-1 sm:p-6 ${
                current
                    ? "border-teal-400/30 bg-teal-400/[0.04]"
                    : "border-slate-700/70 bg-slate-800/50"
            }`}
        >

            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
               
                    <p className="text-[11px] font-bold uppercase tracking-[2px] text-teal-400">
                        {label}
                    </p>

   
                    <h3 className="mt-1.5 text-lg font-bold leading-snug text-white sm:text-xl">
                        {title}
                    </h3>

  
                    <p className="mt-1.5 text-sm font-medium text-slate-200">
                        {institution}
                    </p>
                </div>


                <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-300">
                    <Calendar
                        size={13}
                        className="text-teal-300"
                    />
                    {period}
                </span>
            </div>


            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                    <MapPin
                        size={13}
                        className="text-teal-300"
                    />
                    {location}
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />

                <span>{detail}</span>

                {grade && (
                    <>
                        <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                        <span>{grade}</span>
                    </>
                )}
            </div>


            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                {description}
            </p>
        </div>
    );
};

export default EducationCard;