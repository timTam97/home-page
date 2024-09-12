import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export const getServerSideProps = async (props: {
    params: { name: string };
}) => {
    let res = await fetch(
        `https://${process.env.MD_SOURCE_URL}/${props.params.name}.md`
    );
    return res.status === 200
        ? {
              props: {
                  source: await serialize(await res.text()),
              },
          }
        : {
              notFound: true,
          };
};

export default function Home({ source }) {
    return (
        <>
            <div className="h-max flex justify-center text-left pt-12 pb-8">
                <article className="prose dark:prose-invert md:prose-lg lg:prose-xl px-8 w-0 mx-auto mt-auto grow">
                    <MDXRemote {...source} />
                </article>
            </div>
        </>
    );
}
