"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");

  return (
    <section id="demo" className="relative py-32 bg-[#0F0B20] overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-25" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#911ECC] opacity-[0.08] blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#C084FC] opacity-[0.04] blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#911ECC]/40 to-transparent" />

      <div className="container-xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#911ECC]/10 border border-[#911ECC]/20 rounded-full px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-[#C084FC] opacity-60" />
              <span className="relative rounded-full h-2 w-2 bg-[#C084FC]" />
            </span>
            <span className="text-[#C084FC] text-xs font-semibold uppercase tracking-wider">Empieza hoy · Setup en 2 días</span>
          </div>

          <h2 className="text-display text-white mb-6">
            ¿Listo para eliminar el{" "}
            <span className="text-gradient">sobrecosto</span>{" "}
            de tus obras?
          </h2>

          <p className="text-body-lg text-white/45 mb-10 max-w-2xl mx-auto">
            Agenda una demo de 30 minutos y te mostramos cómo Mawi funciona
            con proyectos reales similares a los tuyos.
          </p>

          {/* Email CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
            <div className="flex w-full sm:w-auto bg-white/4 border border-white/8 rounded-full overflow-hidden pr-1.5 pl-5 py-1.5 gap-2 items-center min-w-[320px] focus-within:border-[#911ECC]/40 transition-colors">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@empresa.com"
                className="flex-1 bg-transparent text-white text-sm placeholder-white/25 outline-none"
              />
              <a href="mailto:demo@mawi.io" className="btn-primary text-sm px-5 py-2.5 whitespace-nowrap flex-shrink-0">
                Agendar demo gratis
                <ArrowRight size={15} />
              </a>
            </div>
            <a href="#precios" className="btn-secondary text-sm">
              Ver precios
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/25 text-xs">
            {["Sin tarjeta de crédito", "30 días de garantía", "Setup en 2 días", "Soporte en español"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#911ECC]" />
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
