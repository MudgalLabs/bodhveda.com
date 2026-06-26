import { ArrowUpRight } from "lucide-react";

interface BuilderCardProps {
    className?: string;
}

/**
 * BuilderCard is the signature of the product — a small profile card that
 * quietly points back to ceoshikhar.com. The entire card is clickable.
 *
 * Reuse this everywhere the maker is referenced (footer, About, etc.) so it
 * becomes instantly recognizable across products.
 */
export function BuilderCard({ className = "" }: BuilderCardProps) {
    return (
        <a
            href="https://ceoshikhar.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Built by ceoshikhar.com"
            className={`group unstyled-link cursor-pointer! inline-flex items-center gap-4 rounded-xl border border-border-soft bg-transparent px-4 py-3 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-border-hover ${className}`}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="https://ceoshikhar.com/images/me.png"
                alt="Shikhar Sharma"
                width={44}
                height={44}
                className="h-11 w-11 shrink-0 rounded-full object-cover select-none"
            />

            <div className="flex flex-col leading-tight">
                <span className="text-xs text-text-subtle">Built by</span>
                <span className="text-sm font-bold text-link">
                    ceoshikhar.com
                </span>
                <span className="text-xs text-text-muted">
                    I build things. Sometimes they&apos;re good.
                </span>
            </div>

            <ArrowUpRight
                size={18}
                className="ml-2 self-start text-text-subtle transition-transform duration-300 ease-in-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text-muted"
            />
        </a>
    );
}
