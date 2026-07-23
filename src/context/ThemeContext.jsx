import { createContext, useContext, useEffect, useState, useCallback } from "react";

const STORAGE_KEY = "cfg-theme";
const ThemeContext = createContext(null);

const getSystemTheme = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const applyTheme = (resolved) => {
  const root = document.documentElement;
  root.setAttribute("data-theme", resolved);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", resolved === "dark" ? "#090909" : "#ffffff");
};

export function ThemeProvider({ children }) {
  // `mode` is the user's choice: "light" | "dark" | "system"
  const [mode, setMode] = useState(() => {
    if (typeof window === "undefined") return "system";
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : "system";
  });

  // `resolved` is what's actually rendered.
  const [resolved, setResolved] = useState(() =>
    mode === "system" ? getSystemTheme() : mode
  );

  // Apply + persist whenever the mode changes.
  useEffect(() => {
    const next = mode === "system" ? getSystemTheme() : mode;
    setResolved(next);
    applyTheme(next);
    if (mode === "system") localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  // Follow the OS when in system mode.
  useEffect(() => {
    if (mode !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const next = getSystemTheme();
      setResolved(next);
      applyTheme(next);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [mode]);

  // Toggle between the two visible states (respecting current resolution).
  const toggle = useCallback(() => {
    setMode(resolved === "dark" ? "light" : "dark");
  }, [resolved]);

  const value = { mode, resolved, setMode, toggle, isDark: resolved === "dark" };
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
