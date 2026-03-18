"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, TrendingDown } from "lucide-react";
import { useState } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { FlipWords } from "@/components/ui/flip-words";
import { NumberTicker } from "@/components/ui/number-ticker";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

function DashboardMockup() {
  return (
    <div className="relative bg-[#0D0618]/90 rounded-2xl border border-white/10 overflow-hidden shadow-2xl w-full">
      {/* Window bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#FF4E00] animate-pulse" />
          <span className="text-white/50 text-xs font-mono">mawi · Dashboard Ejecutivo</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
      </div>

      <div className="p-4 space-y-3">
        {/* KPI cards */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Presupuesto Total", value: "$2.4M", sub: "+12% vs anterior", good: true },
            { label: "Ejecutado", value: "68%", sub: "$1.63M gastado", good: null },
            { label: "Proyectos", value: "12", sub: "3 en alerta", good: false },
          ].map((k) => (
            <div key={k.label} className="bg-white/5 rounded-xl p-3 border border-white/5">
              <p className="text-white/40 text-[10px] mb-1">{k.label}</p>
              <p className="text-white font-bold text-xl leading-none mb-1">{k.value}</p>
              <p className={`text-[10px] ${k.good === true ? "text-green-400" : k.good === false ? "text-[#FF4E00]" : "text-white/40"}`}>
                {k.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Budget bars */}
        <div className="bg-white/5 rounded-xl p-3 border border-white/5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-white/50 text-[10px] uppercase tracking-wider">Ejecución por proyecto</p>
            <span className="text-[#FF4E00] text-[10px] font-medium">En tiempo real</span>
          </div>
          <div className="space-y-2.5">
            {[
              { name: "Torre Residencial A", pct: 78, status: "warning" },
              { name: "Centro Comercial B", pct: 45, status: "ok" },
              { name: "Edificio Oficinas C", pct: 94, status: "danger" },
              { name: "Puente Industrial D", pct: 31, status: "ok" },
            ].map((p) => (
              <div key={p.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-white/60 text-[10px]">{p.name}</span>
                  <span className={`text-[10px] font-bold ${p.status === "danger" ? "text-[#FF4E00]" : p.status === "warning" ? "text-yellow-400" : "text-green-400"}`}>
                    {p.pct}%
                  </span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: p.status === "danger" ? "#FF4E00" : p.status === "warning" ? "#facc15" : "#22c55e",
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${p.pct}%` }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity feed */}
        <div className="bg-white/5 rounded-xl p-3 border border-white/5">
          <p className="text-white/40 text-[10px] uppercase tracking-wider mb-2">Actividad reciente</p>
          <div className="space-y-2">
            {[
              { dot: "#22c55e", text: "OC #4521 aprobada — $48,000", time: "2 min" },
              { dot: "#FF4E00", text: "⚠️ Torre A supera 8% presupuesto", time: "15 min" },
              { dot: "#911ECC", text: "Factura #891 pendiente de revisión", time: "1h" },
              { dot: "#22c55e", text: "Reporte semanal generado", time: "3h" },
            ].map((a) => (
              <div key={a.text} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: a.dot }} />
                  <span className="text-white/60 text-[10px]">{a.text}</span>
                </div>
                <span className="text-white/30 text-[10px] flex-shrink-0 ml-2">{a.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [roiValue, setRoiValue] = useState(5);
  const saved = roiValue * 28 * 1000;

  return (
    <section className="relative min-h-screen bg-[#1D062F] overflow-hidden flex flex-col">
      {/* Spotlight effects */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#FF4E00" />
      <Spotlight className="top-10 left-full" fill="#911ECC" />

      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-white/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1D062F]" />

      {/* Glow blobs */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#FF4E00] rounded-full opacity-5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#911ECC] rounded-full opacity-8 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <AnimatedGradientText className="bg-white/5 border-white/10 text-white/80">
                <span className="flex items-center gap-2 text-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  Software #1 para constructoras en LATAM
                </span>
              </AnimatedGradientText>
            </motion.div>

            {/* Headline with FlipWords */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                Elimina el{" "}
                <span className="gradient-text">
                  <FlipWords
                    words={["sobrecosto", "caos financiero", "riesgo", "papeleo"]}
                    duration={3000}
                    className="gradient-text"
                  />
                </span>
                <br />
                en construcción
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Control presupuestal en tiempo real para dueños de obra, contratistas y
              arquitectos. Visibilidad total, cero sorpresas.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href="#demo"
                className="group flex items-center justify-center gap-2 bg-[#FF4E00] hover:bg-[#e04400] text-white font-semibold px-7 py-4 rounded-full transition-all duration-200 hover:shadow-2xl hover:shadow-orange-900/40 animate-pulse-glow"
              >
                Agendar demo gratis
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#funcionalidades"
                className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-medium px-7 py-4 rounded-full transition-all duration-200 hover:bg-white/5"
              >
                Ver funcionalidades
              </a>
            </motion.div>

            {/* Trust */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-5"
            >
              {["30 días garantía", "Sin tarjeta de crédito", "Onboarding incluido"].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-green-400" />
                  <span className="text-white/50 text-sm">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Dashboard + ROI card ── */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            {/* Dashboard mockup */}
            <div className="animate-float">
              <DashboardMockup />
            </div>

            {/* ROI Calculator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="glass rounded-2xl p-5"
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingDown className="text-[#FF4E00]" size={18} />
                <span className="text-white font-semibold text-sm">Calculadora de ahorro</span>
              </div>
              <div className="mb-3">
                <div className="flex justify-between text-xs text-white/50 mb-2">
                  <span>Proyectos activos</span>
                  <span className="text-white font-bold">{roiValue}</span>
                </div>
                <input
                  type="range" min={1} max={20} value={roiValue}
                  onChange={(e) => setRoiValue(Number(e.target.value))}
                  className="w-full accent-[#FF4E00] h-1"
                />
              </div>
              <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                <span className="text-white/50 text-xs">Ahorro anual estimado</span>
                <span className="text-2xl font-bold text-white">
                  $<NumberTicker value={saved} className="text-white" />
                  <span className="text-sm text-white/40 ml-1">USD</span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stat row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-white/10"
        >
          {[
            { value: 9, suffix: "/10", label: "proyectos exceden presupuesto en la industria" },
            { value: 28, suffix: "%", label: "de sobrecosto promedio eliminado con Mawi" },
            { value: 6, suffix: "h", label: "recuperadas por día en tu equipo administrativo" },
          ].map((s, i) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-bold text-[#FF4E00] mb-1">
                <NumberTicker value={s.value} delay={1 + i * 0.2} className="text-[#FF4E00]" />
                {s.suffix}
              </p>
              <p className="text-white/40 text-xs leading-relaxed">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
