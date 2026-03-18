"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Director General",
    company: "Emesol Chile",
    country: "🇨🇱 Chile",
    text: "Antes de Mawi, terminábamos todos los proyectos con sobrecosto. Ahora llevamos 8 meses sin exceder presupuesto en ninguna obra. El cambio fue inmediato.",
    stat: "0% sobrecosto en 8 meses",
    avatar: "CM",
  },
  {
    name: "Ana Rodríguez",
    role: "Directora de Proyectos",
    company: "AUREA Constructora",
    country: "🇨🇷 Costa Rica",
    text: "Mi equipo administrativo recuperó 4 horas diarias que antes perdían en reportes manuales. Ahora ese tiempo lo usan en cosas que realmente importan.",
    stat: "4h/día ahorradas",
    avatar: "AR",
  },
  {
    name: "Roberto Fonseca",
    role: "Gerente de Obra",
    company: "CORE Construcciones",
    country: "🇲🇽 México",
    text: "La visibilidad en tiempo real cambió cómo tomamos decisiones. Ahora cuando hay una desviación, la vemos en el momento y actuamos inmediatamente.",
    stat: "Decisiones 3x más rápidas",
    avatar: "RF",
  },
  {
    name: "Marcela Torres",
    role: "CFO",
    company: "Grupo Andino",
    country: "🇨🇴 Colombia",
    text: "Intentamos con 3 softwares diferentes antes de Mawi. Ninguno entendía la complejidad de la construcción latinoamericana. Mawi sí.",
    stat: "ROI en 45 días",
    avatar: "MT",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonios" className="py-24 bg-[#1D062F]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Clientes que confían en Mawi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Resultados reales,{" "}
            <span className="text-[#FF4E00]">empresas reales</span>
          </h2>
          <p className="text-white/60 text-lg">
            Más de 20 empresas constructoras en LATAM ya controlan sus
            presupuestos con Mawi.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="text-[#FF4E00] fill-[#FF4E00]" />
                ))}
              </div>

              {/* Quote */}
              <Quote size={20} className="text-[#FF4E00] mb-3 opacity-60" />
              <p className="text-white/80 text-sm leading-relaxed mb-5 flex-1">
                {t.text}
              </p>

              {/* Stat badge */}
              <div className="bg-[#FF4E00]/20 border border-[#FF4E00]/30 rounded-lg px-3 py-2 mb-5">
                <p className="text-[#FF4E00] text-xs font-bold text-center">{t.stat}</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#FF4E00] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs">{t.role} · {t.company}</p>
                  <p className="text-white/40 text-xs">{t.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="#demo"
            className="inline-flex items-center gap-2 bg-[#FF4E00] hover:bg-[#e04400] text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-orange-900/30"
          >
            Únete a estas empresas — Agenda tu demo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
