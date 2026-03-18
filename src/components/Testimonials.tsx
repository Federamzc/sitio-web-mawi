"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { BlurFade } from "@/components/ui/blur-fade";

const testimonials = [
  {
    quote: "Antes terminábamos todos los proyectos con sobrecosto. Llevamos 8 meses sin exceder presupuesto en ninguna obra. El cambio fue inmediato.",
    name: "Carlos Mendoza",
    title: "Director General · Emesol Chile 🇨🇱",
    stat: "0% sobrecosto en 8 meses",
  },
  {
    quote: "Mi equipo administrativo recuperó 4 horas diarias que perdían en reportes manuales. Ahora ese tiempo lo usan en cosas que realmente importan.",
    name: "Ana Rodríguez",
    title: "Directora de Proyectos · AUREA 🇨🇷",
    stat: "4h/día recuperadas",
  },
  {
    quote: "La visibilidad en tiempo real cambió cómo tomamos decisiones. Cuando hay una desviación la vemos al instante y actuamos de inmediato.",
    name: "Roberto Fonseca",
    title: "Gerente de Obra · CORE 🇲🇽",
    stat: "Decisiones 3x más rápidas",
  },
  {
    quote: "Intentamos 3 softwares antes de Mawi. Ninguno entendía la complejidad de construcción en LATAM. Mawi sí. El ROI llegó en 45 días.",
    name: "Marcela Torres",
    title: "CFO · Grupo Andino 🇨🇴",
    stat: "ROI en 45 días",
  },
  {
    quote: "El onboarding duró 2 días. Al tercer día mi equipo ya estaba trabajando en Mawi con cero fricción. Nunca había visto una adopción tan rápida.",
    name: "Diego Herrera",
    title: "Gerente General · ProObra 🇵🇪",
    stat: "2 días de onboarding",
  },
  {
    quote: "Las alertas automáticas de sobrecosto nos salvaron en un proyecto clave. Sin Mawi, hubiera costado $180k más. El sistema se pagó solo.",
    name: "Patricia Vega",
    title: "Presidenta · BuildCo 🇦🇷",
    stat: "$180K en sobrecostos evitados",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-28 bg-[#1D062F] relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-white/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF4E00] rounded-full opacity-5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <BlurFade inView delay={0}>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-white/10 border border-white/20 text-white/70 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              Casos de éxito
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Resultados reales,{" "}
              <span className="gradient-text">empresas reales</span>
            </h2>
            <p className="text-white/50 text-lg">
              Más de 20 constructoras en LATAM ya transformaron su control presupuestal.
            </p>
          </div>
        </BlurFade>
      </div>

      {/* Two rows moving in opposite directions */}
      <div className="space-y-4">
        <InfiniteMovingCards
          items={testimonials.slice(0, 3)}
          direction="left"
          speed="slow"
        />
        <InfiniteMovingCards
          items={testimonials.slice(3)}
          direction="right"
          speed="slow"
        />
      </div>

      <div className="relative z-10 text-center mt-12">
        <a
          href="#demo"
          className="inline-flex items-center gap-2 bg-[#FF4E00] hover:bg-[#e04400] text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-2xl hover:shadow-orange-900/30"
        >
          Únete a estas empresas — Agenda tu demo
        </a>
      </div>
    </section>
  );
}
