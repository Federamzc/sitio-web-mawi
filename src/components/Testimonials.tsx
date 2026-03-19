"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Antes terminábamos todos los proyectos con sobrecosto. Llevamos 8 meses sin exceder presupuesto en ninguna obra. El cambio fue inmediato.",
    name: "Carlos Mendoza",
    title: "Director General",
    company: "Emesol Chile",
    country: "CL",
    stat: "0% sobrecosto · 8 meses",
  },
  {
    quote: "Mi equipo administrativo recuperó 4 horas diarias que perdían en reportes manuales. Ahora ese tiempo lo usan en cosas que realmente importan.",
    name: "Ana Rodríguez",
    title: "Directora de Proyectos",
    company: "AUREA",
    country: "CR",
    stat: "4h/día recuperadas",
  },
  {
    quote: "La visibilidad en tiempo real cambió cómo tomamos decisiones. Cuando hay una desviación la vemos al instante y actuamos de inmediato.",
    name: "Roberto Fonseca",
    title: "Gerente de Obra",
    company: "CORE Build",
    country: "MX",
    stat: "Decisiones 3× más rápidas",
  },
  {
    quote: "Intentamos 3 softwares antes de Mawi. Ninguno entendía la complejidad de construcción en LATAM. Mawi sí. El ROI llegó en 45 días.",
    name: "Marcela Torres",
    title: "CFO",
    company: "Grupo Andino",
    country: "CO",
    stat: "ROI en 45 días",
  },
  {
    quote: "El onboarding duró 2 días. Al tercer día mi equipo ya estaba trabajando en Mawi con cero fricción. Nunca había visto una adopción tan rápida.",
    name: "Diego Herrera",
    title: "Gerente General",
    company: "ProObra",
    country: "PE",
    stat: "2 días de onboarding",
  },
  {
    quote: "Las alertas automáticas de sobrecosto nos salvaron en un proyecto clave. Sin Mawi, hubiera costado $180k más. El sistema se pagó solo.",
    name: "Patricia Vega",
    title: "Presidenta",
    company: "BuildCo",
    country: "AR",
    stat: "$180K en sobrecostos evitados",
  },
];

function TestimonialCard({ t, delay }: { t: typeof testimonials[0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="card p-6 flex flex-col gap-4 hover:bg-white/6 transition-colors duration-300 w-80 flex-shrink-0"
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array(5).fill(0).map((_, i) => (
          <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#FF4E00">
            <path d="M6 0.5l1.545 3.13 3.455.503-2.5 2.437.59 3.43L6 8.385l-3.09 1.625.59-3.43L1 3.133l3.455-.503L6 .5z" />
          </svg>
        ))}
      </div>

      <p className="text-white/60 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>

      {/* Stat pill */}
      <div className="inline-flex self-start bg-[#FF4E00]/10 border border-[#FF4E00]/20 rounded-full px-3 py-1">
        <span className="text-[#FF4E00] text-xs font-semibold">{t.stat}</span>
      </div>

      <div className="flex items-center gap-3 pt-1 border-t border-white/6">
        <div className="w-8 h-8 rounded-full gradient-brand flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-xs">{t.name[0]}</span>
        </div>
        <div>
          <p className="text-white font-medium text-sm leading-none mb-0.5">{t.name}</p>
          <p className="text-white/35 text-xs">{t.title} · {t.company}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonios" className="section-pad-lg bg-[#13102A] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FF4E00] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="container-xl relative z-10 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-white/6 border border-white/10 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4E00]" />
            <span className="text-white/60 text-xs font-semibold uppercase tracking-wider">Casos de éxito</span>
          </div>
          <h2 className="text-h2 text-white mb-5">
            Resultados reales,{" "}
            <span className="text-gradient">empresas reales</span>
          </h2>
          <p className="text-body-lg text-white/50">
            Más de 20 constructoras en LATAM ya transformaron su control presupuestal.
          </p>
        </motion.div>
      </div>

      {/* Scrolling rows */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#13102A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#13102A] to-transparent z-10 pointer-events-none" />

        {/* Row 1 */}
        <div className="flex gap-3 mb-3 overflow-hidden">
          <motion.div
            className="flex gap-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {[...testimonials.slice(0, 3), ...testimonials.slice(0, 3)].map((t, i) => (
              <TestimonialCard key={`r1-${i}`} t={t} delay={0} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="flex gap-3 overflow-hidden">
          <motion.div
            className="flex gap-3"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {[...testimonials.slice(3), ...testimonials.slice(3)].map((t, i) => (
              <TestimonialCard key={`r2-${i}`} t={t} delay={0} />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 text-center mt-12">
        <a href="#demo" className="btn-primary">
          Únete a estas empresas — Agenda tu demo
        </a>
      </div>
    </section>
  );
}
