"use strict";

require("dotenv").config();

module.exports = {
    reactStrictMode: true,
    env: {
        PAGE_ID: process.env.PAGE_ID,
    },
    webpack: (config, { isServer }) => {
        config.watchOptions = {
            ...config.watchOptions,
            ignored: /infrastructure/,
        };
        return config;
    },
};
