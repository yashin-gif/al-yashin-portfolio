import { ArrowRight, Download } from "lucide-react";
import ProfilePhoto from "./ProfilePhoto";
import SocialLinks from "./SocialLinks";
import HighlightCards from "./HighlightCards";
import HeroBackground from "./HeroBackground";
import AvailabilityBadge from "./AvailabilityBadge";

const Hero = () => {
    const handleProjectsClick = () => {
        const projectsSection = document.getElementById("projects");

        if (projectsSection) {
            projectsSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <section
            id="home"
            className="relative overflow-hidden bg-[#07111f] pt-[92px] pb-16 sm:pt-[104px] sm:pb-20"
        >
            {/* Background */}
            <HeroBackground />

            <div className="relative mx-auto grid w-[92%] max-w-[1240px] items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">

                {/* Left Content */}
                <div className="max-w-2xl">

                    <p className="mb-2 text-sm font-medium text-teal-400">
                        Hey, I'm
                    </p>

                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[40px]">
                        YASHIN
                    </h1>

                    <h2 className="mt-3 text-xl font-semibold text-slate-300 sm:text-2xl">
                        Full Stack Developer{" "}
                        <span className="text-teal-400">|</span>{" "}
                        Problem Solver
                    </h2>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                        I build clean, responsive and practical web
                        applications, turning real-world problems into
                        reliable digital solutions with modern technologies.
                    </p>

                    {/* Buttons */}
                    <div className="mt-7 flex flex-wrap gap-3">

                        {/* View Projects */}
                        <button
                            type="button"
                            onClick={handleProjectsClick}
                            className="inline-flex cursor-pointer items-center gap-2 rounded-lg border-0 bg-teal-400 px-5 py-2.5 text-sm font-bold text-teal-950 transition-all duration-200 hover:-translate-y-1 hover:bg-teal-300"
                        >
                            View My Projects
                            <ArrowRight size={16} />
                        </button>

                        {/* Download Resume */}
                        <a
                            href="/resume/Al-Yashin-Resume.pdf"
                            download
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:-translate-y-1 hover:border-teal-400/30 hover:text-teal-300"
                        >
                            <Download size={16} />
                            Download Resume
                        </a>
                    </div>

                    {/* Availability + Social Links */}
                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
                        <AvailabilityBadge />
                        <SocialLinks />
                    </div>

                    {/* Highlights */}
                    <HighlightCards />
                </div>

                {/* Right - Profile */}
                <div className="flex justify-center lg:justify-end">
                    <ProfilePhoto src="/images/profile/profile.jpg" />
                </div>

            </div>
        </section>
    );
};

export default Hero;