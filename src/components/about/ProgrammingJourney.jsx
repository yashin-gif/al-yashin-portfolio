import {
  Route,
  Lightbulb,
  GraduationCap,
  Cpu,
  Globe,
  Server,
  Rocket,
} from "lucide-react";
import AboutCard from "./AboutCard";
import CardHeading from "./CardHeading";

const steps = [
  {
    icon: Lightbulb,
    title: "College",
    text: "The dream begins. Python was already familiar, but I wasn't coding yet.",
  },
  {
    icon: GraduationCap,
    title: "University",
    text: "My coding life truly began. I started with C, then C++.",
  },
  {
    icon: Cpu,
    title: "Core Computer Science",
    text: "Data Structures & Algorithms, Databases, Python and OOP.",
  },
  {
    icon: Globe,
    title: "Web Development",
    text: "JavaScript, CSS, Tailwind CSS, Node.js and React.",
  },
  {
    icon: Server,
    title: "Backend",
    text: "FastAPI with Python to build APIs.",
  },
  {
    icon: Rocket,
    title: "Today",
    text: "Building BloodBridge, my favorite project, to open it to the public and serve people. My long-term goal is to become an AI engineer, one step at a time.",
    highlight: true,
  },
];

export default function ProgrammingJourney() {
  return (
    <AboutCard>
      <CardHeading icon={Route} title="My Programming Journey" />

      <p className="max-w-3xl leading-relaxed text-slate-300">
        Becoming a software engineer was a quiet dream of mine back in college.
        I see creating something new as an art, and I wanted to use CSE to
        build things that genuinely help people.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map(({ icon: Icon, title, text, highlight }, i) => (
          <div
            key={title}
            className={`rounded-2xl border p-5 ${
              highlight
                ? "border-teal-400/40 bg-teal-400/10"
                : "border-white/10 bg-white/5"
            }`}
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-teal-400/40 bg-teal-400/10 text-teal-300">
                <Icon size={18} />
              </span>
              <span className="text-sm font-semibold text-teal-300">
                0{i + 1}
              </span>
            </div>
            <h4 className="font-semibold text-white">{title}</h4>
            <p className="mt-1 text-sm leading-relaxed text-slate-300">
              {text}
            </p>
          </div>
        ))}
      </div>
    </AboutCard>
  );
}