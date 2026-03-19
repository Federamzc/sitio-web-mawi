import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mawi — Control de Presupuestos para Construcción",
  description: "Elimina el sobrecosto en tus proyectos. Control de gastos en tiempo real para constructoras en LATAM.",
  openGraph: {
    title: "Mawi — Control de Presupuestos para Construcción",
    description: "Elimina el sobrecosto. Recupera tu margen.",
    url: "https://mawi.io",
    siteName: "Mawi",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
