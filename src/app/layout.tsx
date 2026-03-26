import type { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { ThemeProvider } from "../context/ThemeContext";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Arreglo Fácil",
    template: "%s | Arreglo Fácil",
  },
  description:
    "Arreglo Fácil conecta clientes con profesionales de confianza para resolver problemas del hogar de forma rápida y segura.",
  keywords: [
    "servicios",
    "hogar",
    "reparaciones",
    "electricista",
    "plomero",
    "gasista",
    "Argentina",
  ],
  authors: [{ name: "Arreglo Fácil" }],
  icons: {
    icon: [
      { url: "/Favicon.png", sizes: "500x500", type: "image/png" },
      { url: "/Favicon.png", sizes: "500x500", type: "image/png" },
    ],
    shortcut: "/Favicon.png",
    apple: [{ url: "/Favicon.png", sizes: "500x500", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          <AnimatePresence mode="wait" initial={false}>
            {children}
          </AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  );
}
