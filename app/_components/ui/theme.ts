"use client";

import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

/** Inlined in <head> before paint to avoid a flash of the wrong theme. */
export const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();`;

export function getTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

/**
 * Ensure an inline hex color stays legible on the current theme's background.
 * In light mode, colors too bright for a light backdrop are darkened toward a
 * target luminance while keeping their hue (brand icons, accent text).
 */
export function readableColor(hex: string, light: boolean): string {
  if (!light) return hex;
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return hex;
  const int = parseInt(m[1], 16);
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  if (lum <= 0.5) return hex; // already dark enough for a light bg
  const k = 0.32 / lum; // scale channels down to a legible luminance
  const to = (c: number) =>
    Math.round(Math.max(0, Math.min(255, c * k)))
      .toString(16)
      .padStart(2, "0");
  return `#${to(r)}${to(g)}${to(b)}`;
}

export function applyTheme(t: Theme) {
  document.documentElement.dataset.theme = t;
  try {
    localStorage.setItem("theme", t);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent("themechange", { detail: t }));
}

export function toggleTheme() {
  applyTheme(getTheme() === "dark" ? "light" : "dark");
}

/** Subscribe to the current theme (updates on toggle). */
export function useTheme(): Theme {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    setThemeState(getTheme());
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail as Theme | undefined;
      setThemeState(detail ?? getTheme());
    };
    window.addEventListener("themechange", onChange);
    return () => window.removeEventListener("themechange", onChange);
  }, []);

  return theme;
}
