import { Check } from "lucide-react";
import { PricingCTA } from "@/components/pricing/cta";

const plans = [
    {
        name: "Starter",
        price: "$0",
        period: "/month",
        description: "Get started with 10k notifications/month.",
        features: [
            "10,000 notifications per month",
            "1 year retention of notifications",
            "Normal support",
        ],
        cta: "Free forever",
    },
    {
        name: "Growth",
        price: "$20",
        period: "/month",
        description: "Start with 100k notifications/month.",
        features: [
            "100,000 notifications per month",
            "$1 per 10,000 additional notifications",
            "5 year retention of notifications",
            "Priority support",
        ],
        cta: "Get started",
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="text-text-primary mt-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-7xl font-bold tracking-tight">
                        Two plans,{" "}
                        <span className="text-accent">one purpose</span>
                    </h2>
                    <p className="mt-4 text-lg text-text-muted">
                        Choose a plan that grows with your notifications.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`rounded-2xl border p-8 flex flex-col shadow-sm ${
                                plan.name === "Growth"
                                    ? "border-accent shadow-lg"
                                    : "border-border-soft"
                            }`}
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-semibold flex-x">
                                    {plan.name}
                                    {plan.name === "Growth" && (
                                        <span className="ml-2 text-sm bg-accent text-white px-2 py-1 rounded-full">
                                            Coming soon
                                        </span>
                                    )}
                                </h3>
                            </div>

                            <p className="mt-2 text-muted-foreground">
                                {plan.description}
                            </p>

                            <div className="mt-6 flex items-baseline">
                                <span className="text-4xl font-bold">
                                    {plan.price}
                                </span>
                                <span className="ml-1 text-muted-foreground">
                                    {plan.period}
                                </span>
                            </div>

                            <ul className="mt-6 space-y-3 flex-1">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center text-sm"
                                    >
                                        <Check className="h-4 w-4 text-primary mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <PricingCTA label={plan.cta} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
