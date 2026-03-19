"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { X, Check } from "lucide-react";

const pains = [
  { stat: 28, suffix: "%", label: "Sobrecosto promedio", desc: "Los proyectos terminan costando 28% más de lo planeado.", color: "#ef4444" },
  { stat: 6, suffix: "h", label: "Perdidas diario en admin", desc: "Tu equipo gasta el día en tareas manuales que no agregan valor.", color: "#FF4E00" },
  { stat: 9, suffix: "/10", label: "Sin visibilidad real", desc: "9 de 10 constructoras no saben el estado real de sus finanzas.", color: "#facc15" },
  { stat: 72, suffix: "h", label: "Retraso promedio en alertas", desc: "Cuando te enteras del problema, ya es demasiado tarde.", color: "#911ECC" },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="problema" className="section-pad-lg bg-[#0D0A1A] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#911ECC] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="container-xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <span className="text-red-400 text-xs font-semibold uppercase tracking-wider">El problema real</span>
          </div>
          <h2 className="text-h2 text-white mb-5">
            El 90% de los proyectos{" "}
            <span className="text-gradient">pierden dinero sin darse cuenta</span>
          </h2>
          <p className="text-body-lg text-white/50">
            No es falta de talento. Es falta de visibilidad. Los números llegan tarde,
            en Excel desactualizados, cuando ya no hay nada que hacer.
          </p>
        </motion.div>

        {/* Pain stat cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {pains.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="card p-6 hover:bg-white/6 transition-colors"
            >
              <div className="w-2 h-2 rounded-full mb-4" style={{ backgroundColor: p.color }} />
              <p className="text-4xl font-bold text-white mb-2 leading-none">
                <NumberTicker value={p.stat} className="text-white" delay={0.3 + i * 0.1} />
                <span style={{ color: p.color }}>{p.suffix}</span>
              </p>
              <h3 className="text-white font-semibold mb-2 text-sm">{p.label}</h3>
              <p className="text-white/35 text-xs leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Before / After */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="grid lg:grid-cols-2 gap-3"
        >
          {/* Before */}
          <div className="rounded-2xl border border-red-500/15 bg-red-500/5 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-500/15 border border-red-500/25 flex items-center justify-center">
                <X size={14} className="text-red-400" />
              </div>
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
                <li key={item} className="flex items-start gap-3 text-white/45 text-sm">
                  <X size={13} className="text-red-400/60 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-[#FF4E00]/20 bg-gradient-to-br from-[#FF4E00]/8 to-[#911ECC]/8 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#FF4E00] flex items-center justify-center">
                <Check size={14} className="text-white" />
              </div>
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
                <li key={item} className="flex items-start gap-3 text-white/65 text-sm">
                  <Check size={13} className="text-[#FF4E00] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
