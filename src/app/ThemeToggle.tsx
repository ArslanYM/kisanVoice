"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full bg-kv-surface border border-kv-border/30 flex items-center justify-center cursor-pointer hover:bg-kv-surface-hover transition-colors active:scale-95"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-kv-amber" strokeWidth={2} />
      ) : (
        <Moon className="w-5 h-5 text-kv-amber" strokeWidth={2} />
      )}
    </button>
  );
}
