import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export const getServerSideProps = async (props: {
    params: { name: string };
}) => {
    return {
        props: {
            source: await serialize(
                await fetch(
                    `https://d3ef60ttni706z.cloudfront.net/${props.params.name}.md`
                ).then((res) => res.text())
            ),
        },
    };
};

export default function Home({ source }) {
    return (
        <>
            <div className="h-max flex justify-center text-left pt-12 pb-8 bg-white">
                <article className="prose bg-white dark:prose-invert md:prose-lg lg:prose-xl px-8 w-0 mx-auto mt-auto grow">
                    <MDXRemote {...source} />
                    {/* <h1>asdasd</h1> */}
                    {/* <h1>Sample Title</h1>
                    <p>
                        In a speech in Sydney, Reserve Bank of Australia (RBA)
                        Governor Michele Bullock said bringing inflation down to
                        the target band of 2-3% remains the central bank's
                        highest priority. "If the economy evolves broadly as
                        anticipated, the board does not expect that it will be
                        in a position to cut rates in the near term," said
                    </p>{" "}
                    <p>
                        In a speech in Sydney, Reserve Bank of Australia (RBA)
                        Governor Michele Bullock said bringing inflation down to
                        the target band of 2-3% remains the central bank's
                        highest priority. "If the economy evolves broadly as
                        anticipated, the board does not expect that it will be
                        in a position to cut rates in the near term," said
                    </p>{" "}
                    <p>
                        In a speech in Sydney, Reserve Bank of Australia (RBA)
                        Governor Michele Bullock said bringing inflation down to
                        the target band of 2-3% remains the central bank's
                        highest priority. "If the economy evolves broadly as
                        anticipated, the board does not expect that it will be
                        in a position to cut rates in the near term," said
                    </p>{" "}
                    <p>
                        In a speech in Sydney, Reserve Bank of Australia (RBA)
                        Governor Michele Bullock said bringing inflation down to
                        the target band of 2-3% remains the central bank's
                        highest priority. "If the economy evolves broadly as
                        anticipated, the board does not expect that it will be
                        in a position to cut rates in the near term," said
                    </p>{" "}
                    <p>
                        In a speech in Sydney, Reserve Bank of Australia (RBA)
                        Governor Michele Bullock said bringing inflation down to
                        the target band of 2-3% remains the central bank's
                        highest priority. "If the economy evolves broadly as
                        anticipated, the board does not expect that it will be
                        in a position to cut rates in the near term," said
                    </p>{" "}
                    <p>
                        In a speech in Sydney, Reserve Bank of Australia (RBA)
                        Governor Michele Bullock said bringing inflation down to
                        the target band of 2-3% remains the central bank's
                        highest priority. "If the economy evolves broadly as
                        anticipated, the board does not expect that it will be
                        in a position to cut rates in the near term," said
                    </p>
                    <p>
                        Bullock. The hawkish rhetoric came even though data this
                        week showed the economy barely grew in the second
                        quarter as household consumption dragged. A monthly
                        consumer price report had also showed headline inflation
                        eased to 3.5% in July. Bullock emphasised domestic
                        inflationary pressures, such as in housing and market
                        services, were still contributing to above-target
                        inflation, one reason that core inflation is only
                        expected to slow to the target band toward the end of
                        2025. She acknowledged the substantial uncertainty
                        around the bank's central forecasts, adding that the
                        board would respond appropriately to any change in
                        circumstances. However, Bullock warned that if high
                        inflation became entrenched in expectations, the RBA
                        would have to slow the economy even more to bring it to
                        heel.
                    </p> */}
                </article>
            </div>
        </>
    );
}
