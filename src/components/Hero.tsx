"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { useState } from "react";
import { NumberTicker } from "@/components/ui/number-ticker";

/* ─── Dashboard SVG Illustration ─── */
function DashboardSVG() {
  return (
    <div className="relative w-full max-w-[680px] mx-auto">
      <div className="absolute inset-0 bg-gradient-to-t from-[#911ECC]/20 via-[#C084FC]/8 to-transparent rounded-3xl blur-3xl scale-90" />
      <div className="relative bg-[#0a0618] border border-white/8 rounded-2xl overflow-hidden shadow-2xl">
        {/* Window chrome */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <div className="flex items-center gap-2 bg-white/4 rounded-md px-3 py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C084FC] animate-pulse" />
            <span className="text-white/35 text-[11px] font-mono">app.mawi.io/dashboard</span>
          </div>
          <div className="w-14" />
        </div>

        {/* Dashboard body */}
        <div className="p-4 space-y-3">
          {/* KPI row */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "Presupuesto Total", value: "$4.8M", sub: "aprobado", ok: true },
              { label: "Ejecutado", value: "64%", sub: "$3.1M", ok: null },
              { label: "Proyectos", value: "17", sub: "activos", ok: null },
              { label: "Alertas", value: "3", sub: "críticas", ok: false },
            ].map((k) => (
              <div key={k.label} className="bg-white/[0.03] rounded-lg p-2.5 border border-white/5">
                <p className="text-white/30 text-[9px] mb-1.5 leading-none">{k.label}</p>
                <p className="text-white font-bold text-base leading-none mb-1">{k.value}</p>
                <p className={`text-[9px] font-medium ${k.ok === true ? "text-[#C084FC]" : k.ok === false ? "text-white/40" : "text-white/25"}`}>
                  {k.sub}
                </p>
              </div>
            ))}
          </div>

          {/* Budget bars */}
          <div className="bg-white/[0.03] rounded-lg p-3.5 border border-white/5">
            <div className="flex justify-between items-center mb-2.5">
              <span className="text-white/35 text-[10px] uppercase tracking-wider">Ejecución presupuestal</span>
              <span className="flex items-center gap-1 text-[#C084FC] text-[10px] font-medium">
                <span className="w-1 h-1 rounded-full bg-[#C084FC] animate-pulse" />
                En vivo
              </span>
            </div>
            {[
              { name: "Torre Residencial Norte", pct: 82, color: "#C084FC" },
              { name: "Centro Comercial Plaza",  pct: 51, color: "rgba(255,255,255,0.5)" },
              { name: "Puente Vial Sur",          pct: 97, color: "rgba(255,255,255,0.3)" },
              { name: "Edificio Corporativo A",   pct: 33, color: "rgba(255,255,255,0.5)" },
            ].map((p, i) => (
              <div key={p.name} className="mb-2 last:mb-0">
                <div className="flex justify-between mb-0.5">
                  <span className="text-white/40 text-[9px]">{p.name}</span>
                  <span className="text-[9px] font-bold text-white/60">{p.pct}%</span>
                </div>
                <div className="h-1 bg-white/6 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: p.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${p.pct}%` }}
                    transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/[0.03] rounded-lg p-3 border border-white/5">
              <p className="text-white/30 text-[9px] uppercase tracking-wider mb-2">Actividad reciente</p>
              {[
                { dot: "#C084FC", text: "OC #4521 aprobada" },
                { dot: "rgba(255,255,255,0.4)", text: "Torre Norte +8%" },
                { dot: "#911ECC", text: "Factura #891 cargada" },
              ].map((a) => (
                <div key={a.text} className="flex items-center gap-1.5 py-1 border-b border-white/4 last:border-0">
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: a.dot }} />
                  <span className="text-white/40 text-[9px]">{a.text}</span>
                </div>
              ))}
            </div>
            <div className="bg-white/[0.03] rounded-lg p-3 border border-white/5">
              <p className="text-white/30 text-[9px] uppercase tracking-wider mb-2">Gasto semanal</p>
              <div className="flex items-end gap-1 h-12">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{ height: `${h}%`, background: i === 5 ? "#911ECC" : "rgba(255,255,255,0.08)" }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 1 + i * 0.05 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Hero ─── */
export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080514] pt-20">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#911ECC] opacity-[0.08] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#C084FC] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#1D062F] opacity-[0.6] blur-[80px] rounded-full pointer-events-none" />

      <div className="container-xl relative z-10 py-20 lg:py-28">

        {/* Review badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-2.5 bg-white/4 border border-white/8 rounded-full px-4 py-2">
            <div className="flex -space-x-1">
              {["bg-purple-400", "bg-violet-300", "bg-indigo-400"].map((c, i) => (
                <div key={i} className={`w-5 h-5 rounded-full ${c} border-2 border-[#080514]`} />
              ))}
            </div>
            <div className="flex gap-0.5">
              {Array(5).fill(0).map((_, i) => <Star key={i} size={10} fill="white" className="text-white/60" />)}
            </div>
            <span className="text-white/50 text-sm font-medium">
              <span className="text-white font-semibold">2,000+</span> reseñas 5 estrellas
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-6 max-w-4xl mx-auto"
        >
          <h1 className="text-display text-white">
            El dinero en tus obras,{" "}
            <span className="text-gradient">bajo control.</span>
          </h1>
        </motion.div>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-body-lg text-center text-white/45 max-w-xl mx-auto mb-10"
        >
          Control de presupuesto en tiempo real para constructoras en LATAM.
          Sin Excel, sin sorpresas, sin sobrecostos.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-5"
        >
          <div className="flex w-full sm:w-auto bg-white/4 border border-white/10 rounded-full overflow-hidden pr-1.5 pl-5 py-1.5 gap-2 items-center min-w-[320px] focus-within:border-[#911ECC]/50 transition-colors">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@empresa.com"
              className="flex-1 bg-transparent text-white text-sm placeholder-white/25 outline-none"
            />
            <a href="#demo" className="btn-primary text-sm px-5 py-2.5 whitespace-nowrap flex-shrink-0">
              Empezar gratis
              <ArrowRight size={14} />
            </a>
          </div>
          <a href="#demo" className="btn-secondary text-sm">
            Ver demo en vivo
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-6 text-white/30 text-xs mb-16"
        >
          {["Sin tarjeta de crédito", "30 días de garantía", "Setup en 2 días", "Soporte en español"].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#911ECC]" />
              {t}
            </span>
          ))}
        </motion.div>

        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="animate-float"
        >
          <DashboardSVG />
        </motion.div>
      </div>

      {/* Stat bar */}
      <div className="relative z-10 border-t border-white/6 bg-white/[0.015]">
        <div className="container-xl py-7">
          <div className="grid grid-cols-3 gap-8 text-center divide-x divide-white/6">
            {[
              { value: 50, suffix: "K+", label: "Proyectos controlados" },
              { value: 28, suffix: "%",  label: "Reducción de sobrecosto" },
              { value: 20, suffix: "+",  label: "Países en LATAM" },
            ].map((s, i) => (
              <div key={s.label} className="px-4">
                <p className="text-2xl lg:text-3xl font-bold text-white mb-1 leading-none">
                  <NumberTicker value={s.value} className="text-white" delay={0.8 + i * 0.15} />
                  <span className="text-[#C084FC]">{s.suffix}</span>
                </p>
                <p className="text-white/30 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
