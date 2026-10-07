import { useEffect, useRef, useState } from "react";

// Tailwind পুরো ক্লাসের নাম দেখে, তাই ক্লাসগুলো এভাবে পুরো লিখে রাখা হয়েছে
const hiddenByDirection = {
    left: "-translate-x-16 opacity-0",
    right: "translate-x-16 opacity-0",
    up: "translate-y-10 opacity-0",
    down: "-translate-y-10 opacity-0",
};

const Reveal = ({
    children,
    direction = "up",
    delay = 0,
    once = true,
    className = "",
}) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    if (once) observer.disconnect();
                } else if (!once) {
                    setVisible(false); // আবার স্ক্রলে ঢুকলে animation আবার চলবে
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [once]);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none ${
                visible
                    ? "translate-x-0 translate-y-0 opacity-100"
                    : `${hiddenByDirection[direction]} motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:opacity-100`
            } ${className}`}
        >
            {children}
        </div>
    );
};

export default Reveal;