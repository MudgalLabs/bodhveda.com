import { BuilderCard } from "@/components/builder-card";

export default function AboutPage() {
    return (
        <div className="mt-12 w-full max-w-[1200px] mx-auto px-6 relative">
            <h1 className="big-heading mb-4">About</h1>

            <p className="mb-4">Hi, I&apos;m Shikhar.</p>
            <p className="mb-4">I build things. Sometimes they&apos;re good.</p>

            <p className="mb-4">
                <strong>Bodhveda</strong> is an open-source notification
                platform that lets developers add in-app notifications to their
                products in minutes — not weeks. It handles delivery,
                preferences, and analytics so you can focus on what actually
                matters: shipping your product.
            </p>
            <p className="mb-4">
                I designed, built, and maintain everything here myself. No team,
                no company behind a curtain — just me, sweating the details so
                the API feels right.
            </p>
            <p className="mb-8">
                If you have feedback or run into something broken, I&apos;d
                genuinely love to hear from you.
            </p>

            <BuilderCard />
        </div>
    );
}
