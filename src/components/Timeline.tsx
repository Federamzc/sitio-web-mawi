"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    day: "Día 1",
    headline: "Setup en 2 horas, no en 2 semanas",
    desc: "Conecta tu empresa, sube tu presupuesto maestro y agrega a tu equipo. Sin instalaciones, sin IT.",
    items: [
      "Importa tu presupuesto desde Excel",
      "Invita a tu equipo (roles automáticos)",
      "Conecta con QuickBooks o SAP",
      "Dashboard activo al instante",
    ],
    accent: "#FF4E00",
  },
  {
    day: "Día 5",
    headline: "Tu equipo opera sin fricción",
    desc: "Contratistas aprueban compras desde el celular. Alertas activadas. Sin correos, sin WhatsApp.",
    items: [
      "Órdenes de compra desde el móvil",
      "Alertas de desviación configuradas",
      "Proveedores con acceso limitado",
      "Primer reporte automático enviado",
    ],
    accent: "#911ECC",
  },
  {
    day: "Día 30",
    headline: "Control total. Sin Excel. Sin sorpresas.",
    desc: "El 100% del gasto de la obra pasa por Mawi. Tu CFO tiene visibilidad sin pedir reportes.",
    items: [
      "100% del gasto centralizado",
      "0 reportes manuales",
      "ROI demostrable (28% menos sobrecosto)",
      "Decisiones en tiempo real",
    ],
    accent: "#22c55e",
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.3"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="section-pad-lg bg-[#0D0A1A] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-dots opacity-25" />

      <div className="container-xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-white/30 text-xs uppercase tracking-[0.15em] font-medium mb-4">
            Implementación
          </p>
          <h2 className="text-h2 text-white mb-5">
            Así de rápido ves{" "}
            <span className="text-gradient">resultados reales</span>
          </h2>
          <p className="text-body-lg text-white/50">
            Mientras otros softwares tardan meses en implementarse, Mawi funciona el día 1.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line background */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/6 md:left-1/2" />

          {/* Animated progress line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px overflow-hidden md:left-1/2">
            <motion.div
              className="w-full origin-top"
              style={{
                height: lineHeight,
                background: "linear-gradient(to bottom, #FF4E00, #911ECC, #22c55e)",
              }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.day}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
              className={`relative flex gap-8 mb-16 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 flex-shrink-0 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ type: "spring", delay: 0.3 + i * 0.2 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-white/10 bg-[#0D0A1A]"
                  style={{ borderColor: `${step.accent}40` }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: step.accent }} />
                </motion.div>
              </div>

              {/* Content — offset for the dot */}
              <div className={`pl-16 md:pl-0 ${i % 2 === 0 ? "md:pr-14 md:text-right" : "md:pl-14"} md:w-1/2`}>
                <span
                  className="inline-block text-xs font-bold uppercase tracking-wider mb-3 px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: `${step.accent}15`, color: step.accent }}
                >
                  {step.day}
                </span>
                <h3 className="text-h4 text-white mb-3">{step.headline}</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-5">{step.desc}</p>
                <ul className={`space-y-2 ${i % 2 === 0 ? "md:flex md:flex-col md:items-end" : ""}`}>
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-center gap-2 text-white/55 text-sm ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                    >
                      <CheckCircle2 size={13} style={{ color: step.accent }} className="flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Empty side on desktop */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
