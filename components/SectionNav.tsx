import { useEffect, useState } from "react";

import { sections, type SectionId } from "../content/home";

/**
 * Floating in-page navigation. Highlights the section currently in view; the
 * links work without JavaScript, the highlight is a progressive enhancement.
 */
export default function SectionNav() {
    const [active, setActive] = useState<SectionId | null>(null);

    useEffect(() => {
        const targets = sections
            .map(({ id }) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        // A section counts as "in view" while it crosses a band just below
        // the nav; the last one to enter the band wins.
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id as SectionId);
                    }
                }
            },
            { rootMargin: "-20% 0px -70% 0px" }
        );
        targets.forEach((el) => observer.observe(el));

        // Above the first section (the intro), nothing is active.
        const onScroll = () => {
            if (targets[0] && window.scrollY + window.innerHeight * 0.2 < targets[0].offsetTop) {
                setActive(null);
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <nav
            aria-label="Sections"
            className="fixed inset-x-0 top-4 z-30 hidden justify-center px-4 sm:flex"
        >
            <ul className="flex items-center gap-1 rounded-full border border-line/70 bg-surface/90 p-1 shadow-glass backdrop-blur-glass">
                <li>
                    <a
                        href="#top"
                        className="flex size-8 items-center justify-center rounded-full bg-accent font-display text-xs font-semibold text-surface"
                        aria-label="Back to top"
                    >
                        TS
                    </a>
                </li>
                {sections.map(({ id, label }) => (
                    <li key={id}>
                        <a
                            href={`#${id}`}
                            aria-current={active === id ? "location" : undefined}
                            className={`block rounded-full px-3.5 py-1.5 text-sm transition-colors duration-200 ${
                                active === id
                                    ? "bg-accent/12 font-medium text-accent"
                                    : "text-muted hover:text-ink"
                            }`}
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
