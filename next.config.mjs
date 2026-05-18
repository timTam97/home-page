import dotenv from "dotenv";

dotenv.config();

export default {
    reactStrictMode: true,
    env: {
        PAGE_ID: process.env.PAGE_ID,
    },
};
