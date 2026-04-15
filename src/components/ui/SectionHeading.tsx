import type { ReactNode } from "react";
import FadeIn from "./FadeIn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left mx-0";
  return (
    <FadeIn className={`max-w-2xl mb-14 ${alignment}`}>
      {eyebrow && (
        <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4 leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="text-foreground-muted text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
