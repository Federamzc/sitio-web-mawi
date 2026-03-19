"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import { NumberTicker } from "@/components/ui/number-ticker";

/* ─── Dashboard SVG Illustration ─── */
function DashboardSVG() {
  return (
    <div className="relative w-full max-w-[620px] mx-auto">
      {/* Glow behind */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FF4E00]/20 via-[#911ECC]/10 to-transparent rounded-3xl blur-3xl scale-95" />

      <div className="relative bg-[#13102A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        {/* Window chrome */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/8 bg-white/3">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-1.5">
            <div className="w-2 h-2 rounded-full bg-[#FF4E00] animate-pulse" />
            <span className="text-white/50 text-xs font-mono">mawi.io/dashboard</span>
          </div>
          <div className="w-16" />
        </div>

        {/* Dashboard body */}
        <div className="p-5 space-y-4">
          {/* Top KPIs */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: "Presupuesto Total", value: "$4.8M", delta: "+0%", ok: true },
              { label: "Ejecutado", value: "64%", delta: "$3.1M", ok: null },
              { label: "Proyectos", value: "17", delta: "activos", ok: null },
              { label: "Alertas", value: "3", delta: "críticas", ok: false },
            ].map((k) => (
              <div key={k.label} className="bg-white/4 rounded-xl p-3 border border-white/6">
                <p className="text-white/40 text-[10px] mb-2 leading-none">{k.label}</p>
                <p className="text-white font-bold text-lg leading-none mb-1">{k.value}</p>
                <p className={`text-[10px] font-medium ${k.ok === true ? "text-emerald-400" : k.ok === false ? "text-[#FF4E00]" : "text-white/30"}`}>
                  {k.delta}
                </p>
              </div>
            ))}
          </div>

          {/* Budget progress bars */}
          <div className="bg-white/4 rounded-xl p-4 border border-white/6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-white/50 text-xs uppercase tracking-wider">Ejecución presupuestal</span>
              <span className="text-[#FF4E00] text-xs font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4E00] animate-pulse" />
                En vivo
              </span>
            </div>
            {[
              { name: "Torre Residencial Norte", pct: 82, color: "#FF4E00" },
              { name: "Centro Comercial Plaza", pct: 51, color: "#22c55e" },
              { name: "Puente Vial Sur", pct: 97, color: "#ef4444" },
              { name: "Edificio Corporativo A", pct: 33, color: "#22c55e" },
              { name: "Parque Industrial B2", pct: 67, color: "#facc15" },
            ].map((p, i) => (
              <div key={p.name} className="mb-2.5 last:mb-0">
                <div className="flex justify-between mb-1">
                  <span className="text-white/60 text-[10px]">{p.name}</span>
                  <span className="text-[10px] font-bold" style={{ color: p.color }}>{p.pct}%</span>
                </div>
                <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: p.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${p.pct}%` }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Activity + mini chart */}
          <div className="grid grid-cols-2 gap-3">
            {/* Activity */}
            <div className="bg-white/4 rounded-xl p-3 border border-white/6">
              <p className="text-white/40 text-[10px] uppercase tracking-wider mb-2.5">Actividad</p>
              {[
                { dot: "#22c55e", text: "OC #4521 aprobada", time: "2m" },
                { dot: "#FF4E00", text: "Torre Norte +8%", time: "14m" },
                { dot: "#911ECC", text: "Factura #891", time: "1h" },
                { dot: "#22c55e", text: "Reporte generado", time: "3h" },
              ].map((a) => (
                <div key={a.text} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: a.dot }} />
                    <span className="text-white/60 text-[10px]">{a.text}</span>
                  </div>
                  <span className="text-white/25 text-[10px] flex-shrink-0">{a.time}</span>
                </div>
              ))}
            </div>

            {/* Mini bar chart */}
            <div className="bg-white/4 rounded-xl p-3 border border-white/6">
              <p className="text-white/40 text-[10px] uppercase tracking-wider mb-2.5">Gasto semanal</p>
              <div className="flex items-end gap-1.5 h-16">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{ background: i === 5 ? "#FF4E00" : "rgba(255,255,255,0.12)" }}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.6, delay: 0.8 + i * 0.05 }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1.5">
                {["L","M","X","J","V","S","D"].map((d) => (
                  <span key={d} className="text-white/20 text-[9px] flex-1 text-center">{d}</span>
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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0D0A1A] pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FF4E00] opacity-[0.06] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#911ECC] opacity-[0.08] blur-[100px] rounded-full pointer-events-none" />

      <div className="container-xl relative z-10 py-20 lg:py-28">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-2 bg-white/6 border border-white/10 rounded-full px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-[#FF4E00] opacity-75" />
              <span className="relative rounded-full h-2 w-2 bg-[#FF4E00]" />
            </span>
            <span className="text-white/70 text-sm font-medium">Software #1 para constructoras en LATAM</span>
          </div>
        </motion.div>

        {/* Headline — Ramp style: large, centered, bold */}
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

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-body-lg text-center text-white/55 max-w-2xl mx-auto mb-10"
        >
          Mawi da a tu equipo visibilidad en tiempo real de cada peso que se mueve en
          la obra. Sin Excel, sin sorpresas, sin sobrecostos.
        </motion.p>

        {/* CTA row — Ramp email + button pattern */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-5"
        >
          <div className="flex w-full sm:w-auto bg-white/6 border border-white/12 rounded-full overflow-hidden pr-1.5 pl-5 py-1.5 gap-2 items-center min-w-[320px]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@empresa.com"
              className="flex-1 bg-transparent text-white text-sm placeholder-white/30 outline-none"
            />
            <a href="#demo" className="btn-primary text-sm px-5 py-2.5 whitespace-nowrap flex-shrink-0">
              Empezar gratis
              <ArrowRight size={15} />
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
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-5 text-white/35 text-sm mb-16"
        >
          {["Sin tarjeta de crédito", "30 días de garantía", "Setup en 2 días", "Soporte en español"].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <CheckCircle size={13} className="text-[#FF4E00]" />
              {t}
            </span>
          ))}
        </motion.div>

        {/* Dashboard illustration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="animate-float"
        >
          <DashboardSVG />
        </motion.div>
      </div>

      {/* Bottom stat bar — Ramp style */}
      <div className="relative z-10 border-t border-white/8 bg-white/2">
        <div className="container-xl py-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { value: 50, suffix: "K+", label: "Proyectos controlados" },
              { value: 28, suffix: "%", label: "Reducción de sobrecosto" },
              { value: 20, suffix: "+", label: "Países en LATAM" },
            ].map((s, i) => (
              <div key={s.label}>
                <p className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  <NumberTicker value={s.value} className="text-white" delay={0.8 + i * 0.15} />
                  <span className="text-[#FF4E00]">{s.suffix}</span>
                </p>
                <p className="text-white/40 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
