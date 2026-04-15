import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "base" | "elevated";
};

export default function Section({
  id,
  children,
  className = "",
  tone = "base",
}: SectionProps) {
  const bg = tone === "elevated" ? "bg-background-elevated" : "bg-background";
  return (
    <section
      id={id}
      className={`${bg} py-20 sm:py-28 scroll-mt-24 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
