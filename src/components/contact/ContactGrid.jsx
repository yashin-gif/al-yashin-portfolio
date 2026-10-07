import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";
import ContactCard from "./ContactCard";

const contacts = [
    {
        icon: Mail,
        label: "Email",
        value: "fasalyashin@gmail.com",
        href: "mailto:fasalyashin@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+880 1903-039386",
        href: "tel:+8801903039386",
    },
    {
        icon: FaWhatsapp,
        label: "WhatsApp",
        value: "+880 1606-623517",
        href: "https://wa.me/8801606623517",
    },
    {
        icon: FaLinkedinIn,
        label: "LinkedIn",
        value: "linkedin.com/in/al-yashin-5179652a5",
        href: "https://www.linkedin.com/in/al-yashin-5179652a5/",
    },
    {
        icon: FaGithub,
        label: "GitHub",
        value: "github.com/yashin-gif",
        href: "https://github.com/yashin-gif",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Savar, Dhaka, Bangladesh",
    },
];

const ContactGrid = () => {
    return (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contacts.map((item) => (
                <ContactCard key={item.label} {...item} />
            ))}
        </div>
    );
};

export default ContactGrid;