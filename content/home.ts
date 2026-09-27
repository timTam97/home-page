// All home page copy lives here, so editing the site means editing data, not
// markup. pages/index.tsx renders it.

export type Link = { label: string; href: string };

export const profile = {
    name: "Timothy Samraj",
    role: "Solutions Architect at AWS",
    intro: [
        "Tim here. I'm currently a Solutions Architect at Amazon Web Services (AWS).",
        "Here you'll find my unofficial resume, as well as links to some of my side projects and hackathons.",
    ],
    description:
        "Timothy Samraj - Solutions Architect at AWS. Unofficial resume, side projects and hackathons.",
    url: "https://timsam.au",
};

export const socials = {
    github: { label: "GitHub", href: "https://github.com/timTam97" },
    linkedin: {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/timothysamraj/",
    },
} satisfies Record<string, Link>;

export type Project = {
    name: string;
    href: string;
    stack: string[];
    description: string;
};

export const projects: Project[] = [
    {
        name: "compcontrol-api",
        href: "https://github.com/timTam97/compcontrol-api",
        stack: ["AWS CDK", "TypeScript", "Python"],
        description: "An API that allows you to remotely control your computer.",
    },
    {
        name: "compcontrol-client",
        href: "https://github.com/timTam97/compcontrol-client",
        stack: ["Haskell", "Win32 API"],
        description:
            "Windows client that receives WebSocket commands from the API to lock, sleep, hibernate, or shutdown your PC.",
    },
    {
        name: "screenlapse",
        href: "https://github.com/timTam97/screenlapse",
        stack: ["Python", "AWS S3"],
        description:
            "Takes a screenshot every few seconds and stitches a video together, creating a timelapse of your screen.",
    },
];

export type Role = {
    title: string;
    org: string;
    period: string;
    description: string;
    current?: boolean;
};

export const experience: Role[] = [
    {
        title: "Solutions Architect",
        org: "Amazon Web Services",
        period: "Feb 2022 - Present",
        current: true,
        description:
            "I work with Public Sector customers to help them build scalable and resilient workloads that provide value to citizens and residents across Australia.",
    },
    {
        title: "Solutions Architect Intern",
        org: "Amazon Web Services",
        period: "Dec 2020 - Feb 2021",
        description:
            "Trained in cloud infrastructure design, developed features for internal projects, shadowed customer engagements, and earned SA Associate certification.",
    },
    {
        title: "Programming Bootcamp Tutor",
        org: "Monash University",
        period: "Aug 2020",
        description:
            "Assisted students who are new to programming in getting a head start before formal lectures.",
    },
    {
        title: "Peer Mentor",
        org: "Monash University",
        period: "Jan 2020 - Jul 2020, Feb 2021 - Jul 2021",
        description:
            "Assisted new students in transitioning to university life by conducting weekly catch-ups and providing advice on courses and university.",
    },
    {
        title: "Work Experience",
        org: "CSIRO - High Performance Computing (HPC)",
        period: "June 2016",
        description:
            "Gained exposure to scientific research workflows and collaborative practices in an HPC environment.",
    },
];

export const skills: { name: string; description: string }[] = [
    {
        name: "AWS & Cloud",
        description:
            "As a Solutions Architect at AWS, I build technical proof-of-concept demos and facilitate customer engagements. I hold AWS certifications in Solutions Architect Associate, Developer Associate, and Cloud Practitioner.",
    },
    {
        name: "TypeScript",
        description:
            "My primary language for both frontend and backend development at AWS and personal projects, including my final year Computer Science project.",
    },
    {
        name: "Python",
        description:
            "Used in most of my core algorithm-based Computer Science units, as well as multiple personal projects.",
    },
    {
        name: "C/C++ & Java",
        description:
            "Core university coursework languages, with additional experience in parallel computing using OpenMP and OpenMPI.",
    },
];

export type Hackathon = {
    name: string;
    href: string;
    linkLabel: "Devpost" | "GitHub";
    event: string;
    award: string;
    date: string;
    description: string;
};

export const hackathons: Hackathon[] = [
    {
        name: "Qube",
        href: "https://devpost.com/software/qube",
        linkLabel: "Devpost",
        event: "Unihack 2022",
        award: "Engineering Excellence Prize",
        date: "April 2021",
        description:
            "A mobile app to search, book, and virtually queue for doctor appointments, and a web platform for doctors to manage appointments.",
    },
    {
        name: "cleaner.io",
        href: "https://devpost.com/software/cleaned",
        linkLabel: "Devpost",
        event: "Codebrew 2021",
        award: "Winner in Public Health & Best Tech",
        date: "April 2021",
        description:
            "QR code system for timestamping public transport cleaning, providing transparency and accountability for passengers.",
    },
    {
        name: "SkyNet",
        href: "https://devpost.com/software/skynet-ela2x3",
        linkLabel: "Devpost",
        event: "Unihack 2021",
        award: "Best Social Impact",
        date: "March 2021",
        description:
            "An easily deployable & effective communication system for use after a natural disaster.",
    },
    {
        name: "MediPlus",
        href: "https://github.com/timTam97/mediplus",
        linkLabel: "GitHub",
        event: "Codebrew 2020",
        award: "Second place",
        date: "August 2020",
        description:
            "An all-in-one solution for booking and managing appointments with your GP.",
    },
    {
        name: "Séance Photo",
        href: "https://devpost.com/software/hireme",
        linkLabel: "Devpost",
        event: "Bit by Bit Hackathon 2019",
        award: "Second place for First Time Hackers",
        date: "August 2019",
        description:
            "A platform for freelance photographers to promote and market their services.",
    },
];

export const education = {
    degree: "Bachelor's Degree in Computer Science",
    institution: "Monash University, Clayton",
    status: "Partially complete",
    period: "2019 - 2022",
};

export const artwork = {
    title: "The Repast of the Lion",
    artist: "Henri Rousseau",
    date: "ca. 1907",
    collection: "The Metropolitan Museum of Art",
    href: "https://www.metmuseum.org/art/collection/search/438822",
};

// In-page navigation, in render order.
export const sections = [
    { id: "projects", label: "Projects", title: "Side projects" },
    { id: "experience", label: "Experience", title: "Experience" },
    { id: "skills", label: "Skills", title: "Skills" },
    { id: "hackathons", label: "Hackathons", title: "Hackathons" },
    { id: "education", label: "Education", title: "Education" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
