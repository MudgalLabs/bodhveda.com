import Link from "next/link";

import { Branding } from "@/components/branding";
import { SignIn } from "@/components/sign_in";
import { SignUp } from "@/components/sign_up";

export function Navbar() {
    return (
        <nav className="p-4 relative max-w-[1200px] mx-auto">
            <div className="flex items-center justify-between">
                <Link href="/" className="unstyled-link cursor-pointer!">
                    <Branding size="small" />
                </Link>

                <div className="flex-x">
                    <SignIn />
                    <SignUp />
                </div>
            </div>
        </nav>
    );
}
