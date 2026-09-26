import Link from "next/link";
import type { ReactNode } from "react";

export function CtaButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <div className="my-6">
      <Link
        href={href}
        className="inline-block rounded-full bg-brand-orange px-7 py-3 font-bold text-brand-tealDark transition hover:opacity-90"
      >
        {children}
      </Link>
    </div>
  );
}

export const APP_URL = "https://ipo.finance-tower.com";
