import { ArrowUp, Mail } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-700/70 bg-[#07111f]">
            <div className="mx-auto w-[92%] max-w-[1240px] py-7 sm:py-8">

                {/* Main Footer */}
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                    {/* Brand */}
                    <div>
                        <a
                            href="/#home"
                            className="text-lg font-extrabold tracking-[1px] text-white"
                        >
                            AL YASHIN
                        </a>

                        <p className="mt-1.5 max-w-md text-xs leading-5 text-slate-500">
                            Full Stack Developer & Problem Solver focused on
                            building practical, reliable and user-friendly
                            web applications.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
                        <a
                            href="/#about"
                            className="text-slate-400 transition-colors hover:text-teal-300"
                        >
                            About
                        </a>

                        <a
                            href="/#skills"
                            className="text-slate-400 transition-colors hover:text-teal-300"
                        >
                            Skills
                        </a>

                        <a
                            href="/#projects"
                            className="text-slate-400 transition-colors hover:text-teal-300"
                        >
                            Projects
                        </a>

                        <a
                            href="/#contact"
                            className="text-slate-400 transition-colors hover:text-teal-300"
                        >
                            Contact
                        </a>

                        <a
                            href="mailto:fasalyashin@gmail.com"
                            className="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-teal-300"
                        >
                            <Mail size={13} />
                            Email
                        </a>
                    </div>

                    {/* Back To Top */}
                    <a
                        href="/#home"
                        aria-label="Back to top"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/60 text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:border-teal-400/30 hover:text-teal-300"
                    >
                        <ArrowUp size={16} />
                    </a>
                </div>

                {/* Bottom */}
                <div className="mt-6 flex flex-col gap-2 border-t border-slate-700/70 pt-5 text-center text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
                    <p>
                        © {currentYear} Fas Al Yashin. All rights reserved.
                    </p>

                    <p>
                        Built with React.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;