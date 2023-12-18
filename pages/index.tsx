import React from "react";
import Head from "next/head";

import { getPageTitle } from "notion-utils";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";

const notion = new NotionAPI();

export const getStaticProps = async (context) => {
    const recordMap = await notion.getPage(process.env.PAGE_ID);
    return {
        props: {
            recordMap,
        },
        revalidate: 10,
    };
};

export default function NotionPage({ recordMap }) {
    const [dark, setDark] = React.useState<boolean>(true);
    React.useEffect(function () {
        const darkMode =
            window?.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (e) => setDark(e.matches));
        console.log(darkMode);
        setDark(darkMode);
        return () => {
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .removeEventListener("change", () => {});
        };
    }, []);

    if (!recordMap) {
        return null;
    }
    const title = getPageTitle(recordMap);
    console.log(title, recordMap);
    return (
        <>
            <Head>
                <title>Tim's Site</title>
            </Head>

            <NotionRenderer
                recordMap={recordMap}
                fullPage={true}
                darkMode={dark}
            />
        </>
    );
}
