import { experiences } from "./portfolioData";
import { useScrollReveal } from "./hooks";

function Experience() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="experience" className="section-gradient py-24 sm:py-32">
            <div
                ref={ref}
                className={`max-w-5xl mx-auto px-6 reveal ${isVisible ? "visible" : ""}`}
            >
                {/* ── Section Header ── */}
                <div className="mb-16 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-maroon-600 to-amber-500" />
                </div>

                {/* ── Timeline ── */}
                <div className="relative">
                    <div className="timeline-line" />

                    {experiences.map((exp, i) => {
                        const isLeft = i % 2 === 0;
                        return (
                            <div
                                key={i}
                                className={`relative mb-12 last:mb-0 md:flex ${isLeft ? "md:justify-start" : "md:justify-end"
                                    }`}
                            >
                                {/* ── Dot ── */}
                                <div className="timeline-dot" style={{ top: "1.5rem" }} />

                                {/* ── Card ── */}
                                <div
                                    className={`glass-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 ml-12 md:ml-0 md:w-[calc(50%-2.5rem)] ${isLeft ? "md:mr-auto" : "md:ml-auto"
                                        }`}
                                >
                                    {/* Date badge */}
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-maroon-900/60 text-amber-400 border border-maroon-800/40 mb-3">
                                        {exp.dateRange}
                                    </span>

                                    <h3 className="text-lg font-bold text-cream-100 mb-0.5">
                                        {exp.role}
                                    </h3>
                                    <p className="text-sm font-medium text-maroon-400 mb-4">
                                        {exp.company}
                                    </p>

                                    <ul className="space-y-2">
                                        {exp.bullets.map((bullet, j) => (
                                            <li
                                                key={j}
                                                className="flex gap-2 text-sm text-cream-300 leading-relaxed"
                                            >
                                                <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-maroon-500" />
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Experience;
