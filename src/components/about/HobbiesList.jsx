import { Heart, Sparkles, PenLine, BookOpen, Plane } from "lucide-react";
import InfoCard from "./InfoCard";
import IconList from "./IconList";

const hobbies = [
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

const HobbiesList = () => {
    return (
        <InfoCard icon={Heart} title="Hobbies & Interests">
            <IconList items={hobbies} />
        </InfoCard>
    );
};

export default HobbiesList;