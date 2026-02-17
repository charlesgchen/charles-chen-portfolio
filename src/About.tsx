import { aboutData, skills } from "./portfolioData";
import { useScrollReveal } from "./hooks";

const categories = ["Languages", "Frontend", "Backend & Data", "Cloud & DevOps", "ML / AI", "Practices"] as const;

function About() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="about" className="section-gradient py-24 sm:py-32">
            <div
                ref={ref}
                className={`max-w-6xl mx-auto px-6 reveal ${isVisible ? "visible" : ""}`}
            >
                {/* ── Section Header ── */}
                <div className="mb-16 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-maroon-600 to-amber-500" />
                </div>

                {/* ── Bio ── */}
                <div className="max-w-3xl mx-auto mb-16 space-y-5">
                    {aboutData.bio.map((para, i) => (
                        <p
                            key={i}
                            className="text-base sm:text-lg leading-relaxed text-cream-300"
                        >
                            {para}
                        </p>
                    ))}
                </div>

                {/* ── Skills Grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat) => (
                        <div
                            key={cat}
                            className="glass-card glow-border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
                        >
                            <h3 className="text-sm font-semibold uppercase tracking-widest text-maroon-400 mb-4">
                                {cat}
                            </h3>
                            <ul className="space-y-2">
                                {skills
                                    .filter((s) => s.category === cat)
                                    .map((s) => (
                                        <li
                                            key={s.name}
                                            className="flex items-center gap-2 text-cream-200 text-sm"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-maroon-500" />
                                            {s.name}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;