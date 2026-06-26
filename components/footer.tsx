import Link from "next/link";

import { Branding } from "@/components/branding";
import { BuilderCard } from "@/components/builder-card";

export function Footer() {
    return (
        <footer className="relative border-t border-border-subtle mt-24">
            <div className="relative max-w-[1200px] mx-auto px-6 py-12 flex flex-col">
                <Link
                    href="/"
                    className="unstyled-link cursor-pointer! self-start"
                >
                    <Branding size="small" hideBetaTag showTextOnMobile />
                </Link>

                <p className="text-text-muted mt-8">
                    Copyright © {new Date().getFullYear()} · All rights reserved
                </p>

                <div className="mt-8">
                    <BuilderCard />
                </div>

                <p className="text-text-muted text-sm sm:text-base mt-8">
                    Give feedback, request a feature, report a bug or{" "}
                    <br className="block sm:hidden" />
                    just say hi on{" "}
                    <a
                        href="mailto:hey@ceoshikhar.com"
                        className="font-bold text-sm! sm:text-base!"
                    >
                        hey@ceoshikhar.com
                    </a>
                </p>

                {/* Last on mobile; pinned top-right on desktop */}
                <div className="flex-y sm:flex-x gap-x-4! mt-8 sm:mt-0 sm:absolute sm:top-12 sm:right-6">
                    <Link href="/terms">Terms of Service</Link>
                    <Link href="/privacy">Privacy Policy</Link>
                    <Link href="/refund">Refund Policy</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
        </footer>
    );
}
