import { LucideBellDot } from "lucide-react";

import { Documentation } from "@/components/documentation";
import { GetStarted } from "@/components/get_started";
import { Branding } from "@/components/branding";

export default function Hero() {
    return (
        <div className="w-full max-w-[1440px] mx-auto">
            <nav className="flex items-center justify-start pt-2 mx-2 sm:mx-4">
                <Branding />
            </nav>

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
                        Bodhveda is an open-source platform that lets you add
                        in-app notifications to your product in minutes — not
                        weeks.{" "}
                        <span className="font-bold block sm:inline!">
                            You send. We deliver.
                        </span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-4 mt-12">
                        <GetStarted />

                        <Documentation />
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex-1 flex flex-col relative mt-12 lg:mt-0 min-w-0 mx-4">
                    {/* cURL Block */}
                    <div className="w-full max-w-screen overflow-x-auto bg-surface-3 border-1 border-border-soft text-white font-mono text-sm rounded-xl sm:p-5 p-2 shadow-lg relative z-10">
                        <pre className="whitespace-pre font-mono w-full">
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
                                    Your account has been created successfully.
                                </p>
                                <span className="text-xs text-gray-400">
                                    Just now
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
