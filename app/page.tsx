import {
    LucideBellDot,
    Bell,
    Users,
    Sliders,
    Brush,
    Inbox,
    BarChart2,
    Cloud,
    BookOpen,
    Github,
    Zap,
    Monitor,
} from "lucide-react";

import { Documentation } from "@/components/documentation";
import { GetStarted } from "@/components/get_started";
import Pricing from "@/components/pricing/pricing";

const features = [
    {
        icon: Bell,
        title: "Notifications that scale",
        description:
            "Send to a single recipient or broadcast to hundreds of thousands recipients in seconds.",
    },
    {
        icon: Users,
        title: "Recipient's preferences",
        description:
            "Allow recipients to opt in or out of specific notifications with ease.",
    },
    {
        icon: Inbox,
        title: "Inbox-like API",
        description: "Fetch notifications, mark them as seen or delete them.",
    },
    {
        icon: BarChart2,
        title: "Analytics & Observability",
        description:
            "Track notification states — delivered, seen, read and opened in real-time.",
    },
    {
        icon: Brush,
        title: "Headless by design",
        description:
            "Send any data and fully control how notifications are displayed.",
    },
    {
        icon: Zap,
        title: "Simplicity first",
        description:
            "No unwanted complex workflows. Just the APIs you need to send and manage notifications.",
    },
    {
        icon: Monitor,
        title: "Bodhveda Console",
        description:
            "Send notifications, manage recipients and preferences, and view analytics in a web UI.",
    },
    {
        icon: Cloud,
        title: "Self-host or Managed",
        description:
            "Run on our cloud or your own infrastructure. No vendor lock-in.",
    },
];

const useCases = [
    {
        icon: BookOpen,
        title: "Dev.to-style blog platform",
        description: "Send notifications for mentions, comments, or likes.",
    },
    {
        icon: Sliders,
        title: "SaaS dashboards",
        description: "Notify users about usage, billing, or system updates.",
    },
    {
        icon: Github,
        title: "Large-scale platforms",
        description: "GitHub, YouTube, or Instagram like notifications.",
    },
];

export default function Hero() {
    return (
        <>
            <div className="w-full max-w-[1440px] mx-auto">
                <section className="w-full max-w-7xl mx-auto px-6 lg:px-16 flex-col flex lg:flex-row! items-center justify-between min-h-[85vh] gap-32 sm:gap-12">
                    {/* Left Column */}
                    <div className="flex-1 flex flex-col justify-center mt-24 sm:mt-0">
                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                            Notifications{" "}
                            <span className="block text-accent">
                                for developers
                            </span>
                        </h1>
                        <p className="mt-4 text-lg lg:text-xl text-text-primary max-w-[36ch]">
                            Bodhveda is an open-source platform that lets you
                            add in-app notifications to your product in minutes,
                            not weeks.{" "}
                            <span className="font-semibold block sm:inline!">
                                You send. We deliver.
                            </span>
                        </p>

                        <div className="flex flex-col sm:flex-row items-center sm:items-baseline! gap-4 mt-12">
                            <GetStarted />

                            <Documentation />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex-1 flex flex-col relative mt-12 lg:mt-0 min-w-0 mx-4">
                        {/* cURL Block */}
                        <div className="w-full max-w-screen overflow-x-auto bg-surface-3 border-1 border-border-soft text-white font-mono text-sm rounded-xl sm:p-5 p-2 shadow-lg relative z-1">
                            <pre className="select-text! whitespace-pre font-mono w-full">
                                {`curl -X POST https://api.bodhveda.com/notifications/send 
  -H "Authorization: Bearer bv_xxxxxxxxx"
  -H "Content-Type: application/json"
  -d '{
    "recipient": "user_123",
    "payload": {
      "title": "Welcome to Bodhveda",
      "body": "Your account has been created successfully."
    }
  }'`}
                            </pre>
                        </div>

                        {/* Inbox Screenshot */}
                        <div className="bg-white rounded-xl shadow-lg p-5 mx-4 sm:w-5/6 absolute bottom-50 sm:bottom-50 right-0 border border-gray-200 mt-12">
                            <LucideBellDot
                                size={32}
                                className="absolute text-accent right-2 -top-12 bg-white rounded-full p-1"
                            />
                            <div className="space-y-3">
                                <div className="p-3 rounded-lg bg-blue-50">
                                    <p className="font-medium text-accent">
                                        Welcome to Bodhveda
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Your account has been created
                                        successfully.
                                    </p>
                                    <span className="text-xs text-gray-400">
                                        Just now
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section
                    id="features"
                    className="w-full max-w-7xl mx-auto px-6 lg:px-16 mt-24"
                >
                    <h2 className="big-heading font-bold mb-8">Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {features.map(({ icon: Icon, title, description }) => (
                            <div key={title} className="flex flex-col gap-3">
                                <Icon className="w-8 h-8 text-accent" />
                                <h3 className="text-xl font-semibold">
                                    {title}
                                </h3>
                                <p className="text-text-muted">{description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Use Cases Section */}
                <section
                    id="use-cases"
                    className="w-full max-w-7xl mx-auto px-6 lg:px-16 mt-24"
                >
                    <h2 className="big-heading font-bold mb-8">
                        What can you build?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {useCases.map(({ icon: Icon, title, description }) => (
                            <div key={title} className="flex flex-col gap-3">
                                <div className="flex-x gap-x-4!">
                                    <Icon className="w-8 h-8 text-accent mb-2" />
                                    <h3 className="text-xl font-semibold mb-2">
                                        {title}
                                    </h3>
                                </div>
                                <p className="text-text-muted">{description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <Pricing />
            </div>
        </>
    );
}
