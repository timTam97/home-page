import type { ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";

import ExternalLink from "../components/ExternalLink";
import {
    ArrowUpRightIcon,
    AwardIcon,
    GitHubIcon,
    LinkedInIcon,
} from "../components/Icons";
import SectionNav from "../components/SectionNav";
import SiteFooter from "../components/SiteFooter";
import {
    education,
    experience,
    hackathons,
    profile,
    projects,
    sections,
    skills,
    socials,
    type SectionId,
} from "../content/home";
import portrait from "../assets/profile.jpg";
import painting from "../assets/rousseau-repast-of-the-lion.jpg";

const ogImage = `${profile.url}/og.jpg`;

export default function HomePage() {
    return (
        <>
            <Head>
                <title>{`${profile.name} · ${profile.role}`}</title>
                <meta name="description" content={profile.description} />
                <link rel="canonical" href={`${profile.url}/`} />
                <meta property="og:type" content="profile" />
                <meta property="og:url" content={`${profile.url}/`} />
                <meta property="og:title" content={profile.name} />
                <meta property="og:description" content={profile.description} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink focus:shadow-glass"
            >
                Skip to content
            </a>

            <SectionNav />

            <header id="top" className="relative isolate">
                <div className="relative h-80 overflow-hidden sm:h-[26rem]">
                    <Image
                        src={painting}
                        alt=""
                        fill
                        preload
                        placeholder="blur"
                        sizes="100vw"
                        quality={80}
                        className="object-cover object-[50%_30%]"
                    />
                    {/* Fade the painting into the page so the intro card
                        reads cleanly in either colour scheme. */}
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-page"
                    />
                </div>

                <div className="relative mx-auto -mt-32 max-w-5xl px-5 sm:-mt-48 sm:px-8">
                    <div className="rounded-3xl border border-line/70 bg-surface/80 p-6 shadow-glass backdrop-blur-glass motion-safe:animate-rise sm:p-10">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
                            <Image
                                src={portrait}
                                alt="Portrait of Timothy Samraj"
                                width={144}
                                height={144}
                                preload
                                className="size-24 shrink-0 rounded-full shadow-card ring-4 ring-surface sm:size-36"
                            />
                            <div>
                                <h1 className="font-display text-4xl font-semibold tracking-tight text-balance text-ink sm:text-6xl">
                                    {profile.name}
                                </h1>
                                <p className="mt-2 text-lg font-medium text-accent sm:text-xl">
                                    {profile.role}
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 max-w-2xl space-y-3 leading-relaxed text-pretty text-ink-soft sm:text-lg">
                            {profile.intro.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>

                        <ul className="mt-8 flex flex-wrap gap-3">
                            <li>
                                <ExternalLink
                                    href={socials.github.href}
                                    className="button group"
                                >
                                    <GitHubIcon className="size-4" />
                                    {socials.github.label}
                                    <ArrowUpRightIcon className="size-3.5 opacity-60 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
                                </ExternalLink>
                            </li>
                            <li>
                                <ExternalLink
                                    href={socials.linkedin.href}
                                    className="button group"
                                >
                                    <LinkedInIcon className="size-4" />
                                    {socials.linkedin.label}
                                    <ArrowUpRightIcon className="size-3.5 opacity-60 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
                                </ExternalLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            <main id="main" className="mx-auto mt-6 max-w-5xl px-5 sm:mt-10 sm:px-8">
                <Section id="projects">
                    <ul className="grid gap-4 sm:grid-cols-2">
                        {projects.map((project) => (
                            <li
                                key={project.name}
                                className="tile tile-interactive group flex flex-col sm:last:odd:col-span-2"
                            >
                                <h3 className="font-display text-xl font-semibold text-ink">
                                    <ExternalLink
                                        href={project.href}
                                        className="tile-link"
                                    >
                                        {project.name}
                                    </ExternalLink>
                                </h3>
                                <p className="mt-2 leading-relaxed text-ink-soft">
                                    {project.description}
                                </p>
                                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Built with">
                                    {project.stack.map((tech) => (
                                        <li key={tech} className="chip">
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                                <CardFooter label="GitHub" />
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section id="experience">
                    <ol className="relative space-y-10 before:absolute before:inset-y-2 before:left-[5px] before:w-px before:bg-line">
                        {experience.map((role) => (
                            <li key={`${role.title}-${role.period}`} className="relative pl-9">
                                <span
                                    aria-hidden
                                    className={`absolute left-0 top-2 size-[11px] rounded-full ring-4 ring-page ${
                                        role.current ? "bg-accent" : "bg-line-strong"
                                    }`}
                                />
                                <h3 className="font-display text-xl font-semibold text-ink">
                                    {role.title}
                                </h3>
                                <p className="mt-1 flex flex-wrap gap-x-2 text-sm text-muted">
                                    <span>{role.org}</span>
                                    <span aria-hidden className="hidden sm:inline">
                                        ·
                                    </span>
                                    <span>{role.period}</span>
                                </p>
                                <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
                                    {role.description}
                                </p>
                            </li>
                        ))}
                    </ol>
                </Section>

                <Section id="skills">
                    <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                        {skills.map((skill) => (
                            <div key={skill.name} className="border-t-2 border-sun/60 pt-4">
                                <dt className="font-display text-lg font-semibold text-ink">
                                    {skill.name}
                                </dt>
                                <dd className="mt-2 leading-relaxed text-ink-soft">
                                    {skill.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </Section>

                <Section id="hackathons">
                    <ul className="grid gap-4 sm:grid-cols-2">
                        {hackathons.map((hack) => (
                            <li
                                key={hack.name}
                                className="tile tile-interactive group flex flex-col sm:last:odd:col-span-2"
                            >
                                <p className="text-xs font-medium tracking-wide text-muted uppercase">
                                    {hack.event}
                                    <span aria-hidden className="mx-1.5">
                                        ·
                                    </span>
                                    {hack.date}
                                </p>
                                <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                                    <ExternalLink href={hack.href} className="tile-link">
                                        {hack.name}
                                    </ExternalLink>
                                </h3>
                                <p className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-sun/15 px-2.5 py-1 text-xs font-medium text-sun-ink">
                                    <AwardIcon className="size-3.5" />
                                    {hack.award}
                                </p>
                                <p className="mt-3 leading-relaxed text-ink-soft">
                                    {hack.description}
                                </p>
                                <CardFooter label={hack.linkLabel} />
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section id="education">
                    <div className="tile">
                        <h3 className="font-display text-xl font-semibold text-ink">
                            {education.degree}
                        </h3>
                        <p className="mt-1 text-ink-soft">{education.institution}</p>
                        <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted">
                            <span className="chip">{education.status}</span>
                            {education.period}
                        </p>
                    </div>
                </Section>
            </main>

            <div className="mt-8">
                <SiteFooter />
            </div>
        </>
    );
}

function Section({ id, children }: { id: SectionId; children: ReactNode }) {
    const index = sections.findIndex((s) => s.id === id);
    const { title } = sections[index];
    return (
        <section
            id={id}
            aria-labelledby={`${id}-title`}
            className="scroll-mt-24 border-t border-line py-14 first:border-t-0 sm:py-16 lg:grid lg:grid-cols-[12rem_1fr] lg:gap-12"
        >
            <div className="mb-8 lg:mb-0">
                <div className="lg:sticky lg:top-24">
                    <p aria-hidden className="font-display text-sm font-medium text-sun-ink tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2
                        id={`${id}-title`}
                        className="mt-1 font-display text-3xl font-semibold tracking-tight text-ink"
                    >
                        {title}
                    </h2>
                </div>
            </div>
            <div>{children}</div>
        </section>
    );
}

/** Visual "View on …" affordance; the card's heading link is the real link. */
function CardFooter({ label }: { label: string }) {
    return (
        <p aria-hidden className="mt-auto flex items-center gap-1 pt-5 text-sm font-medium text-accent">
            {label}
            <ArrowUpRightIcon className="size-3.5 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
        </p>
    );
}
