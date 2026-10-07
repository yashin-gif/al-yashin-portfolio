import { UserRound, Workflow, Layers } from "lucide-react";
import AboutHeader from "./about/AboutHeader";
import InfoCard from "./about/InfoCard";
import JourneyTimeline from "./about/JourneyTimeline";
import HobbiesList from "./about/HobbiesList";
import PersonalityGrid from "./about/PersonalityGrid";
import AboutQuote from "./about/AboutQuote";

const About = () => {
    return (
        <section
            id="about"
            className="relative scroll-mt-20 overflow-hidden bg-slate-900 py-14 sm:py-16"
        >
      
            <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-teal-400/5 blur-3xl" />
            <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

            <div className="relative mx-auto w-[92%] max-w-[1240px]">
                <AboutHeader />

         
                <div className="grid gap-5 lg:grid-cols-3">
                    <InfoCard icon={UserRound} title="Who I Am">
                        <p>
                            I am a Computer Science & Engineering student and a
                            Full Stack Developer who enjoys building practical
                            web applications.
                        </p>
                        <p>
                            I like turning ideas and real-world problems into
                            useful digital solutions with clean interfaces and
                            reliable functionality.
                        </p>
                    </InfoCard>

                    <InfoCard icon={Workflow} title="How I Work">
                        <p>
                            I start by understanding the problem and
                            requirements before jumping into development.
                        </p>
                        <p>
                            Then I build, test, debug and improve the solution
                            step by step, keeping the code organized and the
                            user experience practical.
                        </p>
                    </InfoCard>

                    <InfoCard icon={Layers} title="What I Enjoy Building">
                        <p>
                            I love building websites, especially the
                            combination of backend and frontend. While solving
                            problems, I often think visually about how to make
                            a solution better.
                        </p>
                        <p>
                            Creating and learning something new is what I enjoy
                            most. Wherever I find something new, I lose track
                            of time.
                        </p>
                    </InfoCard>
                </div>

       
                <div className="mt-5">
                    <JourneyTimeline />
                </div>

   
                <div className="mt-5 grid gap-5 lg:grid-cols-2">
                    <HobbiesList />
                    <PersonalityGrid />
                </div>

            
                <AboutQuote className="mt-5" />
            </div>
        </section>
    );
};

export default About;