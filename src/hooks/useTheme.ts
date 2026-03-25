"use client";
import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const getSystemTheme = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    const currentTheme = savedTheme || getSystemTheme();
    setTheme(currentTheme);
    document.documentElement.classList.toggle("dark", currentTheme === "dark");

    // Escuchar cambios del sistema
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (!localStorage.getItem("theme")) {
        setTheme(getSystemTheme());
        document.documentElement.classList.toggle(
          "dark",
          getSystemTheme() === "dark"
        );
      }
    };
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return { theme, setTheme };
}
