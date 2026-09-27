import React from "react";
import type { AppProps } from "next/app";
import { Fraunces, Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "../styles/globals.css";

// Self-hosted at build time by next/font; no request to Google at runtime.
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const fraunces = Fraunces({
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
    variable: "--font-fraunces",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={`${inter.variable} ${fraunces.variable} font-sans`}>
            <Component {...pageProps} />
            <SpeedInsights />
        </div>
    );
}
