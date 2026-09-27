import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    children: ReactNode;
};

/** A link that opens in a new tab and says so to screen readers. */
export default function ExternalLink({ children, ...props }: Props) {
    return (
        <a target="_blank" rel="noopener noreferrer" {...props}>
            {children}
            <span className="sr-only"> (opens in a new tab)</span>
        </a>
    );
}
