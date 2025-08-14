export default function AboutPage() {
    return (
        <div className="mt-12 w-full max-w-[1200px] mx-auto px-6 relative">
            <h1 className="big-heading mb-4">About Us</h1>

            <p className="mb-4">
                <strong>Bodhveda</strong> is an open-source notification
                platform that lets developers add in-app notifications to their
                products in minutes — not weeks. Whether you’re launching your
                first product or scaling to millions, Bodhveda handles delivery,
                preferences, and analytics so you can focus on what matters.
            </p>
            <p className="mb-4">
                Built by{" "}
                <a
                    className="text-base!"
                    href="https://github.com/MudgalLabs"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <strong>Mudgal Labs</strong>{" "}
                </a>
                in India.
            </p>
            <p className="mb-4">
                Bodhveda was founded by{" "}
                <a
                    className="text-base!"
                    href="https://ceoshikhar.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <strong>Shikhar Sharma</strong>
                </a>
                {", "}
                Founder & CEO of Mudgal Labs.
            </p>
            <p className="mb-4">
                Our mission is to empower everyday traders with insights and
                workflows that were previously accessible only to professional
                institutions.
            </p>
        </div>
    );
}
