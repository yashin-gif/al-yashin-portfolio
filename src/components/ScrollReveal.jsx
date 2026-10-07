import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Projects-এ আলাদা Reveal আছে, তাই ওটা বাদ
const SKIP = ["projects"];

const ScrollReveal = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname !== "/") return;

        const targets = [];

        document.querySelectorAll("main section[id]").forEach((section) => {
            if (SKIP.includes(section.id)) return;

            // background glow (absolute) বাদ দিয়ে আসল কন্টেন্টের container
            const container =
                [...section.children]
                    .reverse()
                    .find((el) => !/\babsolute\b/.test(el.className)) ||
                section;

            [...container.children].forEach((block) => {
                const isGrid =
                    getComputedStyle(block).display.includes("grid") &&
                    block.children.length > 1;

                if (isGrid) {
                    [...block.children].forEach((child, i) =>
                        targets.push({
                            el: child,
                            dir: i % 2 === 0 ? "left" : "right",
                            delay: Math.min(i * 100, 400),
                        })
                    );
                } else {
                    targets.push({ el: block, dir: "up", delay: 0 });
                }
            });
        });

        const dirOf = new Map();
        const timers = new Map();

        // শুরুতে সবাইকে লুকানো অবস্থায় রাখি
        targets.forEach(({ el, dir, delay }) => {
            dirOf.set(el, dir);
            el.setAttribute("data-reveal", dir);
            el.style.setProperty("--reveal-delay", `${delay}ms`);
        });

        const show = (el) => {
            clearTimeout(timers.get(el));
            if (!el.hasAttribute("data-reveal")) return; // আগে থেকেই দেখানো আছে
            el.classList.add("is-visible");

            // animation শেষে সরিয়ে দিই, যাতে card-এর hover effect ঠিক থাকে
            timers.set(
                el,
                setTimeout(() => {
                    el.removeAttribute("data-reveal");
                    el.classList.remove("is-visible");
                }, 1200)
            );
        };

        const hide = (el) => {
            clearTimeout(timers.get(el));
            el.setAttribute("data-reveal", dirOf.get(el)); // আবার লুকিয়ে ফেলি
            el.classList.remove("is-visible");
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.12) {
                        show(entry.target);
                    } else if (entry.intersectionRatio === 0) {
                        hide(entry.target); // পুরোপুরি স্ক্রিনের বাইরে গেলেই রিসেট
                    }
                });
            },
            { threshold: [0, 0.12] }
        );

        targets.forEach(({ el }) => observer.observe(el));

        return () => {
            observer.disconnect();
            timers.forEach(clearTimeout);
        };
    }, [pathname]);

    return null;
};

export default ScrollReveal;