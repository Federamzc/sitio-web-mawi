"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: { monthly: 99, annual: 79 },
    desc: "Para constructoras que comienzan a digitalizar.",
    capacity: "Hasta 5 proyectos · 3 usuarios",
    highlight: false,
    features: ["Control presupuestal básico", "Órdenes de compra", "Gestión de gastos", "Reportes básicos", "App móvil", "Soporte por email"],
    cta: "Empezar gratis",
  },
  {
    name: "Pro",
    price: { monthly: 249, annual: 199 },
    desc: "Para empresas con múltiples obras en crecimiento.",
    capacity: "Hasta 20 proyectos · 10 usuarios",
    highlight: true,
    badge: "Más popular",
    features: ["Todo lo de Starter", "Dashboard ejecutivo", "Alertas de sobrecosto", "Gestión de subcontratistas", "Submittals y RFIs", "Punch list digital", "Informes de inspección", "Integraciones (QuickBooks, SAP)", "Soporte prioritario 24/7"],
    cta: "Empezar gratis",
  },
  {
    name: "Enterprise",
    price: { monthly: null, annual: null },
    desc: "Para grupos constructores multi-país.",
    capacity: "Proyectos ilimitados · Usuarios ilimitados",
    highlight: false,
    features: ["Todo lo de Pro", "Multi-empresa y multi-país", "SSO y permisos avanzados", "API personalizada", "Implementación dedicada", "SLA garantizado 99.9%", "Account manager dedicado", "Capacitación presencial"],
    cta: "Hablar con ventas",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [annual, setAnnual] = useState(true);

  return (
    <section id="precios" className="section-pad-lg bg-[#080514] relative" ref={ref}>
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#911ECC] opacity-[0.06] blur-[100px] rounded-full pointer-events-none" />

      <div className="container-xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#911ECC]/10 border border-[#911ECC]/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC]" />
            <span className="text-[#C084FC] text-xs font-semibold uppercase tracking-wider">Precios</span>
          </div>
          <h2 className="text-h2 text-white mb-5">
            Simple, transparente,{" "}
            <span className="text-gradient">sin sorpresas</span>
          </h2>
          <p className="text-body-lg text-white/45 mb-8">
            30 días de prueba gratis. Sin tarjeta de crédito. Cancela cuando quieras.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-1 bg-white/4 border border-white/8 rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${!annual ? "bg-white/10 text-white" : "text-white/35 hover:text-white/60"}`}
            >
              Mensual
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${annual ? "bg-white/10 text-white" : "text-white/35 hover:text-white/60"}`}
            >
              Anual
              <span className="bg-[#911ECC]/30 border border-[#911ECC]/40 text-[#C084FC] text-[10px] font-bold px-2 py-0.5 rounded-full">−20%</span>
            </button>
          </div>
        </motion.div>

        {/* Plans */}
        <div className="grid lg:grid-cols-3 gap-4 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? "bg-[#16102C] border border-[#911ECC]/30 shadow-2xl shadow-[#911ECC]/10"
                  : "card"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1.5 bg-[#911ECC] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-[#911ECC]/30">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6 pt-1">
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-white/35 text-sm mb-5">{plan.desc}</p>
                {plan.price.monthly ? (
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-bold text-white">
                      ${annual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-white/30 text-sm">USD/mes</span>
                  </div>
                ) : (
                  <p className="text-3xl font-bold text-white mb-1">Personalizado</p>
                )}
                <p className="text-white/20 text-xs">{plan.capacity}</p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#911ECC]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={10} className="text-[#C084FC]" />
                    </div>
                    <span className="text-white/50 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`w-full flex items-center justify-center gap-2 font-semibold py-3.5 rounded-xl transition-all duration-200 group text-sm ${
                  plan.highlight
                    ? "btn-primary"
                    : "bg-white/5 hover:bg-white/8 text-white/70 hover:text-white border border-white/8"
                }`}
              >
                {plan.cta}
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-white/20 text-sm mt-10"
        >
          Garantía de devolución 30 días · Sin tarjeta de crédito · Onboarding incluido en todos los planes
        </motion.p>
      </div>
    </section>
  );
}
