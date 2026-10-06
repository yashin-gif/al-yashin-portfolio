import SkillsHeader from "./skills/SkillsHeader";
import CanDoGrid from "./skills/CanDoGrid";
import TechStack from "./skills/TechStack";

const Skills = () => {
    return (
        <section
            id="skills"
            className="relative scroll-mt-20 overflow-hidden bg-[#07111f] py-14 sm:py-16"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-teal-400/5 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

            <div className="relative mx-auto w-[92%] max-w-[1240px]">
                <SkillsHeader />

                <CanDoGrid />

                <div className="mt-10">
                    <TechStack />
                </div>
            </div>
        </section>
    );
};

export default Skills;