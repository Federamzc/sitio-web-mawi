"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BlurFade } from "@/components/ui/blur-fade";

const pains = [
  { stat: 28, suffix: "%", label: "Sobrecosto promedio", desc: "Los proyectos terminan costando 28% más de lo planeado.", color: "from-red-500/20 to-red-600/5", dot: "#ef4444" },
  { stat: 6, suffix: "h", label: "Perdidas diario en admin", desc: "Tu equipo gasta el día en tareas manuales que no agregan valor.", color: "from-orange-500/20 to-orange-600/5", dot: "#FF4E00" },
  { stat: 9, suffix: "/10", label: "Sin visibilidad real", desc: "9 de 10 constructoras no saben el estado real de sus finanzas.", color: "from-yellow-500/20 to-yellow-600/5", dot: "#facc15" },
  { stat: 72, suffix: "h", label: "Retraso promedio en alertas", desc: "Cuando te enteras del problema, ya es demasiado tarde.", color: "from-purple-500/20 to-purple-600/5", dot: "#a855f7" },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problema" className="py-28 bg-[#0D0618] relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-grid-white\/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#911ECC] rounded-full opacity-5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0} inView>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              El problema real
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              El 90% de los proyectos{" "}
              <span className="gradient-text">pierden dinero sin darse cuenta</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              No es falta de talento. Es falta de visibilidad. Los números llegan tarde,
              en Excel desactualizados, cuando ya no hay nada que hacer.
            </p>
          </div>
        </BlurFade>

        {/* Pain stat cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {pains.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-gradient-to-b ${p.color} rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors group`}
            >
              <div className="w-2 h-2 rounded-full mb-4" style={{ backgroundColor: p.dot }} />
              <p className="text-4xl font-bold text-white mb-2">
                <NumberTicker value={p.stat} className="text-white" delay={0.3 + i * 0.1} />
                {p.suffix}
              </p>
              <h3 className="text-white font-semibold mb-2 text-sm">{p.label}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Before/After comparison */}
        <BlurFade delay={0.4} inView>
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Before */}
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-sm">✕</div>
                <h3 className="text-white font-bold text-lg">Sin Mawi</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Excel desactualizados que nadie confía",
                  "Reportes manuales que tardan días en armar",
                  "Te enteras del sobrecosto cuando ya es tarde",
                  "Facturas perdidas en emails y WhatsApp",
                  "Reuniones sin datos, solo suposiciones",
                  "Proveedores sin trazabilidad ni control",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/50 text-sm">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="rounded-2xl border border-[#FF4E00]/20 bg-gradient-to-br from-[#FF4E00]/10 to-[#911ECC]/10 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#FF4E00] flex items-center justify-center text-white font-bold text-sm">✓</div>
                <h3 className="text-white font-bold text-lg">Con Mawi</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Dashboard en tiempo real — siempre actualizado",
                  "Reportes automáticos en tu correo cada semana",
                  "Alertas de sobrecosto antes de que pasen",
                  "Todas las facturas centralizadas y aprobadas",
                  "Reuniones con datos reales, decisiones mejores",
                  "Trazabilidad completa de compras y proveedores",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                    <span className="text-[#FF4E00] mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
