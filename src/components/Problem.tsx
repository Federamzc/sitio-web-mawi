"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, FileX, Clock, TrendingUp } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";

const problems = [
  {
    icon: TrendingUp,
    stat: 28,
    suffix: "%",
    title: "Sobrecosto promedio",
    desc: "El promedio de proyectos de construcción excede su presupuesto original en un 28% o más.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: Clock,
    stat: 6,
    suffix: "h",
    title: "Perdidas en papeleo",
    desc: "Tu equipo administrativo dedica 6 horas diarias a tareas manuales que deberían automatizarse.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: FileX,
    stat: 9,
    suffix: "/10",
    title: "Sin visibilidad real",
    desc: "9 de cada 10 constructoras no tienen visibilidad en tiempo real del estado financiero de sus obras.",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    icon: AlertTriangle,
    stat: 72,
    suffix: "h",
    title: "Retraso en alertas",
    desc: "En promedio, los equipos se enteran de un sobrecosto 72 horas después de que ocurrió.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problema" className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            El problema real en construcción
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D062F] mb-5">
            El 90% de los proyectos pierden dinero{" "}
            <span className="text-[#FF4E00]">sin darse cuenta</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Los proyectos de construcción fallan financieramente no por falta de
            talento, sino por falta de visibilidad. Los números llegan tarde, en
            hojas de Excel, y cuando ya no hay nada que hacer.
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 ${p.bg} rounded-xl flex items-center justify-center mb-4`}>
                <p.icon className={p.color} size={22} />
              </div>
              <p className={`text-4xl font-bold ${p.color} mb-2`}>
                <NumberTicker value={p.stat} className={p.color} delay={0.2 * i} />
                {p.suffix}
              </p>
              <h3 className="font-bold text-[#1D062F] mb-2">{p.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Before/After */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-6"
        >
          {/* Before */}
          <div className="bg-white border border-red-100 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-sm">✕</span>
              </div>
              <h3 className="font-bold text-slate-800 text-lg">Sin Mawi</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Excel desactualizados con datos de hace días",
                "Reportes manuales que toman horas armar",
                "Te enteras del sobrecosto cuando ya es tarde",
                "Facturas perdidas entre emails y WhatsApp",
                "Sin trazabilidad de órdenes de compra",
                "Reuniones de avance sin datos confiables",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600 text-sm">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-[#1D062F] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#FF4E00] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <h3 className="font-bold text-white text-lg">Con Mawi</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Dashboard en tiempo real con el estado de cada obra",
                "Reportes automáticos que llegan a tu correo",
                "Alertas de sobrecosto antes de que pasen",
                "Todas las facturas centralizadas y aprobadas",
                "Trazabilidad completa de compras y proveedores",
                "Reuniones de avance basadas en datos reales",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/80 text-sm">
                  <span className="text-[#FF4E00] mt-0.5 flex-shrink-0">✓</span>
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
