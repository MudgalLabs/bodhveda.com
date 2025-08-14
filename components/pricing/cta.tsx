"use client";

import { Button } from "netra";

export function PricingCTA(props: { label: string }) {
    return (
        <Button size="large" className="mt-8 w-full">
            {props.label}
        </Button>
    );
}
