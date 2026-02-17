import { projects } from "./portfolioData";
import { useScrollReveal } from "./hooks";

function Projects() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="projects" className="py-24 sm:py-32">
            <div
                ref={ref}
                className={`max-w-6xl mx-auto px-6 reveal ${isVisible ? "visible" : ""}`}
            >
                {/* ── Section Header ── */}
                <div className="mb-16 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-maroon-600 to-amber-500" />
                </div>

                {/* ── Cards Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="glass-card glow-border rounded-xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 group"
                        >
                            {/* Featured Badge */}
                            {project.featured && (
                                <span className="self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-maroon-800/60 text-maroon-300 border border-maroon-700/40 mb-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                    Featured
                                </span>
                            )}

                            {/* Title */}
                            <h3 className="text-xl font-bold text-cream-100 mb-2 group-hover:text-maroon-300 transition-colors">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-cream-400 leading-relaxed mb-5 flex-1">
                                {project.description}
                            </p>

                            {/* Tech Tags */}
                            <div className="flex flex-wrap gap-2 mb-5">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-maroon-900/60 text-cream-300 border border-maroon-800/40"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex items-center gap-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-sm text-cream-300 hover:text-maroon-300 transition-colors"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                        Code
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-sm text-cream-300 hover:text-amber-400 transition-colors"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5-6h6m0 0v6m0-6L9.75 14.25"
                                            />
                                        </svg>
                                        Live
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
