import { S3Event } from "aws-lambda";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import {
    DynamoDBClient,
    PutItemCommand,
    DeleteItemCommand,
} from "@aws-sdk/client-dynamodb";
import matter from "gray-matter";

const s3 = new S3Client({});
const dynamodb = new DynamoDBClient({});

const TABLE_NAME = process.env.TABLE_NAME!;
const BUCKET_NAME = process.env.BUCKET_NAME!;

export const handler = async (event: S3Event): Promise<void> => {
    for (const record of event.Records) {
        const key = decodeURIComponent(
            record.s3.object.key.replace(/\+/g, " ")
        );

        // Skip non-.md files and folder markers
        if (!key.endsWith(".md") || key === "blog/") {
            console.log(`Skipping non-markdown file: ${key}`);
            continue;
        }

        // Remove .md extension for the path
        const path = key.replace(".md", "");
        console.log(`Processing: ${key} -> path: ${path}`);

        if (record.eventName.startsWith("ObjectRemoved")) {
            // Delete entry from DynamoDB
            console.log(`Deleting entry for path: ${path}`);
            await dynamodb.send(
                new DeleteItemCommand({
                    TableName: TABLE_NAME,
                    Key: { path: { S: path } },
                })
            );
        } else {
            // Fetch and process the markdown file
            console.log(`Fetching file from S3: ${key}`);
            const response = await s3.send(
                new GetObjectCommand({
                    Bucket: BUCKET_NAME,
                    Key: key,
                })
            );

            const content = await response.Body?.transformToString();
            if (!content) {
                console.log(`Empty file: ${key}`);
                continue;
            }

            // Parse frontmatter
            const { data: frontmatter } = matter(content);

            // Extract title: use frontmatter title, or filename without extension
            const filename = path.split("/").pop() || path;
            const title = frontmatter.title || filename;

            // Build DynamoDB item (only include non-empty fields)
            const item: Record<string, { S: string }> = {
                path: { S: path },
                title: { S: String(title) },
                lastModified: { S: record.eventTime },
            };

            if (frontmatter.date) {
                item.date = { S: String(frontmatter.date) };
            }
            if (frontmatter.author) {
                item.author = { S: String(frontmatter.author) };
            }
            if (frontmatter.description) {
                item.description = { S: String(frontmatter.description) };
            }

            console.log(`Upserting to DynamoDB:`, JSON.stringify(item));
            await dynamodb.send(
                new PutItemCommand({
                    TableName: TABLE_NAME,
                    Item: item,
                })
            );
        }
    }
};
