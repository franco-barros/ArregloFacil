"use client";
import React, { createContext, useEffect, useState, ReactNode } from "react";

interface ThemeContextType {
  darkMode: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getTheme = () => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        return savedTheme === "dark" || (!savedTheme && prefersDark);
      };

      setDarkMode(getTheme());

      const applyTheme = (isDark: boolean) => {
        if (isDark) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      };

      applyTheme(getTheme());

      const handleStorageChange = (event: StorageEvent) => {
        if (event.key === "theme") {
          const newTheme = event.newValue === "dark";
          setDarkMode(newTheme);
          applyTheme(newTheme);
        }
      };

      window.addEventListener("storage", handleStorageChange);

      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para consumir el contexto
export const useThemeContext = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext debe usarse dentro de un ThemeProvider");
  }
  return context;
};
