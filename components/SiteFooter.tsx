import { artwork, profile, socials } from "../content/home";
import ExternalLink from "./ExternalLink";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function SiteFooter() {
    return (
        <footer className="border-t border-line">
            <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-10 text-sm text-muted sm:px-8 md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                    <p>
                        © {new Date().getFullYear()} {profile.name}
                    </p>
                    <p>
                        Header:{" "}
                        <ExternalLink
                            href={artwork.href}
                            className="link-quiet"
                        >
                            <cite>{artwork.title}</cite>
                        </ExternalLink>{" "}
                        by {artwork.artist} ({artwork.date}),{" "}
                        {artwork.collection}.
                    </p>
                </div>
                <ul className="flex gap-2">
                    <li>
                        <ExternalLink
                            href={socials.github.href}
                            className="icon-button"
                            aria-label={`${socials.github.label} (opens in a new tab)`}
                        >
                            <GitHubIcon className="size-4" />
                        </ExternalLink>
                    </li>
                    <li>
                        <ExternalLink
                            href={socials.linkedin.href}
                            className="icon-button"
                            aria-label={`${socials.linkedin.label} (opens in a new tab)`}
                        >
                            <LinkedInIcon className="size-4" />
                        </ExternalLink>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
