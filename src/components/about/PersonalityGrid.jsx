import { UserRound, ShieldCheck, Users, Smile, Heart, Flame } from "lucide-react";
import InfoCard from "./InfoCard";
import IconList from "./IconList";

const traits = [
    {
        icon: ShieldCheck,
        label: "Responsible",
        text: "I take responsibility seriously and never neglect it, because responsibility pushes people forward to do something new.",
    },
    {
        icon: Users,
        label: "Team player",
        text: "Working with others helps me find my own gaps and build better solutions.",
    },
    {
        icon: Smile,
        label: "Calm and gentle",
        text: "People describe me as calm, someone who doesn't speak without reason.",
    },
    {
        icon: Heart,
        label: "Faith",
        text: "My faith is a priority in my life, and I practice it through prayer and Islamic activities.",
    },
    {
        icon: Flame,
        label: "Motivation",
        text: "My father inspires me. I have seen him stay strong through countless difficulties, and that keeps me going.",
    },
];

const PersonalityGrid = () => {
    return (
        <InfoCard icon={UserRound} title="My Personality">
            <IconList items={traits} />
        </InfoCard>
    );
};

export default PersonalityGrid;