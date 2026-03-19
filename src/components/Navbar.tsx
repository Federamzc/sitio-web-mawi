"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const nav = [
  {
    label: "Producto", children: [
      { label: "Control Presupuestal", desc: "Visibilidad en tiempo real" },
      { label: "Órdenes de Compra", desc: "Aprueba desde el móvil" },
      { label: "Reportes", desc: "Automáticos, sin esfuerzo" },
      { label: "Integraciones", desc: "QuickBooks, SAP y más" },
    ]
  },
  { label: "Soluciones" },
  { label: "Clientes" },
  { label: "Precios" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0A1A]/90 backdrop-blur-xl border-b border-white/8"
          : "bg-transparent"
      }`}
    >
      <div className="container-xl">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="font-bold text-xl text-white tracking-tight">mawi</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <div key={item.label} className="relative"
                onMouseEnter={() => item.children && setDropdown(item.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5 cursor-pointer">
                  {item.label}
                  {item.children && <ChevronDown size={14} className={`transition-transform ${dropdown === item.label ? "rotate-180" : ""}`} />}
                </button>
                {item.children && (
                  <AnimatePresence>
                    {dropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-[#13102A] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <a key={child.label} href="#" className="flex flex-col px-4 py-3 hover:bg-white/5 transition-colors">
                            <span className="text-sm font-medium text-white">{child.label}</span>
                            <span className="text-xs text-white/40 mt-0.5">{child.desc}</span>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#" className="text-sm font-medium text-white/60 hover:text-white transition-colors px-3 py-2">
              Iniciar sesión
            </a>
            <a href="#demo" className="btn-primary text-sm px-5 py-2.5">
              Agendar demo
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0D0A1A] border-t border-white/8"
          >
            <div className="container-xl py-4 flex flex-col gap-1">
              {nav.map((item) => (
                <a key={item.label} href="#" onClick={() => setOpen(false)}
                  className="px-3 py-3 text-white/70 hover:text-white font-medium transition-colors rounded-lg hover:bg-white/5">
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/8 mt-2 flex flex-col gap-2">
                <a href="#" className="btn-secondary w-full text-center">Iniciar sesión</a>
                <a href="#demo" className="btn-primary w-full text-center" onClick={() => setOpen(false)}>Agendar demo</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
