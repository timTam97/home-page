import React from "react";
import Head from "next/head";

import { getPageTitle, getAllPagesInSpace } from "notion-utils";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";

const isDev = process.env.NODE_ENV === "development" || !process.env.NODE_ENV;

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
                darkMode={true}
            />
        </>
    );
}
