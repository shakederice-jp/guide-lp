import Link from "next/link";
import type { ReactNode } from "react";

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-brand-tealDark">
      {children}
    </h2>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mb-4 leading-relaxed text-brand-ink">{children}</p>;
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="mb-4 list-disc space-y-2 pl-6 text-brand-ink">
      {children}
    </ul>
  );
}

export function Small({ children }: { children: ReactNode }) {
  return <p className="mt-8 text-sm text-brand-subtle">{children}</p>;
}

export function InlineLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="text-brand-teal underline hover:opacity-80">
      {children}
    </Link>
  );
}

export function RelatedLinks({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  return (
    <>
      <H2>関連ページ</H2>
      <UL>
        {links.map((l) => (
          <li key={l.href}>
            <InlineLink href={l.href}>{l.label}</InlineLink>
          </li>
        ))}
      </UL>
    </>
  );
}
