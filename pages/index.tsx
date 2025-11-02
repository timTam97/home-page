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
                <div className="max-w-4xl mx-auto px-6 -mt-20">
                    {/* Profile Image */}
                    <div className="mb-6">
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
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/timothysamraj/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </section>

                    {/* Divider */}
                    <hr className="border-gray-300 dark:border-gray-700 mb-8" />

                    {/* Side Projects Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">Side Projects</h2>
                        <div className="space-y-6">
                            <div>
                                <a
                                    href="https://github.com/timTam97/compcontrol-api"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-medium text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    compcontrol-api
                                </a>
                                <p className="text-gray-700 dark:text-gray-300 mt-1">
                                    Remote computer control API using AWS CDK, TypeScript, Python
                                </p>
                            </div>
                            <div>
                                <a
                                    href="https://github.com/timTam97/compcontrol-client"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-medium text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    compcontrol-client
                                </a>
                                <p className="text-gray-700 dark:text-gray-300 mt-1">
                                    Haskell/Win32 implementation for PC-side execution
                                </p>
                            </div>
                            <div>
                                <a
                                    href="https://github.com/timTam97/screenlapse"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-medium text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    screenlapse
                                </a>
                                <p className="text-gray-700 dark:text-gray-300 mt-1">
                                    Python/AWS S3 screen recording timelapse tool
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
                                <p className="text-gray-600 dark:text-gray-400">Amazon Web Services (AWS)</p>
                                <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">Feb 2022 – Present</p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Public sector customer engagement
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">Solutions Architect Intern</h3>
                                <p className="text-gray-600 dark:text-gray-400">Amazon Web Services (AWS)</p>
                                <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">Dec 2020 – Feb 2021</p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Infrastructure training and certification
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">Programming Bootcamp Tutor</h3>
                                <p className="text-gray-600 dark:text-gray-400">Monash University</p>
                                <p className="text-sm text-gray-500 dark:text-gray-500">Aug 2020</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">Peer Mentor</h3>
                                <p className="text-gray-600 dark:text-gray-400">Monash University</p>
                                <p className="text-sm text-gray-500 dark:text-gray-500">Jan – Jul 2020, Feb – Jul 2021</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">Work Experience</h3>
                                <p className="text-gray-600 dark:text-gray-400">CSIRO HPC</p>
                                <p className="text-sm text-gray-500 dark:text-gray-500">June 2016</p>
                            </div>
                        </div>
                    </section>

                    {/* Divider */}
                    <hr className="border-gray-300 dark:border-gray-700 mb-8" />

                    {/* Skills & Technology Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">Skills & Technology</h2>
                        <div className="text-gray-700 dark:text-gray-300 space-y-2">
                            <p>• AWS and cloud computing expertise</p>
                            <p>• TypeScript proficiency</p>
                            <p>• Python experience</p>
                            <p>• C/C++ and Java background with parallel computing</p>
                        </div>
                    </section>

                    {/* Divider */}
                    <hr className="border-gray-300 dark:border-gray-700 mb-8" />

                    {/* Hackathons Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">Hackathons</h2>
                        <div className="space-y-6">
                            <div>
                                <a
                                    href="https://devpost.com/software/qube"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-medium text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    Qube
                                </a>
                                <p className="text-sm text-gray-500 dark:text-gray-500">Unihack 2022</p>
                            </div>
                            <div>
                                <a
                                    href="https://devpost.com/software/cleaned"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-medium text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    cleaner.io
                                </a>
                                <p className="text-sm text-gray-500 dark:text-gray-500">Codebrew 2021</p>
                            </div>
                            <div>
                                <a
                                    href="https://devpost.com/software/skynet-ela2x3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-medium text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    SkyNet
                                </a>
                                <p className="text-sm text-gray-500 dark:text-gray-500">Unihack 2021</p>
                            </div>
                            <div>
                                <a
                                    href="https://github.com/timTam97/mediplus"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-medium text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    MediPlus
                                </a>
                                <p className="text-sm text-gray-500 dark:text-gray-500">Codebrew 2020</p>
                            </div>
                            <div>
                                <a
                                    href="https://devpost.com/software/hireme"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-medium text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    Séance Photo
                                </a>
                                <p className="text-sm text-gray-500 dark:text-gray-500">Bit by Bit 2019</p>
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
                            <p className="text-gray-600 dark:text-gray-400">Monash University</p>
                            <p className="text-sm text-gray-500 dark:text-gray-500">2019 – 2022</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
