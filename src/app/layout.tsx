import type { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { ThemeProvider } from "../context/ThemeContext";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Equilibra",
  description: "Empresa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  );
}
