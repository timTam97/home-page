import Head from "next/head";
import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import { ArrowLeftIcon } from "../components/Icons";
import SiteFooter from "../components/SiteFooter";
import { profile } from "../content/home";

export const getServerSideProps = async (props: {
    params: { name: string[] };
}) => {
    const res = await fetch(
        `https://${process.env.MD_SOURCE_URL}/${props.params.name.join("/")}.md`
    );
    return res.status === 200
        ? {
              props: {
                  source: await serialize(await res.text(), {
                      parseFrontmatter: true,
                  }),
              },
          }
        : {
              notFound: true,
          };
};

export default function MarkdownPage({ source }) {
    const { title, description, author, date } = source.frontmatter;
    return (
        <>
            <Head>
                <title>{title ? `${title} · ${profile.name}` : profile.name}</title>
                <meta name="title" content={title} />
                <meta property="og:title" content={title} />
                <meta name="description" content={description} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="article" />
            </Head>
            <div className="flex min-h-screen flex-col">
                <header className="mx-auto w-full max-w-3xl px-6 pt-8 sm:pt-12">
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 rounded-full text-sm font-medium text-muted transition-colors hover:text-accent"
                    >
                        <ArrowLeftIcon className="size-4 transition-transform motion-safe:group-hover:-translate-x-0.5" />
                        {profile.name}
                    </Link>
                </header>
                <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10 sm:py-14">
                    <article className="prose max-w-none md:prose-lg prose-headings:font-display prose-headings:tracking-tight prose-a:underline-offset-2 prose-a:decoration-1 hover:prose-a:text-accent-strong prose-pre:border prose-pre:border-line">
                        {(author || date) && (
                            <div className="not-prose mb-8 flex flex-wrap gap-2">
                                {author && (
                                    <span className="badge badge-outline">{author}</span>
                                )}
                                {date && (
                                    <span className="badge badge-soft badge-primary">{date}</span>
                                )}
                            </div>
                        )}
                        <MDXRemote {...source} />
                    </article>
                </main>
                <SiteFooter />
            </div>
        </>
    );
}
