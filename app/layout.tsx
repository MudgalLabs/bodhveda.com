import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "netra/styles.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Bodhveda · In-App Notifications, Simplified.",
    description:
        "Bodhveda is a notification platform that lets developers add in-app notifications to their products in minutes — not weeks. You send. We deliver.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable}  antialiased`}>
                {/* Blue Radial Glow Background */}
                <div className="min-h-screen w-full bg-[#0f172a] relative">
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
                        }}
                    />
                    {children}
                </div>
            </body>
        </html>
    );
}
