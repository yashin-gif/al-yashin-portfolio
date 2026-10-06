import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";

// এখানে তোমার নিজের link বসাও
const links = [
    {
        name: "GitHub",
        href: "https://github.com/yashin-gif",
        icon: FaGithub,
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/al-yashin-5179652a5",
        icon: FaLinkedinIn,
    },
    {
        name: "WhatsApp",
        href: "https://wa.me/8801606623517",
        icon: FaWhatsapp,
    },
    {
        name: "Email",
        href: "mailto:fasalyashin@email.com",
        icon: Mail,
    },
];

const SocialLinks = () => {
    return (
        <div className="flex items-center gap-3">
            {links.map(({ name, href, icon: Icon }) => (
                <a
                    key={name}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={name}
                    title={name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800/60 text-slate-300 transition-all duration-200 hover:-translate-y-1 hover:border-teal-400/50 hover:text-teal-300"
                >
                    <Icon size={18} />
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;