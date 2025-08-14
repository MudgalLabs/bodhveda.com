export default function RefundPage() {
    return (
        <div className="mt-12 w-full max-w-[1200px] mx-auto px-6 relative">
            <h1 className="big-heading mb-12">Refund Policy</h1>

            <p className="mb-2">
                <strong>Effective Date:</strong> June 25, 2025
            </p>

            <p className="mb-4">Thank you for subscribing to Bodhveda.</p>
            <p className="mb-4">
                All subscription purchases are final. We <strong>DO NOT</strong>{" "}
                offer refunds, whether for monthly or yearly plans.
            </p>
            <p className="mb-4">
                We encourage you to explore Bodhveda using the free plan before
                upgrading. This policy helps us operate sustainably while
                continuing to serve everyone with the best possible experience.
            </p>
            <p className="mb-4">
                For any concerns or questions, feel free to reach out at{" "}
                <a
                    href="mailto:hey@bodhveda.com"
                    className="font-bold text-sm! sm:text-base!"
                >
                    hey@bodhveda.com
                </a>
                .
            </p>
        </div>
    );
}
