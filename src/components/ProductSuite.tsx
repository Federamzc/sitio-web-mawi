"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, BarChart3, ShoppingCart, FileText, Bell, Users, Calendar, ClipboardList, Zap } from "lucide-react";

const products = [
  { icon: BarChart3,    name: "Control Presupuestal",  desc: "Visibilidad en tiempo real de cada peso que entra y sale de tus proyectos.",            color: "#C084FC" },
  { icon: ShoppingCart, name: "Órdenes de Compra",     desc: "Crea, aprueba y rastrea compras desde el celular. Sin papel.",                           color: "rgba(255,255,255,0.7)" },
  { icon: Bell,         name: "Alertas Inteligentes",  desc: "Recibe notificaciones de desviación antes de que se conviertan en pérdida.",              color: "#911ECC" },
  { icon: FileText,     name: "Reportes Automáticos",  desc: "Reportes ejecutivos generados solos. Llegan a tu correo cada semana.",                    color: "rgba(255,255,255,0.7)" },
  { icon: Users,        name: "Gestión Multi-rol",     desc: "Dueños, contratistas y arquitectos. Cada quien ve lo que necesita.",                      color: "#C084FC" },
  { icon: Calendar,     name: "Cronograma Visual",     desc: "Avance real vs planeado. Identifica retrasos antes de que impacten.",                     color: "rgba(255,255,255,0.7)" },
  { icon: ClipboardList,name: "Submittals & RFIs",     desc: "Gestión de documentos y solicitudes con trazabilidad completa.",                          color: "#911ECC" },
  { icon: Zap,          name: "Integraciones",         desc: "Conecta con QuickBooks, SAP, y tus herramientas favoritas.",                              color: "rgba(255,255,255,0.7)" },
];

export default function ProductSuite() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-pad-lg bg-[#0F0B20] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#911ECC] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />

      <div className="container-xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-white/30 text-xs uppercase tracking-[0.15em] font-medium mb-4">Suite de Mawi</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <h2 className="text-h2 text-white max-w-xl">
              Todo lo que necesita una constructora,{" "}
              <span className="text-gradient">en un solo lugar</span>
            </h2>
            <a href="#demo" className="btn-secondary text-sm self-start lg:self-auto flex-shrink-0">
              Ver todas las funciones
              <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>

        {/* 8-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 + i * 0.05 }}
              className="group relative bg-[#0F0B20] hover:bg-[#160e2a] transition-colors duration-200 p-7 flex flex-col gap-4 cursor-default"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
                style={{ backgroundColor: `${p.color}10`, border: `1px solid ${p.color}18` }}
              >
                <p.icon size={18} style={{ color: p.color }} />
              </div>

              <div>
                <h3 className="text-white/80 font-semibold text-[15px] mb-1.5 leading-snug group-hover:text-white transition-colors">{p.name}</h3>
                <p className="text-white/30 text-[13px] leading-relaxed">{p.desc}</p>
              </div>

              <a
                href="#demo"
                className="mt-auto flex items-center gap-1 text-xs font-medium text-[#C084FC] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                Más info <ArrowRight size={11} />
              </a>

              <div
                className="absolute bottom-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: p.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
