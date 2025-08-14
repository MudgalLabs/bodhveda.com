export default function PrivacyPage() {
    return (
        <div className="mt-12 w-full max-w-[1200px] mx-auto px-6 relative">
            <h1 className="big-heading mb-12">Privacy Policy</h1>

            <p className="mb-2">
                <strong>Effective Date:</strong> August 15, 2025
            </p>

            <p className="mb-8">
                This policy explains what information Bodhveda collects, how we
                use it, and your rights regarding your data.
            </p>

            <h2 className="sub-heading">1. What We Collect</h2>
            <ul>
                <li>
                    Your <strong>email address</strong> and{" "}
                    <strong>public profile details</strong> (like name and
                    avatar) from your OAuth provider (e.g., Google, GitHub).
                </li>
                <li>
                    The <strong>recipients</strong> you create and manage.
                </li>
                <li>
                    The <strong>notification</strong> you send, including
                    content, delivery status, and engagement metrics.
                </li>
            </ul>

            <p>
                We only collect data necessary to provide you with a
                personalized and functional experience.
            </p>

            <h2 className="sub-heading mt-4">2. How We Use Your Data</h2>
            <ul>
                <li>
                    Your profile helps identify your account and personalize
                    your experience.
                </li>
                <li>We do not sell your data or use it for advertising.</li>
            </ul>

            <h2 className="sub-heading mt-4">3. Cookies & Analytics</h2>

            <p>We use cookie for authenticating users.</p>
            {/* <p>
                We use cookies and tools like <strong>PostHog</strong> to help
                us understand how users interact with Bodhveda. These tools may
                use cookies to record anonymous usage behavior (clicks, page
                views, flows).
            </p>
            <p>
                This helps us improve usability, fix bugs, and guide product
                decisions. We do not use third-party ad or tracking services.
            </p> */}

            <h2 className="sub-heading mt-4">4. Data Storage & Security</h2>
            <p>
                Your data is stored securely. We apply reasonable security
                measures to protect it from unauthorized access or loss.
            </p>

            <h2 className="sub-heading mt-4">
                5. Transparency and Source Availability
            </h2>
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

            <h2 className="sub-heading mt-4">6. Your Rights</h2>
            <ul>
                <li>
                    You may delete your project or account, or request data
                    deletion at any time.
                </li>

                <li>
                    Feel free to reach out if you have questions about your
                    data.
                </li>
            </ul>

            <h2 className="sub-heading mt-4">7. Changes to This Policy</h2>
            <p>
                We may update this policy in the future. If we make major
                changes, we’ll try out best to notify you in the app or via
                email.
            </p>

            <h2 className="sub-heading mt-4">8. Contact</h2>
            <p>
                Have questions or concerns? Reach out to{" "}
                <a className="text-base!" href="mailto:hey@bodhveda.com">
                    hey@bodhveda.com
                </a>
            </p>
        </div>
    );
}
