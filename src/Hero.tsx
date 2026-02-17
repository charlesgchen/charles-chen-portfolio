import { heroData } from "./portfolioData";

function Hero() {
    return (
        <section
            id="hero"
            className="hero-gradient relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        >
            {/* ── Floating decorations ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-maroon-700/10 blur-3xl animate-float" />
                <div
                    className="absolute bottom-32 right-[15%] w-96 h-96 rounded-full bg-amber-700/10 blur-3xl animate-float"
                    style={{ animationDelay: "2s" }}
                />
                <div
                    className="absolute top-1/2 left-[60%] w-48 h-48 rounded-full bg-rust-700/10 blur-3xl animate-float"
                    style={{ animationDelay: "4s" }}
                />
                {/* Subtle grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(245,235,224,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,235,224,0.3) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* ── Greeting badge ── */}
                <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-maroon-700/40 bg-maroon-900/40 text-sm text-cream-300 mb-8">
                    <span className="w-2 h-2 rounded-full bg-maroon-400 animate-pulse-glow" />
                    Available for opportunities
                </div>

                {/* ── Name ── */}
                <h1
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 animate-fade-in-up"
                    style={{ animationDelay: "0.15s", animationFillMode: "both" }}
                >
                    <span className="gradient-text">{heroData.name}</span>
                </h1>

                {/* ── Title ── */}
                <p
                    className="text-xl sm:text-2xl md:text-3xl font-light text-cream-300 mb-6 animate-fade-in-up"
                    style={{ animationDelay: "0.35s", animationFillMode: "both" }}
                >
                    {heroData.title}
                </p>

                {/* ── Tagline ── */}
                <p
                    className="max-w-2xl mx-auto text-base sm:text-lg text-cream-400 leading-relaxed mb-10 animate-fade-in-up"
                    style={{ animationDelay: "0.55s", animationFillMode: "both" }}
                >
                    {heroData.tagline}
                </p>

                {/* ── CTA Buttons ── */}
                <div
                    className="flex flex-wrap justify-center gap-4 animate-fade-in-up"
                    style={{ animationDelay: "0.75s", animationFillMode: "both" }}
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded-lg bg-gradient-to-r from-maroon-700 to-maroon-600 text-cream-50 font-semibold text-sm tracking-wide hover:from-maroon-600 hover:to-maroon-500 transition-all duration-300 shadow-lg shadow-maroon-900/50 hover:shadow-maroon-700/40 hover:-translate-y-0.5"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-lg border border-maroon-700/50 text-cream-200 font-semibold text-sm tracking-wide hover:bg-maroon-900/40 hover:border-maroon-600/60 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>

            {/* ── Scroll indicator ── */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1.2s", animationFillMode: "both" }}>
                <span className="text-xs text-cream-400 tracking-widest uppercase">Scroll</span>
                <div className="w-5 h-8 rounded-full border-2 border-cream-400/30 flex justify-center pt-1.5">
                    <div className="w-1 h-2 rounded-full bg-cream-300 animate-bounce" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
