export type ThemeType = "dark" | "light";

export const applyTheme = (theme: ThemeType) => {
  document.documentElement.classList.toggle("dark", theme === "dark");
};

export const getThemePreference = (): ThemeType | null => {
  if (typeof window !== "undefined") {
    const theme = localStorage.getItem("theme");
    if (theme === "dark" || theme === "light") {
      applyTheme(theme);
      return theme;
    }
  }
  return null;
};

export const setThemePreference = (theme: ThemeType): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("theme", theme);
    applyTheme(theme);
  }
};
