import {
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    Send,
} from "lucide-react";

const Contact = () => {
    const email = "fasalyashin@gmail.com";
    const phone = "01903039386";
    const linkedin =
        "https://www.linkedin.com/in/al-yashin-5179652a5/";
    const github = "https://github.com/yashin-gif";

    const mailSubject = encodeURIComponent("Portfolio Contact");

    const mailBody = encodeURIComponent(
        "Hello Al Yashin,\n\nI came across your portfolio and would like to get in touch with you.\n\nBest regards,"
    );

    const mailtoLink = `mailto:${email}?subject=${mailSubject}&body=${mailBody}`;

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#07111f] py-16 sm:py-20"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-teal-400/5 blur-3xl" />

            <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

            <div className="relative mx-auto w-[92%] max-w-[1000px]">

                {/* Heading */}
                <div className="mb-9 text-center">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[3px] text-teal-400">
                        Contact
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Let’s{" "}
                        <span className="text-teal-400">
                            Work Together
                        </span>
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                        Have a project idea, opportunity or something you
                        would like to discuss? Feel free to reach out.
                    </p>
                </div>

                {/* Contact Container */}
                <div className="rounded-2xl border border-slate-700/70 bg-slate-800/50 p-5 sm:p-7">

                    {/* Contact Cards */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                        {/* Email */}
                        <a
                            href={mailtoLink}
                            className="group rounded-xl border border-slate-700/60 bg-slate-900/40 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-slate-900/70"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
                                <Mail size={19} />
                            </div>

                            <h3 className="mt-4 text-sm font-bold text-white">
                                Email
                            </h3>

                            <p className="mt-1.5 break-all text-xs text-slate-400">
                                {email}
                            </p>
                        </a>

                        {/* Phone */}
                        <a
                            href={`tel:${phone}`}
                            className="group rounded-xl border border-slate-700/60 bg-slate-900/40 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-slate-900/70"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
                                <Phone size={19} />
                            </div>

                            <h3 className="mt-4 text-sm font-bold text-white">
                                Phone
                            </h3>

                            <p className="mt-1.5 text-xs text-slate-400">
                                {phone}
                            </p>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="group rounded-xl border border-slate-700/60 bg-slate-900/40 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-slate-900/70"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
                                <span className="text-lg font-extrabold leading-none">
                                    in
                                </span>
                            </div>

                            <h3 className="mt-4 text-sm font-bold text-white">
                                LinkedIn
                            </h3>

                            <p className="mt-1.5 truncate text-xs text-slate-400">
                                linkedin.com/in/al-yashin-5179652a5
                            </p>
                        </a>

                        {/* GitHub */}
                        <a
                            href={github}
                            target="_blank"
                            rel="noreferrer"
                            className="group rounded-xl border border-slate-700/60 bg-slate-900/40 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-slate-900/70"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
                                <span className="text-sm font-extrabold">
                                    GH
                                </span>
                            </div>

                            <h3 className="mt-4 text-sm font-bold text-white">
                                GitHub
                            </h3>

                            <p className="mt-1.5 text-xs text-slate-400">
                                github.com/yashin-gif
                            </p>
                        </a>

                        {/* Location */}
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Dhaka%2CBangladesh"
                            target="_blank"
                            rel="noreferrer"
                            className="group rounded-xl border border-slate-700/60 bg-slate-900/40 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-slate-900/70"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
                                <MapPin size={19} />
                            </div>

                            <h3 className="mt-4 text-sm font-bold text-white">
                                Location
                            </h3>

                            <p className="mt-1.5 text-xs text-slate-400">
                                Dhaka, Bangladesh
                            </p>
                        </a>

                        {/* Let's Talk */}
                        <a
                            href={mailtoLink}
                            className="group rounded-xl border border-slate-700/60 bg-slate-900/40 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-slate-900/70"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
                                <Send size={19} />
                            </div>

                            <h3 className="mt-4 text-sm font-bold text-white">
                                Let’s Talk
                            </h3>

                            <p className="mt-1.5 text-xs leading-5 text-slate-400">
                                Open to projects, opportunities and
                                professional discussions.
                            </p>

                            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-teal-300 transition-colors group-hover:text-teal-200">
                                Contact Me
                                <ArrowRight size={14} />
                            </span>
                        </a>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-slate-700/60 pt-5 sm:flex-row">

                        <p className="text-center text-sm text-slate-400 sm:text-left">
                            I’m always interested in building something useful.
                        </p>

                        <a
                            href={mailtoLink}
                            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-teal-400 px-5 py-2.5 text-sm font-bold text-teal-950 transition-all duration-200 hover:-translate-y-1 hover:bg-teal-300"
                        >
                            Send Message
                            <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;