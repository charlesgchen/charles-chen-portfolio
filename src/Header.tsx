import { useState } from "react";
import { useActiveSection } from "./hooks";

const NAV_ITEMS = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

const SECTION_IDS = ["hero", "about", "projects", "experience", "contact"];

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const activeSection = useActiveSection(SECTION_IDS);

    const handleNavClick = () => setMobileOpen(false);

    return (
        <header className="glass-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* ── Logo ── */}
                <a
                    href="#hero"
                    className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
                >
                    <span className="gradient-text">CC</span>
                </a>

                {/* ── Desktop Nav ── */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`text-sm font-medium tracking-wide transition-colors duration-200 ${activeSection === item.href.slice(1)
                                    ? "text-maroon-400"
                                    : "text-cream-300 hover:text-maroon-300"
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* ── Mobile Hamburger ── */}
                <button
                    className="md:hidden flex flex-col gap-[5px] p-2 group"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation"
                >
                    <span
                        className={`block w-5 h-[2px] bg-cream-200 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                            }`}
                    />
                    <span
                        className={`block w-5 h-[2px] bg-cream-200 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`block w-5 h-[2px] bg-cream-200 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                            }`}
                    />
                </button>
            </div>

            {/* ── Mobile Menu ── */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-64 border-t border-maroon-800/40" : "max-h-0"
                    }`}
            >
                <nav className="flex flex-col gap-1 px-6 py-4">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={handleNavClick}
                            className={`py-2 text-sm font-medium transition-colors ${activeSection === item.href.slice(1)
                                    ? "text-maroon-400"
                                    : "text-cream-300 hover:text-maroon-300"
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Header;