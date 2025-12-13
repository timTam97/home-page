import * as cdk from "aws-cdk-lib";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as lambdaNodejs from "aws-cdk-lib/aws-lambda-nodejs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3notifications from "aws-cdk-lib/aws-s3-notifications";
import * as apigatewayv2 from "aws-cdk-lib/aws-apigatewayv2";
import * as apigatewayv2Integrations from "aws-cdk-lib/aws-apigatewayv2-integrations";
import { Construct } from "constructs";
import * as path from "path";

const BUCKET_NAME = "markdown-bucket-aykugdfki";

export class TocStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // DynamoDB table for storing TOC entries
        const tocTable = new dynamodb.Table(this, "MarkdownTocTable", {
            tableName: "markdown-toc",
            partitionKey: { name: "path", type: dynamodb.AttributeType.STRING },
            billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
            removalPolicy: cdk.RemovalPolicy.DESTROY,
        });

        // Reference existing S3 bucket
        const bucket = s3.Bucket.fromBucketName(
            this,
            "MarkdownBucket",
            BUCKET_NAME
        );

        // Lambda function to process markdown files on S3 events
        const processMarkdownFn = new lambdaNodejs.NodejsFunction(
            this,
            "ProcessMarkdownFn",
            {
                functionName: "process-markdown",
                runtime: lambda.Runtime.NODEJS_20_X,
                handler: "handler",
                entry: path.join(
                    __dirname,
                    "../lambda/process-markdown/index.ts"
                ),
                timeout: cdk.Duration.seconds(30),
                environment: {
                    TABLE_NAME: tocTable.tableName,
                    BUCKET_NAME: BUCKET_NAME,
                },
                bundling: {
                    externalModules: [
                        "@aws-sdk/client-s3",
                        "@aws-sdk/client-dynamodb",
                    ],
                },
            }
        );

        // Grant permissions to process-markdown Lambda
        tocTable.grantWriteData(processMarkdownFn);
        bucket.grantRead(processMarkdownFn);

        // Add S3 event notification for .md files
        bucket.addEventNotification(
            s3.EventType.OBJECT_CREATED,
            new s3notifications.LambdaDestination(processMarkdownFn),
            { suffix: ".md" }
        );
        bucket.addEventNotification(
            s3.EventType.OBJECT_REMOVED,
            new s3notifications.LambdaDestination(processMarkdownFn),
            { suffix: ".md" }
        );

        // Lambda function to serve TOC via API
        const getTocFn = new lambdaNodejs.NodejsFunction(this, "GetTocFn", {
            functionName: "get-toc",
            runtime: lambda.Runtime.NODEJS_20_X,
            handler: "handler",
            entry: path.join(__dirname, "../lambda/get-toc/index.ts"),
            timeout: cdk.Duration.seconds(10),
            environment: {
                TABLE_NAME: tocTable.tableName,
            },
            bundling: {
                externalModules: ["@aws-sdk/client-dynamodb"],
            },
        });

        // Grant read permissions to get-toc Lambda
        tocTable.grantReadData(getTocFn);

        // HTTP API Gateway
        const httpApi = new apigatewayv2.HttpApi(this, "TocHttpApi", {
            apiName: "markdown-toc-api",
            corsPreflight: {
                allowOrigins: ["https://timsam.au", "http://localhost:3000"],
                allowMethods: [apigatewayv2.CorsHttpMethod.GET],
                allowHeaders: ["Content-Type"],
            },
        });

        // Add GET /toc route
        httpApi.addRoutes({
            path: "/toc",
            methods: [apigatewayv2.HttpMethod.GET],
            integration: new apigatewayv2Integrations.HttpLambdaIntegration(
                "GetTocIntegration",
                getTocFn
            ),
        });

        // Stack outputs
        new cdk.CfnOutput(this, "ApiEndpoint", {
            value: `${httpApi.apiEndpoint}/toc`,
            description: "TOC API endpoint URL",
        });

        new cdk.CfnOutput(this, "TableName", {
            value: tocTable.tableName,
            description: "DynamoDB table name",
        });
    }
}
