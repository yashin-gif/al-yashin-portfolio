import { useEffect, useRef, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import experiences from "./experienceData";

const ExperienceTimeline = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const [activeItem, setActiveItem] = useState(null);

    const itemRefs = useRef([]);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const index = Number(
                        entry.target.dataset.index
                    );

                    setVisibleItems((prev) =>
                        prev.includes(index)
                            ? prev
                            : [...prev, index]
                    );

                    observer.unobserve(entry.target);
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
        <div className="relative mx-auto max-w-[1050px]">

       
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

      
            <div className="space-y-5 md:space-y-6">
                {experiences.map((experience, index) => {
                    const isVisible =
                        visibleItems.includes(index);

                    const isActive =
                        activeItem === index;

                    return (
                        <div
                            key={experience.title}
                            ref={(element) => {
                                itemRefs.current[index] =
                                    element;
                            }}
                            data-index={index}
                            className="relative grid md:grid-cols-2">
                    
                            <span
                                className={`
                                    absolute
                                    left-1/2
                                    top-7
                                    z-20
                                    hidden
                                    h-3
                                    w-3
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

                  
                            <span
                                className={`
                                    absolute
                                    top-[31px]
                                    hidden
                                    h-px
                                    transition-all
                                    duration-300
                                    md:block

                                    ${
                                        experience.side === "left"
                                            ? "right-0 w-10"
                                            : "left-0 w-10"
                                    }

                                    ${
                                        isActive
                                            ? "bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.55)]"
                                            : "bg-slate-700"
                                    }
                                `}
                            />

                   
                            <div
                                className={`
                                    ${
                                        experience.side === "left"
                                            ? "md:col-start-1 md:pr-10"
                                            : "md:col-start-2 md:pl-10"
                                    }

                                    transition-all
                                    duration-700
                                    ease-out

                                    ${
                                        isVisible
                                            ? "translate-x-0 translate-y-0 opacity-100"
                                            : experience.side === "left"
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
                                <ExperienceCard
                                    icon={experience.icon}
                                    title={experience.title}
                                    description={
                                        experience.description
                                    }
                                    active={isActive}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ExperienceTimeline;