"use strict";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
    async redirects() {
        return [
            // redirect the index page to our notion test suite
            {
                source: "/",
                destination: "/Resume-113e4fe9f576406ba547f14ff99c7f75",
                // don't set permanent to true because it will get cached by browser
                // while developing on localhost
                permanent: false,
            },
        ];
    },
});
