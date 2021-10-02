import React from "react";
import Head from "next/head";

import { getPageTitle, getAllPagesInSpace } from "notion-utils";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";

const isDev = process.env.NODE_ENV === "development" || !process.env.NODE_ENV;

const notion = new NotionAPI();

export const getStaticProps = async (context) => {
    const pageId = context.params.pageId as string;
    const recordMap = await notion.getPage(pageId);

    return {
        props: {
            recordMap,
        },
        revalidate: 10,
    };
};

export async function getStaticPaths() {
    if (isDev) {
        return {
            paths: [],
            fallback: true,
        };
    }

    const rootNotionPageId = "Resume-113e4fe9f576406ba547f14ff99c7f75";
    const rootNotionSpaceId = "fde5ac74-eea3-4527-8f00-4482710e1af3";

    const pages = await getAllPagesInSpace(
        rootNotionPageId,
        rootNotionSpaceId,
        notion.getPage.bind(notion),
        {
            traverseCollections: false,
        }
    );

    const paths = Object.keys(pages).map((pageId) => `/${pageId}`);

    return {
        paths,
        fallback: true,
    };
}

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
