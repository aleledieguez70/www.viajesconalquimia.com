import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viajes con Alquimia · Experiencias de naturaleza y bienestar",
  description: "Experiencias de naturaleza, creatividad, retiros y hospitalidad con identidad. Diseñadas por María Alejandra Dieguez para personas, grupos y hoteles.",
  robots: { index: false, follow: false },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
