"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  BarChart3, ShoppingCart, FileText, ClipboardList,
  Bell, Users, Calendar, CheckSquare
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Control presupuestal en tiempo real",
    desc: "Visualiza el estado financiero de cada proyecto al instante. Nunca más te sorprenderá un sobrecosto.",
    size: "lg",
    gradient: "from-[#FF4E00]/20 to-transparent",
    accent: "#FF4E00",
  },
  {
    icon: Bell,
    title: "Alertas inteligentes",
    desc: "Recibe notificaciones antes de que el presupuesto se desvíe, no después.",
    size: "sm",
    gradient: "from-[#911ECC]/20 to-transparent",
    accent: "#911ECC",
  },
  {
    icon: ShoppingCart,
    title: "Gestión de órdenes de compra",
    desc: "Crea, aprueba y rastrea compras desde el móvil. Sin papel, sin demoras.",
    size: "sm",
    gradient: "from-blue-500/20 to-transparent",
    accent: "#3b82f6",
  },
  {
    icon: FileText,
    title: "Documentos y submittals",
    desc: "Centraliza todos los documentos del proyecto. Aprobaciones con un clic.",
    size: "sm",
    gradient: "from-green-500/20 to-transparent",
    accent: "#22c55e",
  },
  {
    icon: ClipboardList,
    title: "Punch list digital",
    desc: "Lista de pendientes sin papel, con fotos y asignación de responsables.",
    size: "sm",
    gradient: "from-yellow-500/20 to-transparent",
    accent: "#facc15",
  },
  {
    icon: Users,
    title: "Gestión multi-rol",
    desc: "Cada usuario ve lo que necesita. Dueños, contratistas y arquitectos en un solo sistema.",
    size: "lg",
    gradient: "from-[#FF4E00]/15 via-[#911ECC]/10 to-transparent",
    accent: "#FF4E00",
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="funcionalidades" className="py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade inView delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-orange-100 text-[#FF4E00] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              Funcionalidades
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D062F] mb-4">
              Todo lo que necesita{" "}
              <span className="gradient-text">tu obra</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Desde la cotización hasta el cierre. Un solo sistema para todo el ciclo de vida del proyecto.
            </p>
          </div>
        </BlurFade>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative bg-gradient-to-br ${feat.gradient} rounded-2xl p-6 border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 cursor-default ${feat.size === "lg" && i === 0 ? "lg:col-span-2" : feat.size === "lg" ? "lg:col-span-2" : ""}`}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300"
                style={{ backgroundColor: `${feat.accent}20` }}
              >
                <feat.icon size={22} style={{ color: feat.accent }} />
              </div>

              <h3 className="font-bold text-[#1D062F] text-lg mb-2">{feat.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feat.desc}</p>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: feat.accent }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom row extras */}
        <div className="grid sm:grid-cols-3 gap-4 mt-4">
          {[
            { icon: Calendar, label: "Cronograma visual", accent: "#3b82f6" },
            { icon: CheckSquare, label: "Gestión de RFIs", accent: "#22c55e" },
            { icon: BarChart3, label: "Reportes automáticos", accent: "#911ECC" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="flex items-center gap-3 bg-slate-50 hover:bg-slate-100 rounded-2xl px-5 py-4 border border-slate-100 transition-colors"
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${item.accent}15` }}>
                <item.icon size={18} style={{ color: item.accent }} />
              </div>
              <span className="text-[#1D062F] font-medium text-sm">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
