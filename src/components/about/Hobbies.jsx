import { Heart, Sparkles, PenLine, BookOpen, Plane } from "lucide-react";
import AboutCard from "./AboutCard";
import CardHeading from "./CardHeading";

const items = [
  {
    icon: Sparkles,
    label: "Creating",
    text: "My first passion is creating something new.",
  },
  {
    icon: PenLine,
    label: "Writing",
    text: "I write poems, stories and Islamic articles.",
  },
  {
    icon: BookOpen,
    label: "Reading",
    text: "I read a lot, especially technology-related writing and writing about the world. It has become a habit for me.",
  },
  {
    icon: Plane,
    label: "Travel",
    text: "I love to travel, because every journey teaches me something new.",
  },
];

export default function Hobbies() {
  return (
    <AboutCard>
      <CardHeading icon={Heart} title="Hobbies & Interests" />
      <ul className="space-y-4">
        {items.map(({ icon: Icon, label, text }) => (
          <li key={label} className="flex gap-3">
            <Icon size={20} className="mt-1 shrink-0 text-teal-300" />
            <p className="leading-relaxed text-slate-300">
              <span className="font-semibold text-white">{label}:</span> {text}
            </p>
          </li>
        ))}
      </ul>
    </AboutCard>
  );
}