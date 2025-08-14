export default function ContactPage() {
    return (
        <div className="mt-12 w-full max-w-[1200px] mx-auto px-6 relative">
            <h1 className="big-heading mb-12">Contact Us</h1>

            <p className="mb-4">
                Whether you have a question, want to share feedback, report a
                bug, or just say hello — we’d love to hear from you.
            </p>
            <p className="mb-4">
                You can reach us directly at:{" "}
                <a className="text-base!" href="mailto:hey@bodhveda.com">
                    hey@bodhveda.com
                </a>
            </p>
            <p className="mb-4">
                We aim to respond to all messages within 24–48 hours, Monday to
                Friday.
            </p>
            <p>
                {`If you're an existing user, please include your registered email
                ID for faster assistance.`}
            </p>
        </div>
    );
}
