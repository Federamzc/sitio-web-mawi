import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="es" className={cn("h-full", "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
