import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollManager = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace("#", "");

            // নতুন পেজ render হওয়ার জন্য একটু অপেক্ষা
            const timer = setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 80);

            return () => clearTimeout(timer);
        }

        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return null;
};

export default ScrollManager;