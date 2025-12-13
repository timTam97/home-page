#!/usr/bin/env npx ts-node
/**
 * One-time script to populate the DynamoDB TOC table with existing S3 markdown files.
 * Run this after deploying the CDK stack to populate initial data.
 *
 * Usage: npx ts-node scripts/populate-toc.ts
 */

import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import matter from "gray-matter";

const BUCKET_NAME = "markdown-bucket-aykugdfki";
const TABLE_NAME = "markdown-toc";
const REGION = "ap-southeast-2";

const s3 = new S3Client({ region: REGION });
const dynamodb = new DynamoDBClient({ region: REGION });

interface TocEntry {
  path: string;
  title: string;
  date?: string;
  author?: string;
  description?: string;
}

async function listMarkdownFiles(): Promise<string[]> {
  const files: string[] = [];
  let continuationToken: string | undefined;

  do {
    const response = await s3.send(
      new ListObjectsV2Command({
        Bucket: BUCKET_NAME,
        ContinuationToken: continuationToken,
      })
    );

    for (const obj of response.Contents || []) {
      if (obj.Key?.endsWith(".md") && obj.Key !== "blog/") {
        files.push(obj.Key);
      }
    }

    continuationToken = response.NextContinuationToken;
  } while (continuationToken);

  return files;
}

async function processFile(key: string): Promise<TocEntry | null> {
  try {
    const response = await s3.send(
      new GetObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
      })
    );

    const content = await response.Body?.transformToString();
    if (!content) return null;

    const { data: frontmatter } = matter(content);
    const path = key.replace(".md", "");
    const filename = path.split("/").pop() || path;
    const title = frontmatter.title || filename;

    return {
      path,
      title: String(title),
      date: frontmatter.date ? String(frontmatter.date) : undefined,
      author: frontmatter.author ? String(frontmatter.author) : undefined,
      description: frontmatter.description
        ? String(frontmatter.description)
        : undefined,
    };
  } catch (error) {
    console.error(`Error processing ${key}:`, error);
    return null;
  }
}

async function upsertEntry(entry: TocEntry): Promise<void> {
  const item: Record<string, { S: string }> = {
    path: { S: entry.path },
    title: { S: entry.title },
    lastModified: { S: new Date().toISOString() },
  };

  if (entry.date) item.date = { S: entry.date };
  if (entry.author) item.author = { S: entry.author };
  if (entry.description) item.description = { S: entry.description };

  await dynamodb.send(
    new PutItemCommand({
      TableName: TABLE_NAME,
      Item: item,
    })
  );
}

async function main() {
  console.log("Listing markdown files in S3...");
  const files = await listMarkdownFiles();
  console.log(`Found ${files.length} markdown files`);

  for (const file of files) {
    console.log(`Processing: ${file}`);
    const entry = await processFile(file);
    if (entry) {
      await upsertEntry(entry);
      console.log(`  -> Added: ${entry.title}`);
    }
  }

  console.log("\nDone! TOC table populated.");
}

main().catch(console.error);
