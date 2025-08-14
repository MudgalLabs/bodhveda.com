"use client";

import { FC } from "react";
import { Tag, cn } from "netra";
import { MuseoModerno } from "next/font/google";

import { Logo } from "@/components/logo";

const museoModerno = MuseoModerno({
    weight: ["500"],
    subsets: ["latin"],
    variable: "--font-logo",
});

interface BrandingProps {
    className?: string;
    size?: "small" | "default" | "large";
    hideText?: boolean;
    hideLogo?: boolean;
    hideBetaTag?: boolean;
}

export const Branding: FC<BrandingProps> = (props) => {
    const {
        className,
        size = "default",
        hideLogo = false,
        hideText = false,
        hideBetaTag = false,
    } = props;

    const classes = {
        small: {
            logo: 28,
            text: "text-[28px]",
        },
        default: {
            logo: 36,
            text: "text-[36px]",
        },
        large: {
            logo: 48,
            text: "text-[52px]",
        },
    };

    return (
        <div
            className={`flex-center items-center! gap-x-1 ${museoModerno.variable} antialiased`}
        >
            <div
                className={cn(
                    "font-logo text-logo inline-flex items-baseline gap-x-2 font-medium select-none",
                    className
                )}
            >
                {!hideLogo && <Logo size={classes[size].logo} />}

                {!hideText && (
                    <h1
                        className={cn(
                            `hidden sm:block! text-logo`,
                            classes[size].text
                        )}
                    >
                        bodhveda
                    </h1>
                )}
            </div>

            {!hideBetaTag && <Tag size="small">BETA</Tag>}
        </div>
    );
};
