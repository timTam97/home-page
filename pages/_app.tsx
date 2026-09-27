import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <SpeedInsights />
        </>
    );
}

export default MyApp;
