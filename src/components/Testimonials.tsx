"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  { quote: "Antes terminábamos todos los proyectos con sobrecosto. Llevamos 8 meses sin exceder presupuesto en ninguna obra. El cambio fue inmediato.", name: "Carlos Mendoza", title: "Director General", company: "Emesol Chile", flag: "🇨🇱", stat: "0% sobrecosto en 8 meses" },
  { quote: "Mi equipo administrativo recuperó 4 horas diarias que perdían en reportes manuales. Ahora ese tiempo lo usan en cosas que realmente importan.", name: "Ana Rodríguez", title: "Directora de Proyectos", company: "AUREA", flag: "🇨🇷", stat: "4h/día recuperadas" },
  { quote: "La visibilidad en tiempo real cambió cómo tomamos decisiones. Cuando hay una desviación la vemos al instante y actuamos de inmediato.", name: "Roberto Fonseca", title: "Gerente de Obra", company: "CORE Build", flag: "🇲🇽", stat: "Decisiones 3× más rápidas" },
  { quote: "Intentamos 3 softwares antes de Mawi. Ninguno entendía la complejidad de construcción en LATAM. Mawi sí. El ROI llegó en 45 días.", name: "Marcela Torres", title: "CFO", company: "Grupo Andino", flag: "🇨🇴", stat: "ROI en 45 días" },
  { quote: "Las alertas automáticas de sobrecosto nos salvaron en un proyecto clave. Sin Mawi, hubiera costado $180k más. El sistema se pagó solo.", name: "Patricia Vega", title: "Presidenta", company: "BuildCo", flag: "🇦🇷", stat: "$180K en sobrecostos evitados" },
  { quote: "El onboarding duró 2 días. Al tercer día mi equipo ya estaba operando en Mawi con cero fricción. Nunca había visto una adopción tan rápida.", name: "Diego Herrera", title: "Gerente General", company: "ProObra", flag: "🇵🇪", stat: "2 días de onboarding" },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const t = testimonials[index];

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" className="section-pad-lg bg-[#0F0B20] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#911ECC] opacity-[0.06] blur-[120px] rounded-full pointer-events-none" />

      <div className="container-xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-white/25 text-xs uppercase tracking-[0.15em] font-medium mb-4">Casos de éxito</p>
          <h2 className="text-h2 text-white mb-4">
            No confíes en nosotros.{" "}
            <span className="text-gradient">Confía en ellos.</span>
          </h2>
          <p className="text-white/40 text-lg">
            Más de 50 constructoras en LATAM ya transformaron su operación con Mawi.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={{
                enter: (d: number) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
                center: { opacity: 1, x: 0 },
                exit:  (d: number) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-[#13102A] border border-white/8 rounded-2xl p-8 lg:p-10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 12 12" fill="rgba(255,255,255,0.4)">
                    <path d="M6 0.5l1.545 3.13 3.455.503-2.5 2.437.59 3.43L6 8.385l-3.09 1.625.59-3.43L1 3.133l3.455-.503L6 .5z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-xl lg:text-2xl text-white/75 leading-relaxed font-medium mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Stat pill */}
              <div className="inline-flex items-center gap-2 bg-[#911ECC]/12 border border-[#911ECC]/25 rounded-full px-4 py-2 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC]" />
                <span className="text-sm font-semibold text-[#C084FC]">{t.stat}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#911ECC]/20 border border-[#911ECC]/30 flex items-center justify-center text-[#C084FC] font-bold text-sm flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name} {t.flag}</p>
                    <p className="text-white/30 text-xs">{t.title} · {t.company}</p>
                  </div>
                </div>
                <span className="text-white/20 text-sm">{index + 1} / {testimonials.length}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                  className="w-1.5 h-1.5 rounded-full transition-all duration-200"
                  style={{ backgroundColor: i === index ? "#C084FC" : "rgba(255,255,255,0.12)" }}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => go(-1)} className="w-10 h-10 rounded-full border border-white/8 hover:border-white/20 flex items-center justify-center text-white/35 hover:text-white transition-all">
                <ArrowLeft size={16} />
              </button>
              <button onClick={() => go(1)} className="w-10 h-10 rounded-full border border-white/8 hover:border-white/20 flex items-center justify-center text-white/35 hover:text-white transition-all">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <a href="#demo" className="btn-primary">
            Únete a estas empresas
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
