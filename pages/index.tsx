import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Tim's Site</title>
                <meta name="description" content="Timothy Samraj - Solutions Architect at AWS" />
            </Head>

            <div className="min-h-screen">
                {/* Cover Image */}
                <div className="w-full h-64 bg-gradient-to-r from-emerald-600 to-teal-600" />

                {/* Main Content Container */}
                <div className="max-w-2xl mx-auto px-6 -mt-20">
                    {/* Profile Image */}
                    <div className="mb-6 flex justify-center">
                        <div className="w-32 h-32 rounded-full bg-gray-400 dark:bg-gray-600 border-4 border-white dark:border-zinc-800" />
                    </div>

                    {/* Name and Intro */}
                    <h1 className="text-4xl font-bold mb-4">Timothy Samraj</h1>
                    <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
                        Tim here. I'm currently a Solutions Architect at Amazon Web Services (AWS).
                        Here you'll find my unofficial resume, as well as links to some of my side projects and hackathons.
                    </p>

                    {/* Divider */}
                    <hr className="border-gray-300 dark:border-gray-700 mb-8" />

                    {/* My Links Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">My Links</h2>
                        <div className="space-y-2">
                            <a
                                href="https://github.com/timTam97"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                GitHub ↗
                            </a>
                            <a
                                href="https://www.linkedin.com/in/timothysamraj/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                LinkedIn ↗
                            </a>
                        </div>
                    </section>

                    {/* Divider */}
                    <hr className="border-gray-300 dark:border-gray-700 mb-8" />

                    {/* Side Projects Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">(Some of) My side Projects</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-medium">
                                    <a
                                        href="https://github.com/timTam97/compcontrol-api"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        compcontrol-api ↗
                                    </a>
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-1">AWS CDK, TypeScript, Python</p>
                                <p className="text-gray-700 dark:text-gray-300 mt-1">
                                    An API that allows you to remotely control your computer.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">
                                    <a
                                        href="https://github.com/timTam97/compcontrol-client"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        compcontrol-client ↗
                                    </a>
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-1">Haskell, Win32 API</p>
                                <p className="text-gray-700 dark:text-gray-300 mt-1">
                                    Remotely control your computer!
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mt-1">
                                    This app runs on your PC and connects to the API mentioned above. It receives commands through a websocket connection and uses the Windows API to execute them.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">
                                    <a
                                        href="https://github.com/timTam97/screenlapse"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        screenlapse ↗
                                    </a>
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-1">Python, AWS S3</p>
                                <p className="text-gray-700 dark:text-gray-300 mt-1">
                                    Takes a screenshot every few seconds and stitches a video together, creating a timelapse of your screen.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Divider */}
                    <hr className="border-gray-300 dark:border-gray-700 mb-8" />

                    {/* Work Experience Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-medium">Solutions Architect</h3>
                                <p className="text-gray-600 dark:text-gray-400 italic">Amazon Web Services (Feb 2022 - Present)</p>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">
                                    I work with Public Sector customers to help them build scalable and resilient workloads that provide value to citizens and residents across Australia.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">Solutions Architect Intern</h3>
                                <p className="text-gray-600 dark:text-gray-400 italic">Amazon Web Services (Dec 2020 - Feb 2021)</p>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">
                                    I received deep-dive training in modern infrastructure design and management. I built out multiple features on a major internal project and shadowed real-world customer interactions. During this time I picked up my SA Associate certification.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">Programming Bootcamp Tutor</h3>
                                <p className="text-gray-600 dark:text-gray-400 italic">Monash University (Aug 2020)</p>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">
                                    Assisted students who are new to programming in getting a head start before formal lectures.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">Peer Mentor</h3>
                                <p className="text-gray-600 dark:text-gray-400 italic">Monash University (Jan 2020 - Jul 2020, Feb 2021 - Jul 2021)</p>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">
                                    Assisted new students in transitioning to university life by conducting weekly catch-ups and providing advice on courses and university.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">Work Experience</h3>
                                <p className="text-gray-600 dark:text-gray-400 italic">CSIRO - High Performance Computing (HPC) (June 2016)</p>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">
                                    I gained critical knowledge of research conducted in a scientific environment, as well as the teamwork and collaboration that are both crucial for success.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Divider */}
                    <hr className="border-gray-300 dark:border-gray-700 mb-8" />

                    {/* Skills & Technology Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">Skills & Other Experience</h2>
                        <h3 className="text-xl font-medium mb-4">💻 Technology</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">AWS & Cloud</h4>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">
                                    I possess strong knowledge of AWS and cloud computing. As a Solutions Architect at AWS, I dive deep into the platform and learn its ins and outs by facilitating customer engagements and building technical proof-of-concept demos.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">
                                    I am AWS Certified as a Solutions Architect Associate, Developer Associate and Cloud Practitioner.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">TypeScript</h4>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">
                                    Pretty much my language of choice now. I frequently use it at AWS, as well as in multiple personal frontend and backend projects.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">
                                    I also used Typescript for my final year Computer Science project.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">Python</h4>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">
                                    Used in most of my core algorithm-based Computer Science units, as well as multiple personal projects.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">C/C++ & Java</h4>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">
                                    Used in many core units at Uni. In addition to my general background with both languages, I've got a little bit of experience with parallel computing in C, with libraries like OpenMP and OpenMPI.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Divider */}
                    <hr className="border-gray-300 dark:border-gray-700 mb-8" />

                    {/* Hackathons Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">Hackathons</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-medium">
                                    <a
                                        href="https://devpost.com/software/qube"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        Qube ↗
                                    </a>
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-1">
                                    Unihack 2022 - Engineering Excellence Prize (April 2021)
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">
                                    A mobile app to search, book, and virtually queue for doctor appointments, and a web platform for doctors to manage appointments.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">
                                    <a
                                        href="https://devpost.com/software/cleaned"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        cleaner.io ↗
                                    </a>
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-1">
                                    Codebrew 2021 - Winner in Public Health & Best Tech (April 2021)
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">
                                    A quick and secure way for cleaners of public transport to verify when they last cleaned the train, tram, or bus. Provides total transparency and assurance for passengers.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">
                                    <a
                                        href="https://devpost.com/software/skynet-ela2x3"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        SkyNet ↗
                                    </a>
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-1">
                                    Unihack 2021 - Best Social Impact (March 2021)
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">
                                    An easily deployable & effective communication system for use after a natural disaster.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">
                                    <a
                                        href="https://github.com/timTam97/mediplus"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        MediPlus ↗
                                    </a>
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-1">
                                    Codebrew 2020 - Second place (August 2020)
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">
                                    An all-in-one solution for booking and managing appointments with your GP.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">
                                    <a
                                        href="https://devpost.com/software/hireme"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        Séance Photo ↗
                                    </a>
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-1">
                                    Bit by Bit Hackathon 2019 - Second place for First Time Hackers (August 2019)
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">
                                    A platform for freelance photographers to promote and market their services.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Divider */}
                    <hr className="border-gray-300 dark:border-gray-700 mb-8" />

                    {/* Education Section */}
                    <section className="mb-12 pb-12">
                        <h2 className="text-2xl font-semibold mb-4">Education</h2>
                        <div>
                            <h3 className="text-xl font-medium">Bachelor's Degree in Computer Science</h3>
                            <p className="text-gray-600 dark:text-gray-400 italic">Monash University, Clayton (2019 - 2022)</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
