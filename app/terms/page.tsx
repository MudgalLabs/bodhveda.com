export default function TermsPage() {
    return (
        <div className="mt-12 w-full max-w-[1200px] mx-auto px-6 relative">
            <h1 className="big-heading mb-4">Terms of Service</h1>

            <p className="mb-2">
                <strong>Effective Date:</strong> August 15, 2025
            </p>

            <p>Welcome to Bodhveda!</p>
            <p className="mb-8">
                By using Bodhveda, you agree to these Terms of Service. Please
                read them carefully. If you do not agree, you should not use the
                service.
            </p>

            <h2 className="sub-heading">1. Overview</h2>
            <p>
                Bodhveda is an open-source notification platform that lets
                developers add in-app notifications to their products. We
                currently offer a free service with reasonable limits. Paid
                plans will be introduced in the future.
            </p>

            <h2 className="sub-heading mt-4">2. Your Responsibilities</h2>
            <ul>
                <li>
                    You agree to use Bodhveda in compliance with all applicable
                    laws and regulations.
                </li>
                <li>
                    You must not misuse, disrupt, or attack the service or
                    infrastructure.
                </li>
                <li>
                    You are responsible for keeping your account credentials
                    secure.
                </li>
            </ul>

            <h2 className="sub-heading mt-4">3. Data Ownership</h2>
            <p>
                You own the data of every project you create in Bodhveda. We do
                not claim ownership and will never share it without your
                consent.
            </p>

            <h2 className="sub-heading mt-4">4. Source Availability</h2>
            <p>
                Bodhveda is <strong>open source</strong> on GitHub to promote
                transparency and build trust. You can view it here:{" "}
                <a
                    className="text-base!"
                    href="https://github.com/MudgalLabs/bodhveda"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    github.com/MudgalLabs/bodhveda
                </a>
            </p>
            <p>
                Note: Bodhveda is licensed under the <strong>AGPL-3.0</strong>.
            </p>

            <h2 className="sub-heading mt-4">5. Service Availability</h2>
            <p>
                We aim to keep the platform stable and accessible but make no
                guarantees regarding uptime or data retention. Features may
                change or be removed without notice.
            </p>

            <h2 className="sub-heading mt-4">6. Termination</h2>
            <p>
                You can stop using Bodhveda anytime. We may suspend or terminate
                accounts that abuse the system or violate these terms.
            </p>

            <h2 className="sub-heading mt-4">7. Changes to These Terms</h2>
            <p>
                We may update these Terms of Service over time. Continued use
                after changes means you accept the updated terms.
            </p>

            <h2 className="sub-heading mt-4">8. Contact</h2>
            <p>
                For questions or feedback, email us at{" "}
                <a className="text-base!" href="mailto:hey@bodhveda.com">
                    hey@bodhveda.com
                </a>
            </p>
        </div>
    );
}
