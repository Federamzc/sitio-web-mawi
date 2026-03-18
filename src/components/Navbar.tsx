"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Por qué Mawi", href: "#problema" },
  { label: "Clientes", href: "#testimonios" },
  { label: "Precios", href: "#precios" },
  { label: "Recursos", href: "#recursos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1D062F] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span
              className={`font-bold text-xl transition-colors ${
                scrolled ? "text-[#1D062F]" : "text-white"
              }`}
            >
              mawi
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#FF4E00] ${
                  scrolled ? "text-slate-600" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#demo"
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-slate-600 hover:text-[#1D062F]" : "text-white/90 hover:text-white"
              }`}
            >
              Iniciar sesión
            </a>
            <a
              href="#demo"
              className="bg-[#FF4E00] hover:bg-[#e04400] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-orange-200 animate-pulse-glow"
            >
              Agendar demo gratis
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-[#1D062F]" : "text-white"
            }`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
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
            className="lg:hidden bg-white border-t border-slate-100"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-700 font-medium py-2 hover:text-[#FF4E00] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="#demo"
                  className="text-center py-3 text-[#1D062F] font-medium border border-[#1D062F] rounded-full hover:bg-slate-50 transition-colors"
                >
                  Iniciar sesión
                </a>
                <a
                  href="#demo"
                  className="text-center py-3 bg-[#FF4E00] text-white font-semibold rounded-full hover:bg-[#e04400] transition-colors"
                >
                  Agendar demo gratis
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
