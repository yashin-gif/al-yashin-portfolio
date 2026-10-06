import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { name: "Home", section: "home" },
        { name: "About", section: "about" },
        { name: "Skills", section: "skills" },
        { name: "Education", section: "education" },
        { name: "Projects", section: "projects" },
        { name: "Contact", section: "contact" },
    ];

    const handleNavClick = (section) => {
        setIsOpen(false);

        if (location.pathname === "/") {
            const element = document.getElementById(section);

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }

            return;
        }

        navigate(`/#${section}`);
    };

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-white/[0.07] bg-[#07111f]/90 backdrop-blur-xl">

            <div className="mx-auto flex h-[68px] w-[92%] max-w-[1240px] items-center justify-between">

                {/* Logo */}
                <button
                    type="button"
                    onClick={() => handleNavClick("contact")}
                    className="flex cursor-pointer items-center gap-2.5 border-0 bg-transparent p-0"
                    aria-label="Go to contact"
                >
                    <img
                        src="/images/logo/fas-logo.png"
                        alt="FAS"
                        className="h-8 w-auto object-contain"
                    />

                    <span className="h-6 w-px bg-teal-400/70" />

                    <span className="whitespace-nowrap text-[16px] font-extrabold tracking-[1px] text-white">
                        AL <span className="text-teal-300">YASHIN</span>
                    </span>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-7 min-[901px]:flex">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            type="button"
                            onClick={() => handleNavClick(item.section)}
                            className="group relative cursor-pointer border-0 bg-transparent text-[13px] font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                        >
                            {item.name}

                            <span className="absolute -bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-teal-300 transition-all duration-200 group-hover:w-full" />
                        </button>
                    ))}
                </nav>

                {/* Resume */}
                <a
                    href="/resume/Al-Yashin-Resume.pdf"
                    download
                    className="hidden items-center gap-2 rounded-lg border border-teal-400/30 bg-teal-400/[0.08] px-4 py-2 text-[12px] font-semibold text-teal-300 transition-all duration-200 hover:-translate-y-[1px] hover:bg-teal-400 hover:text-teal-950 min-[901px]:flex"
                >
                    <Download size={15} />
                    Resume
                </a>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex cursor-pointer items-center justify-center border-0 bg-transparent text-white min-[901px]:hidden"
                    aria-label="Toggle navigation"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`${
                    isOpen ? "flex" : "hidden"
                } flex-col border-t border-white/[0.06] bg-[#07111f] px-[5%] pb-5 pt-1 min-[901px]:hidden`}
            >
                {navItems.map((item) => (
                    <button
                        key={item.name}
                        type="button"
                        onClick={() => handleNavClick(item.section)}
                        className="w-full cursor-pointer border-0 border-b border-white/[0.06] bg-transparent py-3 text-left text-[14px] font-medium text-slate-300 transition-colors hover:text-teal-300"
                    >
                        {item.name}
                    </button>
                ))}

                <a
                    href="/resume/Al-Yashin-Resume.pdf"
                    download
                    onClick={() => setIsOpen(false)}
                    className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-teal-400 px-3 py-2.5 text-[13px] font-bold text-teal-950"
                >
                    <Download size={15} />
                    Download Resume
                </a>
            </div>
        </header>
    );
};

export default Navbar;