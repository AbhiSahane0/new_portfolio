"use client";

import { useEffect, useState } from "react";

/** Rotating typewriter effect for the hero role line. */
export default function Typing({
  words,
  className = "",
}: {
  words: readonly string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    if (reduced) {
      setText(words[0]);
      return;
    }
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1)
          );
        },
        deleting ? 40 : 75
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, reduced]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[2px] animate-pulse bg-cyan-300 align-middle" />
    </span>
  );
}
