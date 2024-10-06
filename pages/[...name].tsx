import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

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

export default function Home({ source }) {
    const dateBadge = source.frontmatter.date ? (
        <p className="badge badge-outline">{source.frontmatter.date}</p>
    ) : undefined;
    const authorBadge = source.frontmatter.author ? (
        <p className="badge badge-outline">{source.frontmatter.author}</p>
    ) : undefined;
    return (
        <>
            <Head>
                <title>{source.frontmatter.title}</title>
                <meta name="title" content={source.frontmatter.title} />
                <meta property="og:title" content={source.frontmatter.title} />
                <meta
                    name="description"
                    content={source.frontmatter.description}
                />
            </Head>
            <div className="h-max flex justify-center text-left pt-12 pb-8">
                <article className="prose dark:prose-invert dark:prose-headings:text-white dark:text-white md:prose-lg lg:prose-xl px-8 w-0 mx-auto mt-auto grow">
                    <div className="space-x-3">
                        {authorBadge}
                        {dateBadge}
                    </div>
                    <MDXRemote {...source} />
                </article>
            </div>
        </>
    );
}
