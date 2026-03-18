"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Clock, CheckCircle, TrendingDown } from "lucide-react";
import { useState } from "react";
import { BlurIn } from "@/components/ui/blur-in";
import { NumberTicker } from "@/components/ui/number-ticker";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { ShineBorder } from "@/components/ui/shine-border";

export default function Hero() {
  const [roiValue, setRoiValue] = useState(5);
  const saved = roiValue * 28 * 1000;

  return (
    <section className="relative min-h-screen bg-[#1D062F] overflow-hidden flex flex-col">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Glow blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF4E00] rounded-full opacity-10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#911ECC] rounded-full opacity-10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            {/* 21st.dev: AnimatedGradientText badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <AnimatedGradientText className="bg-white/5 border-white/10">
                <span className="text-white/90 text-sm font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block" />
                  Software #1 para constructoras en LATAM
                </span>
              </AnimatedGradientText>
            </motion.div>

            {/* 21st.dev: BlurIn headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <BlurIn
                word="Elimina el"
                duration={0.8}
                className="block"
              />
              <BlurIn
                word="sobrecosto"
                duration={0.9}
                className="text-[#FF4E00] block"
              />
              <BlurIn
                word="en tus proyectos"
                duration={1.0}
                className="block"
              />
            </h1>

            {/* 21st.dev: TextGenerateEffect subtitle */}
            <div className="mb-8">
              <TextGenerateEffect
                words="Control de gastos en tiempo real, gestión de órdenes de compra y visibilidad total de tus proyectos. Todo en una sola plataforma."
                className="text-white/70 text-lg font-normal leading-relaxed"
                filter={false}
                duration={0.3}
              />
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href="#demo"
                className="flex items-center justify-center gap-2 bg-[#FF4E00] hover:bg-[#e04400] text-white font-semibold px-7 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-orange-900/30 group"
              >
                Agendar demo gratis
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#video"
                className="flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-medium px-7 py-4 rounded-full transition-all duration-200 hover:bg-white/10"
              >
                <Play size={16} fill="white" />
                Ver cómo funciona
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-wrap gap-5"
            >
              {["30 días de garantía", "Sin tarjeta de crédito", "Onboarding incluido"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-green-400" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col gap-5"
          >
            {/* 21st.dev: ShineBorder ROI Calculator */}
            <ShineBorder
              borderRadius={16}
              borderWidth={1}
              color={["#FF4E00", "#911ECC"]}
              className="w-full"
            >
              <div className="bg-white rounded-2xl p-6 w-full">
                <div className="flex items-center gap-2 mb-5">
                  <TrendingDown className="text-[#FF4E00]" size={20} />
                  <h3 className="font-bold text-[#1D062F] text-lg">
                    Calcula tu ahorro con Mawi
                  </h3>
                </div>

                <div className="mb-5">
                  <div className="flex justify-between text-sm text-slate-500 mb-2">
                    <span>Proyectos activos simultáneos</span>
                    <span className="font-bold text-[#1D062F]">{roiValue}</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={20}
                    value={roiValue}
                    onChange={(e) => setRoiValue(Number(e.target.value))}
                    className="w-full accent-[#FF4E00]"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-1">
                    <span>1</span>
                    <span>20</span>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 mb-4">
                  <p className="text-sm text-slate-500 mb-1">Ahorro estimado por año</p>
                  <p className="text-3xl font-bold text-[#1D062F]">
                    $<NumberTicker value={saved} className="text-[#1D062F]" />
                    <span className="text-lg font-normal text-slate-400 ml-1">USD</span>
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Basado en 28% de sobrecosto promedio por proyecto
                  </p>
                </div>

                <a
                  href="#demo"
                  className="w-full flex items-center justify-center gap-2 bg-[#1D062F] hover:bg-[#2d0a4a] text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  Ver mi ROI completo
                  <ArrowRight size={16} />
                </a>
              </div>
            </ShineBorder>

            {/* Stats row — 21st.dev: NumberTicker */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 9, suffix: "/10", label: "proyectos exceden su presupuesto" },
                { value: 6, suffix: "h", label: "ahorradas por día en admin" },
                { value: 28, suffix: "%", label: "sobrecosto promedio eliminado" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                  className="bg-white/10 border border-white/20 rounded-xl p-4 text-center"
                >
                  <p className="text-2xl font-bold text-[#FF4E00] mb-1">
                    <NumberTicker value={stat.value} className="text-[#FF4E00]" delay={0.8 + i * 0.2} />
                    {stat.suffix}
                  </p>
                  <p className="text-white/60 text-xs leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Time saved */}
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 bg-[#FF4E00] rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  Tu equipo recupera hasta 6 horas al día
                </p>
                <p className="text-white/50 text-xs mt-0.5">
                  Automatización de reportes, órdenes de compra y conciliaciones
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-20 pt-10 border-t border-white/10"
        >
          <p className="text-center text-white/40 text-sm font-medium mb-6 uppercase tracking-wider">
            Empresas constructoras que confían en Mawi
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-50">
            {["Emesol", "AUREA", "CORE", "Constructora CR", "Grupo López", "BuildCo"].map((name) => (
              <span key={name} className="text-white font-bold text-lg tracking-wide">{name}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
