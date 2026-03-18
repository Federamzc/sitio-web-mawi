"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: { monthly: 99, annual: 79 },
    description: "Para constructoras que están comenzando a digitalizar sus procesos.",
    projects: "Hasta 5 proyectos activos",
    users: "3 usuarios",
    highlight: false,
    features: [
      "Control de presupuesto por proyecto",
      "Órdenes de compra",
      "Gestión de gastos",
      "Reportes básicos",
      "App móvil",
      "Soporte por email",
    ],
    cta: "Empezar gratis 30 días",
  },
  {
    name: "Pro",
    price: { monthly: 249, annual: 199 },
    description: "Para empresas con múltiples obras y equipos en crecimiento.",
    projects: "Hasta 20 proyectos activos",
    users: "10 usuarios",
    highlight: true,
    badge: "Más popular",
    features: [
      "Todo lo de Starter",
      "Dashboard ejecutivo",
      "Gestión de subcontratistas",
      "Submittals y RFIs",
      "Punch list digital",
      "Informes de inspección",
      "Alertas de sobrecosto",
      "Integraciones (QuickBooks, SAP)",
      "Soporte prioritario",
    ],
    cta: "Empezar gratis 30 días",
  },
  {
    name: "Enterprise",
    price: { monthly: null, annual: null },
    description: "Para grupos constructores con operaciones en múltiples países.",
    projects: "Proyectos ilimitados",
    users: "Usuarios ilimitados",
    highlight: false,
    features: [
      "Todo lo de Pro",
      "Multi-empresa y multi-país",
      "SSO y permisos avanzados",
      "API personalizada",
      "Implementación dedicada",
      "SLA garantizado",
      "Capacitación presencial",
      "Account manager dedicado",
    ],
    cta: "Hablar con ventas",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [annual, setAnnual] = useState(true);

  return (
    <section id="precios" className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Precios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D062F] mb-4">
            Planes simples,{" "}
            <span className="text-[#FF4E00]">sin sorpresas</span>
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            30 días de prueba gratis. Sin tarjeta de crédito. Cancela cuando quieras.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-full p-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !annual ? "bg-[#1D062F] text-white" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                annual ? "bg-[#1D062F] text-white" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Anual
              <span className="bg-[#FF4E00] text-white text-xs px-2 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Plans */}
        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? "bg-[#1D062F] shadow-2xl shadow-slate-300 scale-105"
                  : "bg-white border border-slate-100 shadow-sm"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1.5 bg-[#FF4E00] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    <Zap size={12} fill="white" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    plan.highlight ? "text-white" : "text-[#1D062F]"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    plan.highlight ? "text-white/60" : "text-slate-500"
                  }`}
                >
                  {plan.description}
                </p>

                {plan.price.monthly ? (
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-bold ${
                        plan.highlight ? "text-white" : "text-[#1D062F]"
                      }`}
                    >
                      ${annual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span
                      className={`text-sm ${
                        plan.highlight ? "text-white/50" : "text-slate-400"
                      }`}
                    >
                      USD/mes
                    </span>
                  </div>
                ) : (
                  <div className="text-3xl font-bold text-[#1D062F]" style={{ color: plan.highlight ? "white" : "#1D062F" }}>
                    Personalizado
                  </div>
                )}

                <p
                  className={`text-xs mt-1 ${
                    plan.highlight ? "text-white/40" : "text-slate-400"
                  }`}
                >
                  {plan.projects} · {plan.users}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      className={`mt-0.5 flex-shrink-0 ${
                        plan.highlight ? "text-[#FF4E00]" : "text-[#911ECC]"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.highlight ? "text-white/80" : "text-slate-600"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all ${
                  plan.highlight
                    ? "bg-[#FF4E00] hover:bg-[#e04400] text-white"
                    : "bg-[#1D062F] hover:bg-[#2d0a4a] text-white"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-slate-500 text-sm">
            Garantía de devolución de 30 días · Sin tarjeta de crédito · Onboarding incluido en todos los planes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
