"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";

export default function CTA() {
  return (
    <section id="demo" className="relative py-32 bg-[#1D062F] overflow-hidden">
      <Spotlight className="-top-20 left-1/2 -translate-x-1/2" fill="#FF4E00" />
      <div className="absolute inset-0 bg-dot-white/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1D062F] via-transparent to-[#1D062F]" />

      {/* Glows */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#FF4E00] rounded-full opacity-10 blur-[80px]" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#911ECC] rounded-full opacity-10 blur-[80px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-[#FF4E00]/20 border border-[#FF4E00]/30 text-[#FF4E00] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            Empieza hoy
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            ¿Listo para eliminar el{" "}
            <span className="gradient-text">sobrecosto</span>{" "}
            de tus obras?
          </h2>

          <p className="text-white/50 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Agenda una demo de 30 minutos y te mostramos cómo Mawi funciona
            con proyectos reales similares a los tuyos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="mailto:demo@mawi.io"
              className="group flex items-center justify-center gap-2 bg-[#FF4E00] hover:bg-[#e04400] text-white font-semibold px-8 py-5 rounded-full transition-all duration-200 hover:shadow-2xl hover:shadow-orange-900/40 text-lg animate-pulse-glow"
            >
              Agendar demo gratis
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://mawi.io"
              className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium px-8 py-5 rounded-full transition-all text-lg hover:bg-white/5"
            >
              Ver el sitio actual
            </a>
          </div>

          {/* Mini trust row */}
          <div className="flex flex-wrap justify-center gap-8 text-white/30 text-sm">
            {[
              "✓ 30 días de garantía",
              "✓ Sin tarjeta de crédito",
              "✓ Setup en 2 días",
              "✓ Soporte en español",
            ].map((t) => <span key={t}>{t}</span>)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
