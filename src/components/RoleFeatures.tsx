"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { Building2, HardHat, Pencil, BarChart3, ShoppingCart, FileText, ClipboardList, Users, DollarSign, Calendar, CheckSquare, MessageSquare, ArrowRight } from "lucide-react";

const roles = [
  {
    id: "owner",
    label: "Dueño de empresa",
    icon: Building2,
    headline: "Visibilidad total de tu negocio, sin depender de nadie",
    description: "Deja de esperar que te manden un Excel. Con Mawi tienes en tiempo real el estado financiero de todos tus proyectos, quién está gastando qué y dónde están tus márgenes.",
    features: [
      { icon: BarChart3,  title: "Dashboard ejecutivo",  desc: "Todos tus proyectos, un solo tablero." },
      { icon: DollarSign, title: "Control de márgenes",  desc: "Ve rentabilidad por proyecto en tiempo real." },
      { icon: Users,      title: "Gestión de equipo",    desc: "Asigna roles y permisos por obra." },
      { icon: FileText,   title: "Reportes automáticos", desc: "Recibe resúmenes ejecutivos semanales." },
    ],
  },
  {
    id: "contractor",
    label: "Contratista",
    icon: HardHat,
    headline: "Controla cada centavo de la obra sin perder tiempo en papeles",
    description: "Registra gastos desde el sitio de construcción, gestiona órdenes de compra con proveedores y mantén tu presupuesto bajo control sin salir de la obra.",
    features: [
      { icon: ShoppingCart,  title: "Órdenes de compra",   desc: "Crea, aprueba y rastrea compras desde el móvil." },
      { icon: ClipboardList, title: "Control de gastos",   desc: "Categoriza y aprueba gastos en tiempo real." },
      { icon: CheckSquare,   title: "Punch list digital",  desc: "Lista de pendientes sin papel." },
      { icon: MessageSquare, title: "RFI management",      desc: "Gestiona solicitudes de información." },
    ],
  },
  {
    id: "architect",
    label: "Arquitecto",
    icon: Pencil,
    headline: "Del diseño a la obra, con control presupuestal en cada etapa",
    description: "Conecta tus planos con el presupuesto real. Sigue el avance de obra, gestiona submittals y mantén a todos los stakeholders informados sin correos interminables.",
    features: [
      { icon: Calendar,      title: "Cronograma visual",     desc: "Visualiza el avance real vs. planeado." },
      { icon: FileText,      title: "Gestión de submittals", desc: "Control de documentos y aprobaciones." },
      { icon: ClipboardList, title: "Informes de inspección",desc: "Reportes de avance con fotos y datos." },
      { icon: BarChart3,     title: "Control de cambios",    desc: "Gestiona change orders con trazabilidad." },
    ],
  },
];

export default function RoleFeatures() {
  const [active, setActive] = useState("owner");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const current = roles.find((r) => r.id === active)!;

  return (
    <section className="section-pad-lg bg-[#080514] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#911ECC] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />

      <div className="container-xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/8 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC]" />
            <span className="text-white/50 text-xs font-semibold uppercase tracking-wider">Diseñado para cada rol</span>
          </div>
          <h2 className="text-h2 text-white mb-5">
            Una plataforma,{" "}
            <span className="text-gradient">múltiples roles</span>
          </h2>
          <p className="text-body-lg text-white/45">
            Mawi se adapta a cómo trabaja cada persona en tu empresa.
          </p>
        </motion.div>

        {/* Role tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setActive(role.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200 ${
                active === role.id
                  ? "bg-[#911ECC]/20 text-[#C084FC] border border-[#911ECC]/40"
                  : "bg-white/4 text-white/40 border border-white/8 hover:bg-white/8 hover:text-white/70"
              }`}
            >
              <role.icon size={15} />
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
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-[#911ECC]/15 border border-[#911ECC]/25 flex items-center justify-center">
                  <current.icon className="text-[#C084FC]" size={20} />
                </div>
                <span className="text-[#C084FC] font-semibold text-sm">{current.label}</span>
              </div>
              <h3 className="text-h3 text-white mb-5 leading-tight">{current.headline}</h3>
              <p className="text-body-lg text-white/45 mb-8">{current.description}</p>
              <a href="#demo" className="btn-primary">
                Ver demo para {current.label.toLowerCase()}
                <ArrowRight size={15} />
              </a>
            </div>

            {/* Right */}
            <div className="grid grid-cols-2 gap-3">
              {current.features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.07 }}
                  className="card p-5 hover:bg-white/6 transition-colors"
                >
                  <div className="w-9 h-9 bg-[#911ECC]/10 border border-[#911ECC]/20 rounded-xl flex items-center justify-center mb-4">
                    <feat.icon className="text-[#C084FC]" size={16} />
                  </div>
                  <h4 className="font-semibold text-white/80 text-sm mb-1">{feat.title}</h4>
                  <p className="text-white/30 text-xs leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
