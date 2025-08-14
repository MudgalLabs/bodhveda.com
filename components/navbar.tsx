import Link from "next/link";

import { Branding } from "@/components/branding";
import { SignIn } from "@/components/sign_in";
import { SignUp } from "@/components/sign_up";

export function Navbar() {
    return (
        <nav className="p-8 relative">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/" className="unstyled-link cursor-pointer!">
                        <Branding size="small" />
                    </Link>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="/#features">Features</Link>
                    <Link href="/#use-cases">Use Cases</Link>
                    <Link href="https://docs.bodhveda.com">Docs</Link>
                    <Link href="/#pricing">Pricing</Link>
                </div>

                <div className="flex-x">
                    <SignIn />

                    <SignUp />
                </div>
            </div>
        </nav>
    );
}
