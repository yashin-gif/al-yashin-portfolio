import { GraduationCap, CalendarDays, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.S.c in Computer Science & Engineering",
      institution: "City University",
      location: "Bangladesh",
      period: "2024 – 2027",
      status: "Expected Graduation: 2027",
      description:
        "Building a strong foundation in computer science, software development, problem solving and modern web technologies.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Alhaz Gazi Amanuzzaman Morden College",
      location: "Jamalpur, Bangladesh",
      period: "Completed",
      status: "Higher Secondary Education",
      description:
        "Completed higher secondary education with a foundation in science and technology.",
    },
  ];

  return (
    <section
      id="education"
      className="relative overflow-hidden bg-slate-900 py-16 sm:py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-teal-400/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto w-[92%] max-w-[1240px]">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[3px] text-teal-400">
            Education
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My Academic{" "}
            <span className="text-teal-400">Journey</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            My academic background and the foundation that supports
            my journey in software development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">

          {/* Timeline Line */}
          <div className="absolute left-[19px] top-5 hidden h-[calc(100%-40px)] w-px bg-slate-700 sm:block" />

          <div className="space-y-5">
            {education.map((item, index) => (
              <div
                key={item.degree}
                className="relative sm:pl-14"
              >
                {/* Timeline Icon */}
                <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border border-teal-400/30 bg-slate-800 text-teal-300 shadow-[0_0_20px_rgba(45,212,191,0.08)] sm:flex">
                  <GraduationCap size={18} />
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-slate-700/70 bg-slate-800/50 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-teal-400/30 sm:p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-teal-400">
                        {index === 0
                          ? "Current Education"
                          : "Completed"}
                      </p>

                      <h3 className="mt-1.5 text-lg font-bold leading-snug text-white sm:text-xl">
                        {item.degree}
                      </h3>

                      <p className="mt-1.5 text-sm font-medium text-slate-300">
                        {item.institution}
                      </p>
                    </div>

                    <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-3 py-1.5 text-[11px] font-medium text-slate-300">
                      <CalendarDays size={13} />
                      {item.period}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin
                        size={14}
                        className="text-teal-400"
                      />
                      {item.location}
                    </span>

                    <span className="text-slate-600">
                      •
                    </span>

                    <span>{item.status}</span>
                  </div>

                  <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;