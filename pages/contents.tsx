import Head from "next/head";
import Link from "next/link";

interface TocItem {
    path: string;
    title: string;
    date?: string;
    author?: string;
    description?: string;
}

export const getServerSideProps = async () => {
    const apiUrl = process.env.TOC_API_URL;
    if (!apiUrl) {
        console.error("TOC_API_URL environment variable not set");
        return { props: { items: [], error: true } };
    }

    try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
            throw new Error(`API returned ${res.status}`);
        }
        const items: TocItem[] = await res.json();
        return { props: { items, error: false } };
    } catch (err) {
        console.error("Failed to fetch TOC:", err);
        return { props: { items: [], error: true } };
    }
};

export default function Contents({
    items,
    error,
}: {
    items: TocItem[];
    error: boolean;
}) {
    return (
        <>
            <Head>
                <title>Contents | timsam.au</title>
                <meta
                    name="description"
                    content="Table of contents for all articles on timsam.au"
                />
                <meta property="og:title" content="Contents | timsam.au" />
            </Head>
            <div className="min-h-screen flex justify-center py-12">
                <div className="prose dark:prose-invert md:prose-lg px-8 mx-auto">
                    <h1>Contents</h1>
                    {error ? (
                        <p className="text-red-500">
                            Failed to load contents. Please try again later.
                        </p>
                    ) : items.length === 0 ? (
                        <p>No articles found.</p>
                    ) : (
                        <ul>
                            {items.map((item) => (
                                <li key={item.path}>
                                    <Link href={`/${item.path}`}>
                                        {item.title}
                                    </Link>
                                    {item.date && (
                                        <span className="text-sm opacity-60 ml-2">
                                            ({item.date})
                                        </span>
                                    )}
                                    {item.author && (
                                        <span className="text-sm opacity-60 ml-2">
                                            by {item.author}
                                        </span>
                                    )}
                                    {item.description && (
                                        <p className="text-sm opacity-80 mt-1 mb-0">
                                            {item.description}
                                        </p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
}
