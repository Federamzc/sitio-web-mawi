"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import {
  Building2,
  HardHat,
  Pencil,
  BarChart3,
  ShoppingCart,
  FileText,
  ClipboardList,
  Users,
  DollarSign,
  Calendar,
  CheckSquare,
  MessageSquare,
} from "lucide-react";

const roles = [
  {
    id: "owner",
    label: "Dueño de empresa",
    icon: Building2,
    headline: "Visibilidad total de tu negocio, sin depender de nadie",
    description:
      "Deja de esperar que te manden un Excel. Con Mawi tienes en tiempo real el estado financiero de todos tus proyectos, quién está gastando qué y dónde están tus márgenes.",
    features: [
      { icon: BarChart3, title: "Dashboard ejecutivo", desc: "Todos tus proyectos, un solo tablero." },
      { icon: DollarSign, title: "Control de márgenes", desc: "Ve rentabilidad por proyecto en tiempo real." },
      { icon: Users, title: "Gestión de equipo", desc: "Asigna roles y permisos por obra." },
      { icon: FileText, title: "Reportes automáticos", desc: "Recibe resúmenes ejecutivos semanales." },
    ],
    color: "#1D062F",
    accent: "#FF4E00",
  },
  {
    id: "contractor",
    label: "Contratista",
    icon: HardHat,
    headline: "Controla cada centavo de la obra sin perder tiempo en papeles",
    description:
      "Registra gastos desde el sitio de construcción, gestiona órdenes de compra con proveedores y mantén tu presupuesto bajo control sin salir de la obra.",
    features: [
      { icon: ShoppingCart, title: "Órdenes de compra", desc: "Crea, aprueba y rastrea compras desde el móvil." },
      { icon: ClipboardList, title: "Control de gastos", desc: "Categoriza y aprueba gastos en tiempo real." },
      { icon: CheckSquare, title: "Punch list digital", desc: "Lista de pendientes sin papel." },
      { icon: MessageSquare, title: "RFI management", desc: "Gestiona solicitudes de información." },
    ],
    color: "#2d0a4a",
    accent: "#FF4E00",
  },
  {
    id: "architect",
    label: "Arquitecto",
    icon: Pencil,
    headline: "Del diseño a la obra, con control presupuestal en cada etapa",
    description:
      "Conecta tus planos con el presupuesto real. Sigue el avance de obra, gestiona submittals y mantén a todos los stakeholders informados sin correos interminables.",
    features: [
      { icon: Calendar, title: "Cronograma visual", desc: "Visualiza el avance real vs. planeado." },
      { icon: FileText, title: "Gestión de submittals", desc: "Control de documentos y aprobaciones." },
      { icon: ClipboardList, title: "Informes de inspección", desc: "Reportes de avance con fotos y datos." },
      { icon: BarChart3, title: "Control de cambios", desc: "Gestiona change orders con trazabilidad." },
    ],
    color: "#2d0a4a",
    accent: "#FF4E00",
  },
];

export default function RoleFeatures() {
  const [active, setActive] = useState("owner");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const current = roles.find((r) => r.id === active)!;

  return (
    <section id="funcionalidades" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Diseñado para cada rol
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D062F] mb-4">
            Una plataforma,{" "}
            <span className="text-[#FF4E00]">múltiples roles</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Mawi se adapta a cómo trabaja cada persona en tu empresa. Cada
            usuario ve lo que necesita, nada más.
          </p>
        </motion.div>

        {/* Role tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setActive(role.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
                active === role.id
                  ? "bg-[#1D062F] text-white shadow-lg shadow-slate-200"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <role.icon size={16} />
              {role.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: current.accent }}
                >
                  <current.icon className="text-white" size={22} />
                </div>
                <span className="text-[#FF4E00] font-semibold">{current.label}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#1D062F] mb-4 leading-tight">
                {current.headline}
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                {current.description}
              </p>

              <a
                href="#demo"
                className="inline-flex items-center gap-2 bg-[#FF4E00] hover:bg-[#e04400] text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Ver demo para {current.label.toLowerCase()}
              </a>
            </div>

            {/* Right: feature cards */}
            <div className="grid grid-cols-2 gap-4">
              {current.features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:border-[#FF4E00]/30 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 bg-[#1D062F] rounded-xl flex items-center justify-center mb-3">
                    <feat.icon className="text-[#FF4E00]" size={18} />
                  </div>
                  <h4 className="font-bold text-[#1D062F] text-sm mb-1">{feat.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
