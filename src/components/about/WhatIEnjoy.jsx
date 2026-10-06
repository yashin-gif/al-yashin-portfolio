import { Layers } from "lucide-react";
import AboutCard from "./AboutCard";
import CardHeading from "./CardHeading";

export default function WhatIEnjoy() {
  return (
    <AboutCard>
      <CardHeading icon={Layers} title="What I Enjoy Building" />
      <div className="space-y-4 leading-relaxed text-slate-300">
        <p>
          I love building websites, especially the combination of backend and
          frontend.
        </p>
        <p>
          While solving problems, I often think visually about how to make a
          solution better.
        </p>
        <p>
          Creating and learning something new is what I enjoy most. Wherever I
          find something new, I lose track of time.
        </p>
      </div>
    </AboutCard>
  );
}