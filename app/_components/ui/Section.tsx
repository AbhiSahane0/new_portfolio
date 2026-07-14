import type { ReactNode } from "react";

/** Consistent section shell: id anchor, vertical rhythm, max width, a11y label. */
export default function Section({
  id,
  label,
  children,
  className = "",
  width = "wide",
}: {
  id: string;
  label: string;
  children: ReactNode;
  className?: string;
  width?: "wide" | "narrow" | "full";
}) {
  const max =
    width === "narrow"
      ? "max-w-3xl"
      : width === "full"
      ? "max-w-7xl"
      : "max-w-6xl";
  return (
    <section
      id={id}
      aria-label={label}
      className={`relative px-5 pb-20 pt-2 sm:px-8 md:pb-28 md:pt-3 ${className}`}
    >
      <div className={`mx-auto w-full ${max}`}>{children}</div>
    </section>
  );
}
