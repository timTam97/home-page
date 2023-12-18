import React from "react";
import Head from "next/head";
import Image from 'next/image'
import Link from 'next/link'

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
    const [darkMode, setDarkMode] = React.useState(true);
    React.useEffect(function () {
        setDarkMode(
            window?.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
        );
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (e) => setDarkMode(e.matches));
        return () => {
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .removeEventListener("change", () => {});
        };
    }, []);

    if (!recordMap) {
        return null;
    }
    return (
        <>
            <Head>
                <title>Tim's Site</title>
            </Head>

            <NotionRenderer
                recordMap={recordMap}
                fullPage={true}
                darkMode={darkMode}
                components={{
                    nextImage: Image,
                    nextLink: Link
                  }}
            />
        </>
    );
}
