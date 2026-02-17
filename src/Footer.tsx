import { useEffect, useState, type ReactNode } from "react";
import { socialLinks } from "./portfolioData";

const ICONS: Record<string, ReactNode> = {
    github: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
    ),
    linkedin: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    ),
    email: (
        <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
        </svg>
    ),
};

function Footer() {
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        fetch("https://8hiwdq6ggf.execute-api.us-east-1.amazonaws.com/visitor", {
            method: "POST",
        })
            .then((r) => r.json())
            .then((r) => setCount(r.count))
            .catch((e) => console.error(e));
    }, []);

    return (
        <footer
            id="contact"
            className="relative border-t border-maroon-800/30 bg-maroon-950/40"
        >
            {/* Top gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maroon-600/60 to-transparent" />

            <div className="max-w-6xl mx-auto px-6 py-16 text-center">
                {/* ── Heading ── */}
                <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                    Get in <span className="gradient-text">Touch</span>
                </h2>
                <p className="text-cream-400 text-sm sm:text-base max-w-md mx-auto mb-10">
                    I'm always open to new opportunities and interesting conversations.
                    Feel free to reach out!
                </p>

                {/* ── Social Links ── */}
                <div className="flex justify-center gap-5 mb-12">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.url}
                            target={link.icon !== "email" ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            className="glass-card w-12 h-12 rounded-full flex items-center justify-center text-cream-300 hover:text-maroon-300 hover:border-maroon-600/50 transition-all duration-300 hover:-translate-y-1"
                        >
                            {ICONS[link.icon]}
                        </a>
                    ))}
                </div>

                {/* ── Visitor Count ── */}
                {count !== null && (
                    <p className="text-xs text-cream-400/60 mb-4">
                        👋 Visitor #{count}
                    </p>
                )}

                {/* ── Credit ── */}
                <p className="text-xs text-cream-400/40">
                    Built with React &amp; Tailwind CSS · &copy; {new Date().getFullYear()}{" "}
                    Charles Chen
                </p>
            </div>
        </footer>
    );
}

export default Footer;
