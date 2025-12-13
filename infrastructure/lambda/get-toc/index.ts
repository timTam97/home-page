import { APIGatewayProxyResultV2 } from "aws-lambda";
import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";

const dynamodb = new DynamoDBClient({});
const TABLE_NAME = process.env.TABLE_NAME!;

interface TocItem {
    path: string;
    title: string;
    date?: string;
    author?: string;
    description?: string;
    lastModified?: string;
}

export const handler = async (): Promise<APIGatewayProxyResultV2> => {
    try {
        const result = await dynamodb.send(
            new ScanCommand({
                TableName: TABLE_NAME,
            })
        );

        const items: TocItem[] =
            result.Items?.map((item) => ({
                path: item.path.S!,
                title: item.title.S!,
                date: item.date?.S,
                author: item.author?.S,
                description: item.description?.S,
                lastModified: item.lastModified?.S,
            })) || [];

        // Sort by date descending (newest first), items without dates go last
        items.sort((a, b) => {
            if (!a.date && !b.date) return 0;
            if (!a.date) return 1;
            if (!b.date) return -1;
            // Parse dates - handle various formats
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB.getTime() - dateA.getTime();
        });

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(items),
        };
    } catch (error) {
        console.error("Error fetching TOC:", error);
        return {
            statusCode: 500,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                error: "Failed to fetch table of contents",
            }),
        };
    }
};
