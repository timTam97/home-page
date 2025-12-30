import Head from "next/head";

export const getServerSideProps = async (props: {
    params: { name: string[] };
}) => {
    const pdfUrl = `https://${
        process.env.MD_SOURCE_URL
    }/files/${props.params.name.join("/")}.pdf`;

    // HEAD request to verify PDF exists without downloading full file
    const res = await fetch(pdfUrl, { method: "HEAD" });

    return res.status === 200
        ? {
              props: {
                  pdfUrl,
                  filename: props.params.name[props.params.name.length - 1],
              },
          }
        : { notFound: true };
};

export default function PDFViewer({
    pdfUrl,
    filename,
}: {
    pdfUrl: string;
    filename: string;
}) {
    return (
        <>
            <Head>
                <title>{filename}</title>
            </Head>
            <embed
                src={pdfUrl}
                type="application/pdf"
                className="w-screen h-screen"
            />
        </>
    );
}
