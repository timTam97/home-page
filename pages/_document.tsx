import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="theme-color"
                    media="(prefers-color-scheme: light)"
                    content="#f4efe4"
                />
                <meta
                    name="theme-color"
                    media="(prefers-color-scheme: dark)"
                    content="#0c1410"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
