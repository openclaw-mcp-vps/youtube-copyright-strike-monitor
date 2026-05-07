import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CopyrightGuard – Monitor & Prevent YouTube Copyright Strikes",
  description: "Scan your YouTube videos for copyright issues before upload, monitor strikes across channels, and get AI-powered safe alternatives."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="42c678af-1f2c-423a-8d5a-b4409c8e3887"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
