import Head from "next/head";
import Link from "next/link";

import { ArrowLeftIcon } from "../components/Icons";
import { profile } from "../content/home";

export default function NotFound() {
    return (
        <>
            <Head>
                <title>{`Page not found · ${profile.name}`}</title>
                <meta name="robots" content="noindex" />
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
                <p className="font-display text-sm font-medium text-sun-ink tabular-nums">
                    404
                </p>
                <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                    Page not found
                </h1>
                <p className="mt-4 max-w-md text-lg text-ink-soft">
                    The page you&apos;re looking for doesn&apos;t exist or has
                    moved.
                </p>
                <Link href="/" className="button group mt-8">
                    <ArrowLeftIcon className="size-4 transition-transform motion-safe:group-hover:-translate-x-0.5" />
                    Back to home
                </Link>
            </main>
        </>
    );
}
