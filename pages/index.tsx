import Head from "next/head";
import React from "react";

function Meta({ children }: { children: React.ReactNode }) {
    return (
        <p className="!mt-0 !mb-3 italic opacity-60 !text-base">{children}</p>
    );
}

function ExtLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
}

export default function Home() {
    return (
        <>
            <Head>
                <title>Tim&apos;s Site</title>
                <meta
                    name="description"
                    content="Timothy Samraj — Solutions Architect at AWS. Resume, side projects, and hackathons."
                />
                <meta property="og:title" content="Timothy Samraj" />
                <meta
                    property="og:description"
                    content="Solutions Architect at AWS. Resume, side projects, and hackathons."
                />
            </Head>
            <div className="min-h-screen flex justify-center py-12">
                <article className="prose dark:prose-invert md:prose-lg px-8 mx-auto">
                    <h1>Timothy Samraj</h1>
                    <blockquote>
                        <p>
                            Tim here. I&apos;m currently a Solutions Architect
                            at Amazon Web Services (AWS).
                        </p>
                        <p>
                            Here you&apos;ll find my unofficial resume, as well
                            as links to some of my side projects and
                            hackathons.
                        </p>
                    </blockquote>

                    <h2>🔗 My Links</h2>
                    <ul>
                        <li>
                            👨‍💻{" "}
                            <ExtLink href="https://github.com/timTam97">
                                GitHub ↗
                            </ExtLink>
                        </li>
                        <li>
                            💼{" "}
                            <ExtLink href="https://www.linkedin.com/in/timothysamraj/">
                                LinkedIn ↗
                            </ExtLink>
                        </li>
                    </ul>

                    <hr />

                    <h2>🚀 (Some of) My Side Projects</h2>

                    <h3>compcontrol-api</h3>
                    <Meta>AWS CDK, TypeScript, Python</Meta>
                    <p>
                        An API that allows you to remotely control your
                        computer.
                    </p>
                    <p>
                        <ExtLink href="https://github.com/timTam97/compcontrol-api">
                            GitHub Link ↗
                        </ExtLink>
                    </p>

                    <h3>compcontrol-client</h3>
                    <Meta>Haskell, Win32 API</Meta>
                    <p>Remotely control your computer!</p>
                    <p>
                        This app runs on your PC and connects to the API
                        mentioned above. It receives commands through a
                        websocket connection and uses the Windows API to
                        execute them.
                    </p>
                    <p>
                        <ExtLink href="https://github.com/timTam97/compcontrol-client">
                            GitHub Link ↗
                        </ExtLink>
                    </p>

                    <h3>screenlapse</h3>
                    <Meta>Python, AWS S3</Meta>
                    <p>
                        Takes a screenshot every few seconds and stitches a
                        video together, creating a timelapse of your screen.
                    </p>
                    <p>
                        <ExtLink href="https://github.com/timTam97/screenlapse">
                            GitHub Link ↗
                        </ExtLink>
                    </p>

                    <hr />

                    <h2>👨‍💻 Work Experience</h2>

                    <h3>Solutions Architect</h3>
                    <Meta>
                        <strong>Amazon Web Services</strong> (Feb 2022 -
                        Present)
                    </Meta>
                    <p>
                        I work with Public Sector customers to help them build
                        scalable and resilient workloads that provide value to
                        citizens and residents across Australia.
                    </p>

                    <h3>Solutions Architect Intern</h3>
                    <Meta>
                        <strong>Amazon Web Services</strong> (Dec 2020 - Feb
                        2021)
                    </Meta>
                    <p>
                        I received deep-dive training in modern infrastructure
                        design and management. I built out multiple features on
                        a major internal project and shadowed real-world
                        customer interactions. During this time I picked up my
                        SA Associate certification.
                    </p>

                    <h3>Programming Bootcamp Tutor</h3>
                    <Meta>
                        <strong>Monash University</strong> (Aug 2020)
                    </Meta>
                    <p>
                        Assisted students who are new to programming in getting
                        a head start before formal lectures.
                    </p>

                    <h3>Peer Mentor</h3>
                    <Meta>
                        <strong>Monash University</strong> (Jan 2020 - Jul
                        2020, Feb 2021 - Jul 2021)
                    </Meta>
                    <p>
                        Assisted new students in transitioning to university
                        life by conducting weekly catch-ups and providing
                        advice on courses and university.
                    </p>

                    <h3>Work Experience</h3>
                    <Meta>
                        <strong>
                            CSIRO - High Performance Computing (HPC)
                        </strong>{" "}
                        (June 2016)
                    </Meta>
                    <p>
                        I gained critical knowledge of research conducted in a
                        scientific environment, as well as the teamwork and
                        collaboration that are both crucial for success.
                    </p>

                    <hr />

                    <h2>🛠 Skills &amp; Other Experience</h2>

                    <h3>💻 Technology</h3>

                    <h4>AWS &amp; Cloud</h4>
                    <p>
                        I possess strong knowledge of AWS and cloud computing.
                        As a Solutions Architect at AWS, I dive deep into the
                        platform and learn its ins and outs by facilitating
                        customer engagements and building technical
                        proof-of-concept demos.
                    </p>
                    <p>
                        I am AWS Certified as a Solutions Architect Associate,
                        Developer Associate and Cloud Practitioner.
                    </p>

                    <h4>TypeScript</h4>
                    <p>
                        Pretty much my language of choice now. I frequently use
                        it at AWS, as well as in multiple personal frontend and
                        backend projects.
                    </p>
                    <p>
                        I also used TypeScript for my final year Computer
                        Science project.
                    </p>

                    <h4>Python</h4>
                    <p>
                        Used in most of my core algorithm-based Computer
                        Science units, as well as multiple personal projects.
                    </p>

                    <h4>C/C++ &amp; Java</h4>
                    <p>
                        Used in many core units at Uni. In addition to my
                        general background with both languages, I&apos;ve got a
                        little bit of experience with parallel computing in C,
                        with libraries like OpenMP and OpenMPI.
                    </p>

                    <hr />

                    <h2>⌨️ Hackathons</h2>

                    <h3>Qube</h3>
                    <Meta>
                        <strong>Unihack 2022</strong> - Engineering Excellence
                        Prize (April 2021)
                    </Meta>
                    <p>
                        A mobile app to search, book, and virtually queue for
                        doctor appointments, and a web platform for doctors to
                        manage appointments.
                    </p>
                    <p>
                        <ExtLink href="https://devpost.com/software/qube">
                            Devpost Link ↗
                        </ExtLink>
                    </p>

                    <h3>cleaner.io</h3>
                    <Meta>
                        <strong>Codebrew 2021</strong> - Winner in Public
                        Health &amp; Best Tech (April 2021)
                    </Meta>
                    <p>
                        A quick and secure way for cleaners of public transport
                        to verify when they last cleaned the train, tram, or
                        bus. Provides total transparency and assurance for
                        passengers.
                    </p>
                    <p>
                        <ExtLink href="https://devpost.com/software/cleaned">
                            Devpost Link ↗
                        </ExtLink>
                    </p>

                    <h3>SkyNet</h3>
                    <Meta>
                        <strong>Unihack 2021</strong> - Best Social Impact
                        (March 2021)
                    </Meta>
                    <p>
                        An easily deployable &amp; effective communication
                        system for use after a natural disaster.
                    </p>
                    <p>
                        <ExtLink href="https://devpost.com/software/skynet-ela2x3">
                            Devpost Link ↗
                        </ExtLink>
                    </p>

                    <h3>MediPlus</h3>
                    <Meta>
                        <strong>Codebrew 2020</strong> - Second place (August
                        2020)
                    </Meta>
                    <p>
                        An all-in-one solution for booking and managing
                        appointments with your GP.
                    </p>
                    <p>
                        <ExtLink href="https://github.com/timTam97/mediplus">
                            GitHub Link ↗
                        </ExtLink>
                    </p>

                    <h3>Séance Photo</h3>
                    <Meta>
                        <strong>Bit by Bit Hackathon 2019</strong> - Second
                        place for First Time Hackers (August 2019)
                    </Meta>
                    <p>
                        A platform for freelance photographers to promote and
                        market their services.
                    </p>
                    <p>
                        <ExtLink href="https://devpost.com/software/hireme">
                            Devpost Link ↗
                        </ExtLink>
                    </p>

                    <hr />

                    <h2>📚 Education</h2>

                    <h3>Bachelor&apos;s Degree in Computer Science</h3>
                    <Meta>
                        Monash University, Clayton (Partially complete - 2019
                        - 2022)
                    </Meta>
                </article>
            </div>
        </>
    );
}
