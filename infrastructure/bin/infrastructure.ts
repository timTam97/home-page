#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { TocStack } from "../lib/toc-stack";

const app = new cdk.App();
new TocStack(app, "MarkdownTocStack", {
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: "ap-southeast-2",
    },
});
