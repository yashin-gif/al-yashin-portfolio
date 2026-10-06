import { User } from "lucide-react";
import AboutCard from "./AboutCard";
import CardHeading from "./CardHeading";

export default function WhoIAm() {
  return (
    <AboutCard>
      <CardHeading icon={User} title="Who I Am" />
      <div className="space-y-4 leading-relaxed text-slate-300">
        <p>
          I am a Computer Science & Engineering student and a Full Stack
          Developer who enjoys building practical web applications.
        </p>
        <p>
          I like turning ideas and real-world problems into useful digital
          solutions with clean interfaces and reliable functionality.
        </p>
      </div>
    </AboutCard>
  );
}