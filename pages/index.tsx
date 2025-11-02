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

            <div className="min-h-screen bg-stone-50 dark:bg-zinc-950">
                {/* Hero Section with Gradient */}
                <div className="relative w-full h-72 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-50/20 dark:from-zinc-950/20" />
                </div>

                {/* Main Content Container */}
                <div className="max-w-4xl mx-auto px-6 -mt-60 pb-20">
                    {/* Frosted Glass Profile Card */}
                    <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-glass rounded-2xl shadow-glass p-8 mb-12 border border-white/20 dark:border-zinc-800/50">
                        <div className="flex flex-col items-center text-center mb-6">
                            {/* Profile Image */}
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 shadow-lg mb-6 ring-4 ring-white dark:ring-zinc-900" />

                            {/* Name and Title */}
                            <h1 className="text-5xl font-semibold mb-3 tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                                Timothy Samraj
                            </h1>
                            <p className="text-xl text-apple-blue dark:text-apple-blue font-medium mb-4">
                                Solutions Architect at AWS
                            </p>
                            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                                Tim here. I'm currently a Solutions Architect at Amazon Web Services (AWS).
                                Here you'll find my unofficial resume, as well as links to some of my side projects and hackathons.
                            </p>
                        </div>

                        {/* Social Links as Button Cards */}
                        <div className="flex gap-4 justify-center flex-wrap">
                            <a
                                href="https://github.com/timTam97"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group px-6 py-3 bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-gray-100 rounded-xl hover:bg-apple-blue hover:text-white dark:hover:bg-apple-blue transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                            >
                                <span className="font-medium">GitHub</span>
                                <span className="inline-block ml-2 group-hover:translate-x-0.5 transition-transform duration-300">↗</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/timothysamraj/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group px-6 py-3 bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-gray-100 rounded-xl hover:bg-apple-blue hover:text-white dark:hover:bg-apple-blue transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                            >
                                <span className="font-medium">LinkedIn</span>
                                <span className="inline-block ml-2 group-hover:translate-x-0.5 transition-transform duration-300">↗</span>
                            </a>
                        </div>
                    </div>

                    {/* Side Projects Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">(Some of) My side Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-zinc-800">
                                <h3 className="text-xl font-medium mb-2">
                                    <a
                                        href="https://github.com/timTam97/compcontrol-api"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-apple-blue hover:text-apple-blue-dark transition-colors duration-200"
                                    >
                                        compcontrol-api
                                        <span className="inline-block ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                                    </a>
                                </h3>
                                <p className="text-xs text-gray-500 dark:text-gray-500 italic mb-3">AWS CDK, TypeScript, Python</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                    An API that allows you to remotely control your computer.
                                </p>
                            </div>

                            <div className="group bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-zinc-800">
                                <h3 className="text-xl font-medium mb-2">
                                    <a
                                        href="https://github.com/timTam97/compcontrol-client"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-apple-blue hover:text-apple-blue-dark transition-colors duration-200"
                                    >
                                        compcontrol-client
                                        <span className="inline-block ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                                    </a>
                                </h3>
                                <p className="text-xs text-gray-500 dark:text-gray-500 italic mb-3">Haskell, Win32 API</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Remotely control your computer! This app runs on your PC and connects to the API mentioned above. It receives commands through a websocket connection and uses the Windows API to execute them.
                                </p>
                            </div>

                            <div className="group bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-zinc-800">
                                <h3 className="text-xl font-medium mb-2">
                                    <a
                                        href="https://github.com/timTam97/screenlapse"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-apple-blue hover:text-apple-blue-dark transition-colors duration-200"
                                    >
                                        screenlapse
                                        <span className="inline-block ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                                    </a>
                                </h3>
                                <p className="text-xs text-gray-500 dark:text-gray-500 italic mb-3">Python, AWS S3</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Takes a screenshot every few seconds and stitches a video together, creating a timelapse of your screen.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Work Experience Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">Work Experience</h2>
                        <div className="bg-white dark:bg-zinc-900 rounded-xl p-8 shadow-card border border-gray-100 dark:border-zinc-800">
                            <div className="space-y-8">
                                <div className="border-l-2 border-apple-blue pl-6">
                                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Solutions Architect</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-1">Amazon Web Services (Feb 2022 - Present)</p>
                                    <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
                                        I work with Public Sector customers to help them build scalable and resilient workloads that provide value to citizens and residents across Australia.
                                    </p>
                                </div>

                                <div className="border-l-2 border-gray-300 dark:border-zinc-700 pl-6">
                                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Solutions Architect Intern</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-1">Amazon Web Services (Dec 2020 - Feb 2021)</p>
                                    <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
                                        I received deep-dive training in modern infrastructure design and management. I built out multiple features on a major internal project and shadowed real-world customer interactions. During this time I picked up my SA Associate certification.
                                    </p>
                                </div>

                                <div className="border-l-2 border-gray-300 dark:border-zinc-700 pl-6">
                                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Programming Bootcamp Tutor</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-1">Monash University (Aug 2020)</p>
                                    <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
                                        Assisted students who are new to programming in getting a head start before formal lectures.
                                    </p>
                                </div>

                                <div className="border-l-2 border-gray-300 dark:border-zinc-700 pl-6">
                                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Peer Mentor</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-1">Monash University (Jan 2020 - Jul 2020, Feb 2021 - Jul 2021)</p>
                                    <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
                                        Assisted new students in transitioning to university life by conducting weekly catch-ups and providing advice on courses and university.
                                    </p>
                                </div>

                                <div className="border-l-2 border-gray-300 dark:border-zinc-700 pl-6">
                                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Work Experience</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-1">CSIRO - High Performance Computing (HPC) (June 2016)</p>
                                    <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
                                        I gained critical knowledge of research conducted in a scientific environment, as well as the teamwork and collaboration that are both crucial for success.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Skills & Technology Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">Skills & Other Experience</h2>
                        <div className="bg-white dark:bg-zinc-900 rounded-xl p-8 shadow-card border border-gray-100 dark:border-zinc-800">
                            <h3 className="text-xl font-medium mb-6 text-gray-900 dark:text-white">💻 Technology</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">AWS & Cloud</h4>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        I possess strong knowledge of AWS and cloud computing. As a Solutions Architect at AWS, I dive deep into the platform and learn its ins and outs by facilitating customer engagements and building technical proof-of-concept demos.
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
                                        I am AWS Certified as a Solutions Architect Associate, Developer Associate and Cloud Practitioner.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">TypeScript</h4>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        Pretty much my language of choice now. I frequently use it at AWS, as well as in multiple personal frontend and backend projects.
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
                                        I also used Typescript for my final year Computer Science project.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Python</h4>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        Used in most of my core algorithm-based Computer Science units, as well as multiple personal projects.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">C/C++ & Java</h4>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        Used in many core units at Uni. In addition to my general background with both languages, I've got a little bit of experience with parallel computing in C, with libraries like OpenMP and OpenMPI.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Hackathons Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">Hackathons</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-zinc-800">
                                <h3 className="text-xl font-medium mb-2">
                                    <a
                                        href="https://devpost.com/software/qube"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-apple-blue hover:text-apple-blue-dark transition-colors duration-200"
                                    >
                                        Qube
                                        <span className="inline-block ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                                    </a>
                                </h3>
                                <p className="text-xs text-gray-500 dark:text-gray-500 italic mb-3">
                                    Unihack 2022 - Engineering Excellence Prize (April 2021)
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                    A mobile app to search, book, and virtually queue for doctor appointments, and a web platform for doctors to manage appointments.
                                </p>
                            </div>

                            <div className="group bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-zinc-800">
                                <h3 className="text-xl font-medium mb-2">
                                    <a
                                        href="https://devpost.com/software/cleaned"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-apple-blue hover:text-apple-blue-dark transition-colors duration-200"
                                    >
                                        cleaner.io
                                        <span className="inline-block ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                                    </a>
                                </h3>
                                <p className="text-xs text-gray-500 dark:text-gray-500 italic mb-3">
                                    Codebrew 2021 - Winner in Public Health & Best Tech (April 2021)
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                    A quick and secure way for cleaners of public transport to verify when they last cleaned the train, tram, or bus. Provides total transparency and assurance for passengers.
                                </p>
                            </div>

                            <div className="group bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-zinc-800">
                                <h3 className="text-xl font-medium mb-2">
                                    <a
                                        href="https://devpost.com/software/skynet-ela2x3"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-apple-blue hover:text-apple-blue-dark transition-colors duration-200"
                                    >
                                        SkyNet
                                        <span className="inline-block ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                                    </a>
                                </h3>
                                <p className="text-xs text-gray-500 dark:text-gray-500 italic mb-3">
                                    Unihack 2021 - Best Social Impact (March 2021)
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                    An easily deployable & effective communication system for use after a natural disaster.
                                </p>
                            </div>

                            <div className="group bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-zinc-800">
                                <h3 className="text-xl font-medium mb-2">
                                    <a
                                        href="https://github.com/timTam97/mediplus"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-apple-blue hover:text-apple-blue-dark transition-colors duration-200"
                                    >
                                        MediPlus
                                        <span className="inline-block ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                                    </a>
                                </h3>
                                <p className="text-xs text-gray-500 dark:text-gray-500 italic mb-3">
                                    Codebrew 2020 - Second place (August 2020)
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                    An all-in-one solution for booking and managing appointments with your GP.
                                </p>
                            </div>

                            <div className="group bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-zinc-800">
                                <h3 className="text-xl font-medium mb-2">
                                    <a
                                        href="https://devpost.com/software/hireme"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-apple-blue hover:text-apple-blue-dark transition-colors duration-200"
                                    >
                                        Séance Photo
                                        <span className="inline-block ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                                    </a>
                                </h3>
                                <p className="text-xs text-gray-500 dark:text-gray-500 italic mb-3">
                                    Bit by Bit Hackathon 2019 - Second place for First Time Hackers (August 2019)
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                    A platform for freelance photographers to promote and market their services.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Education Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">Education</h2>
                        <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-card border border-gray-100 dark:border-zinc-800">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Bachelor's Degree in Computer Science</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-1">Monash University, Clayton (2019 - 2022)</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
