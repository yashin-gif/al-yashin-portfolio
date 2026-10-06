import { ShieldCheck, Users, Smile, Heart, Flame } from "lucide-react";
import AboutCard from "./AboutCard";

const traits = [
  {
    icon: ShieldCheck,
    title: "Responsible",
    text: "I take responsibility seriously and never neglect it, because responsibility pushes people forward to do something new.",
  },
  {
    icon: Users,
    title: "Team player",
    text: "Working with others helps me find my own gaps and build better solutions.",
  },
  {
    icon: Smile,
    title: "Calm and gentle",
    text: "People describe me as calm, someone who doesn't speak without reason.",
  },
  {
    icon: Heart,
    title: "Faith",
    text: "My faith is a priority in my life, and I practice it through prayer and Islamic activities.",
  },
  {
    icon: Flame,
    title: "Motivation",
    text: "My father inspires me. I have seen him stay strong through countless difficulties, and that keeps me going.",
    wide: true,
  },
];

export default function Personality() {
  return (
    <div className="pt-8">
      <h3 className="mb-6 text-center text-3xl font-extrabold text-white sm:text-4xl">
        My <span className="text-teal-400">Personality</span>
      </h3>

      <div className="grid gap-6 md:grid-cols-2">
        {traits.map(({ icon: Icon, title, text, wide }) => (
          <AboutCard key={title} className={wide ? "md:col-span-2" : ""}>
            <div className="mb-3 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-teal-400/30 bg-teal-400/10 text-teal-300">
                <Icon size={20} />
              </span>
              <h4 className="text-lg font-bold text-white">{title}</h4>
            </div>
            <p className="leading-relaxed text-slate-300">{text}</p>
          </AboutCard>
        ))}
      </div>
    </div>
  );
}