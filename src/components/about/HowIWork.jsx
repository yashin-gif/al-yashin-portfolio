import { Workflow } from "lucide-react";
import AboutCard from "./AboutCard";
import CardHeading from "./CardHeading";

export default function HowIWork() {
  return (
    <AboutCard>
      <CardHeading icon={Workflow} title="How I Work" />
      <div className="space-y-4 leading-relaxed text-slate-300">
        <p>
          I start by understanding the problem and requirements before jumping
          into development.
        </p>
        <p>
          Then I build, test, debug and improve the solution step by step,
          keeping the code organized and the user experience practical.
        </p>
      </div>
    </AboutCard>
  );
}