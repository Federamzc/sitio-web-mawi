"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, ShoppingCart, FileText, ClipboardList, Bell, Users, Calendar, CheckSquare, ArrowRight } from "lucide-react";

const features = [
  { icon: BarChart3,    title: "Control presupuestal en tiempo real",  desc: "Visualiza el estado financiero de cada proyecto al instante. Nunca más te sorprenderá un sobrecosto.", span: 2, accent: "#C084FC" },
  { icon: Bell,         title: "Alertas inteligentes",                 desc: "Recibe notificaciones antes de que el presupuesto se desvíe, no después.",                              span: 1, accent: "rgba(255,255,255,0.6)" },
  { icon: ShoppingCart, title: "Órdenes de compra",                    desc: "Crea, aprueba y rastrea compras desde el móvil. Sin papel, sin demoras.",                              span: 1, accent: "rgba(255,255,255,0.6)" },
  { icon: FileText,     title: "Documentos y submittals",              desc: "Centraliza todos los documentos del proyecto. Aprobaciones con un clic.",                             span: 1, accent: "rgba(255,255,255,0.6)" },
  { icon: Users,        title: "Gestión multi-rol",                    desc: "Cada usuario ve lo que necesita. Dueños, contratistas y arquitectos en un solo sistema.",              span: 2, accent: "#911ECC" },
  { icon: ClipboardList,title: "Punch list digital",                   desc: "Lista de pendientes sin papel, con fotos y asignación de responsables.",                              span: 1, accent: "rgba(255,255,255,0.6)" },
];

const extras = [
  { icon: Calendar,    label: "Cronograma visual",  accent: "#C084FC" },
  { icon: CheckSquare, label: "Gestión de RFIs",    accent: "rgba(255,255,255,0.5)" },
  { icon: BarChart3,   label: "Reportes automáticos", accent: "#911ECC" },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="funcionalidades" className="section-pad-lg bg-[#080514] relative" ref={ref}>
      <div className="absolute inset-0 bg-dots opacity-20" />

      <div className="container-xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#911ECC]/10 border border-[#911ECC]/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC]" />
            <span className="text-[#C084FC] text-xs font-semibold uppercase tracking-wider">Funcionalidades</span>
          </div>
          <h2 className="text-h2 text-white mb-5">
            Todo lo que necesita{" "}
            <span className="text-gradient">tu obra</span>
          </h2>
          <p className="text-body-lg text-white/45">
            Desde la cotización hasta el cierre. Un solo sistema para todo el ciclo de vida del proyecto.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className={`group card p-6 hover:bg-white/6 transition-all duration-300 cursor-default relative overflow-hidden ${feat.span === 2 ? "lg:col-span-2" : ""}`}
            >
              <div
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                style={{ backgroundColor: feat.accent }}
              />
              <div
                className="relative w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${feat.accent}10`, border: `1px solid ${feat.accent}18` }}
              >
                <feat.icon size={20} style={{ color: feat.accent }} />
              </div>
              <h3 className="text-white/80 font-semibold text-[17px] mb-2 leading-snug group-hover:text-white transition-colors">{feat.title}</h3>
              <p className="text-white/35 text-sm leading-relaxed">{feat.desc}</p>
              <div
                className="absolute bottom-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: feat.accent }}
              />
            </motion.div>
          ))}
        </div>

        {/* Extras strip */}
        <div className="grid sm:grid-cols-3 gap-3">
          {extras.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.55 + i * 0.07 }}
              className="card flex items-center gap-3 px-5 py-4 hover:bg-white/6 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${item.accent}10` }}>
                <item.icon size={16} style={{ color: item.accent }} />
              </div>
              <span className="text-white/55 font-medium text-sm">{item.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <a href="#demo" className="btn-primary">
            Ver todas las funcionalidades
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
