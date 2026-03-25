"use client";

import { useTheme } from "../hooks/useTheme";

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useTheme();

  return <>{children}</>;
}
