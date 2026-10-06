import { useEffect, useRef, useState } from "react";
import EducationCard from "./EducationCard";

const education = [
    {
        side: "left",
        label: "Current Education",
        title: "B.Sc. in Computer Science & Engineering",
        institution: "City University",
        location: "Bangladesh",
        detail: "Expected Graduation: 2028",
        period: "2024 – 2028",
        description:
            "Building a strong foundation in computer science, software development, problem solving and modern web technologies.",
        current: true,
    },
    {
        side: "right",
        label: "Completed",
        title: "Higher Secondary Certificate (HSC)",
        institution: "Alhaz Gazi Amanuzzaman Modern College",
        location: "Jamalpur, Bangladesh",
        detail: "Higher Secondary Education",
        period: "2020 – 2022",
        description:
            "Completed higher secondary education with a foundation in science and technology.",
    },
    {
        side: "left",
        label: "Completed",
        title: "Secondary School Certificate (SSC)",
        institution: "Alirpara MU High School",
        location: "Jamalpur, Bangladesh",
        detail: "Secondary Education",
        period: "2018 – 2020",
        description:
            "Completed secondary education with a foundation in science and technology.",
    },
];

const EducationTimeline = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const [activeItem, setActiveItem] = useState(null);

    const itemRefs = useRef([]);

    // Scroll reveal
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(
                            entry.target.dataset.index
                        );

                        setVisibleItems((prev) =>
                            prev.includes(index)
                                ? prev
                                : [...prev, index]
                        );

                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.18,
                rootMargin: "0px 0px -60px 0px",
            }
        );

        itemRefs.current.forEach((item) => {
            if (item) {
                observer.observe(item);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative mx-auto max-w-6xl">

            {/* ========================================
                CENTER TIMELINE
            ======================================== */}
            <div
                className="
                    absolute
                    bottom-0
                    left-1/2
                    top-0
                    hidden
                    w-px
                    -translate-x-1/2
                    bg-slate-700/80
                    md:block
                "
            />

            {/* ========================================
                EDUCATION ITEMS
            ======================================== */}
            <div className="space-y-8 md:space-y-10">
                {education.map((item, index) => {
                    const isVisible =
                        visibleItems.includes(index);

                    const isActive =
                        activeItem === index;

                    return (
                        <div
                            key={item.title}
                            ref={(element) => {
                                itemRefs.current[index] = element;
                            }}
                            data-index={index}
                            className="relative grid md:grid-cols-2"
                        >
                            {/* ========================================
                                TIMELINE DOT
                            ======================================== */}
                            <span
                                className={`
                                    absolute
                                    left-1/2
                                    top-8
                                    z-20
                                    hidden
                                    h-3.5
                                    w-3.5
                                    -translate-x-1/2
                                    rounded-full
                                    border-2
                                    border-[#07111f]
                                    transition-all
                                    duration-300
                                    md:block

                                    ${
                                        isActive
                                            ? `
                                                scale-125
                                                bg-teal-300
                                                shadow-[0_0_0_5px_rgba(45,212,191,0.15),0_0_18px_rgba(45,212,191,0.7)]
                                            `
                                            : `
                                                scale-100
                                                bg-teal-400
                                                shadow-[0_0_0_4px_rgba(45,212,191,0.12)]
                                            `
                                    }

                                    ${
                                        isVisible
                                            ? "opacity-100"
                                            : "scale-0 opacity-0"
                                    }
                                `}
                            />

                            {/* ========================================
                                CONNECTOR
                            ======================================== */}
                            <span
                                className={`
                                    absolute
                                    top-[35px]
                                    hidden
                                    h-px
                                    transition-all
                                    duration-300
                                    md:block

                                    ${
                                        item.side === "left"
                                            ? "right-0 w-12"
                                            : "left-0 w-12"
                                    }

                                    ${
                                        isActive
                                            ? "bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.55)]"
                                            : "bg-slate-700"
                                    }
                                `}
                            />

                            {/* ========================================
                                CARD
                            ======================================== */}
                            <div
                                className={`
                                    ${
                                        item.side === "left"
                                            ? "md:col-start-1 md:pr-12"
                                            : "md:col-start-2 md:pl-12"
                                    }

                                    transition-all
                                    duration-700
                                    ease-out

                                    ${
                                        isVisible
                                            ? "translate-x-0 translate-y-0 opacity-100"
                                            : item.side === "left"
                                            ? "-translate-x-16 translate-y-4 opacity-0"
                                            : "translate-x-16 translate-y-4 opacity-0"
                                    }
                                `}
                                onMouseEnter={() =>
                                    setActiveItem(index)
                                }
                                onMouseLeave={() =>
                                    setActiveItem(null)
                                }
                                onTouchStart={() =>
                                    setActiveItem(index)
                                }
                            >
                                {/* Existing Education Card */}
                                <div
                                    className={`
                                        rounded-2xl
                                        transition-all
                                        duration-300

                                        ${
                                            isActive
                                                ? `
                                                    -translate-y-1
                                                    drop-shadow-[0_0_18px_rgba(45,212,191,0.08)]
                                                `
                                                : ""
                                        }
                                    `}
                                >
                                    <EducationCard
                                        {...item}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default EducationTimeline;