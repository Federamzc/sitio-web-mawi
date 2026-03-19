"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");

  return (
    <section id="demo" className="relative py-32 bg-[#0D0A1A] overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#FF4E00] opacity-[0.07] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-[#911ECC] opacity-[0.06] blur-[100px] rounded-full pointer-events-none" />

      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF4E00]/40 to-transparent" />

      <div className="container-xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FF4E00]/10 border border-[#FF4E00]/20 rounded-full px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-[#FF4E00] opacity-75" />
              <span className="relative rounded-full h-2 w-2 bg-[#FF4E00]" />
            </span>
            <span className="text-[#FF4E00] text-xs font-semibold uppercase tracking-wider">Empieza hoy · Setup en 2 días</span>
          </div>

          <h2 className="text-display text-white mb-6">
            ¿Listo para eliminar el{" "}
            <span className="text-gradient">sobrecosto</span>{" "}
            de tus obras?
          </h2>

          <p className="text-body-lg text-white/50 mb-10 max-w-2xl mx-auto">
            Agenda una demo de 30 minutos y te mostramos cómo Mawi funciona
            con proyectos reales similares a los tuyos.
          </p>

          {/* Email CTA — Ramp pattern */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
            <div className="flex w-full sm:w-auto bg-white/6 border border-white/12 rounded-full overflow-hidden pr-1.5 pl-5 py-1.5 gap-2 items-center min-w-[320px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@empresa.com"
                className="flex-1 bg-transparent text-white text-sm placeholder-white/30 outline-none"
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
          <div className="flex flex-wrap items-center justify-center gap-5 text-white/30 text-sm">
            {["Sin tarjeta de crédito", "30 días de garantía", "Setup en 2 días", "Soporte en español"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle size={13} className="text-[#FF4E00]" />
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
