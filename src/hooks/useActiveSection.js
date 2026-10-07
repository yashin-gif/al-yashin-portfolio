import { useEffect, useState } from "react";

const useActiveSection = (ids, enabled = true) => {
    const [active, setActive] = useState(ids[0]);

    useEffect(() => {
        if (!enabled) return;

        const update = () => {
            // পর্দার ওপর থেকে ৪০% জায়গার রেখা
            const line = window.innerHeight * 0.4;
            let current = ids[0];

            ids.forEach((id) => {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= line) {
                    current = id;
                }
            });

            setActive(current);
        };

        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);

        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, [ids, enabled]);

    return active;
};

export default useActiveSection;