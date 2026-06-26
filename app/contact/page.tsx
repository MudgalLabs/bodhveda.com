import { BuilderCard } from "@/components/builder-card";

export default function ContactPage() {
    return (
        <div className="mt-12 w-full max-w-[1200px] mx-auto px-6 relative">
            <h1 className="big-heading mb-12">Contact</h1>

            <p className="mb-4">
                Have a question? Want to share feedback or just say hello?
                I&apos;d love to hear from you.
            </p>
            <p className="mb-4">
                Found a bug? Open an issue. Need help? Send me an email at:{" "}
                <a className="text-base!" href="mailto:hey@ceoshikhar.com">
                    hey@ceoshikhar.com
                </a>
            </p>
            <p className="mb-4">
                It&apos;s just me on the other end, so I usually reply within a
                day or two.
            </p>
            <p className="mb-8">
                {`If you're already using Bodhveda, including the email you signed up with helps me help you faster.`}
            </p>

            <BuilderCard />
        </div>
    );
}
