"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Zap, ArrowRight } from "lucide-react";
import { MovingBorder } from "@/components/ui/moving-border";
import { BlurFade } from "@/components/ui/blur-fade";

const plans = [
  {
    name: "Starter",
    price: { monthly: 99, annual: 79 },
    desc: "Para constructoras que comienzan a digitalizar.",
    capacity: "Hasta 5 proyectos · 3 usuarios",
    highlight: false,
    features: [
      "Control presupuestal básico",
      "Órdenes de compra",
      "Gestión de gastos",
      "Reportes básicos",
      "App móvil",
      "Soporte por email",
    ],
    cta: "Empezar gratis",
  },
  {
    name: "Pro",
    price: { monthly: 249, annual: 199 },
    desc: "Para empresas con múltiples obras en crecimiento.",
    capacity: "Hasta 20 proyectos · 10 usuarios",
    highlight: true,
    badge: "Más popular",
    features: [
      "Todo lo de Starter",
      "Dashboard ejecutivo",
      "Alertas de sobrecosto",
      "Gestión de subcontratistas",
      "Submittals y RFIs",
      "Punch list digital",
      "Informes de inspección",
      "Integraciones (QuickBooks, SAP)",
      "Soporte prioritario 24/7",
    ],
    cta: "Empezar gratis",
  },
  {
    name: "Enterprise",
    price: { monthly: null, annual: null },
    desc: "Para grupos constructores multi-país.",
    capacity: "Proyectos ilimitados · Usuarios ilimitados",
    highlight: false,
    features: [
      "Todo lo de Pro",
      "Multi-empresa y multi-país",
      "SSO y permisos avanzados",
      "API personalizada",
      "Implementación dedicada",
      "SLA garantizado 99.9%",
      "Account manager dedicado",
      "Capacitación presencial",
    ],
    cta: "Hablar con ventas",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [annual, setAnnual] = useState(true);

  return (
    <section id="precios" className="py-28 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade inView delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-orange-100 text-[#FF4E00] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              Precios
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D062F] mb-4">
              Simple, transparente,{" "}
              <span className="gradient-text">sin sorpresas</span>
            </h2>
            <p className="text-slate-500 text-lg mb-8">
              30 días de prueba gratis. Sin tarjeta de crédito. Cancela cuando quieras.
            </p>

            {/* Toggle */}
            <div className="inline-flex items-center gap-1 bg-white border border-slate-200 rounded-full p-1 shadow-sm">
              <button
                onClick={() => setAnnual(false)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${!annual ? "bg-[#1D062F] text-white shadow" : "text-slate-500"}`}
              >
                Mensual
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${annual ? "bg-[#1D062F] text-white shadow" : "text-slate-500"}`}
              >
                Anual
                <span className="bg-[#FF4E00] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">−20%</span>
              </button>
            </div>
          </div>
        </BlurFade>

        <div className="grid lg:grid-cols-3 gap-6 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {plan.highlight ? (
                /* Pro plan with MovingBorder */
                <MovingBorder
                  as="div"
                  containerClassName="h-auto w-full rounded-2xl bg-[#1D062F] p-[1px]"
                  className="bg-[#1D062F] rounded-2xl p-8 flex flex-col relative"
                  duration={3000}
                  rx="16"
                >
                  {/* Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1.5 bg-[#FF4E00] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      <Zap size={11} fill="white" />
                      {plan.badge}
                    </span>
                  </div>

                  <div className="mb-6 pt-2">
                    <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                    <p className="text-white/50 text-sm mb-4">{plan.desc}</p>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-4xl font-bold text-white">
                        ${annual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-white/40 text-sm">USD/mes</span>
                    </div>
                    <p className="text-white/30 text-xs">{plan.capacity}</p>
                  </div>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check size={15} className="text-[#FF4E00] mt-0.5 flex-shrink-0" />
                        <span className="text-white/70 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#demo" className="w-full flex items-center justify-center gap-2 bg-[#FF4E00] hover:bg-[#e04400] text-white font-semibold py-3.5 rounded-xl transition-colors group">
                    {plan.cta}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </MovingBorder>
              ) : (
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-[#1D062F] mb-1">{plan.name}</h3>
                    <p className="text-slate-400 text-sm mb-4">{plan.desc}</p>
                    {plan.price.monthly ? (
                      <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-4xl font-bold text-[#1D062F]">
                          ${annual ? plan.price.annual : plan.price.monthly}
                        </span>
                        <span className="text-slate-400 text-sm">USD/mes</span>
                      </div>
                    ) : (
                      <p className="text-3xl font-bold text-[#1D062F] mb-1">Personalizado</p>
                    )}
                    <p className="text-slate-400 text-xs">{plan.capacity}</p>
                  </div>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check size={15} className="text-[#911ECC] mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#demo" className="w-full flex items-center justify-center gap-2 bg-[#1D062F] hover:bg-[#2d0a4a] text-white font-semibold py-3.5 rounded-xl transition-colors group">
                    {plan.cta}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <BlurFade inView delay={0.4}>
          <p className="text-center text-slate-400 text-sm mt-10">
            Garantía de devolución 30 días · Sin tarjeta de crédito · Onboarding incluido en todos los planes
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
